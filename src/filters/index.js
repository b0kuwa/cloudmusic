import dayjs from 'dayjs'
import Vue from 'vue'

import duration from 'dayjs/plugin/duration'
dayjs.extend(duration)

// 两位数以下的数字前面补0
Vue.filter('paddingZero', num => (num + '').padStart(2, 0))

// 格式化日期为年月日
Vue.filter('dateFmt', (val, format = 'YYYY-MM-DD') => dayjs(val).format(format))

// 播放量转换
Vue.filter('numFmtThousand', num => {
    if (parseInt(num) < 10000) {
        return num
    }
    return parseInt(num / 10000) + '万'
})

// 转换时长为分秒格式
Vue.filter('duration',dur=>dayjs.duration(dur).format('mm:ss'))

Vue.filter('currentTime', t => {
    t = t | 0
    const m = (t / 60) | 0
    const s = t % 60
    return `${m.toString().padStart(2, 0)}:${s.toString().padStart(2, 0)}`
})