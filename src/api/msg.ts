import http from '@/utils/http'
import type { MsgParams } from '@/types/api/msg'

// 私信列表
export function getMsgList(data: MsgParams) {
    return http.get('/msg/private', data)
}
