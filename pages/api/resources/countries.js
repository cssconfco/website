import fetchJson from '../../../utils/fetchJson'

const mapCountry = ({ name, alpha2Code }) => ({
  name,
  alpha2Code
})

export default async (req, res) => {
  if (req.method === 'GET') {
    try {
      const countries = await fetchJson('https://restcountries.eu/rest/v2/all')
      const response = countries.map(mapCountry)
      res.send(response)
    } catch (error) {
      console.error(error)
      res.status(500).send(error)
    }
  } else {
    res.status(404).end()
  }
}
