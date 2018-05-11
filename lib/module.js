const {resolve} = require('path')

module.exports = function module (moduleOptions) {
  const options = this.options['google-gtag'] || moduleOptions
  if (options && options.id) {
    this.addPlugin({
      src: resolve(__dirname, './templates/plugin.js'),
      fileName: 'google-gtag.js',
      options: options,
      ssr: false
    })
  }
}
