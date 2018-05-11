const {resolve} = require('path')

module.exports = function module (moduleOptions) {
  const options = this.options['google-gtag'] || moduleOptions
  const isProd = process.env.NODE_ENV === 'production'
  if (options && options.id) {
    if (!isProd && !options.options.debug) {
      return // disable if not debug mode
    }
    this.addPlugin({
      src: resolve(__dirname, './templates/plugin.js'),
      fileName: 'google-gtag.js',
      options: Object.assign({}, options),
      ssr: false
    })
  }
}
