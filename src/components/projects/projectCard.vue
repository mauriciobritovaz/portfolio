<script setup>
const props = defineProps({
  title: String,
  about: String,
  stacks: Array,
  demoLink: String,
  sourceLink: String,
})
</script>

<template>
  <div class="flex flex-col shadow-md bg-gray-400 font-inter text-gray-900">
    <div class="flex justify-between bg-gray-800 text-orange-600 px-2 items-center">
      <div class="flex text-lg font-bold">
        <span>{{ title }}</span>
      </div>
      <div class="grid grid-cols-2 lg:grid-cols-6 gap-1 px-1 text-center font-semibold">
        <a
          :href="demoLink"
          target="_blank"
          class="lg:col-start-5">
          Demo
        </a>
        <a
          :href="sourceLink"
          target="_blank"
          class="cursor-pointer">
          Source
        </a>
      </div>
    </div>
    <div class="text-md my-1 p-2 text-justify">
      {{ about }}
    </div>
    <div class="flex flex-wrap p-2">
      <span v-for="stack in stacks" class="py-1 px-3 m-0.5 font-raleway border-orange-600 border-1 text-xs lg:text-sm text-orange-600 bg-gray-800">{{ stack }}</span>
    </div>
  </div>
</template>