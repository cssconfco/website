import Paragraph from '../atoms/Paragraph'
import Container from '../atoms/Container'
import Link from 'next/link'

import smoothScroll from '../../utils/smoothScroll'

import { decisions, choices } from '../../utils/designTokens'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Container>
        <ul>
          <li className="has-navbar-button">
            <Link href="/tickets">
              <a className="navbar-button">
                <Paragraph size="sm">Buy a Ticket</Paragraph>
              </a>
            </Link>
          </li>
          <li>
            <a href="#newsletter" onClick={smoothScroll('#newsletter')}>
              <Paragraph>Newsletter</Paragraph>
            </a>
          </li>
          <li>
            <a
              href="mailto:hello@cssconf.co"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Paragraph>Contact</Paragraph>
            </a>
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
          align-items: center;
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

        .navbar ul li:hover:not(.has-navbar-button) {
          border-bottom: 3px solid currentColor;
        }

        .navbar-button {
          background: ${choices.colors.brand.bayofmany};
          padding: ${choices.spacing[1]} ${choices.spacing[6]};
          border-radius: ${choices.borderRadius.full};
        }

        .navbar-button:hover {
          background: ${choices.colors.blue[800]};
        }

        .navbar-button > :global(p) {
          color: ${choices.colors.white};
        }

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
