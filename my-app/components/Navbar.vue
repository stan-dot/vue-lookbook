
<template>
  <nav>
    <NuxtLink to="/">
      <img src="/icon.svg" alt="Lookbook icon" />
    </NuxtLink>
    <ul class="navbar-list">
      <li v-for="id in categories" :key="id">
        <NuxtLink :to="`/category/${id}`" class="navbar-item">
          {{ id }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      categories: ['men', 'women', 'any',]
    }
  }
}
</script>

<style scoped>
nav {
  border-bottom: 2px solid #333;
  width: 100%;
  display: flex;
  flex-direction: row;
}

.navbar-list {
  list-style-type: none;
  padding: 0;
  margin: 10px;
  width: 40%;
  display: flex;
  justify-content: space-around;
  display: flex;
  flex-direction: row;
}

.navbar-item {
  text-decoration: none;
  color: #333;
  /* Change as needed */
  padding: 3px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.navbar-item:hover {
  background-color: #eee;
}
</style>
