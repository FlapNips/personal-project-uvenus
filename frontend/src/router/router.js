import Vue from 'vue'
import VueRouter from 'vue-router'
//import { component } from 'vue/types/umd'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    component: () => import('@/views/Home.vue'),
    children: [
      { path: '', component: () => import('@/components/home/Content.vue') },
      { path: 'sobre', component: () => import('@/components/home/AboutUs.vue') },
      { path: 'novidades', component: () => import('@/components/home/News.vue') },
      { path: 'entrar', component: () => import('@/components/home/LoginAndRegister.vue') }
    ]

  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
