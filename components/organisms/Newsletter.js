import Link from 'next/link'

import Button from '../atoms/Button'
import Container from '../atoms/Container'
import Heading from '../atoms/Heading'
import Subtitle from '../atoms/Subtitle'

import { choices, decisions } from '../../utils/designTokens'
import { links } from '../../utils/constants'

const Newsletter = () => (
  <section id="newsletter" className="newsletter">
    <Container>
      <div className="description">
        <Heading size={1} isInverted>
          The CSS Conf Colombia 2021
        </Heading>
        <Subtitle size={1} isInverted withMargin>
          is over, but you can watch it again 🎉
        </Subtitle>
        <Link href={links.RECORDING}>
          <a>
            <Button withMargin>
              <Heading size={3} isInverted>
                Watch the recording
              </Heading>
            </Button>
          </a>
        </Link>
      </div>
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

export default Newsletter
