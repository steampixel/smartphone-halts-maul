<template>

  <footer>
    <space></space>
    <space></space>

    <seperator></seperator>

    <div class="container">

      <space></space>

      <div class="text-sm">

        Ein steampixel.de Projekt |
        Version: {{ version }} |
        Stand: {{ lastUpdated }} |
        Lizenz: MIT

      </div>

      <space></space>

    </div>

  </footer>

</template>

<script>

import Space from '~/components/Space.vue'
import Seperator from '~/components/Seperator.vue'
import config from '~/config.js';


export default {

  components: {
    Space, Seperator
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
