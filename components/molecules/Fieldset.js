import PropTypes from 'prop-types'
import classNames from 'classnames'

import Heading from '../atoms/Heading'
import Subtitle from '../atoms/Subtitle'

import { choices } from '../../utils/designTokens'

const Fieldset = ({ title, subtitle, children }) => (
  <>
    <fieldset
      className={classNames('fieldset', { 'is-clean': !title && !subtitle })}
    >
      <div className="fieldset-header">
        {title && (
          <legend>
            <Heading size={2}>{title}</Heading>
          </legend>
        )}
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
      </div>
      <div className="fieldset-group">{children}</div>
    </fieldset>
    <style jsx>{`
      .fieldset {
        width: ${choices.minWidth.full};
        margin: 0;
        padding: 0;
        border: none;
        margin-top: ${choices.spacing[8]};
      }

      .fieldset.is-clean,
      .fieldset:first-child {
        margin-top: 0;
      }

      .fieldset-header {
        display: flex;
        align-items: center;
      }

      .fieldset-group {
        display: flex;
        flex-wrap: wrap;
        margin-top: ${choices.spacing[4]};
      }
    `}</style>
  </>
)

Fieldset.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Fieldset
