<template>

  <navbar></navbar>

  <div class="container">

    <space></space>
    <space></space>

    <section class="">

      <h1 class="text-gray-800 hyphenate">
        <div class="text-5xl md:text-6xl font-bold mb-2">
          <img class="inline-block h-20 w-20" src="/unicorn.png" />
          {{ $t('title') }}
        </div>
        <div class="text-2xl">{{ $t('subtitle') }}</div>
      </h1>

      <space></space>
      <space></space>

    </section>

  </div>

  <space></space>
  <space></space>

  <seperator></seperator>


  <div class="container">

    <space></space>

    <space></space>

    <div v-for="(task) in tasks" :key="task.id" class="mb-2">

      <a class="underline" :href="($i18n.locale=='de'?'':'/'+$i18n.locale)+'/list/'+task.slug[$i18n.locale]">
        {{ task.title[$i18n.locale] }}
      </a>

    </div>
  
  </div>

  <app-footer></app-footer>

</template>

<script setup>

  const { t } = useI18n()

  useHead({
    title: t('sitemap')+' - '+t('seoTitle'),
  })

</script>

<script>



  import Space from '~/components/Space.vue'
  import Icon from '~/components/Icon.vue'
  import Print from '~/components/Print.vue'
  import FooterPrint from '~/components/FooterPrint.vue'
  import Seperator from '~/components/Seperator.vue'
  import AppFooter from '~/components/Footer.vue'
  import Navbar from '~/components/Navbar.vue'

  import config from '~/config.json';

  export default {

    components: {
      Space, Icon, Print, FooterPrint, Seperator, AppFooter, Navbar
    },

    data: function() {
      return {
        tasks: config.tasks,
      }
    },

    methods: {

      

    },

  }

</script>