import PropTypes from 'prop-types'

import Group from './Group'
import Fieldset from './Fieldset'

const Form = ({ style, children, handleSubmit }) => (
  <>
    <form style={style} className="form" onSubmit={handleSubmit}>
      {children}
    </form>
    <style jsx>{`
      .form {
        display: flex;
        flex-direction: column;
      }
    `}</style>
  </>
)

Form.propTypes = {
  children: PropTypes.node.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  style: PropTypes.object
}

Form.Group = Group
Form.Fieldset = Fieldset

export default Form
