import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import Alert from '../../components/atoms/Alert'
import Paragraph from '../../components/atoms/Paragraph'
import Cointaner from '../../components/atoms/Container'
import CheckAdBlocker from '../../components/atoms/CheckAdBlocker'
import CheckoutForm from '../../components/organisms/CheckoutForm'
import CheckoutSummary from '../../components/organisms/CheckoutSummary'
import SimpleNavbar from '../../components/organisms/SimpleNavbar'

import fetchJson from '../../utils/fetchJson'
import { choices, decisions } from '../../utils/designTokens'
import { logEvent } from '../../utils/analytics'

import EPaycoService from '../../services/epayco'

import { config } from '../../config/client'
import Heading from '../../components/atoms/Heading'
import { links } from '../../utils/constants'

const sumProductSubtotals = (acc, cur) =>
  acc + Number(cur.regular_price * cur.quantity)
const getQuantityAndDiscount = (discount = 0) => product => ({
  ...product,
  quantity: product.quantity || 1,
  regular_price: `${Number(product.regular_price) - discount}`
})

let ePaycoService = {}

const Tickets = ({ countries, products }) => {
  const shoppingCartList = products.map(getQuantityAndDiscount())
  const shoppingCartTotal = shoppingCartList.reduce(sumProductSubtotals, 0)

  const [shoppingCart, setShoppingCart] = useState({
    list: shoppingCartList,
    totals: { total: shoppingCartTotal }
  })

  const handleSubmitCoupon = ({ coupon }) => {
    const shoppingCartList = products.map(getQuantityAndDiscount(coupon.amount))
    const shoppingCartTotal = shoppingCartList.reduce(sumProductSubtotals, 0)

    setShoppingCart({
      coupon: coupon,
      list: shoppingCartList,
      totals: { total: shoppingCartTotal }
    })
  }

  const handleEpaycoDialog = data => {
    ePaycoService.openDialog(data)
  }

  useEffect(() => {
    ePaycoService = new EPaycoService(config.ePaycoPublicKey, config.ePaycoTest)
    logEvent({ category: 'ticket', action: 'load', label: 'checkout' })
  }, [])

  return (
    <>
      <SimpleNavbar />
      <Cointaner>
        <div className="checkout">
          {shoppingCart && shoppingCart.list && shoppingCart.list.length ? (
            <>
              <CheckAdBlocker>
                <CheckoutForm
                  countries={countries}
                  handleEpaycoDialog={handleEpaycoDialog}
                  shoppingCartList={shoppingCart.list}
                  shoppingCartCoupon={shoppingCart.coupon}
                />
              </CheckAdBlocker>
              <CheckoutSummary
                list={shoppingCart.list}
                totals={shoppingCart.totals}
                shoppingCartCoupon={shoppingCart.coupon}
                handleSubmitCoupon={handleSubmitCoupon}
              />
            </>
          ) : (
            <Alert type="info">
              <Heading size={2} color="blue">
                Minibootcamp & Workshop tickets
              </Heading>
              <Paragraph size="sm" color="blue">
                We will offering a limited amount of tickets for join our{' '}
                <strong>Minibootcamp</strong> where you can learn about:
              </Paragraph>

              <Paragraph size="sm" color="blue">
                <strong>
                  Semantic HTML and CSS Layout for everyday (March 27th)
                </strong>
                <br />
                <strong>
                  Advanced CSS Layout with Flexbox and CSS Grid (April 3rd)
                </strong>
              </Paragraph>

              <Paragraph size="sm" color="blue">
                We also will have a more advanced workshop for a very limited
                number of people as well, well you can learn about:
              </Paragraph>

              <Paragraph size="sm" color="blue">
                <strong>
                  Building a Component Library with Storybook, Atomic Design,
                  and Design Tokens (April 17th)
                </strong>
              </Paragraph>

              <Paragraph size="sm" color="blue">
                Each session will be for groups of maximun{' '}
                <strong>25 people</strong> so you can a better experience and
                learning.
              </Paragraph>

              <Paragraph size="sm" color="blue">
                We will be publishing information about the tickets in our
                social networks. Please, follow us in{' '}
                <a
                  href={links.TWITTER}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>{' '}
                and{' '}
                <a
                  href={links.INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instragram
                </a>{' '}
                accounts.
              </Paragraph>
            </Alert>
          )}

          <style jsx>{`
            .checkout {
              display: flex;
              flex-direction: column-reverse;
              padding: 0 ${choices.spacing[4]};
            }

            .checkout :global(.paragraph) {
              margin-top: ${choices.spacing[4]};
            }

            @media (${decisions.queries.screens.desktop}) {
              .checkout {
                flex-direction: row;
              }
            }
          `}</style>
        </div>
      </Cointaner>
    </>
  )
}

Tickets.getInitialProps = async () => {
  const countries = await fetchJson(`${config.apiUrl}/resources/countries`)
  const products = await fetchJson(`${config.apiUrl}/products`)
  return { countries, products }
}

Tickets.propTypes = {
  countries: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired
}

export default Tickets
