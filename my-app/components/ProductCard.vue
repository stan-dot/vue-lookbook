<template>
  <div class="product-card">
    <Zoomer :link="this.image" />
    <h2 class="product-title">{{ this.name }}</h2>
    <p class="product-description">{{ this.description }}</p>
    <p class="product-price">£{{ this.price }}</p>
    <div class="product-stars">{{ displayStars }}</div>
    <NuxtLink :to="detailsLink" class="cta-button">See details</NuxtLink>
    <!-- <button class="add-to-bag-btn">Add To Bag</button> -->
  </div>
</template>

<script>
import Zoomer from "./Zoomer.vue";
export default {
  name: 'ProductCard',
  props: {
    id: { type: Number },
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
    },
    detailsLink() {
      return `/item/${this.id}`;
    }
  },

};
</script>

<style scoped>
.product-card {
  /* opacity: 0.58; */
  min-width: 80%;
  width: fit-content;
  min-height: 60vh;
  background-color: rgb(249, 247, 242);
  opacity: 1 !important;
  padding: 16px 8px 4px 4px;
  border: 1px solid rgba(0, 0, 0, 0.05);
  /* display: flex;
  flex-direction: column;
  flex: start; */
}

.productdescription {
  font-style: italic;
  margin: 10px 0;
}


.product-title {
  color: #333;
  margin-top: 16px;
}

.product-stars {
  margin-top: 8px;
}

div>p {
  padding: 4px;
}

@media (max-width: 768px) {
  div>p {
    position: relative;
  }
}

.cta-button {
  display: inline-block;
  background-color: rgb(249, 247, 242);
  /* Assuming white as the button's background color */
  color: rgb(50, 50, 50);
  /* Assuming black as the text color */
  padding: 10px 20px;
  /* Adjust as needed */
  border: 2px solid rgb(50, 50, 50);
  /* Assuming black border */
  text-align: center;
  text-decoration: none;
  border-radius: 5px;
  /* Rounded corners, adjust as needed */
  font-weight: bold;
  transition: 0.3s;
  /* Smooth transition for hover effect */
}

.see-details-link:hover {
  background-color: rgb(50, 50, 50);
  /* Change to the desired hover background color, e.g., black */
  color: rgb(249, 247, 242);
  /* Change to the desired hover text color, e.g., white */
}
</style>
