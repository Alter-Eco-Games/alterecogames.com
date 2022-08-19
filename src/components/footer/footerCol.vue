<script setup lang="ts">
interface item {
  content: string
  link: string
  router: boolean
}

interface Props {
  title: item | string
  content: string | Array<item | string>
}

const props = defineProps<Props>()

// target="_blank" rel="noopener noreferrer"
</script>

<template>
  <div>
    <h1 v-if="typeof title == 'string'" uppercase lsp-1 text-3>
      {{ title }}
    </h1>
    <router-link v-else-if="title.router" :to="title.link" uppercase lsp-1 text-3>
      {{ title.content }}
    </router-link>
    <a v-else :href="title.link" target="_blank" rel="noopener noreferrer">
      {{ title.content }}
    </a>

    <p v-if="typeof content == 'string'" text-3 mt-2>
      {{ content }}
    </p>
    <ul v-else mt-2>
      <li v-for="obj, idx in content" :key="idx" mb-2 text-3>
        <p v-if="typeof obj == 'string'">
          {{ obj }}
        </p>
        <router-link v-else-if="obj.router" :to="obj.link">
          {{ obj.content }}
        </router-link>
        <a v-else :href="obj.link" target="_blank" rel="noopener noreferrer">
          {{ obj.content }}
        </a>
      </li>
    </ul>
  </div>
</template>
