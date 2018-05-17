const {resolve} = require('path')

module.exports = function module (moduleOptions) {
  const options = this.options['google-gtag'] || moduleOptions
  const isProd = process.env.NODE_ENV === 'production'
  if (options && options.id) {
    if (!isProd && !options.debug) {
      return // disable if not debug mode
    }
    this.options.head.script.push({
      src: `https://www.googletagmanager.com/gtag/js?id=${options.id}`,
      async: true
    })
    this.addPlugin({
      src: resolve(__dirname, './templates/config.js'),
      fileName: 'google-gtag-config.js',
      options: Object.assign({}, options),
      ssr: false
    })
    if (!options.disableAutoPageTrack) {
      this.addPlugin({
        src: resolve(__dirname, './templates/plugin.js'),
        fileName: 'google-gtag-plugin.js',
        options: Object.assign({}, options),
        ssr: false
      })
    }
  }
}
