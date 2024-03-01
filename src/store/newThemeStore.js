import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {useLocalStorage} from '@vueuse/core'

export const newThemeStore = defineStore('newTheme', () => {
  // STATE
  const theme = ref(
    useLocalStorage('theme', 'light')
  )

  // GETTERS
  const isDarkTheme = computed(() => theme.value === 'dark')

  // ACTIONS
  const toggleTheme = () => {
    if(theme.value === 'light'){
      theme.value = 'dark'
      document.documentElement.classList.add('dark')
    }else{
      theme.value = 'light'
      if(document.documentElement.classList.contains('dark'))
        document.documentElement.classList.remove('dark')
    }
  }

  return {
    theme,
    isDarkTheme,
    toggleTheme,
  }
})