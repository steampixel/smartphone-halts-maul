<template>

  <footer class="print:hidden">
    <space></space>
    <space></space>

    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

    <div class="container">

      <space></space>

      <p class="text-sm">
        <NuxtLink activeClass="underline" :to="switchLocalePath('de')">Deutsch</NuxtLink> |
        <NuxtLink activeClass="underline" :to="switchLocalePath('en')">English</NuxtLink> |
        <NuxtLink activeClass="underline" :to="switchLocalePath('es')">Español</NuxtLink> 
      </p>

      <space></space>

      <p class="text-sm">

        <NuxtLink :to="localePath('flyer')" :aria-label="$t('flyer')">{{ $t('flyer') }}</NuxtLink> |
        <NuxtLink :to="localePath('handout')" :aria-label="$t('handout')">{{ $t('handout') }}</NuxtLink> |
        <NuxtLink :to="localePath('sitemap')" :aria-label="$t('sitemap')">{{ $t('sitemap') }}</NuxtLink> |
        <NuxtLink :to="localePath('literature')" :aria-label="$t('literature')">{{ $t('literature') }}</NuxtLink> |
        <a target="_blank" href="https://github.com/steampixel/smartphone-halts-maul">{{ $t('github') }}</a> |
        <a target="_blank" href="https://steampixel.de/impressum/">{{ $t('footerImprint') }}</a> |
        <a target="_blank" href="https://steampixel.de/datenschutzerklaerung/">{{ $t('footerPrivacy') }}</a> |
        <NuxtLink :to="localePath('/')" :aria-label="$t('home')">{{ $t('home') }}</NuxtLink> |
        <a target="_blank" rel="me" href="https://fedifreu.de/@smartphone">Mastodon</a>

      </p>

      <space></space>

      <p class="text-sm">

        <a target="_blank" href="https://steampixel.de">{{ $t('footerCopyright') }}</a> | 
        {{ $t('footerVersion') }} {{ version }} | 
        {{ $t('footerFrom') }} {{ lastUpdated }} | 
        {{ $t('footerLicense') }}
      
      </p>

      <space></space>

    </div>

  </footer>

</template>

<script setup>
  const switchLocalePath = useSwitchLocalePath()
</script>

<script>

import Space from '~/components/Space.vue'
import config from '~/config.json';


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
