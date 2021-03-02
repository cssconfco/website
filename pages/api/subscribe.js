import Mailchimp from 'mailchimp-api-v3'
import crypto from 'crypto'
import { config } from '../../config/server'

const mailchimp = new Mailchimp(config.mailchimpApiKey)

const getMd5Hash = email =>
  crypto
    .createHash('md5')
    .update(email, 'utf8')
    .digest('hex')

export default async (req, res) => {
  if (req.method === 'POST') {
    const { name = '', email } = req.body

    const [FNAME, ...lastNames] = name.trim().split(' ')

    try {
      const hashedEmail = getMd5Hash(email)
      const results = await mailchimp.put(
        `/lists/${config.mailchimpAudienceId}/members/${hashedEmail}`,
        {
          status_if_new: 'subscribed',
          status: 'subscribed',
          email_address: email,
          merge_fields: { FNAME, LNAME: lastNames.join(' ') }
        }
      )
      res.send(results)
    } catch (error) {
      console.error(error)
      res.status(500).send({
        error: 'An error has ocurred, please contact us at hello@cssconf.co'
      })
    }
  } else {
    res.status(404).end()
  }
}
