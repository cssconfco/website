import getConfig from 'next/config'
import { camelCase } from 'lodash'
import keys from './keys'

let publicRuntimeConfig = {}

try {
  publicRuntimeConfig = getConfig().publicRuntimeConfig
} catch (error) {
  console.log('error loading publicRuntimeConfig', error)
}

const buildEnvConfigWithMandatoryDefaultValues = (acc, cur) => ({
  ...acc,
  [`${camelCase(cur)}`]: publicRuntimeConfig[cur]
})

export const config = {
  ...keys.reduce(buildEnvConfigWithMandatoryDefaultValues, {}),
  development: publicRuntimeConfig.NODE_ENV !== 'production',
  production: publicRuntimeConfig.NODE_ENV === 'production'
}
