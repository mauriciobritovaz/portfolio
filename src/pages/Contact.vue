<script></script>

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
      <form class="bg-begezito-4 shadow-md p-4 rounded-md">
        <div class="flex flex-col mb-4">
          <input
            id="name"
            placeholder="Name"
            type="text"
            class="bg-begezito-5 text-begezito-7 placeholder:text-begezito-6 placeholder:font-semibold focus:outline-none rounded-md p-2"
          />
        </div>
        <div class="flex flex-col mb-4">
          <input
            id="email"
            type="email"
            placeholder="E-mail"
            class="bg-begezito-5 text-begezito-7 placeholder:text-begezito-6 placeholder:font-semibold focus:outline-none rounded-md p-2"
          />
        </div>
        <div class="flex flex-col mb-4">
          <textarea
            id="msg"
            placeholder="Message"
            class="bg-begezito-5 text-begezito-7 placeholder:text-begezito-6 placeholder:font-semibold focus:outline-none rounded-md p-2"
          ></textarea>
        </div>
        <div class="flex justify-end">
          <button class="bg-begezito-5 rounded-md py-2 px-4 text-lg uppercase font-semibold focus:shadow-sm focus:shadow-begezito-6 focus:outline-none">
            Submit
          </button>
        </div>
      </form>
    </section>
  </div>
</template>