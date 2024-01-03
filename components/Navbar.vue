<template>

  <nav class="print:hidden">

    <div class="container">

      <space></space>

      <div class="flex text-sm justify-between">

        <div>
          <NuxtLink activeClass="underline" :to="localePath('/')" :aria-label="$t('navbarHomepage')">{{ $t('navbarHomepage') }}</NuxtLink> | 
          <NuxtLink activeClass="underline" :to="localePath('list')" :aria-label="$t('navbarChecklist')">{{ $t('navbarChecklist') }}</NuxtLink> |
          <NuxtLink activeClass="underline" :to="localePath('flyer')" :aria-label="$t('navbarFlyer')">{{ $t('navbarFlyer') }}</NuxtLink> |
          <NuxtLink activeClass="underline" :to="localePath('print')" :aria-label="$t('navbarPrintVersion')">{{ $t('navbarPrintVersion') }}</NuxtLink>    
        </div>

        <div>
          <NuxtLink activeClass="underline" :to="switchLocalePath('de')">DE</NuxtLink> |
          <NuxtLink activeClass="underline" :to="switchLocalePath('en')">EN</NuxtLink> 
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
  }

}

</script>

<style>



</style>
