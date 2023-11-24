<template>

  <div>

    <!-- Sticky bar -->
    <div class="sticky top-0 z-10 text-white bg-gray-800 shadow-md">

      <div class="p-2 md:p-4">

        <div class="container">

          <div class="flex flex-wrap justify-between items-center">

            <button aria-label="Regenbogen-Konfetti" class="hidden xs:block text-3xl cursor-pointer hover:scale-125 transition-all" @click="candyConfetti()">
              <icon class="h-4 w-4 md:h-8 md:w-8" color="pink-500" type="candy"></icon>
            </button>

            <div class="text-center">

              Level <span class="font-bold text-2xl md:text-3xl">{{level}}</span>,
              <span class="font-bold text-2xl md:text-3xl">{{points.toLocaleString()}}</span> Punkte

            </div>

            <button aria-label="Candy-Konfetti" class="hidden xs:block text-3xl cursor-pointer hover:scale-125 transition-all" @click="candyConfetti()">
              <icon class="h-4 w-4 md:h-8 md:w-8" color="pink-500" type="candy"></icon>
            </button>

          </div>

        </div>

      </div>

      <div class="h-1 bg-pink-600" :style="{width: percentage + '%'}"></div>

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
            :color="(tag.enabled?'bg-pink-600 hover:bg-pink-700':'bg-gray-800 hover:bg-gray-900')"
            class="hover:scale-105 transition-all cursor-pointer mr-4 max-w-full">
            <span class="inline-flex hyphenate items-center">
              <icon class="mr-2 h-4 w-4" :type="tag.icon"></icon>
              {{ tag.title }}
            </span>
          </app-button>
        </span>

        <span 
          class="inline-block max-w-full"
          @click="showCompleted=!showCompleted">
          <app-button 
            aria-label="Abgeschlossene ausblenden" 
            :color="(!showCompleted?'bg-pink-600 hover:bg-pink-700':'bg-gray-800 hover:bg-gray-900')"
            class="hover:scale-105 transition-all cursor-pointer mr-4 max-w-full">
            <span class="inline-flex hyphenate items-center">
              <icon class="mr-2 h-4 w-4" type="check"></icon>
              Abgeschlossene zeigen
            </span>
          </app-button>
        </span>

      </div>

    </div>

    <space></space>
    <space></space>

    <div v-for="(categoryTag) in categoryTags" :key="categoryTag.key">

      <div class="container">

        <seperator></seperator>
        <space></space>

        <h2 class="text-2xl font-bold text-gray-800">{{categoryTag.title}}</h2>

        <space></space>

        <div v-for="(task) in tasks" :key="task.id" class="">

          <task 
            v-if="taskHasTag(task, categoryTag.key)"
            :visible="(taskIsEnabled(task))"
            :showCompleted="showCompleted"
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

    <div class="container">
      <app-button @click="clearAll">Lösche alle Daten aus meinem Browser</app-button>
    </div>

  </div>

</template>

<script>

import JSConfetti from 'js-confetti'

import Task from '~/components/Task.vue'
import AppButton from '~/components/Button.vue'
import Space from '~/components/Space.vue'
import Seperator from '~/components/Seperator.vue'
import Modal from '~/components/Modal.vue'
import Icon from '~/components/Icon.vue'

import config from '~/config.js';

var jsConfetti;

var enableConfetti = false;

export default {
  
  components: {
    Task, AppButton, Space, Modal, Icon, Seperator
  },

  data: function() {
    return {
      categoryTags: config.categoryTags,
      filterTags: config.filterTags,
      showCompleted: false,
      tasks: config.tasks,
      points: 0,
      level: 1,
      percentage: 0
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

        // Percentage
        this.percentage = Math.floor(newValue / this.countPoints() * 100);

        if(newValue>oldValue) {
          let audio = new Audio('/sounds/coin.mp3');
          audio.play();
        }

      },
      deep: true,
    },
    level: {
      handler(newValue, oldValue) {

        // Do we need confetti?
        if(newValue>oldValue) {
          if(enableConfetti) {

            jsConfetti.addConfetti({
              emojis: ['🦄', '🍬', 'LEVEL UP'],
            })

            let audio = new Audio('/sounds/yay.mp3');
            audio.play();

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

            if(
              filterTag.enabled&&filterTag.key == taskTag
              ) {
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

}

}

</script>

<style>



</style>
