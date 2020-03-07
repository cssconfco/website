import PropTypes from 'prop-types'

import Subtitle from '../atoms/Subtitle'
import Picture from '../atoms/Picture'

import { decisions, choices } from '../../utils/designTokens'

const Sponsor = ({ sponsors, imgSize, title }) => {
  if (sponsors.length === 0) return <></>

  return (
    <>
      <div className="sponsor__container">
        <Subtitle color="yellow" size={1} isCentered>
          {title}
        </Subtitle>
        <div className={`sponsor__img`}>
          {sponsors.map(sponsor => (
            <a
              className={`not-focus sponsor-link sponsor-link-${imgSize}`}
              key={sponsor.id}
              href={sponsor.url}
            >
              <Picture image={{ url: sponsor.logo, alt: sponsor.id }} />
            </a>
          ))}
        </div>
      </div>
      <style jsx>
        {`
          .sponsor__container {
            align-items: center;
            display: flex;
            flex-direction: column;
            justify-content: center;
            margin-bottom: 20px;
          }

          .sponsor__container :global(.subtitle) {
            text-transform: none;
            margin-bottom: 10px;
          }

          .sponsor__img {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
          }

          .sponsor-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 10px;
            padding: 10px;
            border: 2px dashed ${choices.colors.brand.cinnabar};
            background: ${choices.colors.white};
          }

          .sponsor-link-xl,
          .sponsor-link-lg,
          .sponsor-link-md,
          .sponsor-link-sm {
            height: 80px;
            width: 100px;
          }

          @media (${decisions.queries.screens.desktop}) {
            .sponsor-link-xl {
              height: 150px;
              width: 220px;
            }

            .sponsor-link-lg {
              height: 150px;
              width: 180px;
            }

            .sponsor-link-md {
              height: 120px;
              width: 150px;
            }

            .sponsor-link-sm {
              height: 80px;
              width: 100px;
            }
          }
        `}
      </style>
    </>
  )
}

Sponsor.defaultProps = {
  sponsors: [],
  imgSize: 'sm',
  title: 'Gold'
}

Sponsor.propTypes = {
  sponsors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      logo: PropTypes.string.isRequired
    })
  ),
  imgSize: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  title: PropTypes.oneOf(['Platinum', 'Gold', 'Silver', 'Support'])
}

export default Sponsor
