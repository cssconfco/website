import Link from 'next/link'

import Logo from '../atoms/Logo'
import Container from '../atoms/Container'
import Paragraph from '../atoms/Paragraph'

import smoothScroll from '../../utils/smoothScroll'

import { decisions, choices } from '../../utils/designTokens'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Container>
        <header>
          <Logo width={100} />
          <ul>
            <li className="has-navbar-button">
              <Link href="/tickets">
                <a className="navbar-button">
                  <Paragraph size="sm">Buy Ticket</Paragraph>
                </a>
              </Link>
            </li>
            <li>
              <a href="#newsletter" onClick={smoothScroll('#newsletter')}>
                <Paragraph>Newsletter</Paragraph>
              </a>
            </li>
            {/* <li className="visible-desktop">
              <a href="#" target="_blank" rel="noopener noreferrer">
                <Paragraph>Scholarships</Paragraph>
              </a>
            </li> */}
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
        </header>
      </Container>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          flex-direction: column;
        }

        .navbar {
          position: relative;
          margin-top: 20px;
          z-index: 10;
        }

        .navbar ul {
          display: flex;
          justify-content: center;
          align-items: center;
          list-style: none;
          padding: 0;
          margin: 20px 0;
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
          text-align: center;
        }

        .navbar-button:hover {
          background: ${choices.colors.blue[800]};
        }

        .navbar-button > :global(p) {
          color: ${choices.colors.white};
        }

        .visible-desktop {
          display: none;
        }

        @media (${decisions.queries.screens.desktop}) {
          header {
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
          }

          .navbar {
            position: absolute;
            width: 100%;
            z-index: 1;
            margin-top: 20px;
          }

          .navbar ul {
            justify-content: flex-end;
            margin-right: 10px;
          }

          .visible-desktop {
            display: inline-block;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
