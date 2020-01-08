/* global ePayco */
import { config } from '../../config/client'
import { encodeOrderParams } from '../../utils/orderParams'

const defaultValues = {
  name: 'CSS Conf Colombia',
  description: 'CSS Conf Colombia 2020',
  currency: 'cop',
  tax_base: '0',
  country: 'co',
  lang: 'en',
  test: `${config.ePaycoTest}`,
  confirmation: `${config.apiUrl}/checkout/confirmation`,
  response: `${config.clientUrl}/tickets/response`,
  method: 'get',
  p_confirm_method: 'get'
}

class EPaycoService {
  constructor(key, test) {
    this.key = key
    this.test = test
  }

  configure() {
    this.onPageCheckout = ePayco.checkout.configure({
      key: this.key,
      test: this.test
    })
  }

  formatData({ order = {} } = {}) {
    const {
      number: orderNumber,
      order_key: orderKey,
      total,
      total_tax,
      currency
    } = order

    const {
      first_name,
      last_name,
      country,
      address_1,
      phone,
      email
    } = order.billing

    return {
      ...defaultValues,
      name_billing: `${first_name} ${last_name}`,
      country: country,
      currency: currency,
      tax: total_tax,
      amount: total,
      address_billing: address_1,
      mobilephone_billing: phone,
      invoice: orderNumber,
      email_billing: email,
      extra1: encodeOrderParams({
        orderNumber,
        orderKey
      })
    }
  }

  openDialog(data) {
    try {
      this.configure()
      this.onPageCheckout.open(this.formatData(data))
    } catch (error) {
      console.error('Error opening OnPage checkout in ePayco service', error)
    }
  }
}

export default EPaycoService
