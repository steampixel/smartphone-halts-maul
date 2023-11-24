<template>

  <div class="container">

    <space></space>
    <space></space>

    <section class="">

      <h1 class="text-gray-800 hyphenate">
        <div class="text-5xl md:text-6xl font-bold mb-2">
          <img class="inline-block h-20 w-20" src="/unicorn.png" />
          Smartphone, halt's Maul!
        </div>
        <div class="text-2xl">✔ Eine Checkliste für deine mobile Sicherheit</div>
      </h1>

      <space></space>
      <space></space>

      <p>
        Diese Checkliste soll dir helfen deine Smartphone-Sicherheit zu überprüfen, 
        damit du ein Gefühl für die Thematik entwickeln kannst. 
        Die Liste enthält konkrete Vorschläge zur Verbesserung deiner Sicherheit.
        Dies ist die Druckversion der Liste. Du kannst die einzelnen Punkte mit einem Stift abhaken.
        Die interaktive Variante findest du <a class="underline" href="/list" title="Interaktive Version">hier</a>.
      </p>

      <space></space>

      <p>
        Bitte sei dir bewusst, dass Sicherheit immer auch von individuellen Risiken abhängt.
        Einige der hier beschriebenen Aufgaben schließen sich eventuell gegenseitig aus.
        Am Ende ist Sicherheit immer eine Abwägung. Absolute Sicherheit gibt es nicht.
      </p>

      <space></space>

      <p>
        Diese Liste ist ein "work in progress". 
        Wenn du helfen möchtest findest du den <a class="underline" target="_blank" href="https://github.com/steampixel/smartphone-halts-maul">Code auf GitHub</a>.
      </p>

    </section>

  </div>

  <space></space>
  <space></space>

  <seperator></seperator>

  <space></space>
  <space></space>

  <div class="container">

    <h2 class="text-2xl font-bold text-gray-800">Legende</h2>
    <space></space>

    <span 
      class="block"
      v-for="(tag) in filterTags" 
      :key="tag.key">
      
      <span class="flex items-center">
        <icon class="mr-2 h-4 w-4" color="gray-600" :type="tag.icon"></icon>
        {{ tag.title }}
      </span>
    </span>

    <space></space>
    <space></space>

    <div v-for="(categoryTag, categoryIndex) in categoryTags" :key="categoryTag.key">

        <seperator></seperator>
        <space></space>

        <h2 class="text-2xl font-bold text-gray-800">{{ categoryIndex+1 }} {{categoryTag.title}}</h2>
        <space></space>

        <div v-for="(task, taskIndex) in categoryTasks(categoryTag.key)" :key="task.id" class="">

          <section class="">

            <div class="flex justify-between items-center">
              <h3 class="text-base xs:text-lg sm:text-xl font-bold text-gray-800 hyphenate flex items-center">
                <icon class="h-4 w-4 md:h-6 md:w-6 mr-2" color="gray-600" type="square"></icon>
                <div>{{ categoryIndex+1 }}.{{ taskIndex+1 }} {{ task.title }}</div>
              </h3>

              <div class="flex">
                <div 
                class=""
                v-for="(tag) in filterTags" 
                :key="tag.key">

                  <span class="inline-block ml-2" v-if="hasTag(task.tags, tag.key)" :title="tag.title">
                    <icon color="gray-600" :type="tag.icon"></icon>
                  </span>

                </div>
                
              </div>
              
            </div>

            <p class="text-base">
              {{ task.shortText }}
            </p>

            <div v-if="task.longText">
              <space></space>
              <p class="text-base">
                {{ task.longText }}
              </p>
            </div>

            <div v-if="task.links&&task.links.length">
              <space></space>
              <ul class="text-base list-disc list-inside">

                <li v-for="(link, index) in sortLinks(task.links)" :key="index">
                  <a target="_blank" :href="link.url" class="underline">
                    <span v-if="link.date">{{ link.date }} - </span>
                    <span>{{ link.title }}</span> - 
                    <span>{{ link.url }}</span>
                  </a>
                </li>

              </ul>
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

  useHead({
      title: 'Smartphone, halt\'s Maul! - Eine Checkliste für deine mobile Sicherheit',
      meta: [
        { 
          name: 'description', 
          content: 'Diese Checkliste soll dir helfen spielerisch deine Smartphone-Sicherheit zu überprüfen, damit du ein Gefühl für die Thematik entwickeln kannst. Die Liste enthält konkrete Vorschläge zur Verbesserung deiner Sicherheit. Punkte und Level sollen dich ermutigen so viel wie möglich abzuhaken.',
        }
      ],
      noscript: [{ children: "Sorry :-( Momentan ist Javascript für diese Website erforderlich. Es wird an einer Lösung gebastelt. Wenn du dich für die einzelnen Tipps interessierst kannst du dir diese auch gerne direkt aus dem Git-Repository ziehen: https://github.com/steampixel/smartphone-halts-maul/blob/main/config.js" }],
      // bodyAttrs: {
      //   class: 'test'
      // },
      // script: [ { innerHTML: 'console.log(\'Hello world\')' } ]
    })

    useSeoMeta({
      title: 'Smartphone, halt\'s Maul! - Eine Checkliste für deine mobile Sicherheit',
      ogTitle: 'Smartphone, halt\'s Maul! - Eine Checkliste für deine mobile Sicherheit',
      description: 'Diese Checkliste soll dir helfen spielerisch deine Smartphone-Sicherheit zu überprüfen, damit du ein Gefühl für die Thematik entwickeln kannst. Die Liste enthält konkrete Vorschläge zur Verbesserung deiner Sicherheit. Punkte und Level sollen dich ermutigen so viel wie möglich abzuhaken.',
      ogDescription: 'Diese Checkliste soll dir helfen spielerisch deine Smartphone-Sicherheit zu überprüfen, damit du ein Gefühl für die Thematik entwickeln kannst. Die Liste enthält konkrete Vorschläge zur Verbesserung deiner Sicherheit. Punkte und Level sollen dich ermutigen so viel wie möglich abzuhaken.',
      ogImage: 'https://smartphone-halts-maul.de/icon.png',
      // twitterCard: 'summary_large_image',
    })

</script>

<script>



  import Space from '~/components/Space.vue'
  import Icon from '~/components/Icon.vue'
  import Print from '~/components/Print.vue'
  import FooterPrint from '~/components/FooterPrint.vue'
  import Seperator from '~/components/Seperator.vue'

  import config from '~/config.js';

  export default {

    components: {
      Space, Icon, Print, FooterPrint, Seperator
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
        if(task.tags.includes(tag)) {
          return true;
        }
        return false;
      },

      hasTag(tags, tag) {
        if(tags.includes(tag)) {
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