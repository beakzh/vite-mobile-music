import http from '@/utils/http'
import type { SendCodeParams, LoginPhoneParams, LoginEmailParams, UidParams } from '@/types/api/user'

/* 
    用户登录信息模块
*/

// 发送验证码
export function reqSendCode(data: SendCodeParams) {
	return http.get('/captcha/sent', data)
}
// 手机登录
export function reqLoginByPhone(data: LoginPhoneParams) {
	return http.get('/login/cellphone', data)
}
// 邮箱登录
export function reqLoginByEmail(data: LoginEmailParams) {
	return http.get('/login', data)
}
// 用户信息
export function getUserInfo() {
	return http.get('/user/account', {})
}
// 用户登出
export function reqLoginOut() {
	return http.get('/logout', {})
}
// 获取用户详情
export function getUserDetail(data: UidParams) {
	return http.get('/user/detail', data)
}
