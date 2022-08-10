<script setup lang="ts">
interface item {
  content: string
  link: string
}

interface Props {
  title: item | string
  content: string | Array<item | string>
}

const props = defineProps<Props>()
</script>

<template>
  <div>
    <h1 v-if="typeof title == 'string'" uppercase lsp-1 text-3>
      {{ title }}
    </h1>
    <router-link v-else :to="title.link" uppercase lsp-1 text-3>
      {{ title.content }}
    </router-link>

    <p v-if="typeof content == 'string'" text-3 mt-2>
      {{ content }}
    </p>
    <ul v-else mt-2>
      <li v-for="obj, idx in content" :key="idx" mb-2 text-3>
        <p v-if="typeof obj == 'string'">
          {{ obj }}
        </p>
        <router-link v-else :to="obj.link">
          {{ obj.content }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
