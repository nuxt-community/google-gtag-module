const {resolve} = require('path')

module.exports = {
  rootDir: resolve(__dirname, '../..'),
  srcDir: __dirname,
  dev: false,
  render: {
    resourceHints: false
  },
  head: {
    title: 'Demo Page of Google GTag'
  },
  modules: [['@@', {
    id: 'UA-XXX-XX',
    config: {
      'send_page_view': false,
      'anonymize_ip': true
    },
    debug: false,
    disableAutoPageTrack: false
  }]]
}
