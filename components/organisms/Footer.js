import Paragraph from '../atoms/Paragraph'
import Container from '../atoms/Container'

import { decisions, choices } from '../../utils/designTokens'

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <ul>
          <li>
            <a
              href="https://github.com/cssconfco/codigo-de-conducta"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Paragraph color="red">Code of Conduct</Paragraph>
            </a>
          </li>
          <li>
            <a
              href="http://cssconf.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Paragraph color="red">CSS Conf</Paragraph>
            </a>
          </li>
        </ul>
        <ul>
          <li className="not-underline">
            <a
              href="https://instagram.com/cssconfco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src="/static/icons/instagram.svg" />
            </a>
          </li>
          <li className="not-underline">
            <a
              href="https://twitter.com/cssconfco"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="social-icon" src="/static/icons/twitter.svg" />
            </a>
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
