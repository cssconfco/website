import PropTypes from 'prop-types'

const Currency = ({ children }) => {
  return (
    <>
      {' '}
      <span className="currency">
        {new Intl.NumberFormat('en-US', {
          style: 'currency',
          currency: 'USD'
        }).format(children)}
      </span>
      <style jsx>{`
        .currency {
          display: inline-flex;
          flex-direction: column;
          align-items: center;
        }
      `}</style>
    </>
  )
}

Currency.propTypes = {
  children: PropTypes.number
}

Currency.defaultProps = {
  children: 0
}

export default Currency
