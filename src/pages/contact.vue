<route lang="json">
{
  "meta":{
    "order": 6
  }
}
</route>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import { useI18nTitle } from '~/composables'

const { t } = useI18nTitle('contact')
const breakpoints = useBreakpoints(breakpointsTailwind)
const showForm = breakpoints.greater('lg')
const isMobile = breakpoints.smaller('sm')
</script>

<template>
  <div flex>
    <div relative ml-80 mr-auto lt-2xl:ml-25 lt-xl:ml-0 lt-lg:ml-a>
      <div v-if="showForm">
        <img src="../assets/contact-background.svg">
        <div absolute z-2 top-0 flex flex-col left-64 text-200>
          <h1 mt-16 text-8 font-600 font-serif lsp-1 mb-8 max-ch-16 uppercase>
            {{ t('contact.foreground.title') }}
          </h1>
          <p text-3 mb-6>
            {{ t('contact.foreground.body') }}
          </p>
          <div flex items-center>
            <div i-mdi-email mr-2 />
            <p text-3>
              alterecogames@gmail.com
            </p>
          </div>
          <div flex mt-a justify-around text-test>
            <a i-mdi-twitter href="https://twitter.com/alterecogames" target="_blank" hover:text-white />
            <a i-mdi-instagram href="https://www.instagram.com/alterecogames/" target="_blank" hover:text-white />
            <a i-fa6-brands-tiktok href="https://www.tiktok.com/@alter_eco_games" target="_blank" hover:text-white />
            <a i-mdi-google-play href="https://play.google.com/store/apps/dev?id=8733232126626935186" target="_blank" hover:text-white />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

