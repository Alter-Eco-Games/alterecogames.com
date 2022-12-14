<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { mobileNavRoutes, useNavbar } from '~/composables'

const { t } = useI18n()
const store = useStore()
const { mobileNavOpen } = storeToRefs(store)

const { routes, router } = useNavbar(mobileNavRoutes)

const menuIcon = computed(() => mobileNavOpen.value ? 'i-carbon-close' : 'i-carbon-menu')
const allRoutes = computed(() => router.getRoutes().filter(route => !route.meta.invisable).sort((a, b) => a.meta.order - b.meta.order))
const showIndicator = computed(() => routes.map(route => route.active).some(x => !!x))
</script>

<template>
  <div class="navigation">
    <div flex flex-col h-auto p-8 w-screen z-1 :class="{ 'bg-offWhite': mobileNavOpen, 'absolute': mobileNavOpen, 'h-screen': mobileNavOpen }">
      <div :class="menuIcon" @click="mobileNavOpen = !mobileNavOpen" />
      <ul v-if="mobileNavOpen" flex flex-col h-screen justify-around items-center font-serif lsp-1 text-400 uppercase text-8 font-400>
        <li v-for="route in allRoutes" :key="route.path">
          <router-link :to="route.path" @click="mobileNavOpen = false">
            {{ t(`${route.name?.toString()}.title`) }}
          </router-link>
        </li>
      </ul>
    </div>
    <ul v-if="!mobileNavOpen" class="icons">
      <li v-for="route, idx in routes" :id="route.name" :key="idx" :class="{ active: route.active }">
        <router-link :to="route.path">
          <div :class="route.icon" class="icon" />
        </router-link>
      </li>
      <div v-if="showIndicator" class="indicator" />
    </ul>
  </div>
</template>

<style scoped>
/*
  custom css for navbar
*/
.navigation{
  --height: 70px;
  --brand-colour: #31A5A7;
  --background-colour: #D9D9D9;
  --icon-size: 1rem;
}
.navigation .icons{
  position: fixed;
  display: flex;
  z-index: 5;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: var(--height);
  background-color: var(--background-colour);
  bottom:0;
  width: 100%;
  justify-content: space-around;
}
.navigation .icons li{
  position: relative;
  list-style: none;
  width: var(--height);
  height: var(--height);
  z-index: 1;
  padding-top: 1rem;
}
.navigation .icons li a{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
}
.navigation .icons li a .icon{
  position: relative;
  display: block;
  line-height: var(--height);
  text-align: center;
  transition: 0.5s;
  font-size: var(--icon-size);
  color: var(--brand-colour);
}

.navigation .icons li.active a .icon{
  transform: translateY(calc(-1rem - var(--icon-size)));
}

.indicator{
  position: absolute;
  top: -35px;
  width: var(--height);
  height: var(--height);
  background-color: var(--background-colour);
  border-radius: 50%;
  border: 6px solid var(--background-colour);
  transition: 0.5s;
}

.indicator::before, .indicator::after{
  position: absolute;
  content: '';
  top: 0px;
  width: 30px;
  height: 30px;
  background: transparent;
  border-radius: 50%;
}
.indicator::before{
  left: -34px;
  box-shadow: 15px 18px var(--background-colour);
}
.indicator::after{
  right: -34px;
  box-shadow: -15px 18px var(--background-colour);
}

.navigation .icons li:nth-child(1).active ~ .indicator{
  transform: translateX(calc(-100vw / 3));
}
.navigation .icons li:nth-child(3).active ~ .indicator{
  transform: translateX(calc(100vw/3));
}
</style>
