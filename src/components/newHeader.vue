<script setup>
import { ref, onBeforeMount } from 'vue'

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
    path: '/projects'
  },
]
const isTop = ref(true)

const  handleScroll = () => {
  if(window.scrollY > 0 ){
    if(isTop.value)
      isTop.value = false
  } else {
    if(!isTop.value)
      isTop.value = true
  }
}

onBeforeMount(() =>{
  window.addEventListener('scroll', handleScroll)
})

</script>

<template>
  <header class="fixed w-full top-0 z-50 text-xs md:text-base xl:text-lg font-raleway font-bold uppercase px-2 py-2 md:px-32 lg:px-48 xl:px-96 2xl:px-[34rem]">
    <nav
      :class="{'bg-begezito-3 bg-opacity-85 backdrop-blur-sm shadow-sm': !isTop}"
      class="flex justify-between px-5 py-4 md:px-8 justify-self-center rounded-full">
      <div v-for="link in links">
        <router-link
          :to="link.path"
          class="p-3 lg:px-4 rounded-full"
          active-class="bg-begezito-5"
          > 
          {{ link.name }}
        </router-link>
      </div>
    </nav>
  </header>
</template>