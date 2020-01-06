import PropTypes from 'prop-types'
import CheckAdBlocker from '../../components/atoms/CheckAdBlocker'
import fetchJson from '../../utils/fetchJson'
import { config } from '../../config/client'

import CheckoutForm from '../../components/organisms/CheckoutForm'
import CheckoutSummary from '../../components/organisms/CheckoutSummary'

import { choices, decisions } from '../../utils/designTokens'

const mapProduct = product => ({ ...product, quantity: product.quantity || 1 })
const sumProductQuantity = (acc, cur) => acc + cur.quantity
const handleEpaycoDialog = () => {}

const Tickets = ({ countries, products }) => {
  const shoppingCartList = products.map(mapProduct)
  const shoppingCartTotals = shoppingCartList.reduce(sumProductQuantity, 0)
  const getShoppingCartItems = () => shoppingCartList

  return (
    <CheckAdBlocker>
      <div className="container">
        <CheckoutForm
          countries={countries}
          handleEpaycoDialog={handleEpaycoDialog}
          getShoppingCartItems={getShoppingCartItems}
        />
        <CheckoutSummary
          shoppingCartList={shoppingCartList}
          shoppingCartTotals={shoppingCartTotals}
        />
        <style jsx>{`
          .container {
            display: flex;
            flex-direction: column-reverse;
            padding: 0 ${choices.spacing[2]};
          }
        `}</style>
        <style jsx>{`
          @media (${decisions.queries.screens.desktop}) {
            .container {
              flex-direction: row;
            }
          }
        `}</style>
      </div>
    </CheckAdBlocker>
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
