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

    


      <ol class="text-base list-decimal list-inside-out list-inside-out-2">

        <li v-for="(link, index) in allLinks()" :key="index" class="pb-2">
          <a target="_blank" :href="link.url" class="underline">
            <span v-if="link.date">{{ link.date }} - </span>
            <span>{{ link.title }}</span> - 
            <span>{{ link.url }}</span>
          </a>
        </li>

      </ol>

  


  </div>

  <app-footer></app-footer>

</template>

<script setup>

  const { t } = useI18n()

  useHead({
    title: t('literature')+' - '+t('seoTitle'),
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

      allLinks() {

        let allLinks = [];

        for (const task of this.tasks) {
          if(task.links) {
            for (const link of task.links) {
              allLinks.push(link);
            }
          }
        }

        return allLinks
          .sort((a, b) => {

            if(!a.date) {a.date = '';}
            if(!b.date) {b.date = '';}

            if (a.date < b.date) {
              return 1;
            }
            if (a.date > b.date) {
              return -1;
            }
            return 0;
          }
        );


      }



    },

  }

</script>