// 推荐歌单数据
export interface songListFace {
	alg: string
	canDislike: boolean
	copywriter: string
	highQuality: boolean
	id: number
	name: string
	picUrl: string
	playCount: number
	trackCount: number
	trackNumberUpdateTime: number
	type: number
	coverImgUrl: string
}
// 推荐新歌数据
export interface songData {
	alg: string
	canDislike: boolean
	copywriter: string
	id: number
	name: string
	picUrl: string
	song: any
	trackNumberUpdateTime: number
	type: number
}

// 盒子类型
export enum BoxType {
	line = 'line',
	box = 'box'
}
