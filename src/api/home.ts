import http from '@/utils/http'

/*
    首页
*/
export function reqBanner() {
	return http.get('/banner', { type: 2 })
}
