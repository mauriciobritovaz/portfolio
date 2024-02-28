<script setup>
import { ref } from 'vue'

import alertBox from '../components/alertBox.vue';

const email = ref('')
const name = ref('')
const message = ref('')
const alertMessage = ref({
  type: '',
  title: '',
  message: ''
})
const showAlert = ref(false)

const submitContact = () => {
  const validationMsg = validateForm()

  if(validationMsg === 1){
    alertMessage.value = {
      type: 'success',
      title: 'Success!',
      message: `The message was sent`,
    }
  }
  else if(validationMsg === 2){
    alertMessage.value = {
      type: 'error',
      title: 'Sorry',
      message: 'Please, fill all the fields',
    }
  }
  else if(validationMsg === 3){
    alertMessage.value = {
      type: 'error',
      title: 'Sorry',
      message: 'The e-mail is invalid',
    }
  }

  showAlert.value = true
  setTimeout(() => {
    showAlert.value = false
  }, 3000)
}

const validateForm = () =>{
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if(email.value.length && name.value.length && message.value.length){
    if(emailRegex.test(email.value)){
      return 1
    }
    else{
      return 3
    }
  }else
    return 2
}
</script>

<template>
  <div class="grid grid-cols-10 text-begezito-6 font-raleway mt-20 lg:mt-20 xl:mt-10">
    <section class="col-span-8 col-start-2 lg:col-span-6 lg:col-start-3 xl:col-span-4 xl:col-start-4 xl:mt-10">
      <div class="text-4xl font-bold border-b-2 border-begezito-6 p-2">
				<span>Contact me</span>
			</div>
      <div class="text-lg mt-4">
        <span>Feel free to send me a message if you have a question, want to work together or just simply say hi!</span>
      </div>
    </section>
    <section class="col-span-8 col-start-2 lg:col-span-6 lg:col-start-3 xl:col-span-4 xl:col-start-4 mt-4">
      <form
        class="bg-begezito-4 shadow-md p-4 rounded-md"
        @submit.prevent="submitContact">
        <div class="flex flex-col mb-4">
          <input
            v-model="name"
            id="name"
            placeholder="Name"
            type="text"
            class="bg-begezito-5 text-begezito-7 placeholder:text-begezito-6 placeholder:font-semibold focus:outline-none rounded-md p-2"
          />
        </div>
        <div class="flex flex-col mb-4">
          <input
            v-model="email"
            id="email"
            type="email"
            placeholder="E-mail"
            class="bg-begezito-5 text-begezito-7 placeholder:text-begezito-6 placeholder:font-semibold focus:outline-none rounded-md p-2"
          />
        </div>
        <div class="flex flex-col mb-4">
          <textarea
            v-model="message"
            id="msg"
            placeholder="Message"
            cols="50"
            rows="5"
            class="bg-begezito-5 text-begezito-7 placeholder:text-begezito-6 placeholder:font-semibold focus:outline-none rounded-md p-2 resize-none"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button
            type="submit"
            class="bg-begezito-5 rounded-md py-2 px-4 text-lg uppercase font-semibold focus:shadow-sm focus:shadow-begezito-6 focus:outline-none">
            Submit
          </button>
        </div>
      </form>
    </section>
    
    <alertBox
      v-if="showAlert"
      :title="alertMessage.title"
      :type="alertMessage.type"
      :message="alertMessage.message"/>
  </div>
</template>