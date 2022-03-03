<template>
  <div>
    <ul>
      <li>
        <NuxtLink to="/">
          Index
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/page-a">
          Page A
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/page-b">
          Page B
        </NuxtLink>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script setup>
definePageMeta({
  title: 'Demo Page of Google GTag'
})
</script>
