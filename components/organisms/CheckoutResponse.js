import { Component } from 'react'
import PropTypes from 'prop-types'
import { isEmpty, get } from 'lodash'
import Error from 'next/error'
import Link from 'next/link'

import Heading from '../atoms/Heading'
import Currency from '../atoms/Currency'
import Subtitle from '../atoms/Subtitle'
import Paragraph from '../atoms/Paragraph'
import Date from '../atoms/Date'
import Button from '../atoms/Button'
import Container from '../atoms/Container'

import cleanUrlQueryParams from '../../utils/cleanUrlQueryParams'
import scrollToTop from '../../utils/scrollToTop'
import { choices } from '../../utils/designTokens'
import Icon from '../atoms/Icon'

class CheckoutResponse extends Component {
  get fullName() {
    const {
      order: {
        billing: { first_name, last_name }
      }
    } = this.props
    return `${first_name} ${last_name}`
  }

  get amount() {
    const {
      ePayco: { amount }
    } = this.props
    return (
      <>
        <Currency>{amount}</Currency>
      </>
    )
  }

  get paymentMethodDetail() {
    const {
      ePayco: { typePayment }
    } = this.props

    switch (typePayment) {
      case 'TDC':
        return 'Credit Card'
      default:
        return typePayment
    }
  }

  get date() {
    const { ePayco: transaccionDate } = this.props

    return <Date>{transaccionDate}</Date>
  }

  get transactionStatus() {
    const {
      ePayco: { response = 'Pendiente' }
    } = this.props

    let color = choices.colors.gray[500]
    let englishResponse = 'Pending'

    if (response === 'Aceptada') {
      color = choices.colors.green[500]
      englishResponse = 'Approved'
    } else if (response === 'Fallida') {
      color = choices.colors.red[500]
      englishResponse = 'Failed'
    } else if (response === 'Pendiente') {
      color = choices.colors.orange[500]
    }

    return <strong style={{ color }}>{englishResponse}</strong>
  }

  componentDidMount() {
    scrollToTop()
    cleanUrlQueryParams()
  }

  render() {
    const { ePayco, order } = this.props
    const { idInvoice } = ePayco

    if (isEmpty(ePayco) && isEmpty(order.billing) && isEmpty(order.shipping)) {
      return <Error statusCode={404} />
    }

    return (
      <Container size="small">
        <div className="checkout-response">
          <div className="checkout-response-header">
            <Heading size={2} isCentered>
              Order Details
            </Heading>
            <Paragraph>
              Hi! <strong>{this.fullName}</strong>, your transaction status is{' '}
              <strong className="transaction-status">
                {this.transactionStatus}
              </strong>
              .
            </Paragraph>
          </div>
          <div className="checkout-response-container">
            <div className="checkout-response-info">
              <Subtitle size={1} color="gray">
                <Icon icon="money" size="lg" /> <span>Payment information</span>
              </Subtitle>
              <Paragraph>
                <strong>Invoice</strong> <span>{idInvoice}</span>
              </Paragraph>
              <Paragraph>
                <strong>Date</strong> <span>{this.date}</span>
              </Paragraph>
              <Paragraph>
                <strong>Payment Method</strong>{' '}
                <span>{this.paymentMethodDetail}</span>
              </Paragraph>
              <Paragraph>
                <strong>Total</strong> <span>{this.amount}</span>
              </Paragraph>
            </div>
          </div>

          <div className="checkout-response-order">
            <Subtitle size={1} color="gray">
              <Icon icon="receipt" size="lg" />{' '}
              <span>Order #{order.number}</span>
            </Subtitle>

            <Subtitle size={2} color="gray">
              Summary
            </Subtitle>
            {get(order, 'line_items', []).map(product => (
              <div key={product.name} className="checkout-response-product">
                <Paragraph>
                  <strong>Name</strong> <span>{product.name}</span>
                </Paragraph>
                <Paragraph>
                  <strong>Quantity</strong> <span>{product.quantity}</span>
                </Paragraph>
                <Paragraph>
                  <strong>Subtotal</strong> <Currency>{product.total}</Currency>
                </Paragraph>
              </div>
            ))}
          </div>

          <div className="checkout-response-container">
            <div className="checkout-response-address">
              <Subtitle size={1} color="gray">
                <Icon icon="invoice" size="lg" /> <span>Billing Details</span>
              </Subtitle>

              <Paragraph>
                <strong>Name</strong>{' '}
                <span>
                  {order.billing.first_name} {order.billing.last_name}
                </span>
              </Paragraph>

              <Paragraph>
                <strong>Address</strong> <span>{order.billing.address_1}</span>,{' '}
                <span>{order.billing.country}</span> —{' '}
                <span>{order.billing.city}</span>
              </Paragraph>

              <Paragraph>
                <strong>Phone</strong> <span>{order.billing.phone}</span>
              </Paragraph>
              <Paragraph>
                <strong>Email</strong> <span>{order.billing.email}</span>
              </Paragraph>
            </div>
          </div>
          <br />
          <Link href="/">
            <a>
              <Button>
                <Heading size={3} isInverted>
                  Return to Home
                </Heading>
              </Button>
            </a>
          </Link>
          <style jsx>{`
            .checkout-response {
              display: flex;
              flex-direction: column;
              padding: ${choices.spacing[8]} ${choices.spacing[2]};
            }

            .checkout-response-header {
              margin: ${choices.spacing[6]} 0;
              width: 100%;
            }

            .checkout-response-container {
              display: flex;
            }

            .checkout-response-product {
              margin-bottom: ${choices.spacing[2]};
            }

            .checkout-response-address,
            .checkout-response-info {
              background: ${choices.colors.yellow[100]};
              border: 2px dashed ${choices.colors.yellow[500]};
              margin: ${choices.spacing[4]} 0;
              padding: ${choices.spacing[6]} ${choices.spacing[4]}
                ${choices.spacing[4]};
              width: 100%;
            }

            .checkout-response-address {
              background: ${choices.colors.red[100]};
              border: 2px dashed ${choices.colors.red[500]};
            }

            .checkout-response-order {
              background: ${choices.colors.blue[100]};
              border: 2px dashed ${choices.colors.blue[500]};
              margin: ${choices.spacing[4]} 0;
              padding: ${choices.spacing[6]} ${choices.spacing[4]}
                ${choices.spacing[2]};
              width: 100%;
            }

            .checkout-response :global(.subtitle),
            .checkout-response :global(.heading) {
              margin-bottom: ${choices.spacing[4]};
            }

            .checkout-response :global(.button > .heading) {
              margin-bottom: 0;
            }

            .checkout-response :global(.icon) {
              margin-right: ${choices.spacing[2]};
            }

            .checkout-response :global(.subtitle) {
              display: flex;
              align-items: center;
            }

            .transaction-status {
              text-decoration: underline;
            }
          `}</style>
        </div>
      </Container>
    )
  }
}

CheckoutResponse.propTypes = {
  ePayco: PropTypes.object.isRequired,
  order: PropTypes.object.isRequired
}

CheckoutResponse.defaultProps = {
  ePayco: {},
  order: { billing: {} }
}

export default CheckoutResponse
