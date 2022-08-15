import http from '@/utils/http'
import type { delParams, UpdateCoverParams, UpdateNameParams, UpdateDescParams } from '@/types/api/sheet'

// 歌单分类
export function reqCatList() {
	return http.get('/playlist/catlist', {})
}
// 删除歌单
export function reqDelSheet(data: delParams) {
	return http.get('/playlist/delete', data)
}
// 歌单封面更新
interface updateParams {
	params: UpdateCoverParams
	data: FormData
}
export function reqUpdateCover(data: FormData, config: any) {
	return http.post('/playlist/cover/update', data, { params: config.params })
}
// 更新歌单名称
export function reqUpdateSheetName(data: UpdateNameParams) {
	return http.get('/playlist/name/update', data)
}
// 更新歌单描述
export function reqUpdateSheetDesc(data: UpdateDescParams) {
	return http.get('/playlist/desc/update', data)
}
