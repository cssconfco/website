import PropTypes from 'prop-types'
import { lowerCase } from 'lodash'
import { choices, decisions } from '../../utils/designTokens'

const Mate = ({ id, type, children }) => {
  return (
    <>
      <div className={`container ${lowerCase(type)}`}>
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
          margin: ${choices.spacing[2]} ${choices.spacing[4]};
          width: 95px;
          height: 150px;
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
          height: 100px;
          width: 100px;
          outline-offset: -2px;
          outline: 2px solid ${choices.colors.brand.bayofmany};
        }
        
        .info {
          margin-top: -20px;
          margin-right: -10px;
          z-index: 10;
          text-align: right;
        }

        .info > :global(p) {
          font-size: 12px;
          white-space: nowrap;
        }

        .info > :global(a) {
          font-size: 10px;
        }

        @media (${decisions.queries.screens.desktop}) {
          .container {
            margin: ${choices.spacing[8]} ${choices.spacing[8]} ${choices.spacing[4]};
            width: auto;
            height: 250px;
          }

          .mate {
            height: 200px;
            width: 200px;
          }

          .container.supporter .mate {
            height: 150px;
            width: 150px;
          }

          .info {
            margin-top: -30px;
            margin-right: -20px;
          }

          .info > :global(p) {
            font-size: inherit;
            white-space: nowrap;
          }
  
          .info > :global(a) {
            font-size: inherit;
          }
        }
      `}</style>
    </>
  )
}

Mate.propTypes = {
  id: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
}

export default Mate
