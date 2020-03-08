import { decisions } from '../../utils/designTokens'

import Logo from '../atoms/Logo'
import Responsive from '../atoms/Responsive'

function BlogHeader() {
  return (
    <div className="blog-header__container">
      <div className="blog-header__picture">
        <Responsive.Mobile>
          <Logo width={50} />
        </Responsive.Mobile>
        <Responsive.Desktop>
          <Logo width={100} />
        </Responsive.Desktop>
      </div>
      <div className="tribals">
        <div id="place-tribal" className="tribal-container">
          <div className="place-tribal tribal"></div>
        </div>
        <div id="date-tribal" className="tribal-container">
          <div className="date-tribal tribal">
            <div className="lovers"></div>
          </div>
        </div>
        <div
          id="city-tribal"
          className="tribal-container tribal-container-reverse"
        >
          <div className="city-tribal tribal"></div>
        </div>
      </div>
      <style jsx>{`
        .blog-header__picture {
          display: none;
        }
        .tribals {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .lovers {
          display: block;
          background-image: url('/static/images/css-blog-text.svg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: contain;
          width: 100%;
          height: 100%;
          max-height: 150px;
          margin: 80px 50px;
          transition: filter 0.5s ease;
        }

        .tribal-container {
          position: relative;
          display: inline-flex;
          flex-direction: column;
          align-items: center;
          height: 180px;
          margin: 10px 20px;
          width: 100%;
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
          height: 500px;
          background-size: cover;
          transition: filter 1s ease;
        }

        .date-tribal {
          display: flex;
          justify-content: center;
          align-items: center;
          background-image: url('/static/images/date-tribal-vector.svg');
          background-position: center center;
          background-repeat: no-repeat;
        }

        #city-tribal {
          display: none;
        }

        #place-tribal {
          display: none;
        }

        .blog-header__container {
          height: 320px;
          margin-top: 20px;
          margin-bottom: 30px;
        }

        @media (${decisions.queries.screens.desktop}) {
          .blog-header__picture {
            display: block;
            z-index: 1;
          }

          .blog-header__container {
            margin-top: 20px;
            margin-bottom: 250px;
          }

          .blog-header__picture {
            position: absolute;
          }

          .tribals {
            flex-direction: row;
          }

          .lovers {
            max-height: 300px;
          }

          .lovers:hover {
            transition: filter 1s ease;
          }

          .tribal-container {
            align-items: flex-end;
            height: 100%;
            margin: 20px;
          }

          .city-tribal {
            background-image: url('/static/images/medellin-tribal-vector.svg');
            background-position: center center;
            background-repeat: no-repeat;
          }

          .place-tribal {
            background-image: url('/static/images/rutan-tribal-vector.svg');
            background-position: center left;
            background-repeat: no-repeat;
          }

          #city-tribal {
            display: block;
          }

          #place-tribal {
            display: block;
          }

          .tribal:hover {
            filter: saturate(10);
            transition: filter 0.5s ease;
          }

          .tribal-container :global(.subtitle) {
            position: relative;
            top: auto;
            left: auto;
            transform: translate(0, 0);
            white-space: normal;
            text-align: right;
          }

          .lovers {
            display: block;
          }
        }
      `}</style>
    </div>
  )
}

export default BlogHeader
