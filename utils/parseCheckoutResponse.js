import { omit, camelCase } from 'lodash'

const REPLACE_EPAYCO_PREFIXES_REGEX = /x_customer_|x_/gi

const FORBIDDEN_EPAYCO_KEYS = [
  'x_bussines',
  'x_cardnumber',
  'x_signature',
  'x_tax',
  'x_test_request',
  'x_amount_base',
  'x_approval_code',
  'x_amount_country',
  'x_amount_ok',
  'x_bank_name',
  'x_customer_ip',
  'x_extra2',
  'x_extra3',
  'x_id_factura',
  'x_quotas',
  'x_respuesta',
  'x_fecha_transaccion'
]

function buildKey(key = '') {
  return camelCase(key.replace(REPLACE_EPAYCO_PREFIXES_REGEX, ''))
}

function buildReponseObject(response) {
  return function(acc, cur) {
    return { ...acc, [buildKey(cur)]: response[cur] }
  }
}

function cleanResponse(response) {
  return omit(response, FORBIDDEN_EPAYCO_KEYS)
}

export default (response = {}) =>
  Object.keys(cleanResponse(response)).reduce(buildReponseObject(response), {})
