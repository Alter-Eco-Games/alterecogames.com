<route lang="json">
{
  "name":"home",
  "meta":{
    "order": 1
  }
}
</route>

<script setup lang="ts">
import { breakpointsTailwind, useBreakpoints } from '@vueuse/core'

const title = useTitle('Alter eco | Home')
const breakpoints = useBreakpoints(breakpointsTailwind)
const isMobile = breakpoints.smaller('sm')
</script>

<template>
  <div flex justify-center items-start mt-40 px-8 lt-sm:flex-col lt-sm:justify-start lt-sm:mt-0 lt-sm:items-center>
    <div mr-32 lt-sm:mr-0>
      <div mb-24 lt-sm:mb-16>
        <h1 font-serif lsp-1 text-16 lt-sm:text-8 truncate text-center>
          Control <span text-brand-primary>your</span> ads
        </h1>
        <p text-400 lt-sm:text-3>
          Ads that keep giving
        </p>
      </div>
      <div v-if="!isMobile">
        <router-link to="/games">
          <button btn-primary mr-8>
            games
          </button>
        </router-link>
        <router-link to="/charities">
          <button btn-secondary>
            charities
          </button>
        </router-link>
      </div>
    </div>
    <img src="../assets/helping.svg" w-lg lt-sm:mb-30>
    <router-link v-if="isMobile" to="/charities">
      <button btn-secondary px-28 py-4>
        charities
      </button>
    </router-link>
  </div>
</template>
