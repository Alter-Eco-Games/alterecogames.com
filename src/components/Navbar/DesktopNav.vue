<script setup lang="ts">
import { useNavbar } from '~/composables'
const { routes, isCurrentRoute } = useNavbar()
</script>

<template>
  <div flex font-serif py-4 px-8 items-center letter-1>
    <router-link to="/" text-8>
      Alter Eco
    </router-link>
    <ul flex ml-auto text-accent-400 text-5>
      <li v-for="route in routes" :key="route.path" px-8 :class="{ 'text-brand-secondary': isCurrentRoute(route) }">
        <router-link :to="route.path">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </div>
</template>
