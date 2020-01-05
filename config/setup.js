require('dotenv').config()

const keys = require('./keys')
const buildEnvConfig = (acc, cur) => ({ ...acc, [`${cur}`]: process.env[cur] })

module.exports = keys.reduce(buildEnvConfig, {})
