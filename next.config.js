const withMdxEnhanced = require('next-mdx-enhanced')
const withOffline = require('next-offline')

const nextConfig = {
    layoutPath: 'mdx-layouts',
}

module.exports = withOffline(withMdxEnhanced(nextConfig)())