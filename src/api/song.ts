import http from '@/utils/http'
import { idsParams, SongUrlParams, SheetListParams } from '@/types/api/song'

// 获取歌曲详情
export function reqSongDetail(data: idsParams) {
	return http.get('/song/detail', data)
}
// 获取歌单详情
export function reqSheetDetail(data: SongUrlParams) {
	return http.get('/playlist/detail', data)
}
// 获取歌曲标签
export function reqSheetTags() {
	return http.get('/playlist/highquality/tags', {})
}
// 获取歌单列表
export function reqSheetList(data:SheetListParams) {
	return http.get('/top/playlist/highquality', data)
}
