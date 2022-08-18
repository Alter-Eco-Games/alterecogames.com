<script setup lang="ts">
import { desktopNavRoutes, useNavbar } from '~/composables'

const { t } = useI18n()
const { routes } = useNavbar(desktopNavRoutes)
</script>

<template>
  <div flex p-8 font-serif lsp-1>
    <ul flex w-screen items-center>
      <li mr-a>
        <router-link to="/" text-black text-8 truncate lt-md:text-6>
          Alter eco
        </router-link>
      </li>
      <li v-for="route, idx in routes" :key="idx" px-16 text-5 text-400 lt-md:px-8>
        <router-link :to="route.path" :class="{ 'text-brand-primary': route.active }">
          {{ t(`${route.name}.title`) }}
        </router-link>
      </li>
      <LangSwitcher />
    </ul>
  </div>
</template>
