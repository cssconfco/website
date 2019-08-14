import React, { Fragment } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { theme, tokens } from "../../utils/designTokens"
import { copyStyles } from "../../utils/globalStyles"

const Paragraph = ({
  children,
  color,
  size,
  isBold,
  isInverted,
  isInline,
  isCentered
}) => {
  return (
    <Fragment>
      <p
        className={classNames("copy", {
          [`size-${size}`]: size,
          [`color-${color}`]: color,
          "is-inverted": isInverted,
          "is-inline": isInline,
          "is-centered": isCentered
        })}
      >
        {children}
      </p>
      <style jsx>{`
        .copy {
          margin: 0;
          padding: 0;
          ${copyStyles}
          font-weight: ${
            isBold ? tokens.copy.fontWeight.bold : tokens.copy.fontWeight.normal
          }
        }

        .is-centered {
          text-align: center;
        }

        .is-inline {
          display: inline-block;
        }

        .is-inverted {
          color: ${theme.colors.white} !important;
        }

        .color-green {
          color: ${theme.colors.green[600]}
        }

        .color-yellow {
          color: ${theme.colors.yellow[600]};
        }

        .size-sm {
          font-size: ${tokens.copy.fontSize.sm};
        }

        .size-md {
          font-size: ${tokens.copy.fontSize.md};
        }
      `}</style>
    </Fragment>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node,
  isInverted: PropTypes.bool,
  isCentered: PropTypes.bool,
  isBold: PropTypes.bool,
  isInline: PropTypes.bool,
  size: PropTypes.oneOf(["sm", "md"]),
  color: PropTypes.string
}

Paragraph.defaultProps = {
  size: "md"
}

export default Paragraph
