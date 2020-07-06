import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.config.productionTip = false
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.directive('click-outside', {
	priority: 700,
	bind () {
		let self  = this
		this.event = function (event) { 
			console.log('emitting event')
			self.vm.$emit(self.expression,event) 
		}
		this.el.addEventListener('click', this.stopProp)
		document.body.addEventListener('click',this.event)
	},
	unbind() {
		console.log('unbind')
		this.el.removeEventListener('click', this.stopProp)
		document.body.removeEventListener('click',this.event)
	},
	stopProp(event) {event.stopPropagation() }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
