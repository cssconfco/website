import PropTypes from 'prop-types'
import { sortBy, isEmpty } from 'lodash'

import Currency from '../atoms/Currency'
import Subtitle from '../atoms/Subtitle'
import Heading from '../atoms/Heading'
import ShoppingCartItem from './ShoppingCartItem'

import { choices, decisions } from '../../utils/designTokens'

const CheckoutSummary = ({ list, totals }) => {
  const shoppingCartIsEmpty = isEmpty(list)

  if (shoppingCartIsEmpty) {
    return null
  }

  return (
    <div className="shoppingcart-list">
      <div className="shoppingcart-list-summary">
        <div className="shoppingcart-list-summary-info">
          <Subtitle size={1}>Summary</Subtitle>
          <Heading size={1}>
            <Currency>{totals.total}</Currency>
          </Heading>
        </div>
      </div>
      <div className="shoppingcart-list-container">
        {sortBy(list, ['name']).map(
          ({
            id,
            type,
            image,
            name,
            price,
            regular_price: regularPrice,
            quantity
          }) => (
            <ShoppingCartItem
              key={id}
              id={id}
              type={type}
              image={image}
              name={name}
              price={price}
              regularPrice={regularPrice}
              quantity={quantity}
            />
          )
        )}
      </div>
      <div className="shoppingcart-list-totals">
        <div className="shoppingcart-list-total">
          <Heading size={3}>Total</Heading>{' '}
          <Heading size={3}>
            <Currency>{totals.total}</Currency>
          </Heading>
        </div>
      </div>
      <style jsx>{`
        .shoppingcart-list {
          display: flex;
          flex-direction: column;
          border: 1px solid ${choices.colors.gray[400]};
          background: ${choices.colors.gray[100]};
          margin: ${choices.spacing[2]} 0 ${choices.spacing[8]};
          padding: ${choices.spacing[8]} ${choices.spacing[6]}
            ${choices.spacing[4]} ${choices.spacing[10]};
          width: 100%;
        }

        .shoppingcart-list-summary {
          align-items: center;
          border-bottom: 1px solid ${choices.colors.gray[300]};
          display: flex;
          justify-content: space-between;
          margin-bottom: ${choices.spacing[4]};
          padding-bottom: ${choices.spacing[4]};
        }

        .shoppingcart-list-totals {
          display: flex;
          flex-direction: column;
          margin-top: ${choices.spacing[4]};
        }

        .shoppingcart-list-total {
          border-top: 2px dashed ${choices.colors.gray[400]};
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding-top: ${choices.spacing[2]};
        }

        .shoppingcart-list-container {
          height: auto;
          overflow-y: auto;
        }

        @media (${decisions.queries.screens.desktop}) {
          .shoppingcart-list {
            background: linear-gradient(
              90deg,
              ${choices.colors.gray[200]} 0%,
              ${choices.colors.white} 100%
            );
            margin: 0 0 0 ${choices.spacing[8]};
            padding-bottom: ${choices.spacing[10]};
            border-left: 2px solid;
            border-right: none;
            border-color: transparent transparent transparent
              ${choices.colors.gray[500]};
            height: 100vh;
            min-height: 600px;
            max-width: 450px;
          }
        }
      `}</style>
    </div>
  )
}

CheckoutSummary.propTypes = {
  totals: PropTypes.object,
  list: PropTypes.array
}

CheckoutSummary.defaultProps = {
  totals: {},
  list: []
}

export default CheckoutSummary
