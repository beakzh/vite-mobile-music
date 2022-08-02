import http from '@/utils/http'
import { RecommendParams } from '@/types/api/dj'

// 获取电台推荐类型 
export function getCategoryRecommend () {
    return http.get('/dj/category/recommend', {})
}
// 获取电台banner
export function getDjBanner() {
	return http.get('/dj/banner', {})
}
