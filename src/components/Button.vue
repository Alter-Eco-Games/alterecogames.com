<script setup lang="ts">
interface Props {
  primary?: boolean
  secondary?: boolean
  type?: 'submit' | 'reset' | 'button'
}
withDefaults(defineProps<Props>(), { primary: true, secondary: false, type: 'button' })
</script>

<template>
  <button :type="type" btn :class="{ 'bg-brand-primary': primary, 'bg-brand-secondary': secondary }">
    <slot />
  </button>
</template>

<style scoped>
button:hover{
  transform: translateY(-5px);
}
</style>
