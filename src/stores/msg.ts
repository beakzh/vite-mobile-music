import { defineStore } from 'pinia'
import { getMsgList } from '@/api/msg'

interface MsgState {
	newMsgCount: number
}

export const useMsgStore = defineStore('msg', {
	state: (): MsgState => ({
		newMsgCount: 0,
	}),
	actions: {
		getMsgCount() {
			return new Promise((resolve, reject) => {
				getMsgList({ limit: 1000, offset: 0 })
					.then((res: any) => {
						resolve(res)
						this.newMsgCount = res.newMsgCount
					})
					.catch(err => reject(err))
			})
		},
	},
})
