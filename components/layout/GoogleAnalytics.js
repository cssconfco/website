import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { initGA, logPageView } from '../../utils/analytics'
import { config } from '../../config/client'

class GoogleAnalytics extends Component {
  componentDidMount() {
    if (config.production) {
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }
  }

  render() {
    return <>{this.props.children}</>
  }
}

GoogleAnalytics.propTypes = {
  children: PropTypes.node.isRequired
}

export default GoogleAnalytics
