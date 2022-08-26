import http from '@/utils/http'
import type { AlbumListParams, DigitAlbumParams } from '@/types/api/album'

// 新碟上架
export function reqAlbumList(data: AlbumListParams) {
	return http.get('/album/list', data)
}
// 获取数字专辑
export function reqDigitAlbum(data: DigitAlbumParams) {
    return http.get('/album/songsaleboard', data)
}
