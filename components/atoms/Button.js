import React, { Fragment } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { choices } from '../../utils/designTokens'

const Button = ({ children, type, handleClick, isGhost }) => {
  return (
    <Fragment>
      <button type={type} className="button" onClick={handleClick}>
        {children}
      </button>
      <style jsx>{`
        .button {
          background: ${choices.colors.brand.cinnabar};
          border: none;
          color: ${choices.colors.white};
          cursor: pointer;
          padding: ${choices.spacing[2]} ${choices.spacing[20]};
          text-transform: uppercase;
        }
      `}</style>
    </Fragment>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  isGhost: PropTypes.bool
}

Button.defaultProps = {
  handleClick: () => {},
  type: 'button'
}

export default Button
