<template>

  <div class="min-h-screen">

    <navbar :task="task"></navbar>

    <translation-notice></translation-notice>

    <div class="container">

      <div>

        <space></space>
        <space></space>
        <space></space>
        <space></space>

        <div class="hidden md:block">

          <space></space>
          <space></space>
          <space></space>
          <space></space>

        </div>

        <div class="relative">

          <div class="flex justify-between items-end">

            <img class="relative h-20 w-20" src="/unicorn.png" />

            <NuxtLink :to="localePath('list')" :aria-label="$t('checklist')">
              <div class="text-sm mb-2">
                {{ $t('backToList') }}
              </div>
            </NuxtLink>

          </div>

          <div class="w-full relative mb-4 block p-4 md:p-8 transition-all border border-gray-200 rounded-lg shadow bg-white">

            <div class="">

              <div class="block w-full">

                <div class="flex justify-between items-center">

                  <h1 class="text-xl md:text-3xl font-bold text-gray-800 hyphenate">
                    {{task.title[$i18n.locale]}}
                  </h1>

                  <div class="flex justify-end text-sm">

                    <div 
                      class=""
                      v-for="(tag) in filterTags" 
                      :key="tag.key">

                      <span class="inline-block ml-2" v-if="hasTag(task.tags, tag.key)" :title="tag.title[$i18n.locale]">
                        <icon color="black" :type="tag.icon"></icon>
                      </span>

                    </div>

                  </div>

                </div>

                <space></space>

                <div class="text-base">
                  {{task.shortText[$i18n.locale]}}
                </div>

                <div v-if="Object.keys(task.longText).length && task.longText[$i18n.locale]">
                  <space></space>

                  <h2 class="text-base text-gray-800 font-bold">{{ $t('listMoreInformation') }}</h2>

                  <space></space>

                  <div class="text-sm">
                    {{task.longText[$i18n.locale]}}
                  </div>

                </div>


                <div v-if="task.links && task.links.length">
                  
                  <space></space>

                  <h2 class="text-base text-gray-800 font-bold">{{ $t('listLinks') }}</h2>

                  <space></space>

                  <ol class="text-sm list-decimal list-inside-out">

                    <li v-for="(link, index) in sortedLinks" :key="index">
                      <a target="_blank" :href="link.url" class="underline">
                        <span v-if="link.date">{{ link.date }} - </span>
                        <span>{{ link.title }}</span>
                      </a>
                    </li>

                  </ol>

                </div>

              </div>

              <space></space>

            </div>

          </div>

        </div>

        <space></space>
        <space></space>

        <div class="flex justify-between">
          <div>
            <a v-if="prevTask" :href="prevTask.slug[$i18n.locale]">
              <app-button 
                :aria-label="$t('prevTask')" 
                color="light"
                text="text-black"
                class="hover:scale-105 transition-all cursor-pointer max-w-full">
                <span class="inline-flex hyphenate items-center">
                  <icon class="mr-2 h-4 w-4 fill-black" type="left"></icon>
                  {{ $t('prevTask') }}
                </span>
              </app-button>
              <!-- <div class="text-sm">
                {{prevTask.title[$i18n.locale]}}
              </div> -->
            </a>
          </div>
          <div>
            <a v-if="nextTask" :href="nextTask.slug[$i18n.locale]" class="flex flex-col items-end">
              <app-button 
                :aria-label="$t('nextTask')" 
                color="light"
                text="text-black"
                class="hover:scale-105 transition-all cursor-pointer max-w-full">
                <span class="inline-flex hyphenate items-center">
                  <icon class="mr-2 h-4 w-4 fill-black" type="right"></icon>
                  {{ $t('nextTask') }}
                </span>
              </app-button>
              <!-- <div class="text-sm">
                {{nextTask.title[$i18n.locale]}}
              </div> -->
            </a>
          </div>
        </div>

        <space></space>
        <space></space>

      </div>

    </div>

  </div>

  <app-footer></app-footer>

</template>

<script setup >

  import config from '~/config.json';

  const { locale, t } = useI18n()
  const { slug } = useRoute().params;

  // Hier im Setup definierte Variablen sind automatisch später in this verfügbar!
  let task = false;
  for (let i in config.tasks) {
    if(config.tasks[i]['slug'][locale.value] == slug) {
      task = config.tasks[i];
    }
  }

  // Throw 404 if task was not found!
  if(!task) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Task slug not found'
    })
  }

  if(task) {

    useHead({
      title: task.title[locale.value]+' - '+t('title'),
      meta: [
        { 
          name: 'description', 
          content: task.shortText[locale.value],
        }
      ],
    })

    useSeoMeta({
      title: task.title[locale.value]+' - '+t('title'),
      ogTitle: task.title[locale.value]+' - '+t('title'),
      description: task.shortText[locale.value],
      ogDescription: task.shortText[locale.value],
      ogImage: 'https://smartphone-halts-maul.de/icon.png',
      // twitterCard: 'summary_large_image',
    })

  }

</script>

<script>
  
  import Space from '~/components/Space.vue'
  import AppButton from '~/components/Button.vue'
  import AppFooter from '~/components/Footer.vue'

  import config from '~/config.json';

  export default {

    components: {
      Space, AppButton, AppFooter
    },

    data: function() {
      return {
        tasks: config.tasks,
        filterTags: config.filterTags,
      }
    },

    computed: {

      // Achtung! Ich muss task hier ein weiteres mal definieren, da ich auf die variable task aus dem Setup hier nicht mehr zugreifen kann.
      task: function() {
        let task = false;
        for (let i in config.tasks) {
          if(config.tasks[i]['slug'][this.$i18n.locale] == this.$route.params.slug) {
            return config.tasks[i];
          }
        }
        return false;
      },

      nextTask: function () {

        for (const taskKey in this.tasks) {

          if(this.tasks[taskKey]['slug'][this.$i18n.locale] == this.$route.params.slug) {
            let nextKey = Number(taskKey)+1;
            if(this.tasks[nextKey]) {
              // console.log('found next');
              return this.tasks[nextKey];
            }
          }

        }

        return false;

      },
      prevTask: function () {

        for (const taskKey in this.tasks) {

          if(this.tasks[taskKey]['slug'][this.$i18n.locale] == this.$route.params.slug) {
            // console.log('found this', taskKey, Number(taskKey)+1);
            let prevKey = Number(taskKey)-1;
            if(this.tasks[prevKey]) {
              // console.log('found next');
              return this.tasks[prevKey];
            }
          }

        }

        return false;

      },

      sortedLinks() {

        if(this.task && this.task.links && this.task.links.length) {

          return this.task.links
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

        return [];
        
      },

    },

    methods: {

      hasTag(tags, tag) {
        if(tags && tags.includes(tag)) {
          return true;
        }
        return false;
      }

    }


  }

</script>