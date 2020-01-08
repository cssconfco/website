import boom from '@hapi/boom'

const verifyOrderKey = (order, key) => {
  if (order.order_key === `wc_order_${key}`) {
    return order
  }

  throw boom.forbidden('Forbiden order').output.payload
}

export default verifyOrderKey
