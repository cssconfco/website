import Logo from '../atoms/Logo'
import Heading from '../atoms/Heading'

import { choices, decisions } from '../../utils/designTokens'

const SimpleNavbar = () => {
  return (
    <>
      <div className="simple-navbar">
        <Logo width={50} />
        <Heading size={3}>CSS Conf Colombia 2020</Heading>
      </div>
      <style jsx>{`
        .simple-navbar {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: ${choices.spacing[2]} ${choices.spacing[6]};
          border-bottom: 1px solid ${choices.colors.gray[400]};
        }

        .simple-navbar :global(.logo) {
          margin-right: ${choices.spacing[4]};
        }
      `}</style>
      <style jsx>{`
        @media (${decisions.queries.screens.desktop}) {
          .simple-navbar {
            justify-content: left;
          }
        }
      `}</style>
    </>
  )
}

SimpleNavbar.propTypes = {}

export default SimpleNavbar
