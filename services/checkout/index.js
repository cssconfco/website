import { isEmpty } from 'lodash'
import moment from 'moment'
import cryptoRandomString from 'crypto-random-string'

import WooCommerceService from '../woocommerce'

import createSignature from '../../utils/createSignature'
import { epaycoToWooCommerce } from '../../utils/orderStatusMapper'
import { parseOrder, parseSubscription } from '../../utils/parseResponse'

const { config } = require('../../config/server')

const {
  SUBSCRIPTION_TYPE,
  SIMPLE_TYPE,
  DELIVERY_RATE,
  FREE_SHIPPING_STATES
} = require('./constants')

class CheckoutService {
  constructor() {
    this.wooCommerceServiceV2 = new WooCommerceService()
    this.wooCommerceServiceV1 = new WooCommerceService('wc/v1')
  }

  static filterSimpleType = item => item.type === SIMPLE_TYPE
  static filterSubscriptionType = item => item.type === SUBSCRIPTION_TYPE

  buildAddress({ userInfo, isBillingAddress }) {
    const {
      billingAddress,
      complementaryBillingAddress,
      billingCity,
      billingDepartment,
      deliveryAddress,
      complementaryDeliveryAddress,
      deliveryCity,
      deliveryDepartment,
      deliveryAddressSameAsBillingAddress
    } = userInfo

    if (deliveryAddressSameAsBillingAddress || isBillingAddress) {
      return {
        address_1: billingAddress,
        address_2: complementaryBillingAddress,
        city: billingCity.value,
        state: billingDepartment.value
      }
    }

    return {
      address_1: deliveryAddress,
      address_2: complementaryDeliveryAddress,
      city: deliveryCity.value,
      state: deliveryDepartment.value
    }
  }

  buildCustomerBilling({ userInfo }) {
    const { email, firstname, lastname, cellphone } = userInfo

    return {
      email,
      first_name: firstname,
      last_name: lastname,
      phone: cellphone,
      country: 'CO',
      ...this.buildAddress({ userInfo, isBillingAddress: true })
    }
  }

  buildCustomerShipping({ userInfo }) {
    const { firstname, lastname } = userInfo

    return Object.assign(
      {},
      {
        first_name: firstname,
        last_name: lastname,
        country: 'CO'
      },
      this.buildAddress({ userInfo })
    )
  }

  buildCustomer({ userInfo }) {
    const { email, firstname, lastname } = userInfo

    return {
      email,
      first_name: firstname,
      last_name: lastname,
      billing: this.buildCustomerBilling({ userInfo }),
      shipping: this.buildCustomerShipping({ userInfo }),
      password: cryptoRandomString(16)
    }
  }

  buildShippingLines({ userInfo }) {
    const { state } = this.buildAddress({ userInfo })

    if (FREE_SHIPPING_STATES.includes(state)) {
      return [
        {
          method_title: 'Envío gratuito',
          method_id: 'free_shipping',
          total: String(0)
        }
      ]
    }

    return [
      {
        method_title: 'Tarifa única',
        method_id: 'flat_rate',
        total: String(DELIVERY_RATE)
      }
    ]
  }

  buildPaymentMethod({ userInfo }) {
    const { paymentMethod } = userInfo

    if (paymentMethod === 'transfer') {
      return {
        payment_method: 'wire_transfer',
        payment_method_title: 'Transferencia Bancaria'
      }
    } else if (paymentMethod === 'epayco') {
      return {
        payment_method: 'epayco',
        payment_method_title: 'ePayco'
      }
    } else if (paymentMethod === 'recurrent') {
      return {
        payment_method: 'recurrent',
        payment_method_title: 'Pago recurrente'
      }
    }
  }

  buildSubscriptionDates() {
    return {
      start_date: moment().format('YYYY-MM-DD HH:mm:ss'),
      next_payment_date: moment()
        .add(1, 'month')
        .format('YYYY-MM-DD HH:mm:ss')
    }
  }

  mapProducts({ id, quantity }) {
    return { quantity, product_id: id }
  }

  buildOrder({ customer, userInfo, products }) {
    return {
      ...this.buildPaymentMethod({ userInfo }),
      customer_id: customer.id,
      line_items: products,
      billing: this.buildCustomerBilling({ userInfo }),
      shipping: this.buildCustomerShipping({ userInfo }),
      shipping_lines: this.buildShippingLines({ userInfo }),
      customer_note: userInfo.comments
    }
  }

  buildSubscription({ order, customer, userInfo, products }) {
    return {
      ...this.buildPaymentMethod({ userInfo }),
      ...this.buildSubscriptionDates(),
      parent_id: order.id,
      customer_id: customer.id,
      status: 'active', // TODO: @glrodasz set as pending payment until the first order is payed
      billing_period: 'month',
      billing_interval: 1,
      line_items: products,
      billing: this.buildCustomerBilling({ userInfo }),
      shipping: this.buildCustomerShipping({ userInfo }),
      shipping_lines: this.buildShippingLines({ userInfo }),
      customer_note: userInfo.comments
    }
  }

  async getOrCreateCustomer({ userInfo }) {
    const customers = await this.wooCommerceServiceV2.getCustomer({
      customerEmail: userInfo.email
    })

    if (isEmpty(customers)) {
      return this.wooCommerceServiceV2.createCustomer({
        customer: this.buildCustomer({ userInfo })
      })
    } else {
      return Promise.resolve(customers[0])
    }
  }

  async createOrder({ customer, userInfo, shoppingCartItems }) {
    const products = shoppingCartItems.map(this.mapProducts)

    const created = await this.wooCommerceServiceV2.createOrder({
      order: this.buildOrder({ customer, userInfo, products })
    })

    return Promise.resolve(created)
  }

  async createSubscription({ order, customer, userInfo, shoppingCartItems }) {
    const products = shoppingCartItems
      .filter(CheckoutService.filterSubscriptionType)
      .map(this.mapProducts)

    if (isEmpty(products)) {
      return Promise.resolve()
    }

    const createdSubscription = await this.wooCommerceServiceV1.createSubscription(
      {
        subscription: this.buildSubscription({
          order,
          customer,
          userInfo,
          products
        })
      }
    )

    return Promise.resolve(createdSubscription)
  }

  updatedShippingLines({ shippingLines = [], order = {} }) {
    return [{ ...shippingLines[0], ...order.shipping_lines[0] }]
  }

  async processCheckout({ orderNumber, userInfo, shoppingCartItems }) {
    const customer = await this.getOrCreateCustomer({ userInfo })

    if (isEmpty(orderNumber)) {
      const order = await this.createOrder({
        customer,
        userInfo,
        shoppingCartItems
      })

      const subscription = await this.createSubscription({
        order,
        customer,
        userInfo,
        shoppingCartItems
      })

      return Promise.resolve({
        order: parseOrder(order, ['order_key']),
        subscription: parseSubscription(subscription, ['order_key'])
      })
    } else {
      const order = await this.wooCommerceServiceV2.getOrder({
        orderId: orderNumber
      })

      const {
        billing,
        shipping,
        shipping_lines,
        customer_note
      } = this.buildOrder({ customer, userInfo })

      const updatedOrder = await this.wooCommerceServiceV2.updateOrder(
        orderNumber,
        {
          billing,
          shipping,
          customer_note,
          shipping_lines: this.updatedShippingLines({
            order,
            shippingLines: shipping_lines
          })
        }
      )

      return Promise.resolve({
        order: parseOrder(updatedOrder, ['order_key'])
      })
    }
  }

  confirmOrder(ePaycoPayload) {
    const { ePaycoClientId, ePaycoSecretKey } = config
    const { x_id_invoice: orderId, x_cod_response: code } = ePaycoPayload

    const signature = createSignature(
      ePaycoPayload,
      ePaycoClientId,
      ePaycoSecretKey
    )

    if (signature !== ePaycoPayload.x_signature) {
      return Promise.reject(new Error('Signature is not valid.'))
    }

    if (!code || code > 4 || code < 1) {
      return Promise.reject(new Error(`Code not valid: ${code}`))
    }

    return this.wooCommerceServiceV2.updateOrder(orderId, {
      status: epaycoToWooCommerce(code)
    })
  }
}

export default CheckoutService
