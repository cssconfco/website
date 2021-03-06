import PropTypes from 'prop-types'
import Link from 'next/link'

import Subtitle from '../atoms/Subtitle'
import Picture from '../atoms/Picture'

import { decisions, choices } from '../../utils/designTokens'

const Sponsor = ({ sponsors, imgSize, title }) => {
  if (sponsors.length === 0) return <></>

  return (
    <>
      <div className="sponsor__container">
        <Subtitle color="yellow" size={1} isCentered>
          {title.toUpperCase()}
        </Subtitle>
        <div className="sponsor__img">
          {sponsors.map(sponsor => (
            <Link key={sponsor.id} href={sponsor.url}>
              <a
                className={`not-focus sp-link sp-link-${imgSize}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <Picture image={{ url: sponsor.logo, alt: sponsor.id }} />
              </a>
            </Link>
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
            width: 100%;
          }

          .sp-link {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            margin: 10px;
            padding: 10px;
            border: 2px dashed ${choices.colors.brand.cinnabar};
            background: ${choices.colors.white};
          }

          .sp-link-xl,
          .sp-link-lg,
          .sp-link-md,
          .sp-link-sm {
            height: 60px;
            width: 90px;
          }

          @media (${decisions.queries.screens.desktop}) {
            .sponsor__container {
              align-items: flex-start;
            }

            .sponsor__img {
              justify-content: flex-start;
              width: 100%;
            }

            .sp-link-xl {
              height: 130px;
              width: 240px;
            }

            .sp-link-lg {
              height: 120px;
              width: 180px;
            }

            .sp-link-md {
              height: 90px;
              width: 160px;
            }

            .sp-link-sm {
              height: 60px;
              width: 150px;
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
