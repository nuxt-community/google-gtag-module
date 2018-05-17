const {resolve} = require('path')

module.exports = function module (moduleOptions) {
  const options = this.options['google-gtag'] || moduleOptions
  if (options && options.id) {
    options.skipAll = process.env.NODE_ENV !== 'production' && !options.debug
    // need to render even in skipAll to generate noop $gtag function
    this.addPlugin({
      src: resolve(__dirname, './templates/config.js'),
      fileName: 'google-gtag.js',
      options: Object.assign({}, options),
      ssr: false
    })

    if (options.skipAll) {
      return // skip gtag if not in dev mode
    }

    this.options.head.script.push({
      src: `https://www.googletagmanager.com/gtag/js?id=${options.id}`,
      async: true
    })
  }
}
