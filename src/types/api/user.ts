export interface SendCodeParams {
	phone: number
}
export interface LoginPhoneParams {
	phone: number,
	captcha: number
}
export interface LoginEmailParams {
	email: string,
	password: string 
}
