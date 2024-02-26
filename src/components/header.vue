<script setup>
import { ref } from 'vue'

let links = [
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
]

const isOpen = ref(true)

const openMenu = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <header class="bg-begezito-3 bg-opacity-85 backdrop-blur-sm text-begezito-6 font-raleway fixed w-full top-0 z-50 md:flex md:justify-between">
    <div class="px-5 md:px-10 lg:px-20 2xl:px-96 flex justify-between align-middle">
      <div class="text-2xl font-semibold text-begezito-6 py-3">Maurício Brito Vaz</div>
      <div class="md:hidden py-3" @click="openMenu">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path v-if="!isOpen" stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="md:flex md:visible md:pr-10 lg:pr-20 2xl:pr-96">
      <router-link
        v-for="link in links"
        class="flex md:mx-2 py-3 px-5"
        :to="link.path"
        active-class="text-begezito-6 border-r-4 bg-begezito-4 md:bg-begezito-3 md:border-b-4 md:border-r-0 border-begezito-5">
        {{ link.name }}
      </router-link>
    </nav>
  </header>
</template>