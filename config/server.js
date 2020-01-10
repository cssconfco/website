require('dotenv').config()

const serverConfig = {
  isProduction: process.env.NODE_ENV === 'production',
  mailchimpApiKey: process.env.MAILCHIMP_API_KEY,
  mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID,
  wpConsumerKey: process.env.WP_CONSUMER_KEY,
  wpConsumerSecret: process.env.WP_CONSUMER_SECRET,
  wordpressUrl: process.env.WORDPRESS_URL,
  ePaycoClientId: process.env.EPAYCO_CLIENT_ID,
  ePaycoSecretKey: process.env.EPAYCO_SECRET_KEY
}

module.exports = { config: serverConfig }
