<script setup lang="ts">
import { BoxType } from '@/types/public'
import { DjData } from '@/types/public/dj'
import { formatCountNumber } from '@/utils'

interface Prop {
	djData: DjData
	boxType: BoxType
}
const props = withDefaults(defineProps<Prop>(), {
	djData: () => ({
		id: 0,
		rcmdText: '',
		subed: false,
		programCount: 0,
		picUrl: '',
		name: '',
		playCount: 0,
		feeScope: 0,
	}),
	boxType: BoxType.box,
})
</script>

<template>
	<div v-if="boxType == BoxType.box" class="dj-item">
		<div class="cover">
			<img class="cover-img" :src="djData.picUrl + '?param=140y140'" alt="" />
			<div class="feeScope" v-if="djData.feeScope == 0">免费</div>
			<div class="playcount">
				<i class="iconfont icon-bofang"></i>
				<div>{{ formatCountNumber(djData.playCount) }}</div>
			</div>
		</div>
		<div class="dj-title text_over_two_lines">{{ djData.name }}</div>
	</div>
	<div v-else class="dj-item-line">
		<img :src="djData.picUrl + '?param=140y140'" alt="" />
		<div class="info">
			<span class="dj-name">{{ djData.name }}</span>
			<span class="dj-text">{{ djData.rcmdText }}</span>
			<span class="dj-count">
				<i class="iconfont icon-bofang"></i>
				<span>{{ djData.playCount }}</span>
			</span>
		</div>
	</div>
</template>

<style lang="less" scoped>
.dj-item {
	.cover {
		width: 100%;
		height: 100%;
		border-radius: 20px;
		position: relative;
		.playcount {
			position: absolute;
			top: 15px;
			right: 15px;
			display: flex;
			align-items: center;
			gap: 0 6px;
			color: #fff;
			background: rgba(0, 0, 0, 0.2);
			padding: 5px;
			border-radius: 10px;
			font-size: 24px;
			.iconfont {
				font-size: 24px;
			}
		}
		.feeScope {
			position: absolute;
			top: 10px;
			left: 10px;
			font-size: 20px;
			background-color: var(--my-color-oranger);
			color: var(--my-text-color-white);
			padding: 5px;
			border-radius: 20px;
		}
		.cover-img {
			width: 100%;
			height: 100%;
			border-radius: 20px;
		}
	}
	.dj-title {
		width: 200px;
		font-size: 24px;
		margin-top: 5px;
		color: var(--my-text-color-black);
	}
}
.dj-item-line {
	display: flex;
	width: 100%;
	margin-bottom: 20px;
    align-items: center;
    img {
        width: 150px;
        height: 150px;
        border-radius: 20px;
    }
    .info {
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        gap: 15px 0;
        .dj-name {
            font-size: 25px;
            font-weight: bold;
            color: var(--my-text-color-black);
        }
        .dj-text {
            color: var(--my-text-color-gray);
        }
        .dj-count {
            color: var(--my-text-color-gray);
        }
    }
}
</style>
