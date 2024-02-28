<script setup>
import { ref, onBeforeMount } from 'vue'
 /* DATA */
const isOpen = ref(false)
const isTop = ref(true)
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

/* LIFECYCLE */
onBeforeMount(() =>{
  window.addEventListener('scroll', handleScroll)
})
</script>

<template>
  <header
    :class="{'shadow-md': !isTop}"
    class="bg-begezito-3 bg-opacity-85 backdrop-blur-sm text-begezito-6 font-raleway fixed w-full top-0 z-50 md:flex md:justify-between">
    <div class="px-5 md:px-10 lg:px-20 2xl:px-96 flex justify-between align-middle">
      <div class="text-2xl font-semibold text-begezito-6 py-3">Maurício Brito Vaz</div>
      <div class="md:hidden py-3" @click="openMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="uppercase md:flex md:visible md:pr-10 lg:pr-20 2xl:pr-80">
      <router-link
        v-for="link in links"
        class="flex mx-1 px-2 lg:mx-2 py-3 lg:px-5"
        :to="link.path"
        active-class="text-begezito-6 border-r-4 bg-begezito-4 md:bg-begezito-3 md:border-b-4 md:border-r-0 border-begezito-5">
        {{ link.name }}
      </router-link>
    </nav>
  </header>
</template>