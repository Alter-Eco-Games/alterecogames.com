<script setup lang="ts">
interface Props {
  icon: string
  link?: string
}

const props = defineProps<Props>()
</script>

<template>
  <div flex justify-center bg-truegray-300 p-3 b-rd-8>
    <a :herf="link" :class="icon" text-4 text-brand-primary />
  </div>
</template>

