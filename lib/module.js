const { resolve } = require('path')
const logger = require('./logger')

module.exports = function (moduleOptions) {
  const options = {
    debug: false,
    config: {},
    disableAutoPageTrack: false,
    additionalAccounts: [],
    ...this.options['google-gtag'],
    ...this.options.googleGtag,
    ...moduleOptions
  }

  const skipAll = this.options.dev && !options.debug

  if (!options.id) {
    logger.warn('No id provided.')
    return
  }

  if (options.runtimeDisable) {
    options.runtimeDisable = options.runtimeDisable.toString()
  }

  const headScript = {
      src: `https://www.googletagmanager.com/gtag/js?id=${options.id}`,
      async: true
    }

  // need to render even in skipAll to generate noop $gtag function
  this.addPlugin({
    src: resolve(__dirname, 'plugin.js'),
    fileName: 'google-gtag.js',
    ssr: false,
    options: {
      skipAll,
      headScript,
      ...options
    }
  })

  if (skipAll) {
    logger.debug('Skipping gtag in dev mode.')
    return
  }

  if (!options.runtimeDisable) { // head injection will be done in runtime
    this.options.head.script.push(headScript)
  }
}

module.exports.meta = require('../package.json')
