import PropTypes from 'prop-types'
import classNames from 'classnames'

import { choices, decisions } from '../../utils/designTokens'

const Group = ({ children, style, isHalf, isCentered, isBlock }) => (
  <>
    <div
      style={style}
      className={classNames('form-group', {
        'is-half': isHalf,
        'is-block': isBlock,
        'is-centered': isCentered
      })}
    >
      {children}
    </div>
    <style jsx>{`
      .form-group {
        display: flex;
        flex-direction: column;
        margin: ${choices.spacing[2]} 0 ${choices.spacing[4]};
        width: ${choices.minWidth.full};
      }

      .is-block {
        display: block;
      }

      .is-centered {
        align-items: center;
        margin-left: auto !important;
        margin-right: auto !important;
      }

      .form-group:first-child {
        margin-left: 0;
      }

      .form-group:last-child {
        margin-bottom: 0;
      }

      .form-group:last-child {
        margin-right: 0;
      }

      @media (${decisions.queries.screens.desktop}) {
        .is-half {
          width: calc(50% - ${choices.spacing[2]});
        }

        .is-half:nth-of-type(even) {
          margin-right: 0;
          margin-left: ${choices.spacing[2]};
        }

        .is-half:nth-of-type(odd) {
          margin-left: 0;
          margin-right: ${choices.spacing[2]};
        }
      }
    `}</style>
  </>
)

Group.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.object,
  isHalf: PropTypes.bool,
  isCentered: PropTypes.bool,
  isBlock: PropTypes.bool
}

export default Group
