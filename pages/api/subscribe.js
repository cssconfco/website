const Mailchimp = require('mailchimp-api-v3')
const { mailchimpApiKey, mailchimpAudienceId } = require('../../config')

const mailchimp = new Mailchimp(config.mailchimpApiKey)

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name, email } = req.body

    try {
      const results = await mailchimp.post(
        `/lists/${config.mailchimpAudienceId}/members`,
        { email_address: email, status: 'subscribed' }
      )
      res.send(results)
    } catch (error) {
      res.status(500).send(error)
    }
  } else {
    res.status(404).end()
  }
}
