<script setup>
import headerComponent from './components/header.vue';
import footerComponent from './components/footer.vue';
</script>

<template>
  <div class="bg-fixed bg-gradient-to-b from-gray-300 to-gray-400 flex flex-col h-full min-h-dvh">
    <headerComponent />
    <div class="flex-grow">
      <router-view />
    </div>
    <footerComponent />
  </div>
</template>

<style scoped>
</style>
