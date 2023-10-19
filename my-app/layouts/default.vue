<template>
  <div class="main">
    <Navbar />
    <NuxtPage />
    <Footer />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.main {
  font-family: 'raleway-dots', sans-serif;
  height: auto;
}
</style>