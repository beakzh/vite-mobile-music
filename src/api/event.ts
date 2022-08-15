import http from '@/utils/http'
import type { EventParams } from '@/types/api/event'

export function reqEvent(data: EventParams) {
	return http.get('/event', data)
}
