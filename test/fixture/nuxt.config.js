const {resolve} = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  modules: [['@@', {
    id: 'UA-XXX_XXX',
    options: {
      'send_page_view': true,
      'anonymize_ip': true,
      debug: true
    }
  }]]
}
