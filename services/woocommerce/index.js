import WooCommerceAPI from 'woocommerce-api'
import { config } from '../../config/server'

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

  getOrder({ orderId } = {}) {
    return this.request(`orders/${orderId}`)
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
  getCustomer({ customerEmail, customerId } = {}) {
    return customerEmail
      ? this.request(`customers?email=${customerEmail}`)
      : this.request(`customers/${customerId}`)
  }

  createCustomer({ customer }) {
    return this.request('customers', 'post', customer)
  }
}

export default WooCommerceService
