<route lang="json">
{
  "meta":{
    "order": 5
  }
}
</route>

<script setup lang="ts">
import { useI18nTitle } from '~/composables'

const { t } = useI18nTitle('bugs')
</script>

<template>
  <div>
    <WIP />
  </div>
</template>
