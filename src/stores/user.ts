import { defineStore } from 'pinia'
import { getToken } from '@/utils/auth'
import { reqLoginByPhone, reqLoginByEmail, getUserInfo, reqLoginOut } from '@/api/user'
import { LoginPhoneParams, LoginEmailParams } from '@/types/api/user'
import { setToken, removeToken } from '@/utils/auth'

export interface userInfo {
	accountStatus: number
	accountType: number
	anchor: boolean
	authStatus: number
	authenticated: boolean
	authenticationTypes: number
	authority: number
	// eslint-disable-next-line
	avatarDetail: any
	avatarImgId: number
	avatarUrl: string
	backgroundImgId: number
	backgroundUrl: string
	birthday: number
	city: number
	createTime: number
	defaultAvatar: boolean
	// eslint-disable-next-line
	description: any
	// eslint-disable-next-line
	detailDescription: any
	djStatus: number
	// eslint-disable-next-line
	expertTags: any
	// eslint-disable-next-line
	experts: any
	followed: boolean
	gender: number
	lastLoginIP: string
	lastLoginTime: number
	locationStatus: number
	mutual: boolean
	nickname: string
	province: number
	// eslint-disable-next-line
	remarkName: any
	shortUserName: string
	// eslint-disable-next-line
	signature: any
	userId: number
	userName: string
	userType: number
	vipType: number
	viptypeVersion: number
}

export interface userState {
	token: string
	userInfo: userInfo
	likeList: Array<number>
}

export const useUserStore = defineStore('user', {
	state: (): userState => ({
		token: getToken(),
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
			viptypeVersion: 0,
		},
		likeList: [],
	}),
	actions: {
		loginByPhone(params: LoginPhoneParams) {
			return new Promise((resolve, reject) => {
				reqLoginByPhone(params)
					.then((res: any) => {
						this.token = res.cookie
						setToken(res.cookie)
						resolve(res)
					})
					.catch(err => {
						reject(err)
					})
			})
		},
		loginByEmail(params: LoginEmailParams) {
			return new Promise((resolve, reject) => {
				reqLoginByEmail(params)
					.then((res: any) => {
						this.token = res.cookie
						setToken(res.cookie)
						resolve(res)
					})
					.catch(err => {
						reject(err)
					})
			})
		},
		getInfo() {
			return new Promise((resolve, reject) => {
				getUserInfo()
					.then((res: any) => {
						this.userInfo = res.profile
						resolve(res)
					})
					.catch(err => reject(err))
			})
		},
		loginOut() {
			return new Promise((resolve, reject) => {
				reqLoginOut()
					.then((res: any) => {
						this.token = ''
						this.userInfo = {
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
							viptypeVersion: 0,
						}
						removeToken()
						resolve(res)
					})
					.catch(err => reject(err))
			})
		},
	},
	getters: {
		isLogin: state => (state.token ? true : false),
	},
})
