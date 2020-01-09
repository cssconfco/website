import PropTypes from 'prop-types'

import { decisions } from '../../utils/designTokens'

const Container = ({ children, size }) => {
  return (
    <>
      <div className="container">{children}</div>
      <style jsx>{`
        .container {
          position: relative;
          margin: 0 auto;
          max-width: ${decisions.container.maxWidth[size]};
        }
      `}</style>
    </>
  )
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.string
}

Container.deafultProps = {
  size: 'large'
}

export default Container
