import Paragrapah from '../atoms/Paragraph'
import Container from '../atoms/Container'
import Speaker from '../molecules/Speaker'
import Heading from '../atoms/Heading'

import { choices, decisions } from '../../utils/designTokens'

const Speakers = () => {
  return (
    <>
      <section className="speakers">
        <Container>
          <div className="container-list">
            <Heading color="red" size={2}>
              Speakers
            </Heading>
            <div className="speaker-list">
              <Speaker image="luis-gadea">
                <>
                  <Paragrapah weight="bold">🇨🇦 Luis Gadea</Paragrapah>
                  <Paragrapah>Character designer</Paragrapah>
                </>
              </Speaker>
              <Speaker image="evangelina-ferreira">
                <>
                  <Paragrapah weight="bold">🇦🇷 Evangelina Ferreira</Paragrapah>
                  <Paragrapah>Google Developer Expert</Paragrapah>
                </>
              </Speaker>
              <Speaker image="laura-gonzalez">
                <>
                  <Paragrapah weight="bold">🇬🇧 Laura Gonzales</Paragrapah>
                  <Paragrapah>UI Engineer - Facebook</Paragrapah>
                </>
              </Speaker>
              <Speaker image="next-speaker" />
            </div>
          </div>
          <div className="fish"></div>
        </Container>
      </section>
      <style jsx>{`
        .speakers {
          position: relative;
          background: ${choices.colors.white};
          padding: 50px ${decisions.container.padding};
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
          top: -450px;
          right: -600px;
          width: 1200px;
          height: 1200px;
          opacity: 0.8;
        }

        @media (${decisions.queries.screens.desktop}) {
          .container-list {
            margin: 150px 50px 20px;
          }

          .container-list > :global(.heading) {
            text-align: left;
          }

          .speaker-list {
            justify-content: flex-start;
          }

          .speaker-list :global(.speaker:first-child) {
            margin-left: 0;
          }

          .fish {
            right: -250px;
          }
        }
      `}</style>
    </>
  )
}

export default Speakers
