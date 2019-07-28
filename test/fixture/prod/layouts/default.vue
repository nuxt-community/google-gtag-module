<template>
  <div>
    <ul>
      <li>
        <nuxt-link to="/">
          Index
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/page-a">
          Page A
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/page-b">
          Page B
        </nuxt-link>
      </li>
    </ul>
    <nuxt />
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Demo Page of Google GTag'
    }
  }
}
</script>
