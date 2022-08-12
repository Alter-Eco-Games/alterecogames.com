<route lang="json">
{
  "meta":{
    "order": -1,
    "invisable":true
  }
}
</route>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

import { useI18nTitle } from '~/composables'

const { t } = useI18nTitle('home')

const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('sm')
</script>

<template>
  <div flex flex-col px-8>
    <h1 v-if="isMobile" lsp-1 font-serif text-6 text-center mb-21>
      {{ t('404.pageTitle') }}
    </h1>
    <img v-if="isMobile" src="../assets/mobile-page-not-found.svg">
    <img v-else src="../assets/page-not-found.svg" mx-auto mt-24>
  </div>
</template>
