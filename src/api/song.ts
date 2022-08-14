import http from '@/utils/http'
import { idsParams, SongUrlParams } from '@/types/api/song'

// 获取歌曲详情
export function reqSongDetail(data: idsParams) {
	return http.get('/song/detail', data)
}
// 获取歌单详情
export function reqSheetDetail(data: SongUrlParams) {
	return http.get('/playlist/detail', data)
}
