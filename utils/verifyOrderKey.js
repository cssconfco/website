import boom from '@hapi/boom'
import sanitizeString from './sanitizeString'

const verifyOrderKey = (order, key) => {
  if (sanitizeString(order.order_key) === `wc_order_${sanitizeString(key)}`) {
    return order
  }

  throw boom.forbidden('Forbiden order').output.payload
}

export default verifyOrderKey
