import PropTypes from 'prop-types'
import Paragrapah from '../atoms/Paragraph'
import Container from '../atoms/Container'
import Speaker from '../molecules/Speaker'
import Heading from '../atoms/Heading'

import { choices, decisions } from '../../utils/designTokens'

const Speakers = ({ speakers }) => {
  return (
    <>
      <section id="speakers" className="speakers">
        <Container>
          <div className="container-list">
            <Heading color="red" size={2}>
              Speakers
            </Heading>
            <div className="speaker-list">
              {speakers.map(({ id, name, flag, title, company }) => (
                <Speaker key={id} image={id}>
                  <>
                    <Paragrapah size="sm" weight="bold">
                      {flag} {name}
                    </Paragrapah>
                    <Paragrapah size="xs">
                      {title} {company && <span>({company})</span>}
                    </Paragrapah>
                  </>
                </Speaker>
              ))}
            </div>
          </div>
          <div className="fish"></div>
        </Container>
      </section>
      <style jsx>{`
        .speakers {
          position: relative;
          background: ${choices.colors.white};
          padding: 50px ${decisions.container.padding} 80px;
          height: 100%;
          min-height: 800px;
          overflow: hidden;
        }

        .container-list {
          position: relative;
          width: 100%;
          margin-top: 50px;
          display: flex;
          flex-direction: column;
          z-index: 10;
        }

        .container-list > :global(.heading) {
          text-align: center;
        }

        .speaker-list {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
        }

        .fish {
          position: absolute;
          display: inline-block;
          background-image: url('/static/images/fish-tribal-vector.svg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: contain;
          top: -200px;
          right: -400px;
          width: 800px;
          height: 800px;
          opacity: 0.8;
        }

        @media (${decisions.queries.screens.desktop}) {
          .container-list {
            margin: 150px 0 20px;
            padding: 0 100px;
          }

          .container-list > :global(.heading) {
            text-align: left;
          }

          .speaker-list :global(.speaker:first-child) {
            margin-left: 0;
          }

          .fish {
            top: -450px;
            right: -250px;
            width: 1200px;
            height: 1200px;
          }
        }
      `}</style>
    </>
  )
}

Speakers.defaultProps = {
  speakers: []
}

Speakers.propTypes = {
  speakers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      flag: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      twitterUrl: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    })
  )
}

export default Speakers
