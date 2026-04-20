require('dotenv').config()

const serverConfig = {
  isProduction: process.env.NODE_ENV === 'production'
}

module.exports = { config: serverConfig }
