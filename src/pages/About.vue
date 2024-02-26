<script setup>
const skills = ['HTML', 'JavaScript', 'Vue', 'React', 'GraphQL', 'MySQL', 'REST API', 'JSON', 'PHP', 'CSS', 'SASS', 'TailwindCSS', 'Responsive Design', 'GIT', 'GitHub']
</script>
<template>
	<div class="grid grid-cols-10 text-begezito-6 font-raleway">
		<section class="col-span-8 col-start-2 mt-6 lg:col-span-6 lg:col-start-3 xl:col-span-4 xl:col-start-4 xl:mt-10">
			<div class="text-4xl font-bold border-b-2 border-begezito-6 p-2">
				<span>About me</span>
			</div>
			<div class="flex flex-col text-lg mt-4">
				<span class="mb-4">Hello, my name is Maurício! I've been working with programming since 2012, when I started a web development course.</span>
				<span class="mb-4">Also around that time I started using Tumblr and decided to try using the basics I learned to customize my blog's theme. Since then, I've found my passion about web development.</span>
				<span class="mb-4">In 2019 I discovered about Vue.js and at first I wasn't really sure if it was what I like, but then with time and working with it I started loving and it became my main js framework</span>
				<span class="mb-4">But even my passion with front end, I've been working with other stacks and techonologies. I have worked with PHP, C++, .Net and more. </span>
			</div>
		</section>
		<section class="col-span-8 col-start-2 mt-6 lg:col-span-6 lg:col-start-3 xl:col-span-4 xl:col-start-4">
			<div class="text-4xl font-bold border-b-2 border-begezito-6 p-2">
				<span>My skills</span>
			</div>
			<div class="flex flex-wrap text-lg mt-4">
				<span
					v-for="skill in skills"
					class="py-1 px-3 mx-0.5 mb-3 rounded-full text-lg text-begezito-1 bg-begezito-6">
					{{ skill }}
				</span>
			</div>
		</section>
		<section class="col-span-8 col-start-2 mt-6 lg:col-span-6 lg:col-start-3 xl:col-span-4 xl:col-start-4">
			<div class="text-4xl font-bold border-b-2 border-begezito-6 p-2">
				<span>About this website</span>
			</div>
			<div class="text-lg mt-4">
				<span>
					This website was coded by me in <a href="https://code.visualstudio.com" target="_blank" class="font-semibold cursor-pointer">Visual Studio Code</a>.
				</span>
				<span>
					Built using <a href="https://vuejs.org" target="_blank" class="font-semibold cursor-pointer">Vue.js 3</a> and <a href="https://tailwindcss.com" target="_blank" class="font-semibold cursor-pointer">Tailwind CSS</a>.
				</span>
				<span>
					The font of all text is <a href="https://fonts.google.com/specimen/Raleway" target="_blank" class="font-semibold cursor-pointer">Raleway</a>. 
				</span>
			</div>
		</section>
	</div>
</template>