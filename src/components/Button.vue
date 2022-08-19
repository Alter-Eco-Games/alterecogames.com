<script setup lang="ts">
interface Props {
  primary?: boolean
  secondary?: boolean
}
withDefaults(defineProps<Props>(), { primary: true, secondary: false })
</script>

<template>
  <button btn :class="{ 'bg-brand-primary': primary, 'bg-brand-secondary': secondary }">
    <slot />
  </button>
</template>

<style scoped>
button:hover{
  transform: translateY(-5px);
}
</style>
