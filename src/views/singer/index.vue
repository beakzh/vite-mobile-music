<script setup lang="ts">
import { goBack } from '@/utils/back'
import { singerType, araeList } from '@/utils/enum'
import { reqSingerList } from '@/api/singer'
import { singerInterface } from '@/types/public/singer'
import SingerItem from './components/SingerItem.vue'
import { ref } from 'vue'

const type = ref<number>(-1)
const area = ref<number>(-1)

const pushLoading = ref<boolean>(false)
const loading = ref<boolean>(false)
const finished = ref<boolean>(false)
const list = ref<singerInterface[]>([])
let limit = 30
let page = 0
function getSingerList() {
	const params = {
		limit,
		offset: page * limit,
		type: type.value,
		area: area.value,
	}
	loading.value = true
	reqSingerList(params)
		.then((res: any) => {
			list.value = list.value.concat(res.artists)
			finished.value = !res.more
			if (res.more) page++
		})
		.finally(() => {
			loading.value = false
			pushLoading.value = false
		})
}
let onLoad = () => {
	getSingerList()
}
let onRefresh = () => {
	pushLoading.value = true
	list.value = []
	page = 0
	getSingerList()
}
</script>

<template>
	<div class="singer">
		<van-nav-bar title="歌手" left-arrow fixed placeholder @click-left="goBack" />
		<van-dropdown-menu>
			<van-dropdown-item v-model="type" :options="singerType" @change="onRefresh" />
			<van-dropdown-item v-model="area" :options="araeList" @change="onRefresh" />
		</van-dropdown-menu>

		<van-pull-refresh v-model="pushLoading" @refresh="onRefresh">
			<van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了~" @load="onLoad">
				<SingerItem v-for="v in list" :key="v.id" :singer-data="v" />
			</van-list>
		</van-pull-refresh>
	</div>
</template>

<style lang="less" scoped>
:deep(.van-nav-bar .van-icon) {
	color: unset;
}
</style>
