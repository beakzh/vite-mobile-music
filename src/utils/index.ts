// 邮箱验证
export function checkEmail(val: string): string {
	const reg =
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	if (!val) return '请输入邮箱'
	if (!reg.test(val)) return '请输入正确邮箱'
	return ''
}

export function formatCountNumber(val: number): string {
	if (val < 1000) return val + ''
	else if (val < 10000) return `${(val / 1000).toFixed(0)} k`
	else if (val < 100000000) return `${(val / 10000).toFixed(0)} w`
	else return `${(val / 100000000).toFixed(0)} 亿`
}
