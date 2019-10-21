import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { initGA, logPageView } from '../../utils/analytics'

class GoogleAnalytics extends Component {
  componentDidMount() {
    const isProduction =
      window &&
      window.location &&
      window.location.href &&
      window.location.href.startsWith('https://cssconf.co')

    if (isProduction) {
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
