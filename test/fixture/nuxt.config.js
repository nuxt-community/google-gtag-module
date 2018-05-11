const {resolve} = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: ['@@'],
  'google-gtag': {
    id: 'UI_XXX',
    options: {
      'send_page_view': false,
      'anonymize_ip': true
    }
  }
}
