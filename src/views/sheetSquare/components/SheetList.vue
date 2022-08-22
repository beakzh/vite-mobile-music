<script setup lang="ts">
import { ref } from 'vue'
import { reqSheetList } from '@/api/song'
import type { SheetDataFace } from '@/types/public'

interface Prop {
	cat: string
}
const props = withDefaults(defineProps<Prop>(), {
	cat: '',
})

const loading = ref<boolean>(false)
const finished = ref<boolean>(false)
const reloading = ref<boolean>(false)
const list = ref<SheetDataFace[]>([])
let updateTime = 0
let total = 0
function getList() {
	const params = {
		cat: props.cat,
		before: updateTime,
	}
    loading.value = true
	reqSheetList(params)
		.then((res: any) => {
			list.value = list.value.concat(res.playlists)
			updateTime = res.playlists?.[res.playlists?.length - 1].updateTime
			total = res.total
			if (list.value.length >= total) finished.value = true
			else finished.value = false
		})
		.finally(() => {
			reloading.value = false
			loading.value = false
		})
}

let onRefresh = () => {}
let onLoad = () => {
	getList()
}
</script>

<template>
	<van-pull-refresh v-model="reloading" @refresh="onRefresh">
		<van-list
			v-model:loading="loading"
			:finished="finished"
			finished-text="没有更多了~"
			@load="onLoad"
		>
			<van-row>
				<van-col span="8"> </van-col>
			</van-row>
		</van-list>
	</van-pull-refresh>
</template>

<style lang="less" scoped></style>
