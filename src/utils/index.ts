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

export function dateFormat(time: number, type?: string):string {
	let formatTime
	let date
	if (time === 0) date = new Date()
	else date = new Date(time)
	let Year = date.getFullYear()
	let month = date.getMonth() + 1
	let Month = month >= 10 ? month : '0' + month
	let Day = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()
	let Hour = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()
	let Mins = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()
	let Second = date.getSeconds() >= 10 ? date.getSeconds() : '0' + date.getSeconds()
	if (type == 'yyyy-MM-DD') {
		formatTime = Year + '-' + Month + '-' + Day
		return formatTime
	} else if (type == 'yyyy-MM-dd hh:mm:ss') {
		formatTime = Year + '-' + Month + '-' + Day + ' ' + Hour + ':' + Mins + ':' + Second
		return formatTime
	}else if (type === 'hh:mm:ss') {
		formatTime = Hour + ':' + Mins + ':' + Second
		return formatTime
	} else if (type === 'MM-dd') {
		formatTime = Month + '-' + Day
		return formatTime
	} else {
		return "error type!"
	}
}
