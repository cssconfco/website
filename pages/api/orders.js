import { get } from 'lodash'
import WooCommerceService from '../../services/woocommerce'
import { parseOrder } from '../../utils/parseResponse'
import verifyOrderKey from '../../utils/verifyOrderKey'

const ORDER_GET_ATTRIBUTES = ['line_items']

const wooCommerceService = new WooCommerceService()

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const orderId = get(req, 'query.orderId')
      const orderKey = get(req, 'query.orderKey')

      const order = await wooCommerceService.getOrder({ orderId })
      const verifiedOrder = verifyOrderKey(order, orderKey)
      const response = parseOrder(verifiedOrder, ORDER_GET_ATTRIBUTES)

      res.send(response)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  } else {
    res.status(404).end()
  }
}
