require('dotenv').config()

module.exports = {
  mailchimpApiKey: process.env.MAILCHIMP_API_KEY,
  mailchimpAudienceId: process.env.MAILCHIMP_AUDIENCE_ID
}
