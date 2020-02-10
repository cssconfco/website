import PropTypes from 'prop-types'
import { choices, decisions } from '../../utils/designTokens'

const Mate = ({ id, children }) => {
  return (
    <>
      <div className="container">
        <div className="mate">
          <div className="tribal"></div>
        </div>
        {children && <div className="info">{children}</div>}
      </div>
      <style jsx>{`
        .container {
          display: inline-flex;
          flex-direction: column;
          align-items: flex-end;
          margin: ${choices.spacing[4]};
          max-width: 50%;
        }

        .mate {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          justify-content: flex-end;
          align-items: flex-end;
          text-align: right;
          background-color: ${choices.colors.brand.cinnabar};
          background-image: url('/static/images/team/${id}/${id}-avatar.jpg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: cover;
          height: 150px;
          width: 150px;
          outline-offset: -2px;
          outline: 2px solid ${choices.colors.brand.bayofmany};
        }

        .info {
          text-align: right;
        }

        @media (${decisions.queries.screens.desktop}) {
          .container {
            margin: ${choices.spacing[8]} ${choices.spacing[8]} ${choices.spacing[10]};
            width: auto;
          }

          .mate {
            height: 200px;
            width: 200px;
          }
        }
      `}</style>
    </>
  )
}

Mate.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string.isRequired
}

export default Mate
