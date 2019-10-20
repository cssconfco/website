import React from 'react'
import Link from 'next/link'

import Paragraph from '../atoms/Paragraph'
import Container from '../atoms/Container'

import smoothScroll from '../../utils/smoothScroll'

import { decisions } from '../../utils/designTokens'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Container>
        <ul>
          <li>
            <Link href="https://forms.gle/t1JizcqqBYL4NG3i7" target="_blank">
              <a>
                <Paragraph>CFP</Paragraph>
              </a>
            </Link>
          </li>
          <li>
            <a href="#newsletter" onClick={smoothScroll('#newsletter')}>
              <Paragraph>Newsletter</Paragraph>
            </a>
          </li>
          <li>
            <Link href="mailto:hello@cssconf.co" target="_blank">
              <a>
                <Paragraph>Contact</Paragraph>
              </a>
            </Link>
          </li>
        </ul>
      </Container>

      <style jsx>{`
        .navbar {
          margin-top: 20px;
        }

        .navbar ul {
          display: flex;
          justify-content: center;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .navbar ul li {
          margin: 0 10px;
          border-bottom: 3px solid transparent;
        }

        .navbar ul li :global(a) {
          text-decoration: none;
        }

        .navbar ul li:hover {
          border-bottom: 3px solid currentColor;
        }
      `}</style>
      <style jsx>{`
        @media (${decisions.queries.screens.desktop}) {
          .navbar {
            position: absolute;
            width: 100%;
            z-index: 1;
            margin-top: 10px;
          }

          .navbar ul {
            justify-content: flex-end;
            margin-right: 10px;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
