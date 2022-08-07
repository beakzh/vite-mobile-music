<script setup lang="ts">
import { getCategoryRecommend } from '@/api/dj'
import type { DjCategoryRecommend } from '@/types/public/dj'
import { BoxType } from '@/types/public'
import RecommendItem from './RecommendItem.vue'
import { ref } from 'vue'

const loading = ref<boolean>(false)
const recommendList = ref<DjCategoryRecommend[]>([])
async function getList() {
	loading.value = true
	const res: any = await getCategoryRecommend()
	loading.value = false
	recommendList.value = res.data
}
getList()
</script>

<template>
	<van-skeleton title :row="3" :loading="loading">
		<RecommendItem
			v-for="(v, i) in recommendList"
			:key="v.categoryId"
			:list="v"
			:box-type="Math.random() > 0.5 ? BoxType.box : BoxType.line"
		/>
	</van-skeleton>
</template>

<style lang="less" scoped></style>
