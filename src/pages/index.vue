<route lang="json">
{
  "name":"home",
  "meta":{
    "order": 1
  }
}
</route>

<script setup lang="ts">
const title = useTitle('Alter eco | Home')
</script>

<template>
  <div>
    {{ $t("home") }}
  </div>
</template>
