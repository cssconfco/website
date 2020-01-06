import PropTypes from 'prop-types'
import ShoppingCartList from '../../molecules/ShoppingCart/ShoppingCartList/ShoppingCartList'

export const CheckoutSummary = ({ shoppingCartList, shoppingCartTotals }) => (
  <div>
    <ShoppingCartList
      list={shoppingCartList}
      totals={shoppingCartTotals}
      isSummary={true}
    />
  </div>
)

CheckoutSummary.propTypes = {
  shoppingCartList: PropTypes.array,
  shoppingCartTotals: PropTypes.object
}

export default CheckoutSummary
