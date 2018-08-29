# @nuxtjs/google-gtag
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/google-gtag/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/google-gtag)
[![npm](https://img.shields.io/npm/dt/@nuxtjs/google-gtag.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/google-gtag)
[![CircleCI](https://img.shields.io/circleci/project/github/https://github.com/nuxt-community/google-gtag.svg?style=flat-square)](https://circleci.com/gh/https://github.com/nuxt-community/google-gtag)
[![Codecov](https://img.shields.io/codecov/c/github/https://github.com/nuxt-community/google-gtag.svg?style=flat-square)](https://codecov.io/gh/https://github.com/nuxt-community/google-gtag)
[![Dependencies](https://david-dm.org/https://github.com/nuxt-community/google-gtag/status.svg?style=flat-square)](https://david-dm.org/https://github.com/nuxt-community/google-gtag)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Google official gtagjs for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Features

The module includes Google `googletagmanager.com/gtag/js` into your project and enables it with config you pass in as options.

* Check the official reference [gtag](https://developers.google.com/analytics/devguides/collection/gtagjs/)

## Setup
- Add `@nuxtjs/google-gtag` dependency using yarn or npm to your project
- Add `@nuxtjs/google-gtag` to `modules` section of `nuxt.config.js`

```js
{
  modules: [
    // Simple usage
    '@nuxtjs/google-gtag',

    // With options
    ['@nuxtjs/google-gtag', { /* module options */ }],    
 ]
  
 // example config
 'google-gtag':{
   id: 'UA-XXXX-XX', // required
   config:{
     // this are the config options for `gtag
     // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
     anonymize_ip: true, // anonymize IP 
     send_page_view: false, // might be necessary to avoid duplicated page track on page reload
     linker:{
       domains:['domain.com','domain.org']
     }
   },
   debug: true, // enable to track in dev mode
   disableAutoPageTrack: false, // disable if you don't want to track each page route with router.afterEach(...)
   // optional you can add more configuration like [AdWords](https://developers.google.com/adwords-remarketing-tag/#configuring_the_global_site_tag_for_multiple_accounts)
   additionalAccounts:[{
     id: 'AW-XXXX-XX', // required if you are adding additional IDs
     config:{
       send_page_view:false // optional configurations
     }
   }]
  }
}
```

## Usage

This module inlcudes Google gtag in your NuxtJs project and enables every page tracking by default. You can use gtag inside of your components/functions/methods like follow:

```
  this.$gtag('event', 'your_event', { /* track something awesome */})
```

## Check functionalities

Install [`Google Tag Assistant`](https://chrome.google.com/webstore/detail/tag-assistant-by-google/kejbdjndbnbjgmefkgdddjlbokphdefk?hl=en) and see if your page is being tracked.

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Dominic Garms <djgarms@gmail.com>
