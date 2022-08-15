// 删除歌单
export interface delParams {
	id: string | number
}
// 更新歌单封面
export interface UpdateCoverParams {
	id: number
	imgSize?: number // 图片尺寸,默认为 300
	imgX?: number // 水平裁剪偏移,方形图片可不传,默认为 0
	imgY?: number // 垂直裁剪偏移,方形图片可不传,默认为 0
}
// 更新名称
export interface UpdateNameParams {
	id: number
	name: string
}
// 更新描述
export interface UpdateDescParams {
	id: number
	desc: string
}
