import PropTypes from 'prop-types'

import Subtitle from '../atoms/Subtitle'

import { decisions } from '../../utils/designTokens'

const Sponsor = ({ sponsors, imgSize, title }) => {
  if (sponsors.length === 0) return <></>

  return (
    <>
      <div className="sponsor__container">
        <Subtitle color="yellow" size={1} isCentered>
          {title}
        </Subtitle>
        <div className={`sponsor__img sponsor__img--${imgSize}`}>
          {sponsors.map(sponsor => (
            <a className="not-focus" key={sponsor.id} href={sponsor.url}>
              <img
                className={`img-${imgSize}`}
                src={sponsor.logo}
                alt={sponsor.id}
              />
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
          }

          .sponsor__img {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }

          .sponsor__img :global(img) {
            margin: 0 20px;
          }

          .img-xl {
            height: 150px;
            width: 220px;
          }

          .img-lg {
            height: 150px;
            width: 180px;
          }

          .img-md {
            height: 120px;
            width: 150px;
          }

          .img-sm {
            height: 120px;
            width: 100px;
          }

          @media (${decisions.queries.screens.desktop}) {
            a {
              transition: all 0.2s;
            }

            img {
              transition: all 0.2s;
            }

            img:hover {
              transition: 0.3s;
              transform: scale(1.2);
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
