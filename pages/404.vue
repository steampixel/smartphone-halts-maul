<template>
       
          

    <div class="container">

        <space></space>
        <space></space>
        <space></space>
        <space></space>

        <h1 class="text-gray-800">
            <div class="text-5xl md:text-6xl font-bold mb-2">🦄 Ups. Nichts gefunden :-(</div>
        </h1>

        <space></space>
        <space></space>

        <app-button @click="handleError">Zurück zur App</app-button>

    </div>

       
</template>
  
<script setup>

    import AppButton from '~/components/Button.vue'

    const error = useError();

    const handleError = () => {
        clearError({
            redirect: '/',
        });
    };

</script>

<script>

    export default {

        components: {
            AppButton
        }

    }

</script>

