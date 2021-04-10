import PropTypes from 'prop-types'
import Link from 'next/link'

import Button from '../atoms/Button'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Subtitle from '../atoms/Subtitle'

import { choices, decisions } from '../../utils/designTokens'
import Paragraph from '../atoms/Paragraph'
import {
  links,
  conferenceDate,
  conferenceStartTime
} from '../../utils/constants'

const Newsletter = ({ name, email, handleSubmit, handleChange, isLoading }) => {
  const isHappening =
    new Date(`${conferenceDate}T${conferenceStartTime}`) <= Date.now()

  return (
    <section id="newsletter" className="newsletter">
      <Container>
        <div className="description">
          <Heading size={1} isInverted>
            The CSS Conf Colombia 2021
          </Heading>
          <Subtitle size={1} isInverted withMargin>
            is over, but we have a party 🎉
          </Subtitle>
          {isHappening && (
            <Link href={links.VIRTUAL_PARTY}>
              <a>
                <Button withMargin>
                  <Heading size={3} isInverted>
                    Join the party #csslover
                  </Heading>
                </Button>
              </a>
            </Link>
          )}
        </div>
        {!isHappening && (
          <form className="form" onSubmit={handleSubmit}>
            <div className="field-group">
              <label htmlFor="name">
                <Subtitle size={2} isInverted>
                  Fullname:
                </Subtitle>
              </label>
              <input
                name="name"
                type="name"
                placeholder="Your name"
                value={name}
                onChange={handleChange('name')}
                required
              />
            </div>
            <div className="field-group">
              <label htmlFor="email">
                <Subtitle size={2} isInverted>
                  Email:
                </Subtitle>
              </label>
              <input
                name="email"
                type="email"
                placeholder="Your email"
                value={email}
                onChange={handleChange('email')}
                required
              />
            </div>
            <Button type="submit" withMargin isDisabled={isLoading}>
              <Heading size={3} isInverted>
                Register for free
              </Heading>
            </Button>
            <Paragraph size="xs" isInverted>
              ✅ By registering, you agree with the FAQs and our Code of
              Conduct.
            </Paragraph>
            <Paragraph size="xs" isInverted>
              ✅ The data will be used just for the event and we are not sharing
              it with any third party or sponsor.
            </Paragraph>
          </form>
        )}
        <div className="bird"></div>
      </Container>
      <style jsx>{`
        .newsletter {
          display: flex;
          flex-direction: colum;
          align-items: center;
          position: relative;
          background: ${choices.colors.brand.bayofmany};
          padding: 120px ${decisions.container.padding} 50px;
          overflow: hidden;
        }

        .newsletter :global(.container) > :global(.heading) {
          position: relative;
          z-index: 1;
        }

        .description {
          position: relative;
          margin-bottom: 50px;
          text-align: center;
          z-index: 1;
        }

        .form {
          position: relative;
          display: flex;
          flex-direction: column;
          max-width: ${choices.screens.xs};
          z-index: 1;
          margin: 0 auto;
        }

        .form :global(.paragraph) {
          margin-top: 20px;
        }

        .field-group {
          margin-bottom: ${choices.spacing[5]};
        }

        label {
          display: inline-block;
          margin-bottom: ${choices.spacing[1]};
        }

        input {
          height: 40px;
          width: 100%;
          border: 1px solid transparent;
          margin-right: 20px;
          padding: 10px 20px;
          font-size: ${choices.fontSize.lg};
          color: ${choices.colors.gray[800]};
        }

        ::placeholder {
          color: ${choices.colors.gray[400]};
          font-size: ${choices.fontSize.lg};
          font-weight: 300;
        }

        .bird {
          position: absolute;
          display: inline-block;
          background-image: url('/static/images/hero-tribal-bird-vector.svg');
          background-position: center center;
          background-repeat: no-repeat;
          background-size: contain;
          top: 50%;
          left: 0;
          transform: translate(40%, -50%);
          width: 500px;
          height: 500px;
          opacity: 0.1;
          pointer-events: none;
        }

        @media (${decisions.queries.screens.desktop}) {
          .newsletter {
            display: block;
            padding-top: 60px;
          }

          .form {
            margin 0;
          }

          .description {
            margin-top: 100px;
            text-align: left;
          }

          .bird {
            display: inline-block;
            bottom: 0;
            right: 0;
            width: 600px;
            height: 600px;
            opacity: 1;
            transform: translate(120%, -50%);
          }
        }
      `}</style>
    </section>
  )
}

Newsletter.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  isLoading: PropTypes.bool
}

Newsletter.defaultProps = {
  handleSubmit: () => {},
  handleChange: () => {}
}

export default Newsletter
