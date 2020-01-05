import { pick } from 'lodash'

const orderParams = [
  'number',
  'currency',
  'date_created',
  'discount_total',
  'shipping_total',
  'total',
  'total_tax',
  'billing'
]

const subscriptionParams = [
  'number',
  'status',
  'currency',
  'date_created',
  'start_date',
  'end_date',
  'discount_total',
  'shipping_total',
  'total',
  'total_tax',
  'next_payment_date',
  'billing_period',
  'billing_interval'
]

const productParams = [
  'id',
  'type',
  'slug',
  'name',
  'price',
  'regular_price',
  'featured',
  'status',
  'in_stock'
]

export const parseOrder = (order = {}, extraParams = []) =>
  pick(order, [...orderParams, ...extraParams])

export const parseSubscription = (subscription = {}, extraParams = []) =>
  pick(subscription, [...subscriptionParams, ...extraParams])

export const parseProduct = (product = {}, extraParams = []) => ({
  ...pick(product, [...productParams, ...extraParams]),
  image: pick(product.images[0], ['src', 'alt'])
})
