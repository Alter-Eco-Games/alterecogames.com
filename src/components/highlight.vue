<script setup lang="ts">
interface Props {
  path: string
}

const props = defineProps<Props>()
const { t } = useI18n()

const before = t(`${props.path}.before`)
const highlight = t(`${props.path}.highlight`)
const after = t(`${props.path}.after`)
</script>

<template>
  <div>
    {{ before }}
    <span text-brand-primary>
      {{ highlight }}
    </span>
    {{ after }}
  </div>
</template>

