import PropTypes from 'prop-types'

import Heading from '../atoms/Heading'
import Sponsor from '../molecules/Sponsor'

import { decisions } from '../../utils/designTokens'

const Sponsors = ({ sponsors }) => {
  return (
    <>
      <section id="sponsors">
        <div className="sponsors__container">
          <div className="sponsor-title__container">
            <div className="sponsor-separator__container sponsor-separator__container--right">
              <div className="sponsor-separator__svg"></div>
            </div>
            <Heading size={1} color="blue">
              Sponsors
            </Heading>
            <div className="sponsor-separator__container sponsor-separator__container--left">
              <div className="sponsor-separator__svg"></div>
            </div>
          </div>
          <Sponsor sponsors={sponsors.platinum} title="Platinum" imgSize="xl" />
          <Sponsor sponsors={sponsors.gold} title="Gold" imgSize="lg" />
          <Sponsor sponsors={sponsors.silver} title="Silver" imgSize="md" />
          <Sponsor sponsors={sponsors.support} title="Support" imgSize="sm" />
        </div>
      </section>
      <style jsx>
        {`
          .sponsors__container {
            padding-top: 100px;
            min-height: 800px;
          }

          .sponsor-separator__container {
            width: 100%;
          }

          .sponsor-separator__container--right {
            margin-right: 30px;
          }

          .sponsor-separator__container--left {
            margin-left: 30px;
          }

          .sponsor-separator__container--right .sponsor-separator__svg {
            background-position: center right;
          }

          .sponsor-separator__container--left .sponsor-separator__svg {
            background-position: center left;
          }

          .sponsor-separator__svg {
            background-image: url(/static/images/sponsors-separator.svg);
            background-repeat: no-repeat;
            background-size: contain;
            display: block;
            width: 100%;
            height: 100%;
          }

          .sponsor-title__container {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
          }

          @media (${decisions.queries.screens.desktop}) {
            .sponsor-separator__container {
              width: 45%;
            }
          }
        `}
      </style>
    </>
  )
}

Sponsors.defaultProps = {
  sponsors: {
    platinum: [],
    gold: [],
    silver: [],
    support: []
  }
}

Sponsors.propTypes = {
  sponsors: PropTypes.shape({
    platinum: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired
      })
    ),
    gold: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired
      })
    ),
    silver: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired
      })
    ),
    support: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        url: PropTypes.string.isRequired,
        logo: PropTypes.string.isRequired
      })
    )
  })
}

export default Sponsors
