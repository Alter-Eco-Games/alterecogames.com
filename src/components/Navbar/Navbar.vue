<script setup lang="ts">
interface Route {
  name: string
  path: string
}

const currentRoute = useRoute()

const routes: Array<Route> = [
  {
    path: '/games',
    name: 'games',
  }, {
    path: '/about',
    name: 'about',
  }, {
    path: '/contact',
    name: 'contact',
  },
]
const isCurrentRoute = (route: Route) => route.name === currentRoute.name
</script>

<template>
  <nav flex py-4 px-8 items-center>
    <router-link to="/" font-serif text-8 style="letter-spacing: 0.1em;">
      Alter Eco
    </router-link>
    <ul flex ml-auto text-accent-400 text-5 font-serif style="letter-spacing: 0.1em;">
      <li v-for="route in routes" :key="route.path" px-8 :class="{ 'text-brand-secondary': isCurrentRoute(route) }">
        <router-link :to="route.path">
          {{ route.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
