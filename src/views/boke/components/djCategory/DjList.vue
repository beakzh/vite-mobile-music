<script setup lang="ts">
import { ref } from 'vue'
import { DjData } from '@/types/public/dj.js'
import { getDjHotByType } from '@/api/dj'
import DjItem from '@/components/DjItem/index.vue'
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

getList()
</script>

<template>
	<van-list v-model:loading="loading" :finished="finished" @load="onLoad">
		<div class="list">
			<DjItem v-for="v in list" :key="v.id" :dj-data="v" :box-type="BoxType.line" />
			<van-empty v-if="!loading && list.length == 0" />
		</div>
	</van-list>
</template>

<style lang="less" scoped></style>
