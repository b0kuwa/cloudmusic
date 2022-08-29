/*
 * @Author: cully fung
 * @Date: 2021-06-14 13:37:46
 * @LastEditTime: 2022-08-29 21:54:51
 * @LastEditors: cully fung
 * @Description:
 */
import axios from 'axios'

// 创建axios配置
const http = axios.create({
	baseURL: process.env.VUE_APP_BASE_URL,
	timeout: 20000
})

// 请求拦截器
http.interceptors.request.use(config => {
	return config
})

// 响应拦截器
http.interceptors.response.use(
	// 成功回调
	response => {
		return response.data
	},
	// 失败回调
	async error => {
		return Promise.reject(error)
	}
)

export default http
