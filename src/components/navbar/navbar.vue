<script setup lang="ts">
import { useNavbar } from '~/composables'
const { isMobile } = useNavbar()
</script>

<template>
  <nav>
    <Mobile v-if="isMobile" />
    <Desktop v-else />
  </nav>
</template>
