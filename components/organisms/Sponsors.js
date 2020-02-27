import PropTypes from 'prop-types'

// import Container from '../atoms/Container'
import Heading from '../atoms/Heading'

const Sponsors = () => {
  return (
    <>
      <section id="sponsors">
        <div className="sponsors__container">
          <div className="sponsor-title__container">
            <div className="sponsor-separator__container sponsor-separator__container--right">
              <div className="sponsor-separator__svg"></div>
            </div>
            <Heading size={1} color="blue">
              SPONSORS
            </Heading>
            <div className="sponsor-separator__container sponsor-separator__container--left">
              <div className="sponsor-separator__svg"></div>
            </div>
          </div>
        </div>
      </section>
      <style jsx>
        {`
          .sponsors__container {
            padding-top: 100px;
            min-height: 800px;
          }
          .sponsor-separator__container {
            width: 45%;
          }
          .sponsor-separator__container--right {
            margin-right: 30px;
          }
          .sponsor-separator__container--left {
            margin-left: 30px;
          }
          .sponsor-separator__svg {
            background-image: url(/static/images/sponsors-separator.svg);
            background-position: center center;
            background-repeat: no-repeat;
            background-size: contain;
            display: block;
            width: 100%;
            height: 100%;
          }
          .sponsor-title__container {
            display: flex;
            justify-content: center;
          }
        `}
      </style>
    </>
  )
}

Sponsors.defaultProps = {
  sponsors: []
}

Sponsors.propTypes = {
  sponsors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired
    })
  )
}

export default Sponsors
