import { get } from 'lodash'
import WooCommerceService from '../../services/woocommerce'
import { parseCoupon } from '../../utils/parseResponse'

const wooCommerceService = new WooCommerceService()

const isAvailable = coupon => coupon.usage_count < coupon.usage_limit
const parseAmount = coupon =>
  Object.assign({}, coupon, { amount: Number(coupon.amount) })

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const code = get(req, 'query.code')
      const coupons = await wooCommerceService.getCoupon({ code })
      const [coupon] = coupons.filter(isAvailable).map(parseAmount)
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
