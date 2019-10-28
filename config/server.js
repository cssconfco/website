require('dotenv').config()

const serverConfig = {
  port: process.env.PORT,
  development: process.env.NODE_ENV !== 'production',
  production: process.env.NODE_ENV === 'production',
  mailchimpApiKey: process.env.MAILCHIMP_API_KEY,
  mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID
}

module.exports = { config: serverConfig }
