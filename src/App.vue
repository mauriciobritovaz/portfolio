<script setup>
import {onMounted} from 'vue'
import headerComponent from './components/header.vue';
import footerComponent from './components/footer.vue';

import  { themeStore } from '@/store/themeStore'

 /* DATA */
const store = themeStore()

onMounted(() => store.checkTheme())
</script>

<template>
  <div class="bg-fixed bg-gradient-to-b from-gray-300 to-gray-400 dark:from-gray-800 dark:to-gray-900 flex flex-col h-full min-h-dvh">
    <headerComponent />
    <div class="flex-grow">
      <router-view />
    </div>
    <footerComponent />
  </div>
</template>

<style scoped>
</style>
