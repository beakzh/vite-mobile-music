<script setup lang="ts">
import type { albumDataInterface } from '@/types/public/album'

interface Prop {
	albumData: albumDataInterface
}
const props = withDefaults(defineProps<Prop>(), {
	albumData: () => ({
		albumId: 0,
		albumName: '',
		coverUrl: '',
		price: 0,
		artistName: '',
	}),
})
</script>

<template>
	<div class="album-item">
		<div class="cover">
			<img :src="albumData.coverUrl + '?param=140y140'" alt="" />
		</div>
		<div class="album-name text_over_line">{{ albumData.albumName }}</div>
		<div class="artist-name text_over_line">{{ albumData.artistName }}</div>
	</div>
</template>

<style lang="less" scoped>
.album-item {
	padding: 25px;
	box-sizing: border-box;
	width: 100%;
	.cover {
		width: 100%;
		padding-bottom: 100%;
		background: var(--my-back-color-gray);
		height: 0;
		position: relative;
		img {
			width: 100%;
			height: 100%;
			border-radius: 10px;
			position: absolute;
			top: 0;
			left: 0;
		}
	}
	.album-name {
		font-size: 30px;
		margin-top: 10px;
		color: var(--my-text-color-black);
	}
	.artist-name {
		font-size: 28px;
		color: var(--my-text-color-gray);
	}
}
</style>
