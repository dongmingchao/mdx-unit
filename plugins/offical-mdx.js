const path = require('path')

module.exports = (pluginOptions = {}) => (nextConfig = {}) => {
  const extension = pluginOptions.extension || /\.mdx$/

  return Object.assign({}, nextConfig, {
    webpack(config, options) {
      config.module.rules.push({
        test: extension,
        use: [
          options.defaultLoaders.babel,
          {
            loader: path.join(__dirname, './spec-loader'),
            options: pluginOptions.options,
          },
          path.join(__dirname, './fm-loader'),
        ],
      })

      if (typeof nextConfig.webpack === 'function') {
        return nextConfig.webpack(config, options)
      }

      return config
    },
  })
}