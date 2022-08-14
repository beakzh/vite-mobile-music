import http from '@/utils/http'
import type { delParams } from '@/types/api/sheet'

// 删除歌单
export function reqDelSheet (data: delParams) {
    return http.get('/playlist/delete', data)
}