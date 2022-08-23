import http from '@/utils/http'

// 获取所有榜单
export function reqTopList() {
    return http.get('/toplist', {})
}