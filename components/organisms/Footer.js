import React from 'react'
import Link from 'next/link'

import Paragraph from '../atoms/Paragraph'
import Container from '../atoms/Container'

import { decisions, choices } from '../../utils/designTokens'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <ul>
          <li>
            <Link href="https://github.com/cssconfco/codigo-de-conducta">
              <a target="_blank">
                <Paragraph color="red">Code of Conduct</Paragraph>
              </a>
            </Link>
          </li>
          <li>
            <Link href="http://cssconf.org">
              <a target="_blank">
                <Paragraph color="red">CSS Conf</Paragraph>
              </a>
            </Link>
          </li>
        </ul>
        <ul>
          <li className="not-underline">
            <Link href="https://instagram.com/cssconfco">
              <a target="_blank">
                <img
                  className="social-icon"
                  src="/static/icons/instagram.svg"
                />
              </a>
            </Link>
          </li>
          <li className="not-underline">
            <Link href="https://twitter.com/cssconfco">
              <a target="_blank">
                <img className="social-icon" src="/static/icons/twitter.svg" />
              </a>
            </Link>
          </li>
        </ul>
      </Container>
      <style jsx>{`
        .footer {
          padding: 20px 0;
        }

        .footer :global(.container) {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
        }

        .footer ul {
          display: flex;
          justify-content: center;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer ul li {
          margin: 0 10px;
          border-bottom: 3px solid transparent;
        }

        .footer ul li :global(a) {
          text-decoration: none;
        }

        .footer ul li:hover:not(.not-underline) {
          border-bottom: 3px solid ${choices.colors.brand.cinnabar};
        }

        .social-icon {
          width: 30px;
          height: 30px;
        }
      `}</style>
      <style jsx>{`
        @media (${decisions.queries.screens.desktop}) {
          .footer :global(.container) {
            justify-content: space-between;
            flex-wrap: nowrap;
          }

          .footer ul {
            justify-content: flex-start;
            margin-right: 10px;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
