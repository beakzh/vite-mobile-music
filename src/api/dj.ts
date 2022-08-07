import http from '@/utils/http'
import type {
	RecommendParams,
	TopListParams,
	DjHotByTypeParams,
	TopPopularParams,
} from '@/types/api/dj'

// 获取电台推荐类型
export function getCategoryRecommend() {
	return http.get('/dj/category/recommend', {})
}
// 获取电台banner
export function getDjBanner() {
	return http.get('/dj/banner', {})
}
// 获取电台热门
export function getTopList() {
	return http.get('/dj/toplist', {})
}
// 类别热门电台
export function getDjHotByType(data: DjHotByTypeParams) {
	return http.get('/dj/radio/hot', data)
}
// 主播排行
export function getTopPopular(data: TopPopularParams) {
	return http.get('/dj/toplist/popular', data)
}
