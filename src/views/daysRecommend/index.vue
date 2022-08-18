<script setup lang="ts">
import ScrollBanner from '@/components/Scroll/ScrollBanner.vue'
import SongItem from '@/components/SongItem/index.vue'
import { goBack } from '@/utils/back'
import { reqDaysRecommend } from '@/api/home'
import type { SongData } from '@/types/store/player'
import { Toast } from 'vant'
import { ref, nextTick } from 'vue'

const list = ref<SongData[]>()
const scroll = ref<InstanceType<typeof ScrollBanner>>()
let getList = () => {
	const loading = Toast.loading({
		message: '加载中...',
		duration: 0,
	})
	reqDaysRecommend()
		.then((res: any) => {
			list.value = res.data.dailySongs
			nextTick(() => scroll.value?.refresh())
		})
		.finally(() => {
			loading.clear()
		})
}
getList()
</script>

<template>
	<div class="daysRecommend">
		<van-nav-bar
			title="每日推荐"
			left-arrow
			fixed
			placeholder
			right-text="历史日推"
			@click-left="goBack"
		/>
		<div class="scroll">
			<ScrollBanner ref="scroll">
				<template #btn>
					<div class="btn-wrapper">
						<van-button round color="rgba(0,0,0,0.5)">
							<i class="iconfont icon-bofang"></i>
							播放全部
						</van-button>
					</div>
				</template>
				<div class="list">
					<SongItem v-for="v in list" :key="v.id" :song-data="v" />
				</div>
			</ScrollBanner>
		</div>
	</div>
</template>

<style lang="less" scoped>
.daysRecommend {
	height: 100%;
	.scroll {
		height: 100%;
		.list {
			padding: 30px;
			background-color: var(--my-back-color-white);
		}
		.btn-wrapper {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
		}
	}
}
:deep(.van-nav-bar .van-icon) {
	color: unset;
}
</style>
