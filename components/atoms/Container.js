import React, { Fragment } from 'react'
import PropTypes from 'prop-types'

import { decisions } from '../../utils/designTokens'

const Container = ({ children }) => {
  return (
    <Fragment>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          position: relative;
          margin: 0 auto;
          max-width: ${decisions.container.maxWidth};
        }
      `}</style>
    </Fragment>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
