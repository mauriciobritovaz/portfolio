import {ref, computed} from 'vue'
import {defineStore} from 'pinia'
import {useLocalStorage} from '@vueuse/core'

export const themeStore = defineStore('newTheme', () => {
  // STATE
  const theme = ref(
    useLocalStorage('theme', '')
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

  const checkTheme = () => {
    if(!theme.value.length){
      theme.value = 'light'
      if(document.documentElement.classList.contains('dark'))
        document.documentElement.classList.remove('dark')
    } else if (theme.value === 'dark'){
      theme.value = 'dark'
      document.documentElement.classList.add('dark')
    }
  }

  return {
    theme,
    isDarkTheme,
    toggleTheme,
    checkTheme,
  }
})