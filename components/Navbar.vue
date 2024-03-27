<template>

  <nav class="print:hidden">

    <div class="container">

      <space></space>

      <div class="flex text-sm justify-between">

        <div>
          <NuxtLink activeClass="underline" :to="localePath('/')" :aria-label="$t('home')">{{ $t('home') }}</NuxtLink> | 
          <NuxtLink activeClass="underline" :to="localePath('list')" :aria-label="$t('checklist')">{{ $t('checklist') }}</NuxtLink> |
          <NuxtLink activeClass="underline" :to="localePath('handout')" :aria-label="$t('handout')">{{ $t('handout') }}</NuxtLink> |
          <NuxtLink activeClass="underline" :to="localePath('flyer')" :aria-label="$t('flyer')">{{ $t('flyer') }}</NuxtLink>
        </div>

        <div v-if="!task">
          <NuxtLink activeClass="underline" :to="switchLocalePath('de')">DE</NuxtLink> |
          <NuxtLink activeClass="underline" :to="switchLocalePath('en')">EN</NuxtLink> 
        </div>

        <div v-if="task && task.slug">
          <NuxtLink activeClass="underline" :to="'/list/'+task.slug['de']">DE</NuxtLink> |
          <NuxtLink activeClass="underline" :to="'/en/list/'+task.slug['en']">EN</NuxtLink> 
        </div>

      </div>

      <space></space>

    </div>

  </nav>

</template>

<script setup>
  const switchLocalePath = useSwitchLocalePath()
</script>

<script>

import Space from '~/components/Space.vue'

export default {

  components: {
    Space
  },

  props: [
    'task'
  ],

}

</script>

<style>



</style>
