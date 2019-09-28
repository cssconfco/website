import React from 'react'

import Logo from '../atoms/Logo'
import Subtitle from '../atoms/Subtitle'
import Container from '../atoms/Container'

import { decisions } from '../../utils/designTokens'

const Hero = () => {
  return (
    <section className="hero">
      <Container>
        <Logo />
        <div className="tribals">
          <div className="tribal-container">
            <div className="date-tribal tribal">
              <div className="lovers"></div>
            </div>
            <Subtitle size={1} color="blue">
              March 21, 2020
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
      </Container>
      <style jsx>{`
        .hero {
          position: relative;
          padding: 100px 20px 40px;
        }

        .hero :global(.logo) {
          position: absolute;
          margin: 0 auto;
          top: -80px;
          left: 0;
          right: 0;
          z-index: 1;
        }

        .tribals {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .lovers {
          display: none;
          background: url('/static/images/css-lovers-text.svg') no-repeat;
          background-size: contain;
          width: 350px;
          height: 350px;
          margin-top: 80px;
        }

        .tribal-container {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          height: 180px;
          margin: 10px 20px;
          width: 100%;
          max-width: 500px;
        }

        .tribal-container :global(.subtitle) {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          white-space: nowrap;
        }

        .tribal-container-reverse {
          flex-direction: column-reverse;
        }

        .tribal {
          width: 100%;
          max-width: 500px;
          height: 500px;
          background-size: cover;
        }

        .date-tribal {
          display: flex;
          justify-content: center;
          align-items: center;
          background: url('/static/images/date-tribal-vector.svg') center center
            no-repeat;
        }

        .city-tribal {
          background: url('/static/images/medellin-tribal-vector.svg') center
            center no-repeat;
        }

        .place-tribal {
          background: url('/static/images/rutan-tribal-vector.svg') center
            center no-repeat;
        }
      `}</style>
      <style jsx>{`
        @media (${decisions.queries.screens.desktop}) {
          .hero {
            padding-top: 80px;
          }

          .hero :global(.logo) {
            top: -30px;
            left: -30px;
            right: auto;
          }

          .tribals {
            flex-direction: row;
          }

          .tribal-container {
            align-items: flex-end;
            height: 100%;
            margin: 20px;
          }

          .tribal-container :global(.subtitle) {
            position: relative;
            top: auto;
            left: auto;
            transform: translate(0, 0);
            white-space: nowrap;
          }

          .tribal {
            background-size: contain;
          }

          .lovers {
            display: block;
          }
        }
      `}</style>
    </section>
  )
}

export default Hero
