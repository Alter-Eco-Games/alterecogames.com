<script setup lang="ts">
import WIPSVG from '../assets/WIP.svg?url'
interface Props {
  title?: string
}
defineProps<Props>()
const { t } = useI18n()
</script>

<template>
  <div flex flex-col items-center px-8>
    <h2 lsp-1 font-serif text-8 mb-16 lt-sm:text-6>
      {{ title ?? t('WIP.UC') }}
    </h2>
    <img :src="WIPSVG" w-3xl>
  </div>
</template>
