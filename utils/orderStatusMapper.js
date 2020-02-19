const epaycoCode = {
  ACCEPTED: '1',
  REJECTED: '2',
  PENDING: '3',
  FAILED: '4',
  REVERSED: '6',
  RETAINED: '7',
  STARTED: '8',
  EXPIRED: '9',
  ABANDONED: '10',
  CANCELED: '11',
  ANTIFRAUD: '12'
}

const DEFAULT_ORDER_STATUS = 'on-hold'

const ePaycoToWoocommerceStatusMap = {
  [epaycoCode.ACCEPTED]: 'completed',
  [epaycoCode.REJECTED]: 'failed',
  [epaycoCode.PENDING]: 'pending',
  [epaycoCode.FAILED]: 'failed',
  [epaycoCode.REVERSED]: 'refunded',
  [epaycoCode.RETAINED]: 'on-hold',
  [epaycoCode.STARTED]: 'pending',
  [epaycoCode.EXPIRED]: 'failed',
  [epaycoCode.ABANDONED]: 'cancelled',
  [epaycoCode.CANCELED]: 'cancelled',
  [epaycoCode.ANTIFRAUD]: 'failed'
}

export const epaycoToWooCommerce = key =>
  ePaycoToWoocommerceStatusMap[`${key}`] || DEFAULT_ORDER_STATUS
