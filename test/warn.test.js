jest.setTimeout(60000)

const { Nuxt, Builder } = require('nuxt-edge')
const logger = require('../lib/logger')

let nuxt

logger.mockTypes(() => jest.fn())

describe('prod', () => {
  beforeAll(async () => {
    nuxt = new Nuxt(require('./fixture/warn/nuxt.config'))
    await nuxt.ready()
    await new Builder(nuxt).build()
  })

  beforeEach(() => {
    logger.clear()
  })

  afterAll(async () => {
    await nuxt.close()
  })

  test('should warn if an id was not provided', () => {
    expect(logger.warn).toHaveBeenCalledWith('No id provided.')
  })
})
