import http from '@/utils/http'
import { idsParams } from '@/types/api/song'

// 获取歌曲详情
export function reqSongDetail(data: idsParams) {
	return http.get('/song/detail', data)
}
