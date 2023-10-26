<template>

<button 
  type="button" 
  @click="$emit('click')" 
  :class="color+' '+text+' shadow-md hover:scale-105 transition-all focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700'">
  <slot></slot>
</button>

</template>

<script>

export default {
  props: {
    color: {
      type: String,
      default: 'bg-gray-800 hover:bg-gray-900'
    },
    text: {
      type: String,
      default: 'text-white'
    }
  }
}

</script>

<style>



</style>
