<template>
  <div id="main-colection-container">
    <h2>Discover Elegance: Our Curated Collection Awaits</h2>
    <p>Swipe to browse!</p>
    <pre v-if="products">
      <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="3" :loop="true" :effect="'creative'"
        :autoplay="{
          delay: 8000,
          disableOnInteraction: true,
        }" 
        :creative-effect="{
          prev: {
            shadow: false,
            translate: ['-20%', 0, -1],
          },
          next: {
            translate: ['120%', 0, 0],
          },
        }"
        >
        <SwiperSlide v-for="product in products" :key="(product.id.toString())">
          <ProductCard  
          :id="product.id" 
          :name="product.name" 
          :price="product.price" 
          :description="product.description" 
          :stars="product.stars" 
          :image="product.image" 
          />
        </SwiperSlide>
      </Swiper>
    </pre>
  </div>
</template>

<script>
import ProductCard from '~/components/ProductCard.vue';

export default {
  components: { ProductCard },
  data() {
    return {
      products: null,
    };
  },
  async mounted() {
    try {
      // Fetch the content of the JSON file from the static directory
      const response = await fetch('/products.json');
      const data = await response.json();
      this.products = data;
    } catch (error) {
      console.error('Error fetching the products.json:', error);
    }
  },
};
</script>
<style scoped>
h2 {
  color: rgb(50, 50, 50);
}

.carousel-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
</style>