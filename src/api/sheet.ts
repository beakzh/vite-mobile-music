import http from '@/utils/http'
import type { delParams, UpdateCoverParams } from '@/types/api/sheet'

// 删除歌单
export function reqDelSheet(data: delParams) {
	return http.get('/playlist/delete', data)
}
// 歌单封面更新
interface updateParams {
	params: UpdateCoverParams
	data: FormData
}
export function reqUpdateCover(data: updateParams) {
	return http.post('/playlist/cover/update', data)
}
