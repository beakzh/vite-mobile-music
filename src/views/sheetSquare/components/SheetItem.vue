<script setup lang="ts">
import type { SheetDataFace } from '@/types/public'
import { formatCountNumber } from '@/utils'

interface Prop {
	sheetData: SheetDataFace
}
const props = withDefaults(defineProps<Prop>(), {
	sheetData: () => ({
		coverImgUrl: '',
		tags: [],
		updateTime: 0,
		name: '',
		playCount: 0,
		id: 0,
	}),
})
</script>

<template>
	<div class="sheet-item">
		<div class="cover">
			<img
				:src="sheetData.coverImgUrl + '?param=140y140'"
				alt=""
				v-lazy="sheetData.coverImgUrl + '?param=140y140'"
			/>
		</div>
		<div class="play-count">
			<i class="iconfont icon-bofang"></i>
			<div>{{ formatCountNumber(sheetData.playCount) }}</div>
		</div>
		<div class="song-title text_over_two_lines">
			{{ sheetData.name }}
		</div>
	</div>
</template>

<style lang="less" scoped>
.sheet-item {
	padding: 20px;
	height: 100%;
	box-sizing: border-box;
	position: relative;
	.cover {
		img {
			width: 100%;
			height: 100%;
			border-radius: 20px;
		}
	}
	.play-count {
		position: absolute;
		top: 30px;
		right: 30px;
		display: flex;
		align-items: center;
        gap: 0 5px;
		font-size: 28px;
		background: rgba(0, 0, 0, 0.2);
		padding: 2px 5px;
		border-radius: 8px;
		color: var(--my-text-color-white);
	}
	.song-title {
		color: var(--my-text-color-black);
		font-size: 25px;
		margin-top: 10px;
	}
}
</style>
