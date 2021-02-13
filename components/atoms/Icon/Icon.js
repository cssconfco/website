import PropTypes from 'prop-types'
import classNames from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { decisions } from '../../../utils/designTokens'
import iconList from './iconList'
const Icon = ({ style, icon, size, color }) => {
  return (
    <div style={style} className="icon-container">
      <FontAwesomeIcon
        className={classNames('icon', {
          [`icon-size-${size}`]: size,
          [`icon-color-${color}`]: color
        })}
        icon={iconList[icon]}
        theme="outlined"
      />
      <style jsx global>{`
        .icon-container {
          display: inline-flex;
          max-width: 50px;
        }
        .icon-color-gray {
          color: ${decisions.icon.color.gray} !important;
        }
        .icon-size-sm {
          font-size: ${decisions.icon.fontSize.sm};
        }
        .icon-size-md {
          font-size: ${decisions.icon.fontSize.md};
        }
        .icon-size-lg {
          font-size: ${decisions.icon.fontSize.lg};
        }
      `}</style>
    </div>
  )
}
Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
  size: PropTypes.oneOf(['sm', 'md', 'lg'])
}
Icon.defaultProps = {
  size: 'sm'
}
export default Icon
