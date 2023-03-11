import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({
    data: {
      name: 'Fabio',
      token: null
    }
  })

  return { user }
})
