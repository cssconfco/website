import Mailchimp from 'mailchimp-api-v3'
import { config } from '../../config/server'

const mailchimp = new Mailchimp(config.mailchimpApiKey)

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name = '', email } = req.body

    const [FNAME, LNAME] = name.trim().split(' ')

    try {
      const results = await mailchimp.post(
        `/lists/${config.mailchimpAudienceId}/members`,
        {
          status: 'subscribed',
          email_address: email,
          merge_fields: { FNAME, LNAME }
        }
      )
      res.send(results)
    } catch (error) {
      res.status(500).send(error)
    }
  } else {
    res.status(404).end()
  }
}
