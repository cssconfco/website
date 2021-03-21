/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'

import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'
import Mate from '../molecules/Mate'

import { choices, decisions } from '../../utils/designTokens'

const TeamMember = ({
  id,
  name,
  title,
  type,
  twitterHandle,
  tribalPosition
}) => (
  <>
    <a
      key={id}
      className="not-focus"
      href={`https://twitter.com/${twitterHandle}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Mate id={id} type={type} tribalPosition={tribalPosition}>
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
    <style jsx>{`
      a {
        text-decoration: none;
      }
    `}</style>
  </>
)

const Team = ({ team }) => {
  const organizers = team.filter(({ type }) => type === 'organizer')
  const designers = team.filter(({ type }) => type === 'designer')
  const supporters = team.filter(({ type }) => type === 'supporter')
  const specials = team.filter(({ type }) => type === 'special')

  return (
    <>
      <section id="team" className="team">
        <Container>
          <div className="container-list">
            <Heading color="yellow" size={2} isCentered>
              Our Amazing Team
            </Heading>
            <div className="team-list">
              {organizers.map(member => (
                <TeamMember key={member.id} {...member} />
              ))}
              {designers.map(member => (
                <TeamMember key={member.id} {...member} />
              ))}
              {supporters.map(member => (
                <TeamMember key={member.id} {...member} />
              ))}
            </div>
            <Paragraph color="yellow" size="xs" isInverted isCentered>
              Special thanks to{' '}
              <a
                className="not-focus"
                href={`https://twitter.com/${specials[0].twitterHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >
                {specials[0].name}
              </a>{' '}
              and{' '}
              <a
                className="not-focus"
                href={`https://twitter.com/${specials[1].twitterHandle}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: 'white' }}
              >
                {specials[1].name}
              </a>
            </Paragraph>
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
          align-items: center;
        }

        .team-list {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
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
            bottom: 0;
            left: -400px;
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
