<template>
  <div>
    Works!
    <a href="#" @click="$gtag('event', 'test', { event_category: 'test', event_label: 'test label' })">Trigger Test event</a>
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Startpage'
})
</script>
