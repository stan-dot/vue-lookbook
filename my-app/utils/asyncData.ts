
async function asyncData({ $axios }) {
  const products = await $axios.$get('http://localhost:3000/products');
  return { products };
}
