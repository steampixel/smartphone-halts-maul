<template>

<button 
  type="button" 
  @click="$emit('click')" 
  :class="colorClass+' '+text+' shadow-md hover:scale-105 transition-all focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2'">
  <slot></slot>
</button>

</template>

<script>

export default {
  props: {
    color: {
      type: String,
      default: 'dark'
    },
    text: {
      type: String,
      default: 'text-white'
    }
  },
  computed: {
      colorClass: function () {
        switch (this.color) {
          case 'light':
            return 'bg-gray-200 hover:bg-gray-300 focus:ring-gray-300';
          case 'medium':
            return 'bg-gray-400 hover:bg-gray-500 focus:ring-gray-300';
          case 'pink':
            return 'bg-pink-600 hover:bg-pink-700 focus:ring-gray-300';
          default:
            return 'bg-gray-800 hover:bg-gray-900 focus:ring-gray-300';
        }
      }
  }
}

</script>

<style>



</style>
