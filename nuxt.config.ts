// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  plugins: [
    { src: '~/plugins/matomo.js', mode: 'client' }
  ],
  devServer: {
    port: 10000
  },
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    vueI18n: './i18n.config.ts', // if you are using custom path, default 
    locales: ['de', 'en'],  // used in URL path prefix
    defaultLocale: 'de',    // default locale of your project for Nuxt pages and routings
  }
})
