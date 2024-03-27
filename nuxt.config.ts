
import config from './config.json';

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
  },
  hooks: {

    // We need this to add the dynamic routes to the static website!
    // We have to generate all possible language pathes...
    // https://dev.to/rafaelmagalhaes/generating-dynamic-routes-for-static-site-generation-with-nuxt-3-1epi
    async 'nitro:config'(nitroConfig) {
      let slugs = [];
      for (const task of config.tasks) {
        if(task.slug) {
          for (const language in task.slug) {
            slugs.push((language=='de'?'':'/'+language)+'/list/' + task.slug[language]);
         }
        }
      }
      // add the routes to the nitro config
      nitroConfig.prerender.routes.push(...slugs);
    },
  },
})
