import PropTypes from 'prop-types'
import classNames from 'classnames'

import { choices, decisions } from '../../utils/designTokens'
import { paragraphStyles } from '../../utils/globalStyles'

const Paragraph = ({
  children,
  color,
  size,
  weight,
  isInverted,
  isInline,
  isCentered,
  isJustified,
  withMargin,
  style
}) => {
  return (
    <>
      <p
        style={style}
        className={classNames('paragraph', {
          [`size-${size}`]: size,
          [`alt-${color}`]: color,
          [`paragraph-${weight}`]: weight,
          'is-inverted': isInverted,
          'is-inline': isInline,
          'is-centered': isCentered,
          'is-justified': isJustified
        })}
      >
        {children}
      </p>
      <style jsx>{`
        .paragraph {
          margin: ${withMargin ? `0 0 ${choices.spacing[6]} 0` : '0'};
          padding: 0;
          ${paragraphStyles}
          max-width: ${choices.screens.sm};
        }
        
        .paragraph-normal {
          font-weight: ${decisions.paragraph.fontWeight.normal}
        }
        
        .paragraph-bold {
          font-weight: ${decisions.paragraph.fontWeight.bold};
        }

        .is-centered {
          text-align: center;
        }

        .is-justified {
          text-align: justify;
        }

        .is-inline {
          display: inline-block;
        }

        .is-inverted {
          color: ${choices.colors.white} !important;
        }

        .alt-blue {
          color: ${decisions.paragraph.color.alt.blue} !important;
        }

        .alt-red {
          color: ${decisions.paragraph.color.alt.red} !important;
        }

        .alt-yellow {
          color: ${decisions.paragraph.color.alt.yellow} !important;
        }

        .size-xs {
          font-size: ${decisions.paragraph.fontSize.xs};
        }

        .size-sm {
          font-size: ${decisions.paragraph.fontSize.sm};
        }

        .size-md {
          font-size: ${decisions.paragraph.fontSize.md};
        }
      `}</style>
    </>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node,
  isInverted: PropTypes.bool,
  isCentered: PropTypes.bool,
  isJustified: PropTypes.bool,
  isInline: PropTypes.bool,
  withMargin: PropTypes.bool,
  size: PropTypes.oneOf(['xs', 'sm', 'md']),
  weight: PropTypes.oneOf(['normal', 'bold']),
  color: PropTypes.oneOf(['blue', 'red', 'yellow']),
  style: PropTypes.object
}

Paragraph.defaultProps = {
  size: 'md',
  weight: 'normal'
}

export default Paragraph
