import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { theme, tokens } from "../../utils/designTokens";
import { subtitleStyles } from "../../utils/globalStyles";

const Subtitle = ({
  children,
  size,
  color,
  isInverted,
  isInline,
  isCentered
}) => {
  return (
    <Fragment>
      <h2
        className={classNames("subtitle", {
          [`size-${size}`]: size,
          [`alt-${color}`]: color,
          "is-inverted": isInverted,
          "is-inline": isInline,
          "is-centered": isCentered,
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

        .alt-blue {
          color: ${tokens.subtitle.color.alt.blue} !important;
        }

        .alt-red {
          color: ${tokens.subtitle.color.alt.red} !important;
        }

        .alt-yellow {
          color: ${tokens.subtitle.color.alt.yellow} !important;
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
  children: PropTypes.string.isRequired,
  isInverted: PropTypes.bool,
  isCentered: PropTypes.bool,
  isAlt: PropTypes.bool,
  isInline: PropTypes.bool,
  size: PropTypes.oneOf([1, 2]),
  color: PropTypes.oneOf(['blue', 'red', 'yellow'])
};

Subtitle.defaultProps = {
  size: 2
};

export default Subtitle;
