<script setup lang="ts">
interface Props {
  title: string
  content: string | Array<string>
}

const props = defineProps<Props>()
</script>

<template>
  <div flex flex-col text-accent-500 text-3 text-left>
    <h4 text-accent-300 text-3 mb-1 style="letter-spacing: 0.1em;">
      {{ title }}
    </h4>
    <ul v-if="typeof content !== 'string'">
      <li v-for="item, idx in content" :key="idx">
        {{ item }}
      </li>
    </ul>
    <p v-else>
      {{ content }}
    </p>
  </div>
</template>

