export default async function ({app: {router}}, inject) {
  const gtag = () => {
    window.dataLayer.push(arguments)
  }

  const initialize = () => {
    if (window.gtag) return
    const s1 = document.createElement('script')
    const s0 = document.getElementsByTagName('script')[0]
    s1.async = true
    s1.src = `https://www.googletagmanager.com/gtag/js?id=<%= options.id %>`
    window.dataLayer = window.dataLayer || []
    s0.parentNode.insertBefore(s1, s0)

    gtag('js', new Date())
    gtag('config', '<%= options.id %>', <%= JSON.stringify(options.options, null, 2) %>)
    window.gtag = gtag
    inject('gtag', gtag)
  }

  initialize()

  router.afterEach((to) => {
    gtag('config', '<%= options.id %>', {
      page_path: to.fullPath
    })
  })
}
