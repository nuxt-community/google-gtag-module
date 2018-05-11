# @nuxtjs/google-gtag
[![npm (scoped with tag)](https://img.shields.io/npm/v/@nuxtjs/google-gtag/latest.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/google-gtag)
[![npm](https://img.shields.io/npm/dt/@nuxtjs/google-gtag.svg?style=flat-square)](https://npmjs.com/package/@nuxtjs/google-gtag)
[![CircleCI](https://img.shields.io/circleci/project/github/https://github.com/nuxt-community/google-gtag.svg?style=flat-square)](https://circleci.com/gh/https://github.com/nuxt-community/google-gtag)
[![Codecov](https://img.shields.io/codecov/c/github/https://github.com/nuxt-community/google-gtag.svg?style=flat-square)](https://codecov.io/gh/https://github.com/nuxt-community/google-gtag)
[![Dependencies](https://david-dm.org/https://github.com/nuxt-community/google-gtag/status.svg?style=flat-square)](https://david-dm.org/https://github.com/nuxt-community/google-gtag)
[![js-standard-style](https://img.shields.io/badge/code_style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com)

> Google GTag for Nuxt.js

[📖 **Release Notes**](./CHANGELOG.md)

## Features

The module features

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
 // alternative also as
 'google-gtag':{
   // your options
 }
 
 
 // example config
 'google-gtag':{
   id: 'UA-XXXX-XX',
   options:{
     // check out official docs: https://developers.google.com/analytics/devguides/collection/gtagjs/
     anonymize_ip: true, // anonymize IP 
     send_page_view: false, // might be necessary to avoid duplicated page track on page reload
     linker:{
       domains:['domain.com','domain.org']
     }
   },
   debug: true // enable to track in dev mode
 }
}
```

## Usage

Module Description

## Development

- Clone this repository
- Install dependencies using `yarn install` or `npm install`
- Start development server using `npm run dev`

## License

[MIT License](./LICENSE)

Copyright (c) Dominic Garms <djgarms@gmail.com>
