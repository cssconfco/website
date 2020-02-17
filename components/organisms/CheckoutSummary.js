import { useState } from 'react'
import PropTypes from 'prop-types'
import { sortBy, isEmpty } from 'lodash'
import swal from 'sweetalert'
import fetchJson from '../../utils/fetchJson'

import Button from '../atoms/Button'
import Paragraph from '../atoms/Paragraph'
import Currency from '../atoms/Currency'
import Subtitle from '../atoms/Subtitle'
import Heading from '../atoms/Heading'
import ShoppingCartItem from './ShoppingCartItem'

import { choices, decisions } from '../../utils/designTokens'
import { logEvent } from '../../utils/analytics'

import { config } from '../../config/client'

const CheckoutSummary = ({
  list,
  totals,
  shoppingCartCoupon,
  handleSubmitCoupon
}) => {
  const shoppingCartIsEmpty = isEmpty(list)

  if (shoppingCartIsEmpty) {
    return null
  }

  const [isLoading, setIsLoading] = useState(false)
  const [code, setCode] = useState('')

  const handleChange = event => {
    const { value } = event.target
    setCode(value)
  }

  const handleSubmit = async event => {
    event && event.preventDefault()

    setIsLoading(true)

    try {
      const coupon = await fetchJson(`${config.apiUrl}/coupons?code=${code}`)
      setIsLoading(false)

      if (coupon && coupon.code) {
        logEvent({
          category: 'ticket',
          action: 'submit',
          label: `coupon ${coupon.code}`
        })
        handleSubmitCoupon({ coupon })
      } else {
        setCode('')
        swal(
          'Opps!',
          'Coupon code entered is expired or invalid, please try again',
          'info'
        )
      }
    } catch (error) {
      swal(
        'Opps!',
        'Something went wrong with your coupon code, please try again',
        'error'
      )

      setIsLoading(false)

      console.error('Error aplicando el cupon', error)
    }
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
      {!shoppingCartCoupon ? (
        <form className="coupon" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Coupon code"
            value={code}
            onChange={handleChange}
          />
          <Button type="submit" isLoading={isLoading} size="">
            <Heading size={3} isInverted>
              {isLoading ? 'Loading...' : 'Apply'}
            </Heading>
          </Button>
        </form>
      ) : (
        <Paragraph color="red" style={{ marginTop: choices.spacing[6] }}>
          Coupon <strong>{shoppingCartCoupon.code}</strong> has been applied. 🎉
        </Paragraph>
      )}
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

        .coupon {
          margin-top: ${choices.spacing[8]};
          flex-wrap: wrap;
          display: flex;
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
          .coupon {
            flex-wrap: nowrap;
          }

          .coupon :global(input) {
            width: 300px;
            height: auto;
          }

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
  handleSubmitCoupon: PropTypes.func.isRequired,
  shoppingCartCoupon: PropTypes.object,
  totals: PropTypes.object,
  list: PropTypes.array
}

CheckoutSummary.defaultProps = {
  totals: {},
  list: []
}

export default CheckoutSummary
