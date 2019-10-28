import { camelCase } from 'lodash'
import keys from './keys'

const buildEnvConfig = (acc, cur) => ({
  ...acc,
  [`${camelCase(cur)}`]: process.env[cur]
})

export const config = {
  ...keys.reduce(buildEnvConfig, {}),
  development: process.env.NODE_ENV !== 'production',
  production: process.env.NODE_ENV === 'production'
}
