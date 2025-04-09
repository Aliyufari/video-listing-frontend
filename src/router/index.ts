import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import UploadVideoView from '../views/UploadVideoView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/new-video',
    name: 'NewVideoForm',
    component: UploadVideoView
  }
]

const router = createRouter({
  history: createWebHistory(), 
  routes
})

export default router
