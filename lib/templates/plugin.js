export default async function ({app: {router}}, inject) {

  const moduleOptions = <%= serialize(options) %>

  if(!moduleOptions.debug && process.env.NODE_ENV !== 'production'){
    return // don't run in development mode
  }

  const ID = moduleOptions.id
  const gtag = () => {
    window.dataLayer.push(arguments)
  }

  const initialize = () => {
    if (window.gtag) return
    const s1 = document.createElement('script')
    const s0 = document.getElementsByTagName('script')[0]
    s1.async = true
    s1.src = `https://www.googletagmanager.com/gtag/js?id=${ID}`
    window.dataLayer = window.dataLayer || []
    s0.parentNode.insertBefore(s1, s0)

    gtag('js', new Date())
    gtag('config', ID, moduleOptions.options)
    window.gtag = gtag
    inject('gtag', gtag)
  }

  initialize()

  if(!moduleOptions.disableRouter){
    router.afterEach((to) => {
      gtag('config', ID, {
        page_path: to.fullPath
      })
      if(moduleOptions.debug){
        console.log('google gtag tracks following path: ',to.fullPath)
      }
    })
  }
}
