<template>
  <div>
    Works!

    <a @click="$gtag('event','test',{event_category:'test',event_label:'test label'})" href="#">Trigger Test event</a>
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
