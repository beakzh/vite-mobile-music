import { defineStore } from 'pinia'
import type { userState } from '@/types/userTypes'

export const useUserStore = defineStore('user', {
    state: ():userState => ({
        token:'',
        userInfo: {
            accountStatus: 0,
			accountType: 0,
			anchor: false,
			authStatus: 0,
			authenticated: false,
			authenticationTypes: 0,
			authority: 0,
			avatarDetail: null,
			avatarImgId: 0,
			avatarUrl: '',
			backgroundImgId: 0,
			backgroundUrl: '',
			birthday: 0,
			city: 0,
			createTime: 0,
			defaultAvatar: false,
			description: null,
			detailDescription: null,
			djStatus: 0,
			expertTags: null,
			experts: null,
			followed: false,
			gender: 0,
			lastLoginIP: '',
			lastLoginTime: 0,
			locationStatus: 0,
			mutual: false,
			nickname: '',
			province: 0,
			remarkName: null,
			shortUserName: '',
			signature: null,
			userId: 0,
			userName: '',
			userType: 0,
			vipType: 0,
			viptypeVersion: 0
        },
        likeList: []
    }),
    actions: {},
    getters: {}
})