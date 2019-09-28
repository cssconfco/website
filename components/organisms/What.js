import React from 'react'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'

import { choices, decisions } from '../../utils/designTokens'
import Container from '../atoms/Container'

const What = () => {
  return (
    <section className="what">
      <Container>
        <Heading size={1} color="red">
          What is CSS Conf?
        </Heading>
        <Paragraph color="red">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illum beatae
          minima impedit. Distinctio consectetur assumenda quaerat vero dolore,
          quae repellat ab nulla minus ipsa dicta ducimus cum, veniam, provident
          nobis!
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

        .what :global(.heading) {
          margin-bottom: 20px;
        }

        .monkey {
          position: absolute;
          display: inline-block;
          background: url('/static/images/face-tribal-vector.svg') center center
            no-repeat;
          background-size: contain;
          top: 0;
          right: -320px;
          width: 600px;
          height: 600px;
          opacity: 0.35;
        }
      `}</style>
      <style jsx>{`
        @media (${decisions.queries.screens.desktop}) {
          .what {
            overflow: visible;
          }

          .monkey {
            top: -180px;
            right: 100px;
            width: 400px;
            height: 400px;
            opacity: 1;
          }
        }
      `}</style>
    </section>
  )
}

export default What
