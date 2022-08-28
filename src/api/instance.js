/*
 * @Author: cully fung
 * @Date: 2021-06-14 13:37:46
 * @LastEditTime: 2022-08-28 23:38:42
 * @LastEditors: cully fung
 * @Description:
 */
import axios from 'axios'

const baseURL = process.env.BASE_URL
const timeout = 2000

// 创建axios配置
const instance = axios.create({
	baseURL,
	timeout
})

// 请求拦截器
instance.interceptors.request.use(config => {
	return config
})

// 响应拦截器
instance.interceptors.response.use(
	// 成功回调
	responese => {
		return responese.data
	},
	// 失败回调
	async error => {
		console.log(error)
	}
)

export default instance
