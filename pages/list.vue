<template>

  <!-- <div class="container min-h-screen flex justify-center items-center">

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
        Willkommen bei der interaktiven Variante! Sammle so viele Punkte und Level wie möglich!
        Dein persönlicher Fortschritt wird ausschließlich in deinem Browser gespeichert.
        Du kannst alle Daten jeder Zeit mit dem Button ganz am Ende der Liste löschen.
        Die Druckversion findest du <a class="underline" href="/print" title="Interaktive Version">hier</a>.
      </p>

      <space></space>
      <space></space>

      <app-button @click="start">Zur Liste</app-button>

    </div>

  </div> -->

  <div ref="mainsection">
    <list></list>
  </div>

  <app-footer></app-footer>

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
      // noscript: [{ children: "Sorry :-( Momentan ist Javascript für diese Website erforderlich. Es wird an einer Lösung gebastelt. Wenn du dich für die einzelnen Tipps interessierst kannst du dir diese auch gerne direkt aus dem Git-Repository ziehen: https://github.com/steampixel/smartphone-halts-maul/blob/main/config.js" }],
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

  import List from '~/components/List.vue'
  import Space from '~/components/Space.vue'
  import AppButton from '~/components/Button.vue'
  import AppFooter from '~/components/Footer.vue'
  import config from '~/config.js';

  export default {

    components: {
      List, Space, AppButton, AppFooter
    },

    data: function() {
      return {
        tasks: config.tasks,
        points: 0,
        level: 1,
      }
    },

    

    methods: {

      countPoints() {
        let points = 0;
        this.tasks.forEach((task) => {
          points = points + task.points;
        });
        return points;
      },

      countLevels() {
        let points = this.countPoints();
        return this.calculateLevel(points);;
      },

      calculateLevel(points) {
        return Math.ceil(points / config.pointsPerLevel);
      },

      // start() {
      //   this.$refs["mainsection"].scrollIntoView({ behavior: "smooth" })
      // },

    }

  }

</script>