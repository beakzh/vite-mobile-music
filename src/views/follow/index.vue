<script setup lang="ts">
import EventItem from '@/components/EventCom/eventItem.vue'
import { EventDataInterface } from '@/types/public/event'
import { reqEvent } from '@/api/event'
import { ref } from 'vue'

const loading = ref<boolean>(false)
const finished = ref<boolean>(false)
const list = ref<EventDataInterface[]>([])
let lasttime = -1 // 用这个参数去翻页
let getList = async () => {
	loading.value = true
	try {
		const res: any = await reqEvent({ pagesize: 20, lasttime })
		loading.value = false
		list.value = list.value.concat(res.event)
		lasttime = res.lasttime
		finished.value = !res.more
	} catch {
		loading.value = false
	}
}
let onLoad = () => {
	getList()
}
</script>

<template>
	<div class="follow">
		<van-nav-bar title="关注朋友圈" fixed placeholder />
		<div class="list">
			<van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了~" @load="onLoad">
				<EventItem v-for="v in list" :key="v.id" :event-data="v" />
				<van-empty v-if="!loading && list.length == 0" />
			</van-list>
		</div>
	</div>
</template>

<style lang="less" scoped>
.follow {
	height: 100%;
	box-sizing: border-box;
	overflow: auto;
	padding-bottom: 180px;
	background-color: var(--my-back-color-white);

	.list {
		padding: 30px;
	}
}
</style>
