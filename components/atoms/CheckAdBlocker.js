import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import fetchJson from '../../utils/fetchJson'

import Paragraph from './Paragraph'
import Alert from './Alert'

import { links } from '../../utils/constants'

const CheckAdBlocker = ({ children }) => {
  const [haveAdBlocker, setHaveAdBlocker] = useState(false)

  useEffect(() => {
    async function checkAdBlocker() {
      try {
        await fetchJson('https://api.ipify.org/?format=json')
        setHaveAdBlocker(false)
      } catch (error) {
        setHaveAdBlocker(true)
      }
    }

    checkAdBlocker()
  }, [])

  if (haveAdBlocker) {
    return (
      <Alert type="danger">
        <Paragraph size="sm" color="red">
          In order to procced with the payment is neccesasary to{' '}
          <strong>disable the ad blocker</strong> temporarily and{' '}
          <strong>refresh the page</strong>.{' '}
          <a
            href={links.EPAYCO_ISSUE}
            target="_blank"
            rel="noopener noreferrer"
          >
            Why?
          </a>
        </Paragraph>
      </Alert>
    )
  }

  return children
}

CheckAdBlocker.propTypes = {
  children: PropTypes.node.isRequired
}

export default CheckAdBlocker
