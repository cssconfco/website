const ePaycoStatus = {
  '1': 'completed',
  '2': 'refunded',
  '3': 'pending',
  '4': 'failed'
}

const wooCommerceStatus = {
  canceled: 1,
  refunded: 2,
  pending: 3,
  failed: 4
}

export const epaycoToWooCommerce = key => ePaycoStatus[String(key)] || ''
export const wooCommerceToEpayco = key => wooCommerceStatus[String(key)] || ''
