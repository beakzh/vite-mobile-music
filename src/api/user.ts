import http from '@/utils/http'
import { SendCodeParams, LoginPhoneParams, LoginEmailParams } from '@/types/api/user'

/* 
    用户登录信息模块
*/

// 发送验证码
export function reqSendCode (data: SendCodeParams) {
    return http.get('/captcha/sent', data)
}
// 手机登录
export function reqLoginByPhone (data: LoginPhoneParams) {
    return http.get('/login/cellphone', data)
}
// 邮箱登录
export function reqLoginByEmail (data: LoginEmailParams) {
    return http.get('/login', data)
}