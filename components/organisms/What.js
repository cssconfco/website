import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'

import { choices, decisions } from '../../utils/designTokens'

const What = () => {
  return (
    <section className="what">
      <Container>
        <Heading size={1} color="red" withMargin>
          What is the CSS Conf?
        </Heading>
        <Paragraph color="red" withMargin>
          The CSS Conf is a worldwide organization dedicated to holding
          conferences for designers, programmers and web interface creators,
          with the purpose of connecting the community in different countries.
        </Paragraph>
        <Paragraph color="red">
          CSS Conf Colombia joined the family on January 29th, 2019, for the
          first time.
        </Paragraph>
        <div className="monkey"></div>
      </Container>
      <style jsx>{`
        .what {
          position: relative;
          background: ${choices.colors.brand.dawnpink};
          padding: 100px ${decisions.container.padding};
          overflow: hidden;
        }

        .what :global(.heading),
        .what :global(.paragraph) {
          position: relative;
          z-index: 1;
        }

        .monkey {
          position: absolute;
          display: inline-block;
          background-image: url('/static/images/face-tribal-vector.svg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: contain;
          top: -100px;
          right: -300px;
          width: 600px;
          height: 600px;
          opacity: 0.35;
        }

        @media (${decisions.queries.screens.desktop}) {
          .what {
            overflow: visible;
            padding: 100px ${decisions.container.padding} 150px 200px;
          }

          .monkey {
            top: -150px;
            right: 150px;
            width: 350px;
            height: 350px;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default What
