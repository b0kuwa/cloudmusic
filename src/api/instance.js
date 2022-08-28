/*
 * @Author: cully fung
 * @Date: 2021-06-14 13:37:46
 * @LastEditTime: 2022-08-28 23:50:45
 * @LastEditors: cully fung
 * @Description:
 */
import axios from 'axios'

// 创建axios配置
const instance = axios.create({
	baseURL: process.env.VUE_APP_BASE_URL,
	timeout: 2000
})

// 请求拦截器
instance.interceptors.request.use(config => {
	return config
})

// 响应拦截器
instance.interceptors.response.use(
	// 成功回调
	response => {
		return response.data
	},
	// 失败回调
	async error => {
		console.log(error)
	}
)

export default instance
