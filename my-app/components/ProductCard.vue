<template>
  <div class="product-card">
    <Zoomer :link="this.image" />
    <h2 class="product-title">{{ this.name }}</h2>
    <p class="product-description">{{ this.description }}</p>
    <p class="product-price">£{{ this.price }}</p>
    <div class="product-stars">{{ displayStars }}</div>
    <button class="add-to-bag-btn">Add To Bag</button>
  </div>
</template>

<script>
import Zoomer from "./Zoomer.vue";
export default {
  name: 'ProductCard',
  props: {
    id: { type: String },
    name: { type: String },
    description: { type: String },
    price: { type: Number },
    stars: { type: Number, validator: function (value) { return value >= 1 && value <= 5 }, default: 3 },
    image: { type: String, default: '/images/wardrobe.jpg' },
  },
  computed: {
    displayStars() {
      const totalStars = 5;
      const fullStar = '★';
      const emptyStar = '☆';

      let starsString = '';
      for (let i = 0; i < totalStars; i++) {
        starsString += (i < this.stars) ? fullStar : emptyStar;
      }

      return starsString;
    }
  }
};
</script>

<style scoped>
.product-card {
  background-color: rgb(50, 50, 50);
  opacity: 0.58;
  padding: 16px;
  display: flex;
  flex-direction: column;
  flex: start;
}

.product-image {
  max-width: 100%;
  border: 4px solid #f9f7f2;
}

.product-title {
  color: #1e1e1e;
  margin-top: 16px;
}

.product-description,
.product-price,
.product-stars {
  margin-top: 8px;
}

.add-to-bag-btn {
  margin-top: 16px;
  padding: 12px 24px;
  background-color: #f9f7f2;
  border: none;
  cursor: pointer;
  text-transform: uppercase;
}
</style>
