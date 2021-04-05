import PropTypes from 'prop-types'

import { choices, decisions } from '../../utils/designTokens'

const Button = ({
  style,
  children,
  type,
  handleClick,
  withMargin,
  isDisabled,
  isLoading
}) => {
  return (
    <>
      <button
        style={style}
        type={type}
        className="button"
        onClick={handleClick}
        disabled={isDisabled || isLoading}
      >
        {children}
      </button>
      <style jsx>{`
        .button {
          margin: ${withMargin ? `${choices.spacing[4]} 0 0 0` : '0'};
          background: ${choices.colors.brand.cinnabar};
          border: 1px solid transparent;
          color: ${choices.colors.white};
          cursor: pointer;
          padding: ${choices.spacing[4]} ${choices.spacing[12]};
          text-transform: uppercase;
          width: 100%;
        }

        .button:disabled {
          opacity: ${choices.opacity[50]};
          pointer-events: none;
        }

        @media (${decisions.queries.screens.desktop}) {
          .button {
            max-width: 460px;
          }
        }
      `}</style>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  handleClick: PropTypes.func,
  withMargin: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isLoading: PropTypes.bool,
  style: PropTypes.object
}

Button.defaultProps = {
  handleClick: () => {},
  type: 'button'
}

export default Button
