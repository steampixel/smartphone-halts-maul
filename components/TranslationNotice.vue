<template>

  <div v-if="$i18n.locale!='de'" class="container">
    <space></space>
    <div class="text-base p-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400" role="alert">{{ $t('noticeAutomaticTranslation') }}</div>
  </div>

</template>

<script>

import Space from '~/components/Space.vue'

export default {

  components: {
    Space
  }

}

</script>

<style>



</style>
