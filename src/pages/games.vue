<route lang="json">
{
  "meta":{
    "order": 2
  }
}
</route>

<script setup lang="ts">
import { useI18nTitle } from '~/composables'

const { t } = useI18nTitle('games')
</script>

<template>
  <div>
    <WIP :title="t('WIP.CS')" />
  </div>
</template>
