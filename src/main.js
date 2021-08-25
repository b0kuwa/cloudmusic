import Vue from 'vue'
import App from '@/App.vue'
import store from '@/store'
import router from '@/router'
import api from '@/api'
import dayjs from 'dayjs'

import 'tailwindcss/tailwind.css'
import '@/assets/css/global.css'
import '@/assets/fonts/iconfont.css'

import '@/plugin/element-ui'

import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

Vue.config.productionTip = false

Vue.filter('numberFormat', num => (num + '').padStart(2, 0))
Vue.filter('dateFormat', date => dayjs(date).format('YYYY-MM-DD'))
Vue.filter('duration', dur => dayjs.duration(dur).format('mm:ss'))
Vue.filter('numberFormatThousand', num => {
    if (parseInt(num) < 10000) {
        return num
    }
    return parseInt(num / 10000) + '万'
})
Vue.filter('MMDD', date => dayjs(date).format('MM月DD日 hh:mm'))
Vue.filter('mmss', time => dayjs(time).format('mm:ss'))

Vue.prototype.$api = api

new Vue({
    el: '#app',
    render: h => h(App),
    store,
    router
})
