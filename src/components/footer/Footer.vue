<script setup lang="ts">
const charities: Array<string> = ['Ecosia', 'SCI Foundation']
const games: Array<string> = ['Game 1', 'Game 2']

const currentYear = computed(() => new Date().getFullYear())
</script>

<template>
  <footer bg-footer-bg text-accent-400>
    <div flex flex-col px-24>
      <div flex justify-between mt-16>
        <div>
          <h3 font-serif text-6 style="letter-spacing:0.1em">
            alter eco games
          </h3>
          <p text-3 text-accent-500>
            Help and support communites by watching ads.
          </p>
        </div>
        <FooterCol title="CURRENT CHIRITIES" :content="charities" />
        <FooterCol title="TOP GAMES" :content="games" />
        <FooterCol title="CONTACT US" content="alterecogames@gmail.com" />
        <FooterFollow />
      </div>
      <p text-2 mt-24 mb-8 b-t>
        © Alter eco games. all right reserved, {{ currentYear }}
      </p>
    </div>
  </footer>
</template>
