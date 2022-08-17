<script setup lang="ts">
import ScrollBanner from '@/components/Scroll/ScrollBanner.vue'
import SongItem from '@/components/SongItem/index.vue'
import { goBack } from '@/utils/back'
import { reqDaysRecommend } from '@/api/home'
import type { SongData } from '@/types/store/player'
import { Toast } from 'vant'
import { ref } from 'vue'

const list = ref<SongData[]>()
let getList = () => {
	const loading = Toast.loading({
		message: '加载中...',
		duration: 0,
	})
	reqDaysRecommend()
		.then((res: any) => {
			console.log(res)
            list.value = res.data.dailySongs
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
	</div>
</template>

<style lang="less" scoped>
:deep(.van-nav-bar .van-icon) {
	color: unset;
}
</style>
