import React, { Fragment } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { theme, tokens } from "../../utils/designTokens";
import { titleStyles } from "../../utils/globalStyles";

const Heading = ({
  children,
  size,
  isInverted,
  isDisabled,
  isInline,
  isCentered
}) => {
  return (
    <Fragment>
      <h1
        className={classNames("heading", {
          [`size-${size}`]: size,
          "is-inverted": isInverted,
          "is-disabled": isDisabled,
          "is-inline": isInline,
          "is-centered": isCentered
        })}
      >
        {children}
      </h1>
      <style jsx>{`
        .heading {
          margin: 0;
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
          color: ${theme.colors.white} !important;
        }

        .is-disabled {
          color: ${theme.colors.black} !important;
          opacity: 0.25;
        }

        .size-1 {
          font-size: ${tokens.title.fontSize["1"]};
        }

        .size-2 {
          font-size: ${tokens.title.fontSize["2"]};
        }

        .size-3 {
          font-size: ${tokens.title.fontSize["3"]};
        }

        .size-4 {
          font-size: ${tokens.title.fontSize["4"]};
        }
      `}</style>
    </Fragment>
  );
};

Heading.propTypes = {
  children: PropTypes.string,
  isInverted: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isCentered: PropTypes.bool,
  isInline: PropTypes.bool,
  size: PropTypes.number
};

Heading.defaultProps = {
  size: 4
};

export default Heading;
