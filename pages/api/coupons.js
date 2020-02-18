import { get } from 'lodash'
import WooCommerceService from '../../services/woocommerce'
import CheckoutService from '../../services/checkout'

import { parseCoupon } from '../../utils/parseResponse'

const wooCommerceService = new WooCommerceService()
const checkoutService = new CheckoutService()

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const code = get(req, 'query.code')
      const coupons = await wooCommerceService.getCoupons({ code })
      const coupon = checkoutService.getValidatedCuopon({ coupons })
      const response = parseCoupon(coupon)

      res.send(response)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  } else {
    res.status(404).end()
  }
}
