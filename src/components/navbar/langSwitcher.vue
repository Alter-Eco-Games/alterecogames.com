<script setup lang="ts">

</script>

<template>
  <div class="locale-changer" text-400>
    <select v-model="$i18n.locale" outline-none>
      <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale">
        {{ locale }}
      </option>
    </select>
  </div>
</template>
