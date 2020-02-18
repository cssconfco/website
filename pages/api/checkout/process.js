import CheckoutService from '../../../services/checkout'

const checkoutService = new CheckoutService()

export default async (req, res) => {
  if (req.method === 'POST') {
    const { userInfo, shoppingCartItems, couponCode } = req.body

    try {
      const response = await checkoutService.processCheckout({
        userInfo,
        shoppingCartItems,
        couponCode
      })

      res.send(response)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  } else {
    res.status(404).end()
  }
}
