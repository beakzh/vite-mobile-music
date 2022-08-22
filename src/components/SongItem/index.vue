<script setup lang="ts">
import type { SongData } from '@/types/store/player'
import { computed } from 'vue'

interface Prop {
	songData: SongData
}
const props = withDefaults(defineProps<Prop>(), {
	songData: () => ({
		url: '',
		name: '',
		id: 0,
		ar: [],
		al: {
			id: 0,
			name: '',
			pic: 0,
			picUrl: '',
			pic_str: '',
		},
		dt: 0,
	}),
})

const singer = computed(() => (props.songData.ar ? props.songData.ar.map(v => v.name).join('/') : ''))
</script>

<template>
	<div class="song-item">
		<div class="left">
			<img :src="songData.al?.picUrl + '?param=140y140'" alt=""  v-lazy="songData.al.picUrl + '?param=140y140'" />
		</div>
		<div class="center">
			<div class="song-name text_over_line">{{ songData.name }}</div>
			<div class="singer text_over_line">{{ singer }}</div>
		</div>
		<div class="right">
			<i class="iconfont icon-24gf-play"></i>
			<i class="iconfont icon-Androidgengduo"></i>
		</div>
	</div>
</template>

<style lang="less" scoped>
.song-item {
	display: flex;
	border-bottom: 1px solid var(--van-cell-border-color);
	align-items: center;
    overflow: hidden;
	.left {
		img {
			width: 80px;
			height: 80px;
			padding: 10px;
            border-radius: 20px;
		}
	}
	.center {
		flex: 1;
		margin-left: 10px;
        min-width: 0;
        overflow: hidden;
		.song-name {
			font-size: 26px;
			color: var(--my-text-color-black);
		}
		.singer {
			color: var(--my-text-color-gray);
			font-size: 24px;
		}
	}
    .right {
        flex-shrink: 0;
        .iconfont {
			color: var(--my-text-color-gray);
            font-size: 28px;
            padding-left: 5px;
        }
    }
}
</style>
