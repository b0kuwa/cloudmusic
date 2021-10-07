import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import api from '@/api'

import 'tailwindcss/tailwind.css'
import '@/assets/css/global.scss'
import '@/assets/fonts/iconfont.css'

import '@/plugin/element-ui'

import '@/filters'

import '@/global-components'

import '@/conf'

Vue.config.productionTip = false

Vue.prototype.$api = api

new Vue({
	el: '#app',
	render: h => h(App),
	store,
	router
})
