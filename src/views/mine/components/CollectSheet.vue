<script setup lang="ts">
import { useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { reqUserSubCount } from '@/api/user'
import type { SheetDataInterface } from '@/types/public/sheet'
import { reqUserPlayList } from '@/api/user'
import SheetItem from './SheetItem.vue'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const total = ref<number>(0)
let getCount = () => {
	reqUserSubCount().then((res: any) => {
		total.value = res.subPlaylistCount
	})
}
getCount()

const list = ref<SheetDataInterface[]>([])
let offset = -1 // 分页
let limit = 30
const loading = ref<boolean>(false)
const finished = ref<boolean>(false)
let getList = () => {
	const params = {
		uid: userInfo.value.userId,
		limit: limit,
		offset: limit * offset,
		time: Date.now(),
	}
	loading.value = true
	reqUserPlayList(params)
		.then((res: any) => {
			list.value = list.value?.concat(
				res.playlist.filter(
					(v: SheetDataInterface) => v.creator.userId != userInfo.value.userId
				)
			)
			finished.value = !res.more
		})
		.finally(() => {
			loading.value = false
		})
}
let delSuccess = (id: number) => {
	const index = list.value.findIndex(v => v.id === id)
	list.value.splice(index, 1)
	total.value--
}
let goSheetDetail = (id: number) => {
	router.push({
		path: '/editSheet',
		query: {
			id,
		},
	})
}

let onLoad = () => {
	offset++
	getList()
}
onLoad()
</script>

<template>
	<div class="collect-sheet">
		<div class="menu">
			<div>收藏歌单（{{ total }}）个</div>
			<div class="flex_box_center_column">
				<van-icon name="plus" />
			</div>
		</div>

		<van-list :loading="loading" :finished="finished" @load="onLoad">
			<SheetItem v-for="v in list" :key="v.id" :sheet-data="v" :show-edit="true" :hide-edit="true"
				@del-success="delSuccess(v.id)" @edit="goSheetDetail(v.id)" />
		</van-list>
	</div>
</template>

<style lang="less" scoped>
.collect-sheet {
	.menu {
		display: flex;
		justify-content: space-between;
		color: var(--my-text-color-gray);
		font-size: 25px;
		padding: 5px;
	}
}
</style>
