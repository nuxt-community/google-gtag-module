export default function ({}, inject) {
  window.dataLayer = window.dataLayer || []
  function gtag () {
    dataLayer.push(arguments)
    if(<%= options.debug %>){
      console.debug('gtag tracking called with following arguments:', arguments)
    }
  }
  inject('gtag', gtag)
  gtag('js', new Date())
  gtag('config','<%= options.id %>',<%= JSON.stringify(options.config, null, 2) %>)
}
