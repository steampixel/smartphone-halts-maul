<template>

  <div class="container min-h-screen flex justify-center items-center">

    <div class="w-full">

      <space></space>
      <space></space>

      <h1 class="text-gray-800 hyphenate">
        <div class="text-5xl md:text-6xl font-bold mb-2">
          <img class="inline-block unicorn h-20 w-20" src="/unicorn.png" />
          {{ $t('title') }}
        </div>
        <div class="text-2xl">{{ $t('subtitle') }}</div>
      </h1>

      <space></space>
      <space></space>

      <p>
        {{ $t('introText', {count: tasks.length, levels: countLevels()}) }}
      </p>

      <space></space>

      <p>
        {{ $t('introText2') }}
      </p>

      <space></space>

      <!-- <p>
        Diese Liste ist ein "work in progress".
        Wenn du helfen möchtest findest du den <a class="underline" target="_blank" href="https://github.com/steampixel/smartphone-halts-maul">Code auf GitHub</a>.
      </p>

      <space></space>

      <p>
        Wenn dein Browser kein JavaScript unterstützt kannst du dir die Druckversion ansehen.
      </p>

      <space></space> -->
      <space></space>

      <NuxtLink :to="localePath('list')" :aria-label="$t('checklist')">
        <app-button>{{ $t('checklist') }}</app-button>
      </NuxtLink>

      <!-- <NuxtLink :to="localePath('tasks')" :aria-label="$t('buttonTasklist')">
        <app-button color="medium">{{ $t('buttonTasklist') }}</app-button>
      </NuxtLink> -->

      <NuxtLink :to="localePath('handout')" :aria-label="$t('handout')">
        <app-button color="medium">{{ $t('handout') }}</app-button>
      </NuxtLink>

      <NuxtLink :to="localePath('flyer')" :aria-label="$t('flyer')">
        <app-button color="medium">{{ $t('flyer') }}</app-button>
      </NuxtLink>

      <!-- <a href="https://github.com/steampixel/smartphone-halts-maul" target="_blank" aria-label="GitHub">
        <app-button color="medium">{{ $t('github') }}</app-button>
      </a> -->

    </div>




  </div>

  <app-footer></app-footer>

</template>

<script setup>

  const { t } = useI18n()

  useHead({
    title: t('seoTitle'),
    meta: [
      { 
        name: 'description', 
        content: t('seoDescription'),
      }
    ],
  })

  useSeoMeta({
    title: t('seoTitle'),
    ogTitle: t('seoTitle'),
    description: t('seoDescription'),
    ogDescription: t('seoDescription'),
    ogImage: 'https://smartphone-halts-maul.de/icon.png',
    // twitterCard: 'summary_large_image',
  })

</script>

<script>

  import Space from '~/components/Space.vue'
  import AppButton from '~/components/Button.vue'
  import AppFooter from '~/components/Footer.vue'
  import config from '~/config.json';

  export default {

    components: {
      Space, AppButton, AppFooter
    },

    data: function() {
      return {
        tasks: config.tasks,
        points: 0,
        level: 1,
      }
    },

    methods: {

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

      start() {
        this.$refs["mainsection"].scrollIntoView({ behavior: "smooth" })
      },

    }

  }

</script>