const {resolve} = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: ['@@', {
    id: 'test',
    options: {
      'send_page_view': false,
      'anonymize_ip': true
    }
  }]
}
