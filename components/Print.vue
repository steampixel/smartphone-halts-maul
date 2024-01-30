<template>

  <div class="container print:hidden">

    <space></space>
    <space></space>

    <app-button @click="print">{{ $t('buttonPrint') }}</app-button>
    
  </div>

</template>

<script>

import AppButton from '~/components/Button.vue'

export default {

  components: {
      AppButton
  },

  methods: {

      print() {
          window.print();
      }

  }

}

</script>

<style>



</style>
