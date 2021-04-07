import PropTypes from 'prop-types'

import Picture from '../atoms/Picture'
import Subtitle from '../atoms/Subtitle'
import Paragraph from '../atoms/Paragraph'
import Currency from '../atoms/Currency'
import { choices } from '../../utils/designTokens'

const getQuantitiesUnits = quantity =>
  `${quantity} unit${quantity > 1 ? 's' : ''}`

const ShoppingCartItem = ({
  image,
  name,
  description,
  price,
  regularPrice,
  quantity
}) => {
  return (
    <div className="shoppingcart-item">
      <div className="shoppingcart-item-image">
        <Picture width={100} image={image} />
      </div>
      <div className="shoppingcart-item-info">
        <Subtitle size={2}>{name}</Subtitle>
        <span dangerouslySetInnerHTML={{ __html: description }}></span>
        <Paragraph weight="bold">
          {price !== regularPrice ? (
            <>
              <span
                style={{
                  textDecoration: 'line-through',
                  color: choices.colors.brand.cinnabar,
                  fontSize: choices.fontSize.md
                }}
              >
                <Currency>{Number(price)}</Currency>
              </span>
              <Currency>{Number(regularPrice)}</Currency>
            </>
          ) : (
            <Currency>{Number(regularPrice)}</Currency>
          )}
        </Paragraph>
        <div className="shoppingcart-item-actions">
          <Paragraph isCentered>{getQuantitiesUnits(quantity)}</Paragraph>
        </div>
      </div>
      <style jsx>{`
        .shoppingcart-item {
          display: flex;
          margin: ${choices.spacing[4]} 0;
        }

        .shoppingcart-item-info {
          display: inline-flex;
          flex-direction: column;
          margin-left: 20px;
          align-items: flex-start;
          justify-content: center;
          width: 100%;
        }

        .shoppingcart-item-actions {
          display: flex;
          flex-direction: row;
          align-items: center;
        }

        .shoppingcart-item-image {
          display: flex;
          justify-content: center;
          align-items: flex-start;
          padding: 5px 10px;
          width: 100%;
          max-width: 120px;
        }
      `}</style>
    </div>
  )
}

ShoppingCartItem.propTypes = {
  image: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  regularPrice: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  description: PropTypes.string
}

export default ShoppingCartItem
