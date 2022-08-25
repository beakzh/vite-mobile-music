import http from '@/utils/http'
import type { AlbumListParams } from '@/types/api/album'

export function reqAlbumList(data: AlbumListParams) {
	return http.get('/album/list', data)
}
