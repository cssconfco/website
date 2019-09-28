import React, { Fragment } from "react"
import PropTypes from "prop-types"
import classNames from "classnames"

import { choices, decisions } from "../../utils/designTokens";
import { paragraphStyles } from "../../utils/globalStyles"

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
        className={classNames("paragraph", {
          [`size-${size}`]: size,
          [`alt-${color}`]: color,
          "is-inverted": isInverted,
          "is-inline": isInline,
          "is-centered": isCentered
        })}
      >
        {children}
      </p>
      <style jsx>{`
        .paragraph {
          margin: 0;
          padding: 0;
          ${paragraphStyles}
          font-weight: ${
            isBold ? decisions.paragraph.fontWeight.bold : decisions.paragraph.fontWeight.normal
          };
          max-width: ${choices.screens.md};
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
          color: ${decisions.subtitle.color.alt.blue} !important;
        }

        .alt-red {
          color: ${decisions.subtitle.color.alt.red} !important;
        }

        .alt-yellow {
          color: ${decisions.subtitle.color.alt.yellow} !important;
        }

        .size-sm {
          font-size: ${decisions.paragraph.fontSize.sm};
        }

        .size-md {
          font-size: ${decisions.paragraph.fontSize.md};
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
  color: PropTypes.oneOf(['blue', 'red', 'yellow'])
}

Paragraph.defaultProps = {
  size: "md"
}

export default Paragraph
