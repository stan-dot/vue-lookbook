<template>
  <div class="product-detail">
    <h1>{{ product.name }}</h1>
    <img :src="product.image" alt="Product Image" height="800" width="500" />
    <p class=" short-description">{{ product.description }}</p>
    <p class="long-description">{{ product.longDescription }}</p>
    <p class="price">{{ product.price }} USD</p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      id: this.$route.params.id,
      product: {}
    };
  },
  mounted() {
    this.fetchProduct();
  },
  methods: {
    async fetchProduct() {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        this.product = data.find(p => p.id === parseInt(this.id));
      } catch (error) {
        console.error('Error fetching the products.json:', error);
      }
    }
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
      this.fetchProduct();
    }
  }
};
</script>

<style scoped>
.product-detail {
  padding: 20px;
  max-width: 800px;
  margin: auto;
}

.short-description {
  font-style: italic;
  margin: 10px 0;
}

.long-description {
  margin: 20px 0;
  line-height: 1.5;
}

.price {
  font-weight: bold;
  color: #e67e22;
  margin-top: 20px;
}
</style>
