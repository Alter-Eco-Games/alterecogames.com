<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const breakpoints = useBreakpoints(breakpointsTailwind)

const charites = ['Ecosia', 'Malaria Consortium', 'SCI Foundation', 'Malaria Consortium']
const games = ['game 1', 'game 2', 'game 3']
</script>

<template>
  <footer bg-footer-bg text-footer-text px-24 py-16 pb-8 lt-md:px-8 lt-md:py-4>
    <div flex justify-between lt-md:flex-col lt-md:items-start>
      <div>
        <h1 text-footer-title font-serif lsp-1 text-6 mb-2>
          alter eco games
        </h1>
        <p text-3>
          Help and surpport communites by watching ads
        </p>
      </div>
      <FooterCol :title="{ content: 'current chirities', link: '/charites' }" :content="charites" lt-md:mt-12 />
      <FooterCol v-if="breakpoints.xl.value" title="top games" :content="games" />
      <FooterCol v-if="breakpoints.md.value" title="contact us" content="alterecogames@gmail.com" />
      <FooterFollow lt-md:mt-12 :show="breakpoints.md.value" />
    </div>
    <div text-3 border-t-1 border-t-footer-b mt-24 lt-md:mt-12 lt-md:mb-8 lt-sm:mb-24>
      © Alter eco games. all right reserved {{ new Date().getFullYear() }}
    </div>
  </footer>
</template>
