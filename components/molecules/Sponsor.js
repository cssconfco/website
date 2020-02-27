import PropTypes from 'prop-types'

import Heading from '../atoms/Heading'

import { decisions } from '../../utils/designTokens'

const Sponsor = ({ sponsors, imgSize, title }) => {
  if (sponsors.length === 0) return <></>

  return (
    <>
      <div className="sponsor__container">
        <Heading color="orange" size={2} isCentered>
          {title}
        </Heading>
        <div className={`sponsor__img sponsor__img--${imgSize}`}>
          {sponsors.map(sponsor => (
            <a key={sponsor.id} href={sponsor.url}>
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
            margin-bottom: 50px;
          }

          .sponsor__img {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-around;
          }

          img {
            margin-top: 50px;
          }

          .img-xl {
            height: 150px;
          }
          .img-lg {
            height: 130px;
          }
          .img-md {
            height: 110px;
          }
          .img-sm {
            height: 90px;
          }

          @media (${decisions.queries.screens.desktop}) {
            .sponsor__img--xl {
              width: 750px;
            }

            .sponsor__img--lg {
              width: 680px;
            }

            .sponsor__img--md {
              width: 580px;
            }

            .sponsor__img--sm {
              width: 480px;
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
