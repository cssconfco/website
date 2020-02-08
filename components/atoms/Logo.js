import Link from 'next/link'
import PropTypes from 'prop-types'

import { choices } from '../../utils/designTokens'
import { links } from '../../utils/constants'

const Logo = ({ width }) => (
  <Link href={links.HOME}>
    <picture className="logo">
      <img src="/static/logos/css-conf-logo.svg" />
      <style jsx>{`
        .logo {
          max-width: ${width}px;
          margin: 0;
          cursor: pointer;
          display: inline-block;
          user-select: none;
        }

        .logo img {
          width: ${choices.minWidth.full};
        }
      `}</style>
    </picture>
  </Link>
)

Logo.propTypes = {
  width: PropTypes.number
}

Logo.defaultProps = {
  width: 150
}

export default Logo
