<template>
  <div class="zoom-container">
    <NuxtImg :src="this.link" alt="Product Image" class="zoom-image" height="560" width="420" />
  </div>
</template>

<script>

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
}

.zoom-image {
  width: 100%;
  height: 100%;
  max-width: 800px;
  transition: transform .5s ease;
  border: 4px solid #f9f7f2;
}

.zoom-container:hover .zoom-image {
  transform: scale(1.5);
}
</style>