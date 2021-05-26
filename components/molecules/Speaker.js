import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { choices, decisions } from '../../utils/designTokens'

const Speaker = ({ image, onClick, children }) => {
  return (
    <Fragment>
      <div className="speaker" onClick={onClick}>
        {children && <div className="info">{children}</div>}
      </div>
      <style jsx>{`
        .speaker {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          text-align: right;
          background-image: url('/static/images/speakers/${image}.webp');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 110px;
          width: 110px;
          margin: ${choices.spacing[8]} ${choices.spacing[6]} ${choices.spacing[10]} ;
          cursor: pointer;
        }

        .info {
          position: absolute;
          top: 110px;
          white-space: nowrap;
        }

        .info :global(.paragraph) {
          font-size: 14px;
        }

        .info :global(.paragraph.size-xs) {
          font-size: 12px;
        }

        .info :global(.paragraph span) {
          display: none;
        }

        @media (${decisions.queries.screens.desktop}) {
          .speaker {
            height: 280px;
            width: 280px;
          }

          .info {
            top: 250px;
          }

          .info :global(.paragraph) {
            font-size: 20px;
            text-shadow: -1px -1px 0 white;
          }
  
          .info :global(.paragraph.size-xs) {
            font-size: 20px;
          }
  
          .info :global(.paragraph span) {
            display: inline;
          }
        }
      `}</style>
    </Fragment>
  )
}

Speaker.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
  image: PropTypes.string
}

export default Speaker
