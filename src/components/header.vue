<script setup>
import { ref, onBeforeMount } from 'vue'

 /* DATA */
const isOpen = ref(false)
const isTop = ref(true)
const isLight = ref(true)
const links = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About me',
    path: '/about'
  },
  {
    name: 'My projects',
    path: '/projects'
  },
  {
    name: 'Contact me',
    path: '/contact'
  },
]

/* METHODS */
const openMenu = () => {
  isOpen.value = !isOpen.value
}

const  handleScroll = () => {
  if(window.scrollY > 0 ){
    if(isTop.value)
      isTop.value = false
  } else {
    if(!isTop.value)
      isTop.value = true
  }
}

const changeTheme = () => {
  isLight.value = !isLight.value
}

/* LIFECYCLE */
onBeforeMount(() =>{
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="{'shadow-md bg-gray-300 bg-opacity-85 backdrop-blur-sm text-gray-900': !isTop}"
    class="font-raleway fixed w-full top-0 z-50 md:flex md:justify-between">
    <div class="w-full px-5 md:px-10 lg:px-20 2xl:px-96 flex justify-between align-middle py-3">
      <div class="text-2xl font-semibold">Maurício Brito Vaz</div>
      <nav class="flex justify-end align-middle">
        <div class="hidden md:flex md:justify-between uppercase">
          <router-link
            v-for="link in links"
            :to="link.path"
            class="px-3"
            active-class="text-orange-600 border-b-2 border-orange-600">
            {{ link.name }}
          </router-link>
        </div>
        <div class="flex py-3 gap-2 xl:ml-3">
          <div @click="changeTheme">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path v-if="isLight" stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
            </svg>
          </div>
          <div class="md:hidden" @click="openMenu">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </div>
        </div>
      </nav>
    </div>
    <!-- <nav :class="isOpen ? 'block' : 'hidden'" class="uppercase md:flex md:visible md:pr-10 lg:pr-20 2xl:pr-80">
      <router-link
        v-for="link in links"
        class="flex mx-1 px-2 lg:mx-2 py-3 lg:px-5"
        :to="link.path"
        active-class="text-begezito-6 border-r-4 bg-begezito-4 md:bg-begezito-3 md:border-b-4 md:border-r-0 border-begezito-5">
        {{ link.name }}
      </router-link>
    </nav> -->
  </header>
</template>