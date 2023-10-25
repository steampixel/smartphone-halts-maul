<template>

  <Teleport to="body">

    <div v-if="show" class="z-20 modal fixed w-full h-full top-0 left-0 flex items-center justify-center">

      <div class="absolute w-full h-full bg-gray-800 opacity-50" @click="close()"></div>

      <div :class="'max-h-full overflow-auto md:w-1/2 bg-white mx-auto rounded-lg shadow-lg z-10 overflow-y-auto'">

        <!--Title-->
        <div class="px-4 pt-4 flex justify-between items-start">
          <div class="text-2xl font-bold text-gray-800">{{title}}</div>
          <div class="pl-4 cursor-pointer z-20" @click="close()">
            <svg class="fill-current text-black" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18">
              <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"></path>
            </svg>
          </div>
        </div>

        <!--Body-->
        <div class="px-4 py-4">
          <slot>

          </slot>
        </div>

        <!--Footer-->
        <div class="px-4 pt-4 flex justify-end" >
          <app-button @click="close">Schließen</app-button>
        </div>

      </div>
    </div>

  </Teleport>

</template>

<script>

import AppButton from '~/components/Button.vue'

export default {
  components: {
    AppButton
  },
  
  props: {
    title: {
      type: String,
      default: ''
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}

</script>

<style>

</style>
