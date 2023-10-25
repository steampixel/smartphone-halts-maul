<template>

  <div class="container">

    <space></space>

    <h1 class="text-gray-800">
      <div class="text-5xl md:text-6xl font-bold mb-2">Smartphone halt's Maul!</div>
      <div class="text-2xl">✔ Eine Checkliste für deine mobile Sicherheit</div>
    </h1>

    <space></space>
    <space></space>

    <p>
      Diese Checkliste soll dir helfen spielerisch deine Smartphone-Sicherheit zu überprüfen, 
      damit du ein Gefühl für die Thematik entwickeln kannst. 
      Die Liste enthält konkrete Vorschläge zur Verbesserung deiner Sicherheit. 
      Punkte und Level sollen dich ermutigen so viel wie möglich abzuhaken. 
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
    </p>

    <space></space>
    <space></space>

  </div>

  <div>

    <!-- Sticky bar -->
    <div class="sticky top-0 z-10 text-white bg-gray-800 p-2 md:p-4">

      <div class="container">

        <div class="flex flex-wrap justify-between items-center">

        <div class="text-3xl cursor-pointer" @click="unicornConfetti()">🦄</div>

        <div class="text-center">

          Level <span class="font-bold text-2xl md:text-3xl">{{level}}</span>,
          <span class="font-bold text-2xl md:text-3xl">{{points}}</span> Punkte

        </div>

        <div class="text-3xl cursor-pointer" @click="rainbowConfetti()">🌈</div>

        </div>

      </div>

    </div>

    <div class="container">

      <space></space>
      <space></space>

      <h2 class="text-2xl font-bold text-gray-800">Liste filtern</h2>

      <space></space>

      <p>
        Hier kannst du die Items der Liste nach bestimmten Kriterien filtern indem du sie ausschließt. Dadurch kannst du einen besseren Überblick gewinnen und dir zum Beispiel zunächst die leichtesten Aufgaben vornehmen.
      </p>

      <space></space>

      <div class="flex flex-wrap">
        <div 
          v-for="(tag) in filterTags" 
          :key="tag.key" 
          @click="tag.disabled=!tag.disabled" 
          :class="(tag.disabled?'line-through':'')+' cursor-pointer text-sm mr-4'"
          :aria-label="tag.title"
          role="button">
          {{tag.icon}} {{tag.title}}
        </div>
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
          content: 'Diese Checkliste soll dir helfen spielerisch deine Smartphone-Sicherheit zu überprüfen, damit du ein Gefühl für die Thematik entwickeln kannst. Die Liste enthält konkrete Vorschläge zur Verbesserung deiner Sicherheit. Punkte und Level sollen dich ermutigen so viel wie möglich abzuhaken.' 
        }
      ],
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
      // ogImage: 'https://example.com/image.png',
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
        level: 1,
        showWelcomeModal: false
      }
    },

    mounted: function () {

      jsConfetti = new JSConfetti()

      // Enable confetti after 2 seconds
      // We dont want to fire confetti on loading from local storage...
      enableConfetti = false;
      setTimeout(() => {
        enableConfetti = true;
      }, 2000);
      
    },

    watch: {
      points: {
        handler(newValue, oldValue) {

          // Calculate level
          this.level = Math.ceil(newValue / 800);

        },
        deep: true,
      },
      level: {
        handler(newValue, oldValue) {

          if(newValue>oldValue) {
            if(enableConfetti) {

              jsConfetti.addConfetti({
                emojis: ['🌈', '🦄', 'LEVEL UP'],
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

        let found = true;

        task.tags.forEach((taskTag) => {

          this.filterTags.forEach((filterTag) => {

            // console.log(filterTag.key, taskTag);

            if(filterTag.disabled&&filterTag.key == taskTag) {
              found = false;
            }

          });

        });
       
        return found;
      },

      unicornConfetti() {
        jsConfetti.addConfetti({
          emojis: ['🦄'],
        })
      },

      rainbowConfetti() {
        jsConfetti.addConfetti({
          emojis: ['🌈'],
        })
      },

      done(points) {

        this.points = this.points + points;

      },

      revoke(points) {

        this.points = this.points - points;

      },

      clearAll() {
        localStorage.clear();
        location.reload(); 
      }

    }



  }

</script>