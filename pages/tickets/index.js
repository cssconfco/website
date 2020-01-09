import { useEffect } from 'react'
import PropTypes from 'prop-types'

import Cointaner from '../../components/atoms/Container'
import CheckAdBlocker from '../../components/atoms/CheckAdBlocker'
import CheckoutForm from '../../components/organisms/CheckoutForm'
import CheckoutSummary from '../../components/organisms/CheckoutSummary'
import Footer from '../../components/organisms/Footer'
import SimpleNavbar from '../../components/organisms/SimpleNavbar'

import fetchJson from '../../utils/fetchJson'
import { choices, decisions } from '../../utils/designTokens'

import EPaycoService from '../../services/epayco'

import { config } from '../../config/client'

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
  }, [])

  return (
    <>
      <SimpleNavbar />
      <Cointaner>
        <div className="checkout">
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
      <Footer />
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
