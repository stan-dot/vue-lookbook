/* __placeholder__ */
export default (await import('vue')).defineComponent({
  data() {
    return {
      id: this.$route.params.id,
      products: null
    };
  },
  mounted() {
    await this.fetchProducts();
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
});
