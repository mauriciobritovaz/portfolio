import {defineStore} from 'pinia'

export const themeStore = defineStore('theme',{
  state: () => {
    return {
      theme: 'light'
    }
  },
  getters: {
    isDarkTheme: (state) => state.theme === 'dark'
  },
  actions:{
    toggleTheme(){
      if(this.theme === 'light')
        this.theme = 'dark'
      else
        this.theme = 'light'
    }
  }
})