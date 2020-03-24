const environmentSetup = require('./config/setup')

const withMDX = require('@next/mdx')({
  extension: /\.mdx?$/
})

module.exports = withMDX({
  env: environmentSetup,
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
})
