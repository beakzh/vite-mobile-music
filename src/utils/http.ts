import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { getToken } from './auth'
import { Toast } from 'vant'
import router from '@/router'

const request = axios.create({
	baseURL: '/api',
	timeout: 20000,
	maxBodyLength: 5 * 1024 * 1024,
	withCredentials: true,
})

request.interceptors.request.use(
	(config: AxiosRequestConfig | any) => {
		const token = getToken()
		if (token) {
			config.params
				? (config.params = Object.assign(config.params, {
						cookie: encodeURIComponent(token),
				  }))
				: (config.params = { cookie: encodeURIComponent(token) })
			config.data
				? (config.data = Object.assign(config.data, { cookie: token }))
				: (config.data = { cookie: token })
		}
		return config
	},
	err => Promise.reject(err)
)
request.interceptors.response.use(
	(response: AxiosResponse | any) => {
		const res = response.data
		const code = response.code || response.status
		let msg = ''
		switch (code) {
			case 200:
				return Promise.resolve(response)
			case 201:
				return Promise.resolve(response)
			case 401:
				return Promise.reject()
			case 403:
				return Promise.reject()
			case 400:
				msg = res && res.message
				Toast.fail(msg ? msg : '网络异常稍后再试~')
				return Promise.reject(res)
			case 500:
				msg = res && res.message
				Toast.fail(msg ? msg : '网络异常稍后再试~')
				return Promise.reject(res)
			case 301:
				Toast.fail('请先登录')
				router.push('/login')
				return Promise.reject(res)
			case -462:
				msg = res && res.message
				Toast.fail(msg ? msg : '网络异常稍后再试~')
				router.push('/login')
				return Promise.reject(res)
			default:
				msg = res && res.message
				Toast.fail(msg ? msg : '网络异常稍后再试~')
				return Promise.reject(response)
		}
	},
	err => {
		const status = err?.response?.status
		switch (status) {
			case 301:
				Toast.fail(err.response.data?.msg || '登录状态失效')
				return Promise.reject(err)
			case 401:
				Toast.fail('登录状态失效')
				return Promise.reject(err)
			case 403:
				Toast.fail('登录状态失效')
				return Promise.reject(err)
			case 404:
				Toast.fail(err.response.data?.message || '网络异常稍后再试~')
				return Promise.reject(err)
			case 503:
				Toast.fail(err.response.data?.message || '登录状态失效')
				return Promise.reject(err)
			case 400:
				Toast.fail(err.response.data?.message || '请先登录')
				router.push('/login')
				return Promise.reject(err)
			default:
				Toast.fail('网络异常稍后再试~')
				return Promise.reject(err)
		}
	}
)

interface Http {
	get<T>(url: string, params: unknown): Promise<T>

	post<T>(url: string, params: unknown): Promise<T>

	put<T>(url: string, params: unknown): Promise<T>

	delete<T>(url: string, params: unknown): Promise<T>
}

const http: Http = {
	get(url, params) {
		return new Promise((resolve, reject) => {
			request
				.get(url, { params })
				.then(res => resolve(res.data))
				.catch(err => reject(err.data))
		})
	},

	post(url, params) {
		return new Promise((resolve, reject) => {
			request
				.post(url, JSON.stringify(params))
				.then(res => resolve(res.data))
				.catch(err => reject(err))
		})
	},

	put(url, params) {
		return new Promise((resolve, reject) => {
			request
				.put(url, JSON.stringify(params))
				.then(res => resolve(res.data))
				.catch(err => reject(err))
		})
	},

	delete(url, params) {
		return new Promise((resolve, reject) => {
			request
				.delete(url, { params })
				.then(res => resolve(res.data))
				.catch(err => reject(err.data))
		})
	},
}

export default http
