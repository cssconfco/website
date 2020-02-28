import PropTypes from 'prop-types'
import classNames from 'classnames'

import { choices, decisions } from '../../utils/designTokens'
import { titleStyles } from '../../utils/globalStyles'

const Heading = ({
  children,
  size,
  color,
  isInverted,
  isDisabled,
  isInline,
  isCentered,
  withMargin
}) => {
  return (
    <>
      <h1
        className={classNames('heading', {
          [`size-${size}`]: size,
          [`alt-${color}`]: color,
          'is-inverted': isInverted,
          'is-disabled': isDisabled,
          'is-inline': isInline,
          'is-centered': isCentered
        })}
      >
        {children}
      </h1>
      <style jsx>{`
        .heading {
          margin: ${withMargin ? `0 0 ${choices.spacing[6]} 0` : '0'};
          padding: 0;
          ${titleStyles}
        }

        .is-centered {
          text-align: center;
        }

        .is-inline {
          display: inline-block;
        }

        .is-inverted {
          color: ${choices.colors.white} !important;
        }

        .alt-blue {
          color: ${decisions.title.color.alt.blue} !important;
        }

        .alt-red {
          color: ${decisions.title.color.alt.red} !important;
        }

        .alt-yellow {
          color: ${decisions.title.color.alt.yellow} !important;
        }

        .alt-orange {
          color: ${decisions.title.color.alt.orange} !important;
        }

        .is-disabled {
          color: ${choices.colors.black} !important;
          opacity: 0.25;
        }

        .size-1 {
          font-size: ${decisions.title.fontSize['1']};
        }

        .size-2 {
          font-size: ${decisions.title.fontSize['2']};
        }

        .size-3 {
          font-size: ${decisions.title.fontSize['3']};
        }

        .size-4 {
          font-size: ${decisions.title.fontSize['4']};
        }
      `}</style>
    </>
  )
}

Heading.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  isInverted: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isCentered: PropTypes.bool,
  isInline: PropTypes.bool,
  withMargin: PropTypes.bool,
  size: PropTypes.oneOf([1, 2, 3, 4]),
  color: PropTypes.oneOf(['blue', 'red', 'yellow'])
}

Heading.defaultProps = {
  size: 4
}

export default Heading
