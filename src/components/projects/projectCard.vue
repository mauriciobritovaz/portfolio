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
  <div class="flex flex-col rounded-md shadow-md bg-begezito-4 p-2 font-raleway text-begezito-6">
    <div class="flex justify-between border-b-2 border-begezito-6">
      <div class="flex text-lg font-bold">
        <span>{{ title }}</span>
      </div>
      <div class="grid grid-cols-6 gap-1 px-1 text-center">
        <a
          :href="demoLink"
          target="_blank"
          class="col-start-5">
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
    <div class="text-md my-1 p-1 text-justify">
      {{ about }}
    </div>
    <div class="flex flex-wrap">
      <span v-for="stack in stacks" class="py-1 px-3 m-0.5 rounded-full text-xs text-begezito-1 bg-begezito-6">{{ stack }}</span>
    </div>
  </div>
</template>