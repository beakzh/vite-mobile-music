import http from '@/utils/http'
import type { RecommendListParams, HistoryRecommendParams } from '@/types/api/home'

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
	return http.get('/personalized/newsong', data)
}
// 获取最新mv
export function getNewMvList(data: RecommendListParams) {
	return http.get('/mv/first', data)
}
// 每日推荐歌曲
export function reqDaysRecommend() {
	return http.get('/recommend/songs', {})
}
// 获取可用推荐日期
export function reqGetRecommendDate() {
	return http.get('/history/recommend/songs', {})
}
// 获取历史日推可用日期列表  
export function reqHistoryRecommend(data:HistoryRecommendParams) {
		return http.get('/history/recommend/songs/detail', data)
}
 