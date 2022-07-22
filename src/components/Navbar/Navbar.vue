<script setup lang="ts">
import type { RouteRecordNormalized } from 'vue-router'

const router = useRouter()
const currentRoute = useRoute()

const routes = computed(() => router.getRoutes().filter(route => route.meta.navbar))
const isCurrentRoute = (route: RouteRecordNormalized) => route.name === currentRoute.name
</script>

<template>
  <nav flex py-4 px-8 items-center>
    <router-link to="/" font-serif text-8 style="letter-spacing: 0.1em;">
      Alter Eco
    </router-link>
    <ul flex ml-auto>
      <li v-for="route in routes" :key="route.path" px-8 text-accent-400 :class="{ 'text-brand-secondary': isCurrentRoute(route) }">
        <router-link :to="route.path">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
