<template>

  <div v-if="!(completed&&showCompleted) && visible" :class="'relative mb-4 block p-4 md:p-8 hover:scale-105 transition-all border border-gray-200 rounded-lg shadow '+(false?'bg-green-100 hover:bg-green-200':'bg-white hover:bg-gray-100')">

    <div class="flex justify-between">

      <div class="text-sm italic">{{points}} Punkte</div>

      <div class="flex justify-end text-sm">

        <div 
          class=""
          v-for="(tag) in filterTags" 
          :key="tag.key">

          <span class="inline-block ml-2" v-if="hasTag(this.tags, tag.key)" :title="tag.title">
            <icon color="black" :type="tag.icon"></icon>
          </span>

        </div>

      </div>

    </div>

    <space></space>

    <div class="">

      <label :for="'checkbox'+id" class="cursor-pointer block w-full">

        <div class="flex items-baseline">

          <input :id="'checkbox'+id" type="checkbox" v-model="completed" value="" class="accent-pink-600 scale-150 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

          <h3 class="text-base xs:text-lg sm:text-xl font-bold text-gray-800 ml-4 hyphenate">
            {{title}}
          </h3>

        </div>

        <div class="mb-2"></div>

        <div class="text-base">
          {{shortText}}
        </div>

      </label>

      <space></space>

      <app-button 
        v-if="showMore" 
        @click="showModal=true" 
        color="light"
        text="text-black">Mehr Informationen</app-button>

    </div>

    <!-- Modal -->
    <modal @close="showModal=false" :show="showModal" :title="title">
      <div class="text-base">
          {{longText}}
      </div>

      <div v-if="links&&links.length">

        <space></space>
        
        <div class="text-base font-bold">Weiterführende Links</div>

        <space></space>

        <ol class="text-sm list-decimal list-inside">

          <li v-for="(link, index) in sortedLinks" :key="index">
            <a target="_blank" :href="link.url" class="underline">
              <span v-if="link.date">{{ link.date }} - </span>
              <span>{{ link.title }}</span>
            </a>
          </li>

        </ol>

      </div>

      <space></space>

      <div class="text-base font-bold">Tags</div>

      <space></space>

      <ul 
        v-for="(tag) in filterTags" 
        :key="tag.key">

        <li class="inline-flex text-sm items-center" v-if="hasTag(this.tags, tag.key)" :title="tag.title">
          <icon class="mr-2 h-4 w-4" color="black" :type="tag.icon"></icon>
          {{tag.title}}
        </li>

      </ul>

    </modal>

  </div>

</template>

<script>

  import config from '~/config.js';

  import Modal from '~/components/Modal.vue'
  import Space from '~/components/Space.vue'
  import AppButton from '~/components/Button.vue'
  import Icon from '~/components/Icon.vue'

  export default {

    components: {
      Modal, Space, AppButton, Icon
    },

    props: [
      'visible', 'id', 'title', 'shortText', 'longText', 'tags', 'showMore', 'links', 'points', 'checked', 'showCompleted'
    ],

    data: function() {
      return {
        completed: false,
        filterTags: config.filterTags,
        showModal: false
      }
    },

    computed: {
      easy: function () {
        return  this.tags.includes('easy'); 
      },
      knowledge: function () {
        return  this.tags.includes('knowledge'); 
      },
      security: function () {
        return  this.tags.includes('security'); 
      },
      behavior: function () {
        return  this.tags.includes('behavior'); 
      },
      expensive: function () {
        return  this.tags.includes('expensive'); 
      },
      sortedLinks() {        
        return this.links
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

    mounted: function () {

      const component = this;

      // Load checkbox value from local storage
      if (localStorage.getItem('task-'+this.id) !== null) {

        if (localStorage.getItem('task-'+this.id) === 'true') {
          this.completed = true;
        } else {
          this.completed = false;
        }

      }

      if(this.checked) {
        this.completed = true;
      }

    },

    watch: {
      completed: {
        handler(newValue, oldValue) {

          // Store the checkbox value to local storage
          if(this.completed) {
            localStorage.setItem('task-'+this.id, 'true');
          } else {
            localStorage.setItem('task-'+this.id, 'false');
          }

          // console.log(newValue, oldValue);

          // If this is checked
          if(newValue) {

            this.$emit('done', this.points);

          } else {

            this.$emit('revoke', this.points);

          }

        },
        deep: true,
      },
    },

    methods: {

      hasTag(tags, tag) {
        if(tags.includes(tag)) {
          return true;
        }
        return false;
      }

    }

    


  }

</script>