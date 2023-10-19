<template>
  <div class="hero">
    <h1>Welcome to Our Fashion Lookbook</h1>
    <p>Discover the latest AI trends and exclusive collections from top AI designers.</p>
    <nuxt-link to="/products" class="cta-button">Explore Products</nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Hero'
};
</script>

<style scoped>
.hero {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 60vh;
  /* adjust as needed */
  background-color: #f9f7f2;
  padding: 20px;
  text-align: center;
}

.hero h1 {
  margin-bottom: 20px;
}

.cta-button {
  display: inline-block;
  background-color: #1e1e1e;
  color: #ffffff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: bold;
  text-transform: uppercase;
  transition: background-color 0.3s;
}

.cta-button:hover {
  background-color: #333;
  text-decoration: none;
}
</style>
