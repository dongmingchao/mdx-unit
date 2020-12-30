const withMDX = require('./plugins/offical-mdx')({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
    ],
    rehypePlugins: [
    ],
  }
})
module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'mdx'],
})
