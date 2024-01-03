<template>
       
    <navbar></navbar>

    <div class="container">

        <space></space>
        <space></space>

        <h1 class="text-gray-800 text-center">
            <div class="text-5xl md:text-6xl font-bold mb-2">
                <img class="inline-block unicorn h-20 w-20" src="/unicorn.png" />
                {{ $t('title') }}
            </div>
            <div class="text-2xl">{{ $t('subtitle') }}</div>
        </h1>

        <space></space>
        <space></space>

        <p class="text-center">
            {{ $t('flyerText') }}
        </p>

        <space></space>
        <space></space>

        <div class="flex justify-center">
            <img src="/qr.png" title="QR-Code der Website" description="QR-Code der Website Smartphone, halt's Maul!">
        </div>

        <div class="text-center">smartphone-halts-maul.de</div>

        <print></print>

    </div>

    <app-footer></app-footer>
       
</template>
  
<script>

    import Print from '~/components/Print.vue'
    import AppFooter from '~/components/Footer.vue'
    import Navbar from '~/components/Navbar.vue'

    export default {

        components: {
            Print, AppFooter, Navbar
        },

    }

</script>

