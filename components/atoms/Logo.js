import React from 'react'
import Link from 'next/link'

import { theme } from '../../utils/designTokens'

const Logo = () => (
  <Link href="/">
    <picture className="logo">
      <img src="/static/logos/css-conf-logo.svg" />
      <style jsx>{`
        .logo {
          max-width: 150px;
          margin: 0;
          cursor: pointer;
          display: inline-block;
          user-select: none;
        }

        .logo img {
          width: ${theme.minWidth.full};
        }
      `}</style>
    </picture>
  </Link>
)

export default Logo
