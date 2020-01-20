# @nuxtjs/google-gtag

[![npm version][npm-version-src]][npm-version-href]
[![npm downloads][npm-downloads-src]][npm-downloads-href]
[![Circle CI][circle-ci-src]][circle-ci-href]
[![Codecov][codecov-src]][codecov-href]
[![License][license-src]][license-href]

> Google official [gtagjs](https://developers.google.com/analytics/devguides/collection/gtagjs/) for [Nuxt.js](https://nuxtjs.org)

[📖 **Release Notes**](./CHANGELOG.md)

## Features

The module includes Google `googletagmanager.com/gtag/js` into your project and enables it with config you pass in as options.

* Check the official reference [gtagjs](https://developers.google.com/analytics/devguides/collection/gtagjs/)

## Setup

1. Add `@nuxtjs/google-gtag` dependency to your project

```bash
yarn add @nuxtjs/google-gtag # or npm install @nuxtjs/google-gtag
```

2. Add `@nuxtjs/google-gtag` to the `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@nuxtjs/google-gtag',

    // With options
    ['@nuxtjs/google-gtag', { /* module options */ }]
  ]
}
```

### Using top level options

```js
{
  modules: [
    '@nuxtjs/google-gtag'
  ],
  'google-gtag': {
    id: 'UA-XXXX-XX',
    config: {
      anonymize_ip: true, // anonymize IP 
      send_page_view: false, // might be necessary to avoid duplicated page track on page reload
      linker: {
        domains: ['domain.com','domain.org']
      }
    },
    debug: true, // enable to track in dev mode
    runtimeDisable: function (app) { // cookie based logic for disabling gtag runtime
      return app.$cookies.get('disable_ga') // set $cookie.set('disable_ga', true) somewhere to disable
    },
    disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...).
    additionalAccounts: [{
      id: 'AW-XXXX-XX', // required if you are adding additional accounts
      config: {
        send_page_view: false // optional configurations
      }
    }]
  }
}
```

## Options

### `id` (required)

Google Analytics property ID.

### `config`

- Default: `{}`

Config options for [gtagjs](https://developers.google.com/analytics/devguides/collection/gtagjs/)

### `debug`

- Default: `false`

Enable to track in dev mode.

### `disableAutoPageTrack`

- Default: `false`

Disable if you don't want to track each page route with router.afterEach(...).

### `additionalAccounts`

- Default: `[]`

You can add more configuration like [AdWords](https://developers.google.com/adwords-remarketing-tag/#configuring_the_global_site_tag_for_multiple_accounts)

### `disableRuntime`

- Default `undefined`

You can define that gtag will be checked on every page load. Define a function that takes `app` as parameter and return boolean.

## Usage

This module inlcudes Google gtag in your NuxtJs project and enables every page tracking by default.
You can use gtag inside of your components/functions/methods like follow:

```js
this.$gtag('event', 'your_event', { /* track something awesome */})
```

#### To make sure that every page is tracked correctly
As the router code sometimes runs before head data is set correctly you can use following approach to make sure that everything is set correctly:

```js
// make sure to set disableAutoPageTrack: true inside of nuxt.config.js
// inside of your Page.vue/Layout.vue file
 mounted() {
    if (process.browser) {
      this.$gtag('config', 'UA-XXXX-XXX', {
        page_title: this.$metaInfo.title,
        page_path: this.$route.fullPath,
      })
    }
  }
```

See official docs:

* [gtagjs](https://developers.google.com/analytics/devguides/collection/gtagjs/)
* [adwords](https://developers.google.com/adwords-remarketing-tag/#configuring_the_global_site_tag_for_multiple_accounts)

## Check functionalities

Install [`Google Tag Assistant`](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=en) and see if your page is being tracked.

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Nuxt Community

<!-- Badges -->
[npm-version-src]: https://img.shields.io/npm/v/@nuxtjs/google-gtag/latest.svg?style=flat-square
[npm-version-href]: https://npmjs.com/package/@nuxtjs/google-gtag

[npm-downloads-src]: https://img.shields.io/npm/dt/@nuxtjs/google-gtag.svg?style=flat-square
[npm-downloads-href]: https://npmjs.com/package/@nuxtjs/google-gtag

[circle-ci-src]: https://img.shields.io/circleci/project/github/nuxt-community/google-gtag.svg?style=flat-square
[circle-ci-href]: https://circleci.com/gh/nuxt-community/google-gtag

[codecov-src]: https://img.shields.io/codecov/c/github/nuxt-community/google-gtag.svg?style=flat-square
[codecov-href]: https://codecov.io/gh/nuxt-community/google-gtag

[license-src]: https://img.shields.io/npm/l/@nuxtjs/google-gtag.svg?style=flat-square
[license-href]: https://npmjs.com/package/@nuxtjs/google-gtag
