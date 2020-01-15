import { useEffect } from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

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

const mapProduct = product => ({ ...product, quantity: product.quantity || 1 })
const sumProductSubtotals = (acc, cur) => acc + Number(cur.price * cur.quantity)

const Tickets = ({ countries, products }) => {
  const shoppingCartList = products.map(mapProduct)
  const getShoppingCartItems = () => shoppingCartList
  const shoppingCartTotals = {
    total: shoppingCartList.reduce(sumProductSubtotals, 0)
  }

  let ePaycoService = {}

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
          {shoppingCartList && shoppingCartList.length ? (
            <>
              <CheckAdBlocker>
                <CheckoutForm
                  countries={countries}
                  handleEpaycoDialog={handleEpaycoDialog}
                  getShoppingCartItems={getShoppingCartItems}
                />
              </CheckAdBlocker>
              <CheckoutSummary
                list={shoppingCartList}
                totals={shoppingCartTotals}
              />
            </>
          ) : (
            <Alert type="info">
              <Heading size={2} color="blue">
                Tickets, Sold out!! 🤯
              </Heading>
              <Paragraph
                style={{ marginTop: choices.spacing[4] }}
                size="sm"
                color="blue"
              >
                We recommend you to suscribe to our{' '}
                <Link href="/#newsletter">
                  <a>newsletter</a>
                </Link>{' '}
                so you can know with anticipation the date of our next batch of
                tickets and have another chance.
              </Paragraph>
              <Paragraph
                style={{ marginTop: choices.spacing[4] }}
                size="sm"
                color="blue"
              >
                Remember that we also publish that information in our social
                networks. Please, follow us in{' '}
                <a
                  href="https://twitter.com/cssconfco"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Twitter
                </a>{' '}
                and{' '}
                <a
                  href="https://instagram.com/cssconfco"
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
              padding: 0 ${choices.spacing[2]};
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
