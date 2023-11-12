<template>

  <div class="container min-h-screen flex justify-center items-center">

    <div class="w-full">

      <space></space>
      <space></space>

      <h1 class="text-gray-800 hyphenate">
        <div class="text-5xl md:text-6xl font-bold mb-2"><span class="inline-block unicorn">🦄</span> Smartphone halt's Maul!</div>
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

  <div ref="mainsection">

    <!-- Sticky bar -->
    <div class="sticky top-0 z-10 text-white bg-gray-800 p-2 md:p-4 shadow-md">

      <div class="container">

        <div class="flex flex-wrap justify-between items-center">

          <button aria-label="Regenbogen-Konfetti" class="hidden xs:block text-3xl cursor-pointer hover:scale-125 transition-all" @click="candyConfetti()">🍬</button>

          <div class="text-center">

            Level <span class="font-bold text-2xl md:text-3xl">{{level}}</span>,
            <span class="font-bold text-2xl md:text-3xl">{{points}}</span> Punkte

          </div>

          <button aria-label="Candy-Konfetti" class="hidden xs:block text-3xl cursor-pointer hover:scale-125 transition-all" @click="candyConfetti()">🍬</button>

        </div>

      </div>

    </div>

    <div class="container">

      <space></space>
      <space></space>

      <h2 class="text-2xl font-bold text-gray-800">Liste filtern</h2>

      <space></space>
      <space></space>

      <div>
        <span 
          class="inline-block max-w-full"
          v-for="(tag) in filterTags" 
          @click="tag.enabled=!tag.enabled"
          :key="tag.key">
          <app-button 
            :aria-label="tag.title" 
            :color="(tag.enabled?'bg-green-800 hover:bg-green-900':'bg-gray-800 hover:bg-gray-900')"
            class="hover:scale-105 transition-all cursor-pointer mr-4 max-w-full">
            <span class="hyphenate">
              {{ tag.icon }} {{ tag.title }}
            </span>
          </app-button>
        </span>
      </div>

    </div>

    <space></space>
    <space></space>

    <div v-for="(categoryTag) in categoryTags" :key="categoryTag.key">

      <div class="container">

        <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">
        <space></space>

        <h2 class="text-2xl font-bold text-gray-800">{{categoryTag.title}}</h2>

        <space></space>

        <div v-for="(task) in tasks" :key="task.id" class="">

          <task 
            v-if="taskHasTag(task, categoryTag.key)"
            :visible="(taskIsEnabled(task))"
            :id="task.id" 
            :title="task.title" 
            :shortText="task.shortText" 
            :longText="task.longText" 
            :tags="task.tags"
            :showMore="task.showMore"
            :links="task.links"
            :points="task.points"
            :checked="task.checked"
            @done="done"
            @revoke="revoke">
          </task>

        </div>

      </div>

      <space></space>

    </div>
    
    <hr class="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700">

    <div class="container">

      <app-button @click="clearAll">Lösche alle Daten aus meinem Browser</app-button>

      <space></space>

      <p class="text-sm">
        Ein <a target="_blank" href="https://steampixel.de">steampixel</a> Projekt | 
        Version: {{ version }} | 
        Stand: {{ lastUpdated }} | 
        Lizenz: MIT | 
        <a target="_blank" href="https://smartphone-halts-maul.de/flyer">Flyer</a> |
        <a target="_blank" href="https://github.com/steampixel/smartphone-halts-maul">GitHub</a> |
        <a target="_blank" href="https://steampixel.de/impressum/">Impressum</a> |
        <a target="_blank" href="https://steampixel.de/datenschutzerklaerung/">Datenschutz</a>
      </p>

      <space></space>

    </div>



  </div>

</template>

<script setup>

  useHead({
      title: 'Smartphone halt\'s Maul - Eine Checkliste für deine mobile Sicherheit',
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
      title: 'Smartphone halt\'s Maul - Eine Checkliste für deine mobile Sicherheit',
      ogTitle: 'Smartphone halt\'s Maul - Eine Checkliste für deine mobile Sicherheit',
      description: 'Diese Checkliste soll dir helfen spielerisch deine Smartphone-Sicherheit zu überprüfen, damit du ein Gefühl für die Thematik entwickeln kannst. Die Liste enthält konkrete Vorschläge zur Verbesserung deiner Sicherheit. Punkte und Level sollen dich ermutigen so viel wie möglich abzuhaken.',
      ogDescription: 'Diese Checkliste soll dir helfen spielerisch deine Smartphone-Sicherheit zu überprüfen, damit du ein Gefühl für die Thematik entwickeln kannst. Die Liste enthält konkrete Vorschläge zur Verbesserung deiner Sicherheit. Punkte und Level sollen dich ermutigen so viel wie möglich abzuhaken.',
      ogImage: 'https://smartphone-halts-maul.de/icon.png',
      // twitterCard: 'summary_large_image',
    })

</script>

<script>


  import JSConfetti from 'js-confetti'

  import Task from '~/components/Task.vue'
  import AppButton from '~/components/Button.vue'
  import Space from '~/components/Space.vue'
  import Modal from '~/components/Space.vue'

  import config from '~/config.js';

  var jsConfetti;

  var enableConfetti = false;

  export default {

    components: {
      Task, AppButton, Space, Modal
    },

    data: function() {
      return {
        version: config.version,
        lastUpdated: config.lastUpdated,
        categoryTags: config.categoryTags,
        filterTags: config.filterTags,
        tasks: config.tasks,
        points: 0,
        level: 1
      }
    },

    mounted: function () {

      jsConfetti = new JSConfetti()

      // Enable confetti after 2 seconds
      // We don't want to fire confetti on loading from local storage...
      enableConfetti = false;
      setTimeout(() => {
        enableConfetti = true;
      }, 2000);
      
    },

    watch: {
      points: {
        handler(newValue, oldValue) {

          // Calculate level
          this.level = this.calculateLevel(newValue);

        },
        deep: true,
      },
      level: {
        handler(newValue, oldValue) {

          if(newValue>oldValue) {
            if(enableConfetti) {

              jsConfetti.addConfetti({
                emojis: ['🦄', '🍬', 'LEVEL UP'],
              })

            }
          }

        },
        deep: true,
      },
    },

    methods: {

      taskHasTag(task, tag) {
        if(task.tags.includes(tag)) {
          return true;
        }
        return false;
      },

      taskIsEnabled(task) {

        let found = false;
        let filterEnabled = false;

        // Check if a filter is enabled
        this.filterTags.forEach((filterTag) => {
          if(filterTag.enabled) {
            filterEnabled = true;
          }
        });

        if(filterEnabled) {

          task.tags.forEach((taskTag) => {

          this.filterTags.forEach((filterTag) => {

            // console.log(filterTag.key, taskTag);

            if(filterTag.enabled&&filterTag.key == taskTag) {
              found = true;
            }

          });

          });

        } else {

          found = true;

        }
       
        return found;
      },

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

      candyConfetti() {
        jsConfetti.addConfetti({
          emojis: ['🍬'],
          confettiNumber: this.level,
        })
      },

      // rainbowConfetti() {
      //   jsConfetti.addConfetti({
      //     emojis: ['🌈'],
      //     confettiNumber: this.level,
      //   })
      // },

      done(points) {

        this.points = this.points + points;

      },

      revoke(points) {

        this.points = this.points - points;

      },

      clearAll() {
        localStorage.clear();
        location.reload(); 
      },

      start() {
        this.$refs["mainsection"].scrollIntoView({ behavior: "smooth" })
      },

    }



  }

</script>