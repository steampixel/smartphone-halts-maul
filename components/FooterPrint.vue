<template>

  <footer>
    <space></space>
    <space></space>

    <seperator></seperator>

    <div class="container">

      <space></space>

      <div class="text-sm">

        {{ $t('footerCopyright') }} | 
        {{ $t('footerVersion') }} {{ version }} | 
        {{ $t('footerFrom') }} {{ lastUpdated }} | 
        {{ $t('footerLicense') }}

      </div>

      <space></space>

    </div>

  </footer>

</template>

<script>

import Space from '~/components/Space.vue'
import Seperator from '~/components/Seperator.vue'
import config from '~/config.json';


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
