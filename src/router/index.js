import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import FluxView from "@/views/FluxView.vue"
import VipView from "@/views/VipView.vue"
import GroupView from "@/views/GroupView.vue"
import ConfVmView from "@/views/ConfVmView.vue"

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
  },
  {
    path: '/flux',
    name: 'FluxView',
    component: FluxView
  },
  {
    path: '/vip',
    name: 'VipView',
    component: VipView
  },
  {
    path: '/group',
    name: 'GroupView',
    component: GroupView
  },
  {
    path: '/confvm',
    name: 'ConfVmView',
    component: ConfVmView
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router