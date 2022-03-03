import { defineNuxtConfig } from 'nuxt3'
import GoogleGtagModule from '..'

export default defineNuxtConfig({
  render: {
    resourceHints: false
  },
  modules: [
    GoogleGtagModule
  ],
  googleGtag: {
    id: 'G-XXXX',
    debug: true
  }
})
