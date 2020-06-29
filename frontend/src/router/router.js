import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{ path: '/home',
	name: 'Inicio',
	component: () => import('../views/Home.vue'),
	children: [
		{path: '/sobre', component: () => import('../components/home/AboutUs.vue')},
		{path: '/inicio', component: () => import('../components/home/Inicio.vue')},
		{path: '/novidades', component: () => import('../components/home/News.vue')},
		{path: '/conectar', component: () => import('../components/home/LoginAndRegister.vue')}
	]
	},
	{ path: '/',
	name: 'Main',
	component: () => import('../views/Main.vue'),
	children: [
		{path: '/user', component: () => import('../components/home/AboutUs.vue')},
		{path: '/course', component: () => import('../components/home/Inicio.vue')},
		{path: '/news', component: () => import('../components/home/News.vue')},
		]
	},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
