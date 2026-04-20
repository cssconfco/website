import { useState } from 'react'
import Link from 'next/link'

import Logo from '../atoms/Logo'
import Container from '../atoms/Container'
import Paragraph from '../atoms/Paragraph'
import Responsive from '../atoms/Responsive'

import smoothScroll from '../../utils/smoothScroll'

import { decisions, choices } from '../../utils/designTokens'
import { links } from '../../utils/constants'

const navItems = [
  { label: 'Schedule', href: links.SCHEDULE, type: 'link' },
  { label: 'Speakers', href: links.SPEAKERS, type: 'scroll' },
  { label: 'Sponsors', href: links.SPONSORS, type: 'scroll' },
  { label: 'Team', href: links.TEAM, type: 'scroll' },
  { label: 'Code of Conduct', href: links.CODE_OF_CONDUCT, type: 'external' },
  { label: 'Contact', href: links.CONTACT_EMAIL, type: 'external' }
]

const NavLink = ({ item, onClick }) => {
  if (item.type === 'external') {
    return (
      <a href={item.href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
        <Paragraph size="sm" isInverted>{item.label}</Paragraph>
      </a>
    )
  }
  if (item.type === 'scroll') {
    return (
      <a href={item.href} onClick={e => { smoothScroll(item.href)(e); onClick && onClick() }}>
        <Paragraph size="sm" isInverted>{item.label}</Paragraph>
      </a>
    )
  }
  return (
    <Link href={item.href}>
      <a onClick={onClick}>
        <Paragraph size="sm" isInverted>{item.label}</Paragraph>
      </a>
    </Link>
  )
}

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

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
          <button
            className="hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle navigation"
          >
            <span />
            <span />
            <span />
          </button>
          <ul className="desktop-nav">
            {navItems.map(item => (
              <li key={item.label}>
                <NavLink item={item} />
              </li>
            ))}
          </ul>
        </header>
      </Container>
      {menuOpen && (
        <ul className="mobile-nav">
          {navItems.map(item => (
            <li key={item.label}>
              <NavLink item={item} onClick={() => setMenuOpen(false)} />
            </li>
          ))}
        </ul>
      )}
      <style jsx>{`
        header {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .navbar {
          position: absolute;
          width: 100%;
          z-index: 100;
          margin-top: 20px;
          padding: 0 25px;
          box-sizing: border-box;
        }

        .hamburger {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 24px;
          height: 18px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background: ${choices.colors.white};
          border-radius: 2px;
        }

        .desktop-nav {
          display: none;
        }

        .mobile-nav {
          list-style: none;
          margin: 10px -25px 0;
          padding: 0 25px;
          display: flex;
          flex-direction: column;
          background: ${choices.colors.brand.bayofmany};
        }

        .mobile-nav li {
          padding: ${choices.spacing[2]} 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        }

        .mobile-nav li:last-child {
          border-bottom: none;
        }

        .mobile-nav li :global(a) {
          text-decoration: none;
        }

        @media (${decisions.queries.screens.desktop}) {
          .hamburger {
            display: none;
          }

          .desktop-nav {
            display: flex;
            list-style: none;
            justify-content: flex-end;
            align-items: center;
            margin: 20px 0;
            margin-right: 10px;
            padding: 0;
          }

          .desktop-nav li {
            margin: 0 10px;
            border-bottom: 3px solid transparent;
          }

          .desktop-nav li :global(a) {
            text-decoration: none;
          }

          .desktop-nav li:hover {
            border-bottom: 3px solid ${choices.colors.white};
          }

          .mobile-nav {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}

export default Navbar
