export interface SongData {
	url: string
	name: string
	id: number
	ar: Array<arData>
	al: alData
	dt: number
	type?: MusicType
}
export enum MusicType {
	song = 1,
	dj = 2,
}
export interface arData {
	id: number
	name: string
}
export interface alData {
	id: number
	name: string
	pic: number
	picUrl: string
	pic_str: string
	// eslint-disable-next-line
	tns?: Array<any>
}
