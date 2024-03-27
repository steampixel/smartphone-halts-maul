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
        Die Druckversion findest du <a class="underline" href="/handout" title="Interaktive Version">hier</a>.
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

  import config from '~/config.json';

  // Warning! For some strange reason tasks is an object here with strings as numeric keys!
  // let canonicals = [];
  // for (let i in config.tasks) {
  //   canonicals.push({
  //     rel: 'canonical',
  //     href: 'https://smartphone-halts-maul.de/' + config.tasks[i].slug['de'],
  //   });
  // }

  const { t } = useI18n()

  useHead({
    title: t('checklist')+' - '+t('seoTitle'),
  })

</script>

<script>

  import List from '~/components/List.vue'
  import Space from '~/components/Space.vue'
  import AppButton from '~/components/Button.vue'
  import AppFooter from '~/components/Footer.vue'
  import config from '~/config.json';

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