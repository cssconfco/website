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

const productParams = [
  'id',
  'type',
  'slug',
  'name',
  'description',
  'price',
  'regular_price',
  'featured',
  'status',
  'in_stock',
  'virtual'
]

const couponParams = ['code', 'amount']

export const parseOrder = (order = {}, extraParams = []) =>
  pick(order, [...orderParams, ...extraParams])

export const parseProduct = (product = {}, extraParams = []) => ({
  ...pick(product, [...productParams, ...extraParams]),
  image: pick(product.images[0], ['src', 'alt'])
})

export const parseCoupon = (coupon = {}, extraParams = []) =>
  pick(coupon, [...couponParams, ...extraParams])
