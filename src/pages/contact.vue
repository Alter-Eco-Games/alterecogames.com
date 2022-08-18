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
            {{ t('contact.background.title') }}
          </h1>
          <input name="name" placeholder="Type your full name" content-input>
          <input type="email" autocomplete="email" required placeholder="Email address" content-input>
          <textarea content-input h-36 resize-none />
          <button btn-secondary font-bold w-fit ml-a mt-4>
            {{ t('contact.background.btn') }}
          </button>
        </div>
      </div>
      <div absolute flex top-40 right--50 lt-xl:right--30 lt-lg="relative top-0 right-0">
        <img v-if="isMobile" src="../assets/contact-mobile-background.svg">
        <img v-else src="../assets/contact-foreground.svg">
        <div absolute flex flex-col top-20 left-20 text-white max-ch-30 h-sm lt-sm:left-15>
          <h1 mb-12 text-6 font-500 font-serif lsp-1 max-ch-16 uppercase>
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
            <div i-mdi-twitter />
            <div i-mdi-instagram />
            <div i-mdi-apple-ios />
            <div i-mdi-google-play />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

