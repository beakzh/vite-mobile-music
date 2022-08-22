export interface SongUrlParams {
	id: string | number
	time?: number | string
	timestamp?: number
}
// 获取歌曲详情
export interface idsParams {
	ids: string
}
// 获取歌单列表
export interface SheetListParams {
	cat?: string
	before?: number
	limit?: number
}
