export default async function ({meta,app, app: {router}}) {
  router.afterEach(function (to) {
    app.$gtag('config', '<%= options.id %>', {'page_path': to.fullPath})
  })
}
