

## projects in this directory
app - initial project setup, but the sitemap module is not compatible with nuxt 3
my-app - nuxt project and the best one of the 3, with some need for configuration in the storybook setup. this also doesn't have the alpha versions of libraries
raw-integration - project without nuxt js, just vue and meant to integrate with storybook well

## old todos
- [x] high quality images
- [x] zoom in functionality
- [x] carousel / slider
- [x] branding colors
- [x] add stars
- [x] subtle animations
- [x] smooth transitons
- [x] responsive styles

## steps
1. setup 
   1. nuxt project - done
   2. css framework - nope, just raw for simplicity
   3. choose color palette -  in `design.md`
2. data handling
   1. create a JSON file and headless CMS for product information and images - just JSON is enough it appears
   2. using mirage.js instead for mocking - nah, it's not needed
3. build components
   1. Lookbook
   2. product detail
4. client side routing to display the raw components - using swiper component
5. styling
   1. spacious layout - ok
   2. high quality images  - ok
   3. refined typography - choose nice fonts - https://google-fonts.nuxtjs.org/getting-started/setup -ok
   4. responsive and coherent
   5. SEO optimization https://nuxt.com/docs/guide/directory-structure/public
   6. feedback form form standot33@gmail.com  - not necessary
6. deploy - done
7. documentation - automatic with storybook - not key part. relatively few state-changing elements though.
8. bug fixes
   1. on mobile the slider doesn't work quite right
   2. most elements need to be re-adjusted to mobile view