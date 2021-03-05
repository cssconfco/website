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
                  <Paragraph size="sm" color="blue">
                    Minibootcamp & Workshop
                  </Paragraph>
                </a>
              </Link>
            </li>
            <li className="on-desktop">
              <a href={links.SPEAKERS} onClick={smoothScroll(links.SPEAKERS)}>
                <Paragraph size="sm" isInverted>
                  Speakers
                </Paragraph>
              </a>
            </li>
            <li className="on-desktop">
              <a href={links.SPONSORS} onClick={smoothScroll(links.SPONSORS)}>
                <Paragraph size="sm" isInverted>
                  Sponsors
                </Paragraph>
              </a>
            </li>
            <li className="on-desktop">
              <a href={links.TEAM} onClick={smoothScroll(links.TEAM)}>
                <Paragraph size="sm" isInverted>
                  Team
                </Paragraph>
              </a>
            </li>
            <li className="on-desktop">
              <a
                href={links.CODE_OF_CONDUCT}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Paragraph size="sm" isInverted>
                  Code of Conduct
                </Paragraph>
              </a>
            </li>
            <li className="on-desktop">
              <a
                href={links.CONTACT_EMAIL}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Paragraph size="sm" isInverted>
                  Contact
                </Paragraph>
              </a>
            </li>
          </ul>
        </header>
      </Container>
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          justify-content: space-around;
        }

        .navbar {
          position: absolute;
          width: 100%;
          z-index: 1;
          margin-top: 20px;
          padding: 0 25px;
        }

        .navbar-button :global(.paragraph) {
          font-size: 16px;
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
          border-bottom: 3px solid ${choices.colors.white};
        }

        .navbar-button {
          background: ${choices.colors.brand.koromiko};
          padding: ${choices.spacing[1]} ${choices.spacing[6]};
          border-radius: ${choices.borderRadius.full};
          text-align: center;
        }

        .navbar-button:hover {
          background: ${choices.colors.brand.chiffon};
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
