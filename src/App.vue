<script setup>
// import headerComponent from './components/header.vue';
import footerComponent from './components/footer.vue';
import newHeader from './components/newHeader.vue'
</script>

<template>
  <div class="bg-gradient-to-b from-begezito-3 to-begezito-5 flex flex-col h-full min-h-dvh">
    <newHeader />
    <div class="flex-grow">
      <router-view />
    </div>
    <footerComponent />
  </div>
</template>

<style scoped>
</style>
