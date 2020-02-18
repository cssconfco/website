import boom from '@hapi/boom'

const validateEmail = email => {
  if (!/[\w+.]+@[\w]+\.[\w]{2,}/.test(email)) {
    throw boom.forbidden('Forbiden customer email').output.payload
  }
}

export default validateEmail
