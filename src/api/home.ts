import http from '@/utils/http'
import { RecommendListParams } from '@/types/api/home'

/*
    首页
*/
// 获取轮播图
export function reqBanner() {
	return http.get('/banner', { type: 2 })
}
// 获取推荐歌单
export function getRecommendList(data: RecommendListParams) {
	return http.get('/personalized', data)
}
// 获取推荐新歌
export function getRecommendNewSongs(data: RecommendListParams) {
    return http.get('personalized/newsong', data)
}
