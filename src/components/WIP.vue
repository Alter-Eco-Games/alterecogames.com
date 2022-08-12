<script setup lang="ts">
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
</script>

<template>
  <div flex flex-col items-center px-8>
    <h2 lsp-1 font-serif text-8 mb-16 lt-sm:text-6>
      {{ t('WIP.pageTitle') }}
    </h2>
    <img src="../assets/WIP.svg" w-3xl>
  </div>
</template>
