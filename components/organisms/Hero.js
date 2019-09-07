import React from 'react'
import Logo from '../atoms/Logo'
import Subtitle from '../atoms/Subtitle'

import { theme, tokens } from '../../utils/designTokens'

const Hero = () => {
  return (
    <section className="hero">
      <div className="tribals">
        <div className="logo">
          <Logo />
        </div>
        <div className="tribal-container">
          <div className="date-tribal tribal">
            <div className="lovers"></div>
          </div>
          <Subtitle size={1} color="blue">
            March 20/21
          </Subtitle>
        </div>
        <div className="tribal-container tribal-container-reverse">
          <div className="city-tribal tribal"></div>
          <Subtitle size={1} color="red">
            Medellín
          </Subtitle>
        </div>
        <div className="tribal-container">
          <div className="place-tribal tribal"></div>
          <Subtitle size={1} color="yellow">
            Ruta N
          </Subtitle>
        </div>
      </div>
      <style jsx>{`
        .hero {
          position: relative;
          padding-top: 80px;
        }

        .logo {
          position: absolute;
          margin: 0 auto;
          top: 20px;
          z-index: 1;
        }

        .tribals {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0 20px;
        }

        .lovers {
          background: url('/static/images/css-lovers-text.svg') no-repeat;
          width: 350px;
          height: 350px;
          margin-top: 80px;
        }

        .tribal-container {
          display: inline-flex;
          flex-direction: column;
          margin: 20px;
          width: 100%;
          max-width: 500px;
        }

        .tribal-container-reverse {
          flex-direction: column-reverse;
        }

        .tribal {
          width: 100%;
          max-width: 500px;
          height: 500px;
        }

        .date-tribal {
          display: flex;
          justify-content: center;
          align-items: center;
          background: url('/static/images/date-tribal-vector.svg') no-repeat;
          background-color: ${theme.colors.brand.poloblue};
          background-size: cover;
          background-position: center center;
        }

        .city-tribal {
          background: url('/static/images/medellin-tribal-vector.svg') no-repeat;
          background-color: ${theme.colors.brand.mandyspink};
          background-size: cover;
          background-position: center center;
        }

        .place-tribal {
          background: url('/static/images/rutan-tribal-vector.svg') no-repeat;
          background-color: ${theme.colors.brand.chiffon};
          background-size: cover;
          background-position: center center;
        }
      `}</style>
      <style jsx>
        {`
        @media (${tokens.queries.screens.desktop}) {
            .logo-container {
                top: 20px;
                left: 20px;
            }

            .tribals {
                flex-direction: row;
            }
        `}
      </style>
    </section>
  )
}

export default Hero
