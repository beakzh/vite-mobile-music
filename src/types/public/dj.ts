// 电台推荐分类
export interface DjCategoryRecommend {
    categoryId:number
    categoryName:string
    radios: DjData[]
}
// 推荐电台数据
export interface DjData {
    id: number
	rcmdText: string
	subed: boolean
	programCount: number
	picUrl: string
	name: string
	playCount: number
	feeScope?: number
}
// 热门主播数据
export interface PopularData{
	avatarUrl: string
	id: number
	liveId: number
	nickName: string
	roomNo: number
	userFollowedCount: number
}