<template>

  <div v-if="visible" :class="'relative mb-4 block p-2 md:p-4 hover:scale-105 transition-all border border-gray-200 rounded-lg shadow '+(completed?'bg-green-100 hover:bg-green-200':'bg-white hover:bg-gray-100')">

    <div class="flex justify-between">

      <div class="text-sm">{{points}} Punkte</div>

      <div class="flex text-sm">

        <div 
          v-for="(tag) in filterTags" 
          :key="tag.key">

          <span v-if="hasTag(this.tags, tag.key)" :title="tag.title">{{ tag.icon }}</span>

        </div>

      </div>

    </div>

    <space></space>

    <div class="flex items-baseline">

      <input :id="'checkbox'+id" type="checkbox" v-model="completed" value="" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
      
      <div class="ml-2">

        <label :for="'checkbox'+id" class="cursor-pointer block w-full">

          <h3 class="text-xl font-bold text-gray-800">{{title}}</h3>

          <div class="mb-2"></div>

          <div class="text-base">
            {{shortText}}
          </div>

        </label>

        <space></space>

        <button v-if="showMore" class="text-base cursor-pointer" @click="showModal=true">🎓 Mehr Informationen</button>

      </div>

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

  import Modal from '~/components/Space.vue'
  import Space from '~/components/Space.vue'


  export default {

    components: {
      Modal, Space
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