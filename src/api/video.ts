import http from '@/utils/http'
import type { MvTopParams } from '@/types/api/video'

export function reqMvTop(data: MvTopParams) {
	return http.get('/top/mv', data)
}
