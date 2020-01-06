import base64 from 'base-64'

function encode(value) {
  return typeof btoa !== 'undefined' ? btoa(value) : base64.encode(value)
}

function decode(value) {
  return typeof atob !== 'undefined' ? atob(value) : base64.decode(value)
}

export function cleanOrderKey(key) {
  if (key) {
    return String(key).replace('wc_order_', '')
  }
}

export function encodeOrderParams({ orderNumber, orderKey }) {
  const token = {
    ord: orderNumber,
    ork: cleanOrderKey(orderKey)
  }

  return encode(JSON.stringify(token))
}

export function decodeOrderParams(token) {
  const { ord, ork } = JSON.parse(decode(token))

  return {
    orderNumber: ord,
    orderKey: ork
  }
}
