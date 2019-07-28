<template>
  <div>
    Works!
    <a href="#" @click="$gtag('event', 'test', { event_category: 'test', event_label: 'test label' })">Trigger Test event</a>
  </div>
</template>

<script>
export default {
  head () {
    return {
      title: 'Startpage'
    }
  }
}
</script>
