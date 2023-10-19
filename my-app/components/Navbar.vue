
<template>
  <nav class="fits-mobile">
    <NuxtLink to="/">
      <!-- <h1 alt="Lookbook title" id="logo">Nuxt Lookbook</h1> -->
      <img src="/new-logo.png" alt="Lookbook icon" id="logo" />
    </NuxtLink>
    <ul class="navbar-list">
      <li>
        <NuxtLink :to="`/products`" class="navbar-item">
          all
        </NuxtLink>
      </li>
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
#logo {
  font-family: 'Josefin+Sans', 'lato';
  text-decoration: none;
  text-underline-position: unset;
}

@media (max-width: 720px) {
  .fits-mobile {
    padding: 0;
    width: 80vw;
  }

}

nav {
  border-bottom: 2px solid #333;
  width: 100%;
  max-width: 100vw;
  box-sizing: border-box;
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
  padding: 3px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.navbar-item:hover {
  background-color: #eee;
}

@media (max-width: 768px) {
  nav {
    width: 100%;
    flex-direction: column;
  }
}
</style>
