// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/storybook', 'nuxt-swiper', '@nuxtjs/google-fonts', '@nuxt/image'],
  googleFonts: {
     families: {
          Roboto: true,
          Inter: [400, 700],
           'Josefin+Sans': true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100]
          },
        }
  },
  storybook: {
    url: 'http://localhost:6006',
    storybookRoute: '/__storybook__',
    port: 6006,
  },
  image: {
    domains: [
      'images.unsplash.com'
    ],
    alias: {
      unsplash: 'https://images.unsplash.com'
    }
  }
})

