<template>
  <div class="product-detail">
    <div v-if="products && products.length > 0">
      <h4>{{ products.length }} products in category {{ id }}</h4>
      <ProductCard v-for="product in products" :key="product.id" :id="product.id" :name="product.name"
        :price="product.price" :description="product.description" :stars="product.stars" :image="product.image" />
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      id: this.$route.params.id,
      products: null
    };
  },
  mounted() {
    this.fetchProducts();
  },
  methods: {
    async fetchProducts() {
      try {
        const response = await fetch('/products.json');
        const data = await response.json();
        const filtered = data.filter(p => p.category === parseInt(this.id));
        console.log(filtered);
        this.products = filtered;
      } catch (error) {
        console.error('Error fetching the products.json:', error);
      }
    }
  },
  watch: {
    $route(to) {
      this.id = to.params.id;
      this.fetchProducts();
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
