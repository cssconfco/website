import PropTypes from 'prop-types'

import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import Mate from '../molecules/Mate'

import { choices, decisions } from '../../utils/designTokens'

const Team = ({ team }) => {
  return (
    <>
      <section id="team" className="team">
        <Container>
          <div className="container-list">
            <Heading color="yellow" size={2} isCentered>
              Our Amazing Team
            </Heading>
            <div className="team-list">
              {team
                .filter(mate => !mate.hide)
                .map(({ id, name, title, twitterHandle, tribalPosition }) => (
                  <a
                    key={id}
                    className="not-focus"
                    href={`https://twitter.com/${twitterHandle}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Mate id={id} type={title} tribalPosition={tribalPosition}>
                      <Paragraph color="yellow" size="sm" weight="bold">
                        {name}
                      </Paragraph>
                      <Paragraph color="yellow" size="sm">
                        {title}
                      </Paragraph>
                      <Paragraph color="yellow" size="xs">
                        {twitterHandle}
                      </Paragraph>
                    </Mate>
                  </a>
                ))}
            </div>
          </div>
          <div className="lizard"></div>
        </Container>
      </section>
      <style jsx>{`
        .team {
          position: relative;
          background: ${choices.colors.brand.bayofmany};
          padding: 30px ${decisions.container.padding};
          height: 100%;
          min-height: 600px;
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

        .team-list {
          margin-top: 20px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-evenly;
        }

        .lizard {
          position: absolute;
          display: inline-block;
          background-image: url('/static/images/iguana-tribal-vector.svg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: contain;
          top: 0;
          right: -400px;
          width: 1000px;
          height: 1000px;
          opacity: 0.8;
        }

        a {
          text-decoration: none;
        }

        @media (${decisions.queries.screens.desktop}) {
          .team {
            overflow: visible;
          }

          .container-list {
            margin: 20px 0 20px;
          }

          .team-list :global(.team:first-child) {
            margin-left: 0;
          }

          .lizard {
            top: -100px;
            right: 0;
          }
        }
      `}</style>
    </>
  )
}

Team.defaultProps = {
  team: []
}

Team.propTypes = {
  team: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      twitterHandle: PropTypes.string.isRequired
    })
  )
}

export default Team
