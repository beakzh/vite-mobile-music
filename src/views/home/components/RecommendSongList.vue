<script setup lang="ts">
import SongListItem from '@/components/SongListItem/index.vue'
import Title from '@/components/Title/index.vue'
import { getRecommendList } from '@/api/home'
import type { songListFace } from '@/types/public'
import { ref } from 'vue'

const loading = ref<boolean>(false)
const songList = ref<songListFace[]>()
async function getList() {
	loading.value = true
	try {
		const res: any = await getRecommendList({ limit: 10 })
		loading.value = false
		songList.value = res.result
	} catch {
		loading.value = false
	}
}
getList()

defineExpose({
    getList
})
</script>

<template>
	<div class="recommend">
        <Title title="推荐歌单" icon="arrow" position="right" btn-text="更多" />
		<van-skeleton title :row="3" :loading="loading">
			<div class="scroll-wrapper" @touchmove="e => e.stopPropagation()">
				<div class="list">
					<SongListItem v-for="(v, i) in songList" :key="i" :songListData="v" />
				</div>
			</div>
		</van-skeleton>
	</div>
</template>

<style lang="less" scoped>
.recommend {
	background: var(--van-white);
	padding: 10px;
	box-sizing: border-box;
	.scroll-wrapper {
		width: 100%;
		overflow-x: scroll;
		&::-webkit-scrollbar {
			//滚动条的高度
			height: 0px;
		}
        .list {
            display: flex;
        }
	}
}
</style>
