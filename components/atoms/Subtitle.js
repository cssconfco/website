import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { theme, tokens } from "../../utils/designTokens";
import { subtitleStyles } from "../../utils/globalStyles";

const Subtitle = ({
  children,
  size,
  isAlt,
  isInverted,
  isInline,
  isCentered
}) => {
  return (
    <Fragment>
      <h2
        className={classNames("subtitle", {
          [`size-${size}`]: size,
          "is-inverted": isInverted,
          "is-inline": isInline,
          "is-centered": isCentered,
          "is-alt-color": isAlt
        })}
      >
        {children}
      </h2>
      <style jsx>{`
        .subtitle {
          margin: 0;
          padding: 0;
          ${subtitleStyles}
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

        .is-alt-color {
          color: ${tokens.subtitle.color.alt} !important;
        }

        .size-1 {
          font-size: ${tokens.subtitle.fontSize[1]};
        }

        .size-2 {
          font-size: ${tokens.subtitle.fontSize[2]};
        }
      `}</style>
    </Fragment>
  );
};

Subtitle.propTypes = {
  children: PropTypes.string,
  isInverted: PropTypes.bool,
  isCentered: PropTypes.bool,
  isAlt: PropTypes.bool,
  isInline: PropTypes.bool,
  size: PropTypes.number
};

Subtitle.defaultProps = {
  size: 2
};

export default Subtitle;
