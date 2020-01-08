import PropTypes from 'prop-types'
import moment from 'moment'

const Date = ({ children }) =>
  moment(children)
    .locale('EN')
    .format('DD MMMM, YYYY')

Date.propTypes = {
  children: PropTypes.string.required
}

export default Date
