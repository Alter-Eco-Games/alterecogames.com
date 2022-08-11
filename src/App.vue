<script setup lang="ts">
import { storeToRefs } from 'pinia'

const store = useStore()
const { mobileNavOpen } = storeToRefs(store)
</script>

<template>
  <Navbar />
  <router-view />
  <Footer v-if="!mobileNavOpen" />
</template>

