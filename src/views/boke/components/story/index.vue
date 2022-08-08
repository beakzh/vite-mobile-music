<script setup lang="ts">
import { ref } from 'vue'
import { getDjHotByType } from '@/api/dj'
import DjItem from '@/components/DjItem/index.vue'
import type { DjData } from '@/types/public/dj.js'
import { BoxType } from '@/types/public/index.js'

interface Prop {
	cateId: number
}
const props = withDefaults(defineProps<Prop>(), {
	cateId: 0,
})

const list = ref<DjData[]>([])
let offset = 0
const limit = 30
const loading = ref<boolean>(false)
const finished = ref<boolean>(false)
let getList = () => {
	loading.value = true
	getDjHotByType({
		offset,
		limit: limit * offset,
		cateId: props.cateId,
	})
		.then((res: any) => {
			list.value = list.value.concat(res.djRadios)
			finished.value = !res.hasMore
		})
		.finally(() => {
			loading.value = false
		})
}

let onLoad = () => {
	offset++
	getList()
}
</script>

<template>
	<van-list v-model:loading="loading" :finished="finished" @load="onLoad">
		<div class="list">
			<van-row :gutter="10">
				<van-col :span="8" v-for="v in list" :key="v.id">
					<DjItem :dj-data="v" :box-type="BoxType.box" />
				</van-col>
			</van-row>
			<van-empty v-if="!loading && list.length == 0" />
		</div>
	</van-list>
</template>

<style lang="less" scoped>
.list {
	padding: 25px;
}
</style>
