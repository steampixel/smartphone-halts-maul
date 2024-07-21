<template>

  <div>

    <!-- Sticky bar -->
    <div class="sticky top-0 z-10 text-white bg-gray-800 shadow-md">

      <navbar></navbar>

      <div class="px-2 pb-2 md:px-4 md:pb-4">

        <div class="container">

          <div class="flex flex-wrap justify-between items-center">

            <button aria-label="Regenbogen-Konfetti" class="hidden xs:block text-3xl cursor-pointer hover:scale-125 transition-all" @click="candyConfetti()">
              <img class="inline-block unicorn h-10 w-10" src="/unicorn.png" />
            </button>

            <div class="text-center">

              {{ $t('listLevel') }} <span class="font-bold text-2xl md:text-3xl">{{level}}</span><span>, </span>
              <span class="font-bold text-2xl md:text-3xl">{{points.toLocaleString()}}</span> {{ $t('listPoints') }}

            </div>

            <div class="hidden md:block"></div>

          </div>

        </div>

      </div>

      <div class="h-1 bg-pink-600" :style="{width: percentage + '%'}"></div>

    </div>

    <div class="container">

      <space></space>
      <space></space>

      <h2 class="text-2xl font-bold text-gray-800">{{ $t('listFilter') }}</h2>

      <space></space>
      <space></space>

      <div>
        <span 
          class="inline-block max-w-full"
          v-for="(tag) in filterTags" 
          @click="tag.enabled=!tag.enabled"
          :key="tag.key">
          <app-button 
            :aria-label="tag.title[$i18n.locale]" 
            :color="(tag.enabled?'pink':'dark')"
            class="hover:scale-105 transition-all cursor-pointer mr-4 max-w-full">
            <span class="inline-flex hyphenate items-center">
              <icon class="mr-2 h-4 w-4" :type="tag.icon"></icon>
              {{ tag.title[$i18n.locale] }}
            </span>
          </app-button>
        </span>

        <span 
          class="inline-block max-w-full"
          @click="showCompleted=!showCompleted">
          <app-button 
            aria-label="Abgeschlossene ausblenden" 
            :color="(!showCompleted?'pink':'dark')"
            class="hover:scale-105 transition-all cursor-pointer mr-4 max-w-full">
            <span class="inline-flex hyphenate items-center">
              <icon class="mr-2 h-4 w-4" type="check"></icon>
              {{ $t('listFilterShowCompleted') }}
            </span>
          </app-button>
        </span>
        
        <input class="
        shadow-md hover:scale-105 transition-all focus:outline-none focus:ring-4 
        font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2
        bg-gray-200 hover:bg-gray-300 focus:ring-gray-300
        " :placeholder="$t('search')" v-model="search">

      </div>

    </div>

    <space></space>
    <space></space>

    <space></space>
    <space></space>

    <div class="container">

      <div v-for="(task) in tasks" :key="task.id" class="">

        <task 
          :visible="(taskIsEnabled(task))"
          :showCompleted="showCompleted"
          :id="task.id" 
          :title="task.title[$i18n.locale]" 
          :shortText="task.shortText[$i18n.locale]" 
          :longText="task.longText[$i18n.locale]" 
          :tags="task.tags"
          :showMore="task.showMore"
          :links="task.links"
          :points="task.points"
          :checked="task.checked"
          :slug="task.slug[$i18n.locale]"
          @done="done"
          @revoke="revoke">
        </task>

      </div>

    </div>

    <space></space>
    <space></space>

    <div class="container">

      <div class="w-full sm:w-1/2">
        <p class="text-sm">
          {{ $t('listPrivacyStatement') }}
        </p>
      </div>

      <space></space>

      <app-button @click="clearAll">{{ $t('listDeleteAllData') }}</app-button>
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
import Navbar from '~/components/Navbar.vue'

import config from '~/config.json';

var jsConfetti;

var enableConfetti = false;

export default {
  
  components: {
    Task, AppButton, Space, Modal, Icon, Seperator, Navbar
  },

  data: function() {
    return {
      categoryTags: config.categoryTags,
      filterTags: config.filterTags,
      showCompleted: false,
      tasks: config.tasks,
      points: 0,
      level: 1,
      percentage: 0,
      search: ''
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
      if(task && task.tags && task.tags.includes(tag)) {
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
      
      if(this.search) {
        if(JSON.stringify(task).toLowerCase().includes(this.search.toLowerCase())) {
          found = true;
        }
      }

      if(filterEnabled) {

        if(task && task.tags) {
          task.tags.forEach((taskTag) => {

            this.filterTags.forEach((filterTag) => {

              if(
                filterTag.enabled&&filterTag.key == taskTag
                ) {
                found = true;
              }

            });

          });
        }

      } else {
        if(!this.search) {
          found = true;
        }
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
