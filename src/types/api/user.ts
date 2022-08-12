// 发送验证码
export interface SendCodeParams {
	phone: number
}
// 手机登录参数
export interface LoginPhoneParams {
	phone: number
	captcha: number
}
// 邮箱登录参数
export interface LoginEmailParams {
	email: string
	password: string
}
//  uid
export interface UidParams {
	uid: number
	timestamp?: number
}
// 用户歌单
export interface UserPlayList {
	uid: number
	limit?: number
	offset?: number
}
