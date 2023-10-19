
<template>
  <div>
    Hello from item {{ id }}
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  },
  watch: {
    $route(to, from) {
      this.id = to.params.id;
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
</style>
