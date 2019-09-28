import React from 'react'
import Heading from '../atoms/Heading'
import Paragraph from '../atoms/Paragraph'

import { choices, decisions } from '../../utils/designTokens'
import Container from '../atoms/Container'

const What = () => {
  return (
    <section className="what">
      <Container>
        <Heading size={1} color="red" withMargin>
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
      `}</style>
      <style jsx>{`
        @media (${decisions.queries.screens.desktop}) {
          .what {
            overflow: visible;
            padding: 200px ${decisions.container.padding} 200px 150px;
          }

          .monkey {
            top: -250px;
            right: 150px;
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
