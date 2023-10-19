
- [x] high quality images
- [x] zoom in functionality
- [x] carousel / slider
- [x] branding colors
- [x] add stars
- [x] subtle animations
- [ ] inquire button
- [ ] smooth transitons
- [ ] responsive styles

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
