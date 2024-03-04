<script setup>
import { ref } from 'vue';
import { collection, addDoc} from 'firebase/firestore'
import { db } from '@/plugins/firebase'


const email = ref('')
const name = ref('')
const message = ref('')
const alertMessage = ref({
  type: '',
  message: ''
})
const showAlert = ref(false)

const submitContact =  () => { // add async 

  const messageForm = {
    email: email.value,
    name: name.value,
    message: message.value
  }
  
  const validation = validateForm(messageForm)

  if(validation.type === 'success'){
    sendMessage(messageForm)

    email.value = ''
    name.value = ''
    message.value = ''  
  }

  alertMessage.value = validation
  showAlert.value = true

  setTimeout(() => {
    showAlert.value = false
    alertMessage.value = {}
  }, 2000)


}

const validateForm = (messageForm) =>{
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if(messageForm.email.length && messageForm.name.length && messageForm.message.length){
    if(emailRegex.test(email.value)){
      return {
        type: 'success',
        message: 'Your message was sent.',
      }
    }
    else{
      return {
      type: 'error',
      message: 'E-mail is invalid',
    }
    }
  }else
    return {
      type: 'error',
      message: 'Please fill all the fields',
    }
}

const sendMessage = async (messageForm) => {
  await addDoc(collection(db, 'messages'), {
    name: messageForm.name,
    email: messageForm.email,
    message: messageForm.message
  })
}
</script>

<template>
  <div class="grid grid-cols-10 text-gray-900 dark:text-gray-300 font-inter mt-20 xl:mt-10">
    <section class="col-span-8 col-start-2 lg:col-span-6 lg:col-start-3 xl:col-span-4 xl:col-start-4 xl:mt-10">
      <div class="text-4xl font-bold border-b-2 border-gray-800 dark:border-gray-300 p-2">
				<span>Contact me</span>
			</div>
      <div class="text-lg mt-4">
        <span>Feel free to send me a message if you have a question, want to work together or just simply say hi!</span>
      </div>
    </section>
    <section class="col-span-8 col-start-2 lg:col-span-6 lg:col-start-3 xl:col-span-4 xl:col-start-4 mt-4">
      <form
        class="bg-gray-400 shadow-md p-4"
        @submit.prevent="submitContact">
        <div class="flex flex-col mb-4">
          <input
            v-model="name"
            id="name"
            placeholder="Name"
            type="text"
            class="bg-gray-500 text-gray-900 placeholder:text-gray-800 placeholder:font-semibold focus:outline-none p-2"
          />
        </div>
        <div class="flex flex-col mb-4">
          <input
            v-model="email"
            id="email"
            type="email"
            placeholder="E-mail"
            class="bg-gray-500 text-gray-900 placeholder:text-gray-800 placeholder:font-semibold focus:outline-none p-2"
          />
        </div>
        <div class="flex flex-col mb-4">
          <textarea
            v-model="message"
            id="msg"
            placeholder="Message"
            cols="50"
            rows="5"
            class="bg-gray-500 text-gray-900 placeholder:text-gray-800 placeholder:font-semibold focus:outline-none p-2 resize-none"
          ></textarea>
        </div>
        <div class="flex justify-between">
          <span class="text-gray-800 font-semibold">{{ alertMessage.message }}</span>
          <button
            type="submit"
            class="bg-gray-400 py-2 px-4 text-lg uppercase font-semibold border-2 border-gray-800 text-gray-900 focus:outline-none">
            Submit
          </button>
        </div>
      </form>
    </section>    
  </div>
</template>