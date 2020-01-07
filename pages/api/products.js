import WooCommerceService from '../../services/woocommerce'
import { parseProduct } from '../../utils/parseResponse'

const wooCommerceService = new WooCommerceService()

const mapProduct = product => parseProduct(product)
const isInStock = product => product.in_stock
const isPublished = product => product.status === 'publish'

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const products = await wooCommerceService.getProducts()
      const response = products
        .map(mapProduct)
        .filter(isInStock)
        .filter(isPublished)

      res.send(response)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  } else {
    res.status(404).end()
  }
}
