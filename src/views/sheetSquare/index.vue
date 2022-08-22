<script setup lang="ts">
import { goBack } from '@/utils/back'
import { reqSheetTags } from '@/api/song'
import SheetList from './components/SheetList.vue'
import { ref } from 'vue'

interface SheetTags {
	name: string
	id: number
}
const tags = ref<SheetTags[]>([])
const active = ref<number>(0)
function getSheetTags() {
	reqSheetTags().then((res: any) => {
		tags.value = res.tags
	})
}
getSheetTags()
</script>

<template>
	<div class="sheet-squre">
		<van-nav-bar title="歌单广场" left-arrow fixed placeholder @click-left="goBack" />
		<van-tabs v-model:active="active" sticky offset-top="1.2rem">
			<van-tab v-for="v in tags" :title="v.name" :key="v.id">
                <SheetList :cat="v.name" />
            </van-tab>
		</van-tabs>
	</div>
</template>

<style lang="less" scoped>
:deep(.van-nav-bar .van-icon) {
	color: unset;
}
</style>
