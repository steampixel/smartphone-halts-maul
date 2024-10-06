<template>

  <navbar></navbar>

  <translation-notice></translation-notice>

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

      <p>
        {{ $t('introTextPrint') }}
      </p>

      <space></space>

      <p>
        {{ $t('introText2') }}
      </p>

    </section>

  </div>

  <space></space>
  <space></space>

  <seperator></seperator>

  <space></space>
  <space></space>

  <div class="container">

    <h2 class="text-2xl font-bold text-gray-800">{{ $t('legend') }}</h2>
    <space></space>

    <span 
      class="block"
      v-for="(tag) in filterTags" 
      :key="tag.key">
      
      <span class="flex items-center">
        <icon class="mr-2 h-4 w-4" color="gray-800" :type="tag.icon"></icon>
        {{ tag.title[$i18n.locale] }}
      </span>
    </span>

    <space></space>
    <space></space>

    <div v-for="(categoryTag, categoryIndex) in categoryTags" :key="categoryTag.key">

        <seperator></seperator>
        <space></space>

        <h2 class="text-2xl font-bold text-gray-800">{{ categoryIndex+1 }} {{categoryTag.title[$i18n.locale]}}</h2>
        <space></space>

        <div v-for="(task, taskIndex) in categoryTasks(categoryTag.key)" :key="task.id" class="">

          <section class="">

            <div class="flex justify-between items-center">
              <h3 class="text-base xs:text-lg sm:text-xl font-bold text-gray-800 hyphenate flex items-center">
                <icon class="h-4 w-4 md:h-6 md:w-6 mr-2" color="gray-800" type="square"></icon>
                <div>{{ categoryIndex+1 }}.{{ taskIndex+1 }} {{ task.title[$i18n.locale] }}</div>
              </h3>

              <div class="flex">
                <div 
                class=""
                v-for="(tag) in filterTags" 
                :key="tag.key">

                  <span class="inline-block ml-2" v-if="hasTag(task.tags, tag.key)" :title="tag.title[$i18n.locale]">
                    <icon color="gray-800" :type="tag.icon"></icon>
                  </span>

                </div>

                <div class="pl-2 text-sm">{{ task.points }} {{ $t('listPoints') }}</div>
                
              </div>
              
            </div>

            <p class="text-base">
              {{ task.shortText[$i18n.locale] }}
            </p>

            <div v-if="task.longText[$i18n.locale]">
              <space></space>
              <p class="text-base">
                {{ task.longText[$i18n.locale] }}
              </p>
            </div>

            <div v-if="task.links&&task.links.length">
              <space></space>
              <ol class="text-sm list-decimal list-inside-out">

                <li v-for="(link, index) in sortLinks(task.links)" :key="index" class="">
                  <a target="_blank" :href="link.url" class="underline">
                    <span v-if="link.date">{{ link.date }} - </span>
                    <span>{{ link.title }}</span> - 
                    <span>{{ link.url }}</span>
                  </a>
                </li>

              </ol>
            </div>

          </section>

          <space></space>
          <space></space>

        </div>

    </div>

  </div>

  <print></print>

  <footer-print></footer-print>

</template>

<script setup>

  const { t } = useI18n()

  useHead({
    title: t('handout')+' - '+t('seoTitle'),
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
        version: config.version,
        lastUpdated: config.lastUpdated,
        categoryTags: config.categoryTags,
        filterTags: config.filterTags,
        tasks: config.tasks,
        chapterNumber: 1
      }
    },

    methods: {

      taskHasTag(task, tag) {
        if(task && task.tags && task.tags.includes(tag)) {
          return true;
        }
        return false;
      },

      hasTag(tags, tag) {
        if(tags && tags.includes(tag)) {
          return true;
        }
        return false;
      },

      categoryTasks(tag) {
        let returnTasks = [];
        this.tasks.forEach((task) => {
          if(this.taskHasTag(task, tag)) {
            returnTasks.push(task);
          }
        });
        return returnTasks;
      },

      sortLinks(links) {        
        return links
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
      },

    },

  }

</script>