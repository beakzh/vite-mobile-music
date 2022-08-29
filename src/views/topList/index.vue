<script setup lang="ts">
import TopItem from './components/TopItem.vue'
import { goBack } from '@/utils/back'
import { reqTopList } from '@/api/topList'
import { ref } from 'vue'

interface Tag {
	name: string
	id: number
	coverImgUrl: string
}
const active = ref<number>(0)
const tags = ref<Tag[]>([])
function getTags() {
	reqTopList().then((res: any) => {
		tags.value = res.list
	})
}
getTags()
</script>

<template>
	<div class="topList">
		<van-nav-bar title="排行榜" left-arrow fixed placeholder @click-left="goBack" />
		<van-tabs v-model:active="active" scrollspy sticky offset-top="1.22667rem">
			<van-tab v-for="v in tags" :title="v.name" :key="v.id">
				<TopItem :item-data="v" />
			</van-tab>
		</van-tabs>
	</div>
</template>

<style lang="less" scoped>
.topList {
	height: 100vh;
	overflow: auto;
}

:deep(.van-nav-bar .van-icon) {
	color: unset;
}
</style>
