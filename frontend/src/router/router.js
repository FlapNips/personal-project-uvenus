import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {path: '/sobre', component: () => import('../components/home/AboutUs.vue')},
      {path: '/', component: () => import('../components/home/Inicio.vue')},
      {path: '/novidades', component: () => import('../components/home/News.vue')},
      {path: '/conectar', component: () => import('../components/home/LoginAndRegister.vue')}
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
