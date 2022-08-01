<script setup lang="ts">
import type { songData } from '@/types/public'
import type { arData } from '@/types/store/player'
import { computed } from 'vue'

interface Prop {
	songData: songData
}
const props = withDefaults(defineProps<Prop>(), {
	songData: () => ({
		alg: '',
		canDislike: false,
		copywriter: '',
		id: 0,
		name: '',
		picUrl: '',
		song: {},
		trackNumberUpdateTime: 0,
		type: 0,
	}),
})

const singName = computed(() => {
	if (props.songData.song.artists?.length > 0) {
		return props.songData.song.artists.map((v: arData) => v.name).join('/')
	}
	return '-'
})
</script>

<template>
	<div class="wrapper">
		<div class="new-song-item">
			<div class="left">
				<div class="cover">
					<img class="cover-img" :src="songData.picUrl + '?param=140y140'" alt="" />
					<i class="iconfont icon-24gf-play"></i>
				</div>
				<div class="song_info">
					<span class="song_name">{{ songData.name }}</span>
					<span class="singer"> - {{ singName }}</span>
				</div>
			</div>
			<div class="right flex_box_center_column">
				<i class="iconfont icon-24gf-play"></i>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.wrapper {
	padding: 20px;
	.new-song-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		.left {
			display: flex;
			align-items: center;
			.cover {
				position: relative;
				width: 80px;
				height: 80px;
				flex-shrink: 0;
				border-radius: 20px;
				margin-right: 10px;
				.cover-img {
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
				.iconfont {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					color: #fff;
					font-size: 24px;
				}
			}
			.song_info {
				white-space: nowrap;
				text-overflow: ellipsis;
				overflow: hidden;
				flex: 1;
				max-width: 350px;
				padding-right: 10px;
				.song_name {
					font-size: 27px;
				}
				.singer {
					font-size: 23px;
					color: #999;
				}
			}
		}
		.right {
			width: 40px;
			height: 40px;
			color: #999;
			border: 2px solid #999;
			flex-shrink: 0;
			border-radius: 10px;
			.iconfont {
				font-size: 24px;
			}
		}
	}
}
</style>
