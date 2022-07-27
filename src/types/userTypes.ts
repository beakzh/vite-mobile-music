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
    token: string;
	userInfo: userInfo;
	likeList: Array<number>
}
