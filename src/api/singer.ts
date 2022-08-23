import http from '@/utils/http'
import type { singerListParams, subSingerParams } from '@/types/api/singer'

export function reqSingerList(data: singerListParams) {
	return http.get('/artist/list', data)
}
export function reqSubSinger(data: subSingerParams) {
	return http.get('/artist/sub', data)
}
