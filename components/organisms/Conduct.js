import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'

import { choices, decisions } from '../../utils/designTokens'

const Conduct = () => {
  return (
    <section className="conduct">
      <Container>
        <div className="content">
          <Heading size={1} color="blue" withMargin>
            Code of Conduct
          </Heading>
          <Paragraph color="blue">
            We want everyone to enjoy this conference to the fullest, to make
            each person feel safe and welcome. To achieve this, we have defined
            a <strong>Code of Conduct</strong>, an agreement in which you will
            take an active role. This agreement is simple: be kind to everyone
            at all times, regardless of gender, gender identity, age, sexual
            orientation, disability, physical appearance, race, ethnicity,
            nationality, religion, points of view or political experience.
          </Paragraph>
          <div className="bird"></div>
        </div>
      </Container>
      <style jsx>{`
        .conduct {
          position: relative;
          background: ${choices.colors.brand.chiffon};
          padding: 100px ${decisions.container.padding};
          overflow: hidden;
        }

        .content {
          position: relative;
          margin: 0 auto;
          max-width: ${choices.screens.md};
        }

        .conduct :global(.heading),
        .conduct :global(.paragraph) {
          position: relative;
          z-index: 1;
        }

        .bird {
          position: absolute;
          display: inline-block;
          background-image: url('/static/images/code-of-conduct-bird.svg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: contain;
          top: 50%;
          left: -50%;
          width: 800px;
          height: 800px;
          opacity: 0.1;
          transform: translate(0, -50%);
        }
      `}</style>
      <style jsx>{`
        @media (${decisions.queries.screens.desktop}) {
          .conduct {
            overflow: visible;
            padding: 100px ${decisions.container.padding} 100px 500px;
          }

          .bird {
            width: 400px;
            height: 400px;
            top: 50%;
            left: -430px;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default Conduct
