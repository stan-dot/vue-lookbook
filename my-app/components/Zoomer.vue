<template>
  <div class="zoom-container">
    <img :src="this.link" alt="Product Image" class="zoom-image" height="330" width="260" />
  </div>
</template>

<script>
import { reactive, computed } from 'vue';

export default {
  name: 'zoomer',
  props: {
    link: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.zoom-container {
  position: relative;
  overflow: hidden;
  width: 300px;
  /* Or any desired size */
  height: 300px;
}

.zoom-image {
  width: 100%;
  height: 100%;
  transition: transform .5s ease;
}

.zoom-container:hover .zoom-image {
  transform: scale(1.5);
  /* Control zoom level here */
}
</style>