<script setup lang="ts">
import { storeToRefs } from 'pinia'

const store = useStore()
const { mobileNavOpen } = storeToRefs(store)
</script>

<template>
  <Navbar />
  <router-view mb-36 />
  <Footer v-if="!mobileNavOpen" />
</template>

