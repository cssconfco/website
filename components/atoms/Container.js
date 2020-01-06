import PropTypes from 'prop-types'

import { decisions } from '../../utils/designTokens'

const Container = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          position: relative;
          margin: 0 auto;
          max-width: ${decisions.container.maxWidth};
        }
      `}</style>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired
}

export default Container
