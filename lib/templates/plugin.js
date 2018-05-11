import gtagjs from 'vue-gtagjs'

export default async function ({app: {router}}) {
  gtagjs(router, '<%= options.id %>', <%= JSON.stringify(options.options, null, 2) %>)
}
