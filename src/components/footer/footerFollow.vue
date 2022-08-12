<script setup lang="ts">
interface Props {
  show: boolean
}

const props = defineProps<Props>()
const { t } = useI18n()
const icons = ['i-mdi-instagram', 'i-mdi-twitter', 'i-mdi-apple-ios', 'i-mdi-google-play']
</script>

<template>
  <div flex flex-col items-center>
    <h1 v-if="show" text-3 uppercase>
      {{ t('footer.pageTitles.follow') }}
    </h1>
    <div grid grid-rows-2 grid-cols-2 mt-2 text-brand-primary lt-md:grid-cols-4>
      <a v-for="icon, idx in icons" :key="idx" href="#" m-1 p-4 bg-footer-icons rd-36 flex justify-center items-center>
        <div :class="icon" />
      </a>
    </div>
  </div>
</template>
