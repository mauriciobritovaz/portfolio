import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useLocalStorage } from '@vueuse/core'
import { collection, onSnapshot } from 'firebase/firestore'
import { db } from '@/plugins/firebase'

export const projectsStore = defineStore('projects', () => {
  // STATE
  const projects = ref(
    useLocalStorage('projects', [])
  )

  // ACTIONS
  const getProjects = async () => {
    onSnapshot(collection(db, 'projects'), (querySnapshot) => {
      let projectList = []
      querySnapshot.forEach((doc) => {
        let project = {
          title: doc.data().title,
          about: doc.data().about,
          date: doc.data().date,
          stacks: doc.data().stacks,
          demoUrl: doc.data().demoUrl,
          sourceUrl: doc.data().sourceUrl
        }

        projectList.push(project)
      })

      projects.value = projectList
      
    })
  }

  return {
    projects,
    getProjects
  }
})