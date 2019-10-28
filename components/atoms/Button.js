import React, { Fragment } from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

import { choices } from '../../utils/designTokens'

const Button = ({ children, type, handleClick, withMargin, isDisabled }) => {
  return (
    <Fragment>
      <button
        type={type}
        className="button"
        onClick={handleClick}
        disabled={isDisabled}
      >
        {children}
      </button>
      <style jsx>{`
        .button {
          margin: ${withMargin ? `${choices.spacing[4]} 0 0 0` : '0'};
          background: ${choices.colors.brand.cinnabar};
          border: none;
          color: ${choices.colors.white};
          cursor: pointer;
          padding: ${choices.spacing[4]} ${choices.spacing[20]};
          text-transform: uppercase;
        }

        .button:disabled {
          opacity: 0.5;
          pointer-events: none;
        }
      `}</style>
    </Fragment>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  handleClick: PropTypes.func,
  type: PropTypes.string,
  withMargin: PropTypes.bool
}

Button.defaultProps = {
  handleClick: () => {},
  type: 'button'
}

export default Button
