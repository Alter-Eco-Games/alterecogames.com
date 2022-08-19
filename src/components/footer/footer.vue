<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'

const { t } = useI18n()
const breakpoints = useBreakpoints(breakpointsTailwind)

const charites = [
  { link: 'https://plant.ecosia.org/', content: 'Ecosia', router: false },
  { link: 'https://www.malariaconsortium.org/', content: 'Malaria Consortium', router: false },
  { link: 'https://schistosomiasiscontrolinitiative.org/', content: 'SCI Foundation', router: false },
  { link: 'https://www.hki.org/', content: 'Helen Keller international', router: false },
]
const email = [
  { link: 'mailto:alterecogames@gmail.com', content: 'alterecogames@gmail.com', router: false },
]
const games = ['coming soon']
</script>

<template>
  <footer bg-offWhite text-500 px-24 py-16 pb-8 lt-md:px-8 lt-md:py-4 lt-lg:px-8>
    <div flex justify-between lt-md:flex-col lt-md:items-start>
      <div>
        <h1 text-300 font-serif lsp-1 text-6 mb-2>
          {{ t('footer.pageTitle.main') }}
        </h1>
        <p text-3>
          {{ t('footer.pageTitle.subtitle') }}
        </p>
      </div>
      <FooterCol :title="t('footer.pageTitles.charities')" :content="charites" lt-md:mt-12 />
      <FooterCol v-if="breakpoints.xl.value" :title="t('footer.pageTitles.games')" :content="games" />
      <FooterCol v-if="breakpoints.md.value" :title="t('footer.pageTitles.contact')" :content="email" />
      <FooterFollow lt-md:mt-12 :show="breakpoints.md.value" />
    </div>
    <div text-3 border-t-1 border-t-footer-b mt-24 lt-md:mt-12 lt-md:mb-8 lt-sm:mb-24>
      {{ t('footer.copyright') }}
    </div>
  </footer>
</template>
