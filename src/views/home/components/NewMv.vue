<script setup lang="ts">
import Title from '@/components/Title/index.vue'
import MvItem from '@/components/MvItem/index.vue'
import { getNewMvList } from '@/api/home'
import type { MvInterface } from '@/types/public/mv'
import { ref } from 'vue'

const loading = ref<boolean>(false)
const mvList = ref<MvInterface[]>([])
async function getList() {
	loading.value = true
	try {
        loading.value = false
		const res: any = await getNewMvList({ limit: 10 })
		mvList.value = res.data
	} catch {
		loading.value = false
	}
}
getList()
</script>

<template>
	<div class="mv">
		<Title title="最新MV" icon="play" position="left" btn-text="更多" />
		<van-skeleton title :row="1" :loading="loading">
			<MvItem v-for="(v, i) in mvList" :key="i" :mv-data="v" />
		</van-skeleton>
	</div>
</template>

<style lang="less" scoped>
.mv {
	background: var(--van-white);
	box-sizing: border-box;
	margin-top: 20px;
	padding: 10px;
}
</style>
