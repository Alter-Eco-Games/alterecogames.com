import { defineStore } from 'pinia'

export const useStore = defineStore('main', () => {
  const gameSeleteced = ref(0)

  return { gameSeleteced }
})
