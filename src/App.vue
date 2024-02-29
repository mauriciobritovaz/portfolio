<script setup>
import headerComponent from './components/header.vue';
import footerComponent from './components/footer.vue';
</script>

<template>
  <div class="bg-fixed bg-gradient-to-b from-gray-200 to-gray-300 flex flex-col h-full min-h-dvh">
    <headerComponent />
    <div class="flex-grow">
      <router-view />
    </div>
    <footerComponent />
  </div>
</template>

<style scoped>
</style>
