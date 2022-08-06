<script lang="ts">
import { useNavbar } from '~/composables'

const { isMobile } = useNavbar()
</script>

<template>
  <nav>
    <MobileNav v-if="isMobile" />
    <DesktopNav v-else />
  </nav>
</template>
