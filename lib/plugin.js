export default function ({ app }, inject) {

  <% if (options.runtimeDisable) { %>
  const runtimeDisable = <%= options.runtimeDisable %>

  if (<%= options.skipAll %> || runtimeDisable(app)) {
  <% } else { %>
  if (<%= options.skipAll %>) {
  <% } %>
    // inject empty gtag function for disabled mode
    inject('gtag', () => {})
    return
  }

  <% if (options.runtimeDisable) { %>
  app.head.script.push(<%= JSON.stringify(options.headScript) %>)
  <% } %>

  window.dataLayer = window.dataLayer || []

  function gtag () {
    dataLayer.push(arguments)

    if (<%= options.debug %>) {
      console.debug('gtag tracking called with following arguments:', arguments)
    }
  }

  inject('gtag', gtag)
  gtag('js', new Date())
  gtag('config', '<%= options.id %>', <%= JSON.stringify(options.config, null, 2) %>)

  if (!<%= options.disableAutoPageTrack %>) {
    app.router.afterEach((to) => {
      gtag('config', '<%= options.id %>', { 'page_path': to.fullPath, 'location_path': window.location.origin + to.fullPath })
    })
  }

  // additional accounts
  <% Array.isArray(options.additionalAccounts) && options.additionalAccounts.forEach((account) => { %>
  gtag('config', '<%= account.id %>', <%= JSON.stringify(account.config, null, 2) %>)
  <% }) %>
}
