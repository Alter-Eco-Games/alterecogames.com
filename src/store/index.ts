import { defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
  const mobileNavOpen = ref(false)

  return { mobileNavOpen }
})
