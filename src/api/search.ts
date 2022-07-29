import http from '@/utils/http'

export function reqSearchDefault () {
    return http.get('/search/default', {})
}