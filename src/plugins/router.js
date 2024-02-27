import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/pages/About.vue')
  },
  {
    path: '/projects',
    name: 'Projects',
    component: () => import('@/pages/Projects.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/pages/Contact.vue')
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
  scrollBehavior: function (to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
      }
    }
  },
})

router.beforeEach((to, from) => {
  document.title = to.name.length ? `${to.name} | Maurício Brito Vaz` : 'Maurício Brito Vaz'
})

export default router