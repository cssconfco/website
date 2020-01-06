import PropTypes from 'prop-types'

import { choices, decisions } from '../../utils/designTokens'

const Label = ({ children, htmlFor }) => {
  return (
    <>
      <label className="label" htmlFor={htmlFor}>
        {children}
      </label>
      <style jsx>{`
        .label {
          color: ${decisions.label.color};
          font-size: ${decisions.label.fontSize};
          font-family: ${decisions.label.fontFamily};
          font-weight: ${decisions.label.fontWeight};
          margin-bottom: ${choices.spacing[1]};
          text-transform: uppercase;
          user-select: none;
        }
      `}</style>
    </>
  )
}

Label.propTypes = {
  children: PropTypes.node.isRequired,
  htmlFor: PropTypes.string
}

export default Label
