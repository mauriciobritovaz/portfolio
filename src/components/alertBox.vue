<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: String,
  message: String,
  type: String,
})

const alertType = computed(() => {
  return{
    'bg-emerald-500': props.type === 'success',
    'bg-red-500': props.type === 'error' ,
    'bg-yellow-500': props.type === 'alert' ,
  }
})
</script>

<template>
  <div
    class="p-4 absolute text-begezito-7 text-center rounded-md shadow-md flex flex-col top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
    :class="alertType">
    <span class="text-lg font-bold">
      {{ title }}
    </span>
    <span class="text-md">
      {{ message }}
    </span>
  </div>
</template>