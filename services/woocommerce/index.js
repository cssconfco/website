import WooCommerceAPI from 'woocommerce-api'
import { config } from '../../config/server'
import sanitizeString from '../../utils/sanitizeString'
import validateEmail from '../../utils/validateEmail'

class WooCommerceService {
  constructor(version = 'wc/v2') {
    this.WooCommerce = new WooCommerceAPI({
      version,
      url: config.wordpressUrl,
      consumerKey: config.wpConsumerKey,
      consumerSecret: config.wpConsumerSecret,
      wpAPI: true
    })
  }

  request(resource, method = 'get', data) {
    switch (method) {
      case 'post':
        return this.WooCommerce.postAsync(resource, data).then(result =>
          JSON.parse(result.toJSON().body)
        )
      case 'put':
        return this.WooCommerce.putAsync(resource, data).then(result =>
          JSON.parse(result.toJSON().body)
        )
      case 'get':
        return this.WooCommerce.getAsync(resource).then(result =>
          JSON.parse(result.toJSON().body)
        )
    }
  }

  // Products
  getProducts() {
    return this.request('products')
  }

  getProduct({ productId } = {}) {
    return this.request(`products/${productId}`)
  }

  // Orders
  getOrders({ customer, page = 1, perPage = 10 }) {
    return customer
      ? this.request(
          `orders?page=${page}&per_page=${perPage}&customer=${customer}`
        )
      : this.request(`orders?page=${page}&per_page=${perPage}`)
  }

  getOrder({ orderId = '' } = {}) {
    const sanitizedOrderId = sanitizeString(orderId)

    return sanitizedOrderId
      ? this.request(`orders/${orderId}`)
      : Promise.resolve({})
  }

  createOrder({ order } = {}) {
    return this.request('orders', 'post', order)
  }

  updateOrder(
    orderId,
    { billing, shipping, shipping_lines, customer_note, status, meta_data } = {}
  ) {
    return this.request(`orders/${orderId}`, 'put', {
      billing,
      shipping,
      shipping_lines,
      customer_note,
      status,
      meta_data
    })
  }

  // Customers
  getCustomers({ customerEmail, customerId } = {}) {
    if (customerEmail) {
      validateEmail(customerEmail)
      return this.request(`customers?email=${customerEmail}`)
    }

    const sanitizedCustomerId = sanitizeString(customerId)

    if (sanitizedCustomerId) {
      return this.request(`customers/${sanitizedCustomerId}`)
    }

    return Promise.resolve([])
  }

  createCustomer({ customer }) {
    return this.request('customers', 'post', customer)
  }

  // Coupons
  getCoupons({ code }) {
    const sanitizedCode = sanitizeString(code)

    return sanitizedCode
      ? this.request(`coupons?code=${sanitizedCode}`)
      : Promise.resolve([])
  }
}

export default WooCommerceService
