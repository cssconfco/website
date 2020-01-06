import CheckoutService from '../../../services/checkout'
import { parseOrder } from '../../../utils/parseResponse'

const checkoutService = new CheckoutService()

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const order = await checkoutService.confirmOrder(req.query)
      const response = parseOrder(order, ['status'])

      res.send(response)
    } catch (error) {
      res.status(500).send(error)
    }
  } else {
    res.status(404).end()
  }
}
