<template>

  <div v-if="visible" :class="'relative mb-4 block p-4 md:p-8 hover:scale-105 transition-all border border-gray-200 rounded-lg shadow '+(false?'bg-green-100 hover:bg-green-200':'bg-white hover:bg-gray-100')">

    <div class="flex justify-between">

      <div class="text-sm italic">{{points}} Punkte</div>

      <div class="flex text-sm">

        <div 
          v-for="(tag) in filterTags" 
          :key="tag.key">

          <span v-if="hasTag(this.tags, tag.key)" :title="tag.title">{{ tag.icon }}</span>

        </div>

      </div>

    </div>

    <space></space>

    <div class="">

      <label :for="'checkbox'+id" class="cursor-pointer block w-full">

        <div class="flex items-baseline">

          <input :id="'checkbox'+id" type="checkbox" v-model="completed" value="" class="accent-pink-500 scale-150 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

          <h3 class="text-xl font-bold text-gray-800 ml-4">{{title}}</h3>

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
        color="bg-gray-200 hover:bg-gray-300"
        text="text-black">🎓 Mehr Informationen</app-button>

    </div>

    <!-- Modal -->
    <modal @close="showModal=false" :show="showModal" :title="'🎓 '+title">
      <div class="text-base">
          {{longText}}
      </div>

      <div v-if="links&&links.length">

        <space></space>
        
        <div class="text-base font-bold">Weiterführende Links</div>

        <space></space>

        <ul class="text-base list-disc list-inside">

          <li v-for="(link, index) in links" :key="index">
            <a target="_blank" :href="link.url" class="underline">{{ link.title }}</a>
          </li>

        </ul>

      </div>

      <space></space>

      <div class="text-base font-bold">Tags</div>

      <space></space>

      <ul 
        v-for="(tag) in filterTags" 
        :key="tag.key">

        <li v-if="hasTag(this.tags, tag.key)" :title="tag.title">{{ tag.icon }} {{tag.title}}</li>

      </ul>

    </modal>

  </div>

</template>

<script>

  import config from '~/config.js';

  import Modal from '~/components/Modal.vue'
  import Space from '~/components/Space.vue'
  import AppButton from '~/components/Button.vue'

  export default {

    components: {
      Modal, Space, AppButton
    },

    props: [
      'visible', 'id', 'title', 'shortText', 'longText', 'tags', 'showMore', 'links', 'points', 'checked'
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
      uncomfortable: function () {
        return  this.tags.includes('uncomfortable'); 
      },
      expensive: function () {
        return  this.tags.includes('expensive'); 
      }
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