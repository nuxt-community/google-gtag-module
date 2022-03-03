import { resolve } from 'path'
import { fileURLToPath } from 'url'
import { defineNuxtModule, addPlugin, isNuxt2 } from '@nuxt/kit'
import defu from 'defu'

import { name, version } from '../package.json'

import logger from './logger'

export interface ModuleOptions {
  id?: string,
  config?: {
    anonymize_ip?: boolean,
    send_page_view?: boolean,
    linker?: {
      domains?: []
    }
  },
  debug?: boolean,
  disableAutoPageTrack?: boolean,
  additionalAccounts?: object[]
}

const CONFIG_KEY = 'googleGtag'

export default defineNuxtModule<ModuleOptions>({
  meta: {
    name,
    version,
    configKey: CONFIG_KEY,
    compatibility: {
      bridge: true
    }
  },
  defaults: {
    config: {},
    debug: false,
    disableAutoPageTrack: false,
    additionalAccounts: []
  },
  setup (options: ModuleOptions, nuxt) {
    const nuxtOptions = nuxt.options

    const skipAll = nuxtOptions.dev && !options.debug

    if (!options.id) {
      logger.warn('No id provided.')
      return
    }

    nuxt.options.publicRuntimeConfig[CONFIG_KEY] = defu(nuxt.options.publicRuntimeConfig[CONFIG_KEY], options)

    const runtimeDir = fileURLToPath(new URL('./runtime', import.meta.url))

    // need to render even in skipAll to generate noop $gtag function
    addPlugin({
      src: resolve(runtimeDir, 'plugin'),
      mode: 'client'
    })

    if (skipAll) {
      logger.debug('Skipping gtag in dev mode.')
      return
    }

    if (isNuxt2()) {
      // Use vue-meta syntax to inject scripts
      nuxt.options.head = nuxt.options.head || {}
      nuxt.options.head.script = nuxt.options.head.script || []
      nuxt.options.head.script?.unshift({
        src: `https://www.googletagmanager.com/gtag/js?id=${options.id}`,
        async: true
      })
    } else {
      // Use @vueuse/head syntax to inject scripts
      nuxt.options.meta = nuxt.options.meta || {}
      nuxt.options.meta.script = nuxt.options.meta.script || []
      nuxt.options.meta.script?.unshift({
        src: `https://www.googletagmanager.com/gtag/js?id=${options.id}`,
        async: true
      })
    }
  }
})
