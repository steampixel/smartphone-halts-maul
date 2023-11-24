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
        Diese Liste ist ein "work in progress".
        Wenn du helfen möchtest findest du den <a class="underline" target="_blank" href="https://github.com/steampixel/smartphone-halts-maul">Code auf GitHub</a>.
      </p>

      <space></space>

      <p>
        Wenn dein Browser kein JavaScript unterstützt kannst du dir die Druckversion ansehen.
      </p>

      <space></space>
      <space></space>

      <a href="/list" aria-label="Druckversion" title="Druckversion">
        <app-button>Interaktive Version starten</app-button>
      </a>

      <a href="/print" aria-label="Interaktive Version" title="Interaktive Version">
        <app-button>Druckversion ansehen</app-button>
      </a>

      <a href="/flyer" aria-label="Flyer drucken" title="Flyer drucken">
        <app-button>Flyer drucken</app-button>
      </a>

    </div>




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

  import Space from '~/components/Space.vue'
  import AppButton from '~/components/Button.vue'
  import AppFooter from '~/components/Footer.vue'
  import config from '~/config.js';

  export default {

    components: {
      Space, AppButton, AppFooter
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

      start() {
        this.$refs["mainsection"].scrollIntoView({ behavior: "smooth" })
      },

    }

  }

</script>