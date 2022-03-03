import { defineNuxtPlugin, useRuntimeConfig } from '#app'
import { useRouter } from '#imports'

export default defineNuxtPlugin(({ _, provide }) => {
  const options = useRuntimeConfig().googleGtag

  if (options.skipAll) {
    // inject empty gtag function for disabled mode
    provide('gtag', () => {})
    return
  }

  window.dataLayer = window.dataLayer || []

  function gtag () {
    dataLayer.push(arguments)

    if (options.debug) {
      // eslint-disable-next-line no-console
      console.debug('gtag tracking called with following arguments:', arguments)
    }
  }

  provide('gtag', gtag)
  gtag('js', new Date())
  gtag('config', options.id, JSON.stringify(options.config, null, 2))

  if (!options.disableAutoPageTrack) {
    useRouter().afterEach((to) => {
      gtag('config', options.id, { page_path: to.fullPath, location_path: window.location.origin + to.fullPath })
    })
  }

  // additional accounts
  Array.isArray(options.additionalAccounts) && options.additionalAccounts.forEach((account) => {
    gtag('config', account.id, JSON.stringify(account.config, null, 2))
  })
})
