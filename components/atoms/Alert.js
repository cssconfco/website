import PropTypes from 'prop-types'
import classNames from 'classnames'

import { choices } from '../../utils/designTokens'

const Alert = ({ children, type, isMarginLess, isTop, isCentered }) => (
  <>
    <div
      className={classNames('alert', {
        [`alert-${type}`]: type,
        'is-centered': isCentered,
        'is-top': isTop
      })}
    >
      {children}
    </div>
    <style jsx>{`
      .alert {
        display: ${isTop ? 'block' : 'inline-flex'};
        flex-direction: column;
        padding: ${choices.spacing[2]} ${choices.spacing[4]};
        border-radius: ${choices.borderRadius.md};
        height: ${choices.minHeight.full};
        margin: ${isMarginLess
          ? '0'
          : `${choices.spacing[8]} ${choices.spacing[4]}`};
      }

      .is-centered {
        margin: 0 auto;
        text-align: center;
      }

      .is-top {
        width: 100%;
        border-radius: 0;
      }

      .alert-info {
        background: ${choices.colors.blue[200]};
        border: 1px solid ${choices.colors.blue[400]};
        color: ${choices.colors.blue[400]};
      }

      .alert-danger {
        background: ${choices.colors.red[200]};
        border: 1px solid ${choices.colors.red[400]};
        color: ${choices.colors.red[400]};
      }
    `}</style>
  </>
)

Alert.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  isMarginLess: PropTypes.bool,
  isCentered: PropTypes.bool,
  isTop: PropTypes.bool
}

Alert.defaultProps = {
  type: 'info'
}

export default Alert
