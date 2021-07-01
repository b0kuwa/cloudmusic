import axios from 'axios'

// 创建axios配置
const instance = axios.create({
	baseURL: 'http://localhost:3000',
	timeout: 2000
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
		return Promise.inject(error)
	}
)

export default instance
