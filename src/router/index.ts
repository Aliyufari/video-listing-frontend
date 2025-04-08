import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import NewVideoForm from '../views/NewVideoForm.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/new-video',
    name: 'NewVideoForm',
    component: NewVideoForm
  }
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router
