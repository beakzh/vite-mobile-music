import axios, { type AxiosRequestConfig } from 'axios'

const request = axios.create({
	baseURL: '/',
	timeout: 20000,
	maxBodyLength: 5 * 1024 * 1024,
	withCredentials: true,
})

request.interceptors.request.use(
	(config: AxiosRequestConfig | any) => config,
	err => Promise.reject(err)
)
request.interceptors.response.use(
	response => response,
	err => Promise.reject(err)
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
