<script setup lang="ts">
import SongItem from '@/components/SongItem/index.vue'
import type { EventDataInterface } from '@/types/public/event'
import { formatSheet } from '@/utils/song'
import { dateFormat } from '@/utils/index'
import { computed, ComputedRef } from 'vue'

interface Prop {
	eventData: EventDataInterface
}
const props = withDefaults(defineProps<Prop>(), {
	eventData: () => ({
		id: 0,
		json: '',
		type: 0,
		eventTime: 0,
		user: {
			nickname: '',
			userId: 0,
			avatarUrl: '',
			followed: false,
		},
	}),
})

const msg: ComputedRef<string> = computed(() => {
	const json = JSON.parse(props.eventData.json)
	return json.msg
})
const songData: ComputedRef = computed(() => {
	const json = JSON.parse(props.eventData.json)
	if (props.eventData.type == 18) return formatSheet(json.song)
	else return {}
})
</script>

<template>
	<div class="event-item">
		<div class="top-info">
			<div class="left">
				<img class="avatar" :src="eventData.user.avatarUrl" alt="" />
			</div>
			<div class="center">{{ eventData.user.nickname }}</div>
		</div>
		<div class="event-content">
			<div class="msg">{{ msg }}</div>
			<!--    18 分享单曲
                    19 分享专辑
                    17、28 分享电台节目
                    22 转发
                    39 发布视频
                    35、13 分享歌单
                    24 分享专栏文章
                    41、21 分享视频 -->
			<SongItem v-if="eventData.type === 18" :song-data="songData" />
		</div>
		<div class="event-bottom">{{ dateFormat(eventData.eventTime, 'yyyy-MM-dd hh:mm:ss') }}</div>
	</div>
</template>

<style lang="less" scoped>
.event-item {
	margin-bottom: 20px;

	.top-info {
		display: flex;
		align-items: center;

		.left {
			.avatar {
				width: 100px;
				height: 100px;
				border-radius: 50%;
			}
		}

		.center {
			margin-left: 20px;
			font-size: 30px;
			color: var(--my-text-color-black);
		}
	}

	.event-content {
		padding-left: 120px;

		.msg {
			word-break: break-all;
			font-size: 28px;
			color: var(--my-text-color-black);
		}
	}

	.event-bottom {
		padding-top: 20px;
		padding-left: 120px;
		color: var(--my-text-color-gray);
		font-size: 24;
	}
}
</style>
