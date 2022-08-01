<script setup lang="ts">
import { songListFace } from '@/types/public'
import { formatCountNumber } from '@/utils'

interface Prop {
	songListData: songListFace
}
const props = withDefaults(defineProps<Prop>(), {
	songListData: () => ({
		alg: '',
		canDislike: false,
		copywriter: '',
		highQuality: false,
		id: 0,
		name: '',
		picUrl: '',
		playCount: 0,
		trackCount: 0,
		trackNumberUpdateTime: 0,
		type: 0,
		coverImgUrl: '',
	}),
})
</script>

<template>
	<div class="songlist-item">
		<div class="cover">
			<img class="cover-img" :src="songListData.picUrl? songListData.picUrl : songListData.coverImgUrl + '?param=140y140'" alt="" />
			<div class="playcount">
				<i class="iconfont icon-bofang"></i>
				<div>{{ formatCountNumber(songListData.playCount) }}</div>
			</div>
		</div>
		<div class="songlist-title text_over_two_lines">{{ songListData.name }}</div>
	</div>
</template>

<style lang="less" scoped>
.songlist-item {
	width: 220px;
	flex-shrink: 0;
	.cover {
		width: 200px;
		height: 200px;
		border-radius: 20px;
		position: relative;
		.playcount {
			position: absolute;
			top: 15px;
			right: 15px;
			display: flex;
			gap: 0 5px;
			color:#fff;
			background: rgba(0, 0, 0, 0.2);
			padding: 5px;
			border-radius: 10px;
			font-size: 17px;
		}
		.cover-img {
			width: 100%;
			height: 100%;
			border-radius: 20px;
		}
	}
	.songlist-title {
		width: 200px;
	}
}
</style>
