import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import 'normalize.css'

import '@/plugin/element-ui'

Vue.config.productionTip = false

new Vue({
	el: '#app',
	render: h => h(App),
	store,
	router
})
