import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'
import swal from 'sweetalert'

import { isEqual } from 'lodash'
import fetchJson from '../../utils/fetchJson'
import MaskedInput from 'react-text-mask'

import Button from '../atoms/Button'
import Label from '../atoms/Label'
import Heading from '../atoms/Heading'
import Form from '../molecules/Form'

import { config } from '../../config/client'

// prettier-ignore
const CELL_PHONE_MASK = [ /[1-9]/, /\d/, /\d/,' ', /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];

class CheckoutForm extends Component {
  constructor(props) {
    super(props)
    this.state = this.getInitialState(props)
  }

  getInitialState({ countries }) {
    return {
      values: {
        termsAndConditionsAccepted: true
      },
      countries: countries.map(this.mapCountryToOption),
      isLoading: false,
      isDisabled: false
    }
  }

  componentDidUpdate(prevProps, prevState) {
    this.toggleSubmitButton(prevState)
  }

  getFullname = () => {
    const { firstname, lastname } = this.state.values
    return firstname && lastname && `${firstname} ${lastname}`
  }

  getDefaultInputProps = name => ({
    name,
    id: name,
    value: this.state.values[name],
    onChange: this.handleChange
  })

  getDefaultCheckboxProps = name => ({
    ...this.getDefaultInputProps(name),
    type: 'checkbox',
    checked: this.state.values[name],
    value: true
  })

  getDefaultRadioProps = (name, value) => ({
    ...this.getDefaultInputProps(name),
    value,
    type: 'radio',
    checked: this.state.values[name] === value
  })

  getDefaultReactSelectProps = name => ({
    ...this.getDefaultInputProps(name),
    inputId: name,
    onChange: this.handleReactSelectChange(name)
  })

  mapCountryToOption = ({ name, alpha2Code }) => ({
    label: name,
    value: alpha2Code
  })

  cleanFormValue(name) {
    this.handleReactSelectChange(name)(null)
  }

  setFormValue(name, value) {
    this.setState(prevState => ({
      values: { ...prevState.values, [name]: value }
    }))
  }

  toggleSubmitButton(prevState) {
    const { termsAndConditionsAccepted } = this.state.values

    const termsAndConditionsAcceptedUpdated = !isEqual(
      prevState.values.termsAndConditionsAccepted,
      termsAndConditionsAccepted
    )

    const shouldToggleSubmitButton = termsAndConditionsAcceptedUpdated

    if (shouldToggleSubmitButton && termsAndConditionsAccepted) {
      this.setState({ isDisabled: false })
    } else if (shouldToggleSubmitButton) {
      this.setState({ isDisabled: true })
    }
  }

  handleChange = event => {
    event && type === 'submit' && event.preventDefault()

    const { name, value, type, checked } = event.target
    const inputValue = type === 'checkbox' ? checked : value

    this.setFormValue(name, inputValue)
  }

  handleReactSelectChange = name => value => this.setFormValue(name, value)

  handleSubmit = async event => {
    event && event.preventDefault()

    const checkoutPayload = {
      userInfo: {
        ...this.state.values,
        billingCountry: this.state.values.billingCountry.value
      },
      shoppingCartItems: this.props.getShoppingCartItems()
    }

    try {
      this.setState({ isLoading: true })

      const { data: checkoutResponseData } = await fetchJson(
        `${config.apiUrl}/checkout/process`,
        {
          method: 'POST',
          body: JSON.stringify(checkoutPayload),
          headers: {
            'Content-Type': 'application/json'
          }
        }
      )

      this.props.handleEpaycoDialog(checkoutResponseData)
    } catch (error) {
      swal(
        'Opps!',
        'Something went wrong with your order, please try again',
        'error'
      )

      console.error('Error processing checkout in checkout form', error)
    }
  }

  render() {
    const { isLoading, isDisabled } = this.state

    return (
      <div className="checkout-form">
        <Form handleSubmit={this.handleSubmit}>
          <Form.Fieldset title="Billing Details">
            <Form.Group isHalf>
              <Label htmlFor="firstname">Name</Label>
              <input
                {...this.getDefaultInputProps('firstname')}
                type="text"
                placeholder="Your Firstname"
                autoFocus
                required
              />
            </Form.Group>
            <Form.Group isHalf>
              <Label htmlFor="lastname">Lastname</Label>
              <input
                {...this.getDefaultInputProps('lastname')}
                type="text"
                placeholder="Your Lastname"
                required
              />
            </Form.Group>
            <Form.Group isHalf>
              <Label htmlFor="billingAddress">Address</Label>
              <input
                {...this.getDefaultInputProps('billingAddress')}
                type="text"
                placeholder="Billing Address"
                required
              />
            </Form.Group>
            <Form.Group isHalf>
              <Label htmlFor="billingCountry">Country</Label>
              <Select
                {...this.getDefaultReactSelectProps('billingCountry')}
                classNamePrefix="react-select"
                placeholder="Select..."
                options={this.state.countries}
                required
              />
            </Form.Group>
            <Form.Group isHalf isBlock>
              <Label htmlFor="billingCity">City</Label>
              <input
                {...this.getDefaultInputProps('billingCity')}
                type="text"
                placeholder="Locality / City"
                required
              />
            </Form.Group>
            <Form.Group isHalf>
              <Label htmlFor="cellphone">Phone</Label>
              <MaskedInput
                {...this.getDefaultInputProps('cellphone')}
                mask={CELL_PHONE_MASK}
                type="tel"
                placeholder="Mobile Phone"
                required
              />
            </Form.Group>
            <Form.Group isHalf>
              <Label htmlFor="email">Email</Label>
              <input
                {...this.getDefaultInputProps('email')}
                placeholder="Email"
                type="email"
                required
              />
            </Form.Group>
            <Form.Group isHalf>
              <Label htmlFor="comments">T-shirt size</Label>
              <input
                {...this.getDefaultInputProps('comments')}
                type="text"
                placeholder="Small / Medium / Large / Extra Large"
                required
              />
            </Form.Group>
          </Form.Fieldset>
          <Form.Fieldset>
            <Form.Group isCentered>
              <Button
                type="submit"
                isDisabled={isDisabled}
                isLoading={isLoading}
              >
                <Heading size={3} isInverted>
                  {isLoading ? 'Loading...' : 'Buy Ticket'}
                </Heading>
              </Button>
              <div style={{ margin: '10px 0 20px 1px' }}>
                <input
                  {...this.getDefaultCheckboxProps(
                    'termsAndConditionsAccepted'
                  )}
                />
                <label htmlFor="termsAndConditionsAccepted">
                  <a
                    href="https://github.com/cssconfco/codigo-de-conducta"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    I have read and accepted the Code of Conduct
                  </a>
                </label>
              </div>
            </Form.Group>
          </Form.Fieldset>
        </Form>
      </div>
    )
  }
}

CheckoutForm.propTypes = {
  getShoppingCartItems: PropTypes.func.isRequired,
  handleEpaycoDialog: PropTypes.func.isRequired
}

CheckoutForm.defaultProps = {
  countries: []
}

export default CheckoutForm
