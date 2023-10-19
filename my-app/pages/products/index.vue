<template>
  <div>
    <h2> hello products</h2>
    <pre v-if="products">
      <Swiper :modules="[SwiperAutoplay, SwiperEffectCreative]" :slides-per-view="1" :loop="true" :effect="'creative'"
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
            translate: ['100%', 0, 0],
          },
        }"
        >
        <SwiperSlide v-for="product in products" :key="product.id">
          <ProductCard  
          :key="product.id" 
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

      // Convert the JSON object to a string and store in the products data property
      // this.products = JSON.stringify(data, null, 2); // The parameters null and 2 are used to format the JSON with 2-space indentation
    } catch (error) {
      console.error('Error fetching the products.json:', error);
    }
  },
};
</script>
