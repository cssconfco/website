import Link from 'next/link'

import Logo from '../atoms/Logo'
import Container from '../atoms/Container'
import Paragraph from '../atoms/Paragraph'
import Responsive from '../atoms/Responsive'

import smoothScroll from '../../utils/smoothScroll'

import { decisions, choices } from '../../utils/designTokens'
import { links } from '../../utils/constants'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Container>
        <header>
          <Responsive.Mobile>
            <Logo width={50} />
          </Responsive.Mobile>
          <Responsive.Desktop>
            <Logo width={100} />
          </Responsive.Desktop>
          <ul>
            <li className="has-navbar-button">
              <Link href={links.TICKETS}>
                <a className="navbar-button">
                  <Paragraph size="sm">Buy a Ticket</Paragraph>
                </a>
              </Link>
            </li>
            <li>
              <a
                href={links.NEWSLETTER}
                onClick={smoothScroll(links.NEWSLETTER)}
              >
                <Paragraph size="sm">Newsletter</Paragraph>
              </a>
            </li>
            <li className="on-desktop">
              <a
                href={links.SCHOLARSHIP}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Paragraph size="sm">Scholarships</Paragraph>
              </a>
            </li>
            <li className="on-desktop">
              <a href={links.TEAM} onClick={smoothScroll(links.TEAM)}>
                <Paragraph size="sm">Team</Paragraph>
              </a>
            </li>
            <li>
              <a
                href={links.CONTACT_EMAIL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Paragraph size="sm">Contact</Paragraph>
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

        .on-desktop {
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

          .on-desktop {
            display: inline-block;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
