import router from './router'
import { getToken } from './utils/auth'
import { useUserStore, useMsgStore } from '@/stores'

router.beforeEach(async (from, to, next) => {
	const userStore = useUserStore()
    const msgStore = useMsgStore()
	try {
		if (getToken() && !userStore.$state.userInfo.userId) {
			await userStore.getInfo()
            await msgStore.getMsgCount()
		}
		next()
	} catch {
		next()
	}
})
