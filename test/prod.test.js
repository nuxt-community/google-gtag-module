jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt-edge')
const { waitFor } = require('@nuxt/utils-edge')
const request = require('request-promise-native')
const getPort = require('get-port')
const logger = require('../lib/logger')

let nuxt, port

const url = path => `http://localhost:${port}${path}`
const get = path => request(url(path))

logger.mockTypes(() => jest.fn())

describe('prod', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(require('./fixture/prod/nuxt.config'))
    await nuxt.ready()
    await new Builder(nuxt).build()
    await waitFor(2000)
    port = await getPort()
    await nuxt.listen(port)
  })

  beforeEach(() => {
    logger.clear()
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('render', async () => {
    const html = await get('/')
    expect(html).toContain('Works!')
  })

  test('gtag script should be present in header', async () => {
    const html = await get('/')
    expect(html).toContain('https://www.googletagmanager.com/gtag/js?id=UA-XXX-XX')
  })

  test('should not debug when gtag script be present in header', () => {
    expect(logger.debug).not.toHaveBeenCalledWith('Skipping gtag in dev mode.')
  })
})
