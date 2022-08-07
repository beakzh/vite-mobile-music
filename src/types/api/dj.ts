// 电台个性推荐
export interface RecommendParams {
	limit?: number
}
// 热门主播
export interface TopPopularParams{
	limit?: number
}
// 电台 - 新晋电台榜/热门电台榜
export interface TopListParams {
	limit?: number
	offset?: number
	type?: string
}
// 电台 - 类别热门电台
export interface DjHotByTypeParams {
	limit?: number
	offset?: number
	cateId: number
}
