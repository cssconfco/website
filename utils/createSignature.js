import sha256 from 'sha256'

export default (
  {
    x_ref_payco: reference,
    x_transaction_id: transaction,
    x_amount: amount,
    x_currency_code: currency
  },
  id,
  key
) => sha256(`${id}^${key}^${reference}^${transaction}^${amount}^${currency}`)
