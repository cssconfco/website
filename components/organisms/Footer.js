import Paragraph from '../atoms/Paragraph'
import Container from '../atoms/Container'

import { decisions, choices } from '../../utils/designTokens'
import { links } from '../../utils/constants'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <ul>
          <li>
            <a
              href={links.CODE_OF_CONDUCT}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Paragraph color="red">Code of Conduct</Paragraph>
            </a>
          </li>
          <li>
            <a href={links.FAQS} target="_blank" rel="noopener noreferrer">
              <Paragraph color="red">FAQS</Paragraph>
            </a>
          </li>
          <li>
            <a
              href={links.CSSCONF_ORG}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Paragraph color="red">cssconf.org</Paragraph>
            </a>
          </li>
        </ul>
        <ul>
          <li className="not-underline">
            <a
              className="not-focus"
              href={links.TWITTER}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src="/static/icons/twitter.svg" />
            </a>
          </li>
          <li className="not-underline">
            <a
              className="not-focus"
              href={links.INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src="/static/icons/instagram.svg" />
            </a>
          </li>
        </ul>
      </Container>
      <style jsx>{`
        .footer {
          border-top: 1px solid ${choices.colors.gray[400]};
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
