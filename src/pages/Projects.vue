<script setup>
import { onMounted } from 'vue'
import projectCard from '@/components/projects/projectCard.vue';
import { projectsStore } from '../store/projectsStore';

const store = projectsStore()

onMounted(() => store.getProjects())



import { projects } from '@/data/projects';

</script>
<template>
	<div class="grid  grid-cols-10 mt-20 lg:mt-20 xl:mt-10">
		<div class="col-span-8 col-start-2 lg:col-span-6 lg:col-start-3 xl:col-span-4 xl:col-start-4 xl:mt-10 border-b-2 border-gray-800 dark:border-gray-300 p-2">
			<span class="text-4xl text-gray-900 dark:text-gray-300 font-inter font-bold">My Projects</span>
		</div>
		<div class="col-span-8 col-start-2 lg:col-span-6 lg:col-start-3 xl:col-span-4 xl:col-start-4">
			<div v-for="project in store.projects" class="my-5">
				<projectCard
				:title="project.title"
				:about="project.about"
				:stacks="project.stacks"
				:demo-link="project.demoUrl"
				:source-link="project.sourceUrl"/>
			</div>
		</div>
	</div>
</template>