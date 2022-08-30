/*
 * @Author: cully fung
 * @Date: 2021-06-14 11:38:16
 * @LastEditTime: 2022-08-30 08:54:31
 * @LastEditors: cully fung
 * @Description:
 */
import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'

import 'tailwindcss/tailwind.css'
import '@/assets/css/global.scss'
import '@/assets/fonts/iconfont.css'

import '@/plugin/element-ui'

import '@/filters'

import '@/conf'
import http from './utils/http'

Vue.config.productionTip = false

Vue.prototype.$http = http

new Vue({
	el: '#app',
	render: h => h(App),
	store,
	router
})
