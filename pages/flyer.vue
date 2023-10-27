<template>
       
          

    <div class="container">

        <space></space>
        <space></space>

        <h1 class="text-gray-800 text-center">
            <div class="text-5xl md:text-6xl font-bold mb-2">🦄 smartphone-halts-maul.de</div>
            <div class="text-2xl">✔ Eine Checkliste für deine mobile Sicherheit</div>
        </h1>

        <space></space>
        <space></space>

        <p class="text-center">
            Diese Checkliste soll dir helfen spielerisch deine Smartphone-Sicherheit zu überprüfen, 
            damit du ein Gefühl für die Thematik entwickeln kannst. 
            Die Liste enthält konkrete Vorschläge zur Verbesserung deiner Sicherheit. 
            Punkte und Level sollen dich ermutigen so viel wie möglich abzuhaken. 
        </p>

        <space></space>
        <space></space>

        <div class="flex justify-center">
            <vue-qrcode value="https://smartphone-halts-maul.de/" :options="{ width: 400 }"></vue-qrcode>
        </div>

        <div class="text-center">smartphone-halts-maul.de</div>

        <div class="print:hidden">

            <space></space>
            <space></space>

            <app-button @click="print">Drucken</app-button>
        </div>

    </div>

       
</template>
  
<script setup>

    import AppButton from '~/components/Button.vue'

</script>

<script>

    import VueQrcode from '@chenfengyuan/vue-qrcode';

    export default {

        components: {
            VueQrcode, AppButton
        },

        methods: {

            print() {
                window.print();
            }

        }

    }

</script>

