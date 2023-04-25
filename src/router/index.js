import { createRouter, createWebHistory } from 'vue-router'
import FluxView from "@/views/FluxView.vue"
import VipView from "@/views/VipView.vue"

const routes = [
  {
    path: '/',
    name: 'FluxView',
    component: FluxView
  },
  {
    path: '/vip',
    name: 'VipView',
    component: VipView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router