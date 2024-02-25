<script setup>

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

</script>
<template>
  <div class="bg-begezito-3 bg-opacity-85 backdrop-blur-sm justify-between px-96 md:flex font-raleway sticky top-0 z-50">
    <div class="text-2xl font-semibold text-begezito-6 py-3">Maurício Brito Vaz</div>
    <div class="flex text-begezito-6">
      <router-link
        v-for="link in links"
        class="flex mx-2 py-3 px-5"
        :to="link.path"
        active-class="text-begezito-6 border-b-4 border-begezito-5">
        {{ link.name }}
      </router-link>
    </div>
  </div>
</template>