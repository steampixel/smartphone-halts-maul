<template>

  <div class="container min-h-screen flex justify-center items-center">

    <div class="w-full">

      <space></space>
      <space></space>

      <h1 class="text-gray-800 hyphenate">
        <div class="text-5xl md:text-6xl font-bold mb-2">
          <img class="inline-block unicorn h-20 w-20" src="/unicorn.png" />
          Smartphone, halt's Maul!
        </div>
        <div class="text-2xl">✔ Eine Checkliste für deine mobile Sicherheit</div>
      </h1>

      <space></space>
      <space></space>

      <p>
        Diese Checkliste soll dir helfen spielerisch deine Smartphone-Sicherheit zu überprüfen, 
        damit du ein Gefühl für die Thematik entwickeln kannst. 
        Die Liste enthält <span class="font-bold">{{ tasks.length }}</span> konkrete Vorschläge zur Verbesserung deiner Sicherheit. 
        Punkte und Level sollen dich ermutigen so viel wie möglich abzuhaken. 
        Du kannst maximal  <span class="font-bold">{{ countLevels() }}</span> Level aufsteigen.
      </p>

      <space></space>

      <p>
        Bitte sei dir bewusst, dass Sicherheit immer auch von individuellen Risiken abhängt.
        Einige der hier beschriebenen Aufgaben schließen sich eventuell gegenseitig aus.
        Am Ende ist Sicherheit immer eine Abwägung. Absolute Sicherheit gibt es nicht.
      </p>

      <space></space>

      <p>
        Dein persönlicher Fortschritt wird ausschließlich in deinem Browser gespeichert.
        Du kannst alle Daten jeder Zeit mit dem Button ganz am Ende der Liste löschen.
        Diese Liste ist ein "work in progress". 
        Wenn du helfen möchtest findest du den <a class="underline" target="_blank" href="https://github.com/steampixel/smartphone-halts-maul">Code auf GitHub</a>.
      </p>

      <space></space>
      <space></space>

      <app-button @click="start">Starte jetzt</app-button>

      <space></space>
      <space></space>

    </div>

  </div>

  

  <div class="container">

    <space></space>
    <space></space>

    <div v-for="(categoryTag) in categoryTags" :key="categoryTag.key">

      <div class="container">

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
        <space></space>

        <h2 class="text-2xl font-bold text-gray-800">{{categoryTag.title}}</h2>

        <space></space>

        <div v-for="(task) in tasks" :key="task.id" class="">

          {{ task.title }}

        </div>

      </div>

      <space></space>

    </div>
    
  </div>

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

  import config from '~/config.js';

  export default {

    components: {
      Space, Icon
    },

    data: function() {
      return {
        version: config.version,
        lastUpdated: config.lastUpdated,
        categoryTags: config.categoryTags,
        tasks: config.tasks,
      }
    },


  }

</script>