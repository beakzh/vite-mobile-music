<script setup lang="ts">
import { MvInterface } from '@/types/public/mv'

interface Prop {
	mvData: MvInterface
}
const props = withDefaults(defineProps<Prop>(), {
	mvData: () => ({
		id: 0,
		artistId: 0,
		artistName: '',
		cover: '',
		name: '',
		playCount: 0,
	}),
})
</script>

<template>
	<div class="mv-item">
		<div class="wrapper">
			<img class="wrapper-img" :src="mvData.cover + '?param=140y140'" alt="" />
			<div class="wrapper-title">
				<span class="song-name">{{ mvData.name }}</span>
				<span class="singer">{{ mvData.artistName }}</span>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.mv-item {
	padding: 20px;
	.wrapper {
		display: flex;
		align-items: center;
		gap: 0 20px;
		.wrapper-img {
			width: 100px;
			height: 100px;
			border-radius: 10px;
		}
		.wrapper-title {
			display: flex;
			flex-direction: column;
			.song-name {
				font-size: 30px;
			}
			.singer {
				font-size: 15px;
				color: var(--my-text-color-gray);
			}
		}
	}
}
</style>
