import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/Login/LoginPage.vue'
import RegisterPage from '@/components/Login/RegisterPage.vue'
import Home from '@/components/Home/MainLayout.vue'

Vue.use(Router)

export default new Router({
	mode: 'history',
	routes: [{
		path: '/',
		component: LoginPage,
	},
		{
		path: '/register',
		component: RegisterPage,
	},
		{
		path: '/home',
		component: Home
	}
	]
})