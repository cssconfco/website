import { get, isEmpty } from 'lodash'

import { config } from '../../config/client'

import SimpleNavbar from '../../components/organisms/SimpleNavbar'
import CheckoutResponse from '../../components/organisms/CheckoutResponse'

import fetchJson from '../../utils/fetchJson'
import parseCheckoutResponse from '../../utils/parseCheckoutResponse'
import { decodeOrderParams } from '../../utils/orderParams'
import redirectToHomePage from '../../utils/redirectToHomePage'

async function getEpaycoData({ query }) {
  const ePaycoReference = get(query, 'ref_payco')
  const ePaycoReferenceX = get(query, 'x_ref_payco')

  if (ePaycoReference) {
    try {
      const { data: ePaycoData } = await fetchJson(
        `${config.ePaycoValidateUrl}/${ePaycoReference}`
      )

      return parseCheckoutResponse(ePaycoData)
    } catch (error) {
      console.error(
        'Error getting ePayco data in checkout response page',
        error
      )
    }
  } else if (ePaycoReferenceX) {
    return parseCheckoutResponse(query)
  }
}

function getOrderParams({ ePayco, query }) {
  if (isEmpty(ePayco)) {
    const ref = get(query, 'ref')
    return decodeOrderParams(ref)
  } else {
    const extra1 = get(ePayco, 'extra1')
    return decodeOrderParams(extra1)
  }
}

const Response = props => (
  <>
    <SimpleNavbar />
    <CheckoutResponse {...props} />
  </>
)

Response.getInitialProps = async ({ res, query }) => {
  try {
    const ePayco = await getEpaycoData({ query })

    const { orderNumber, orderKey } = getOrderParams({ ePayco, query })

    const order = await fetchJson(
      `${config.apiUrl}/orders?orderId=${orderNumber}&orderKey=${orderKey}`
    )

    return {
      ePayco,
      order
    }
  } catch (error) {
    console.error(
      'Error getting initial props in checkout response page',
      error
    )

    redirectToHomePage(res)
  }
}

export default Response
