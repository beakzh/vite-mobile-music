<script setup lang="ts">
import { goBack } from '@/utils/back'
import ScrollBanner from '@/components/Scroll/ScrollBanner.vue'
import DateList from './components/DateList.vue'
import { reqGetRecommendDate } from '@/api/home'
import { ref } from 'vue'

const active = ref<number>(0)
const scroll = ref<InstanceType<typeof ScrollBanner>>()
const dateList = ref<string[]>([])

function refresh() {
	scroll.value && scroll.value.refresh()
}
async function initData() {
	const res: any = await reqGetRecommendDate()
	dateList.value = res.data.dates
}
initData()
</script>

<template>
	<div class="history">
		<van-nav-bar title="历史日推" left-arrow fixed placeholder @click-left="goBack" />
		<ScrollBanner class="scroll" ref="scroll">
			<template #btn>
				<div class="btn-wrapper">
					<van-button round color="rgba(0,0,0,0.5)">
						<i class="iconfont icon-bofang"></i>
						播放全部
					</van-button>
				</div>
			</template>
			<van-tabs v-model:active="active">
				<van-tab :title="v" v-for="(v, i) in dateList">
					<DateList :date="v" @refresh="refresh" />
				</van-tab>
			</van-tabs>
		</ScrollBanner>
	</div>
</template>

<style lang="less" scoped>
.history {
	height: 100vh;
	.scroll {
		height: 100%;
	}
	.btn-wrapper {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		.iconfont {
			font-size: 30px;
		}
	}
}
</style>
