<template>

  <footer>
    <space></space>
    <space></space>

    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

    <div class="container">

      <space></space>

      <p class="text-sm">
        Ein <a target="_blank" href="https://steampixel.de">steampixel</a> Projekt | 
        Version: {{ version }} | 
        Stand: {{ lastUpdated }} | 
        Lizenz: MIT | 
        <a target="_blank" href="https://smartphone-halts-maul.de/flyer">Flyer</a> |
        <a target="_blank" href="https://smartphone-halts-maul.de/print">Druckversion</a> |
        <a target="_blank" href="https://github.com/steampixel/smartphone-halts-maul">GitHub</a> |
        <a target="_blank" href="https://steampixel.de/impressum/">Impressum</a> |
        <a target="_blank" href="https://steampixel.de/datenschutzerklaerung/">Datenschutz</a> |
        <a target="" href="/">Startseite</a>
      </p>

      <space></space>

    </div>

  </footer>

</template>

<script>

import Space from '~/components/Space.vue'
import config from '~/config.js';


export default {

  components: {
    Space
  },

  data: function() {
    return {
      version: config.version,
      lastUpdated: config.lastUpdated
    }
  },

}

</script>

<style>



</style>
