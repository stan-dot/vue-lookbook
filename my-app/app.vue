<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Nuxt Lookbook',
  ogTitle: 'Nuxt Lookbook',
  description: "This is standot's site to try out Nuxt.js",
  ogDescription: "This is standot's site to try out Nuxt.js",
  ogImage: 'https://example.com/image.png',
  twitterCard: 'summary_large_image',
})
</script>
