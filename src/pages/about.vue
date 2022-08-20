<route lang="json">
{
  "meta":{
    "order": 3
  }
}
</route>

<script setup lang="ts">
import { breakpointsTailwind } from '@vueuse/core'
import ecoImage from '../assets/environment.svg?url'
import oceansImage from '../assets/fish-bowl.svg?url'
import humanImage from '../assets/connected-world.svg?url'
import { useI18nTitle } from '~/composables'

const sections = [
  {
    path: 'about.eco',
    image: ecoImage,
  },
  {
    path: 'about.oceans',
    image: oceansImage,
  },
  {
    path: 'about.world',
    image: humanImage,
  },
]
const { t } = useI18nTitle('about')
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('sm')
</script>

<template>
  <div flex flex-col>
    <section
      v-for="section, idx in sections"
      :key="idx" :class="{ 'flex-row-reverse': idx % 2 !== 0, 'px-8': idx > 0, 'lt-sm:mb-30': idx > 0 && idx !== sections.length - 1, 'lt-sm:mb-0': idx === sections.length - 1 }"
      flex items-center mb-60 mt-20
      lt-sm="flex-col flex-col-reverse mt-10"
    >
      <router-link v-if="isMobile && idx === 0" to="/">
        <Button secondary text-5 px-12 py-4>
          view tree counter
        </Button>
      </router-link>
      <img :src="section.image" w-3xl lt-sm="mb-28" lt-xl:w-xl lt-lg:w-md lt-md:w-xs :class="{ 'lt-sm:mr-a': idx === 0 }">
      <div mx-auto :class="{ 'lt-sm:px-8 lt-sm:px-8': idx === 0 }">
        <Highlight :path="`${section.path}.title`" font-serif text-12 mb-8 lsp-1 lt-lg:text-9 lt-sm:text-8 />
        <p text-200 mb-8 max-ch-50 lt-md:text-3>
          {{ t(`${section.path}.subtitle`) }}
        </p>
        <router-link v-if="!isMobile && idx === 0" to="/">
          <Button secondary>
            view tree counter
          </Button>
        </router-link>
      </div>
    </section>
  </div>
</template>
