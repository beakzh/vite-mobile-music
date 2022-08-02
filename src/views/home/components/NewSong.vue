<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import Title from '@/components/Title/index.vue'
import NewSongItem from './NewSongItem.vue'
import type { songData } from '@/types/public'
import { getRecommendNewSongs } from '@/api/home'
import { ref } from 'vue'

const loading = ref<boolean>(false)
const songList = ref<songData[]>([])
const list = ref<any[]>([])
async function getList() {
	loading.value = true
	try {
		const res: any = await getRecommendNewSongs({ limit: 12 })
		loading.value = false
		songList.value = res.result
		const tempList: any[] = []
		for (let i = 0; i < songList.value.length; i++) {
			const l = Math.floor(i / 2)
			if (!tempList[l]) tempList[l] = []
			tempList[l].push(songList.value[i])
		}
		list.value = tempList
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
	<div class="new-song" @touchmove="(e) => e.stopPropagation()">
		<Title title="新歌推荐" icon="play" position="left" btn-text="播放" />
		<van-skeleton title :row="1" :loading="loading">
			<swiper
				:slides-per-view="1.2"
				:space-between="20"
				navigation
				:pagination="{ clickable: true }"
				:scrollbar="{ draggable: true }">
				<swiper-slide v-for="(v, i) in list" :key="i">
					<NewSongItem v-for="u in v" :key="v.id" :song-data="u" />
				</swiper-slide>
			</swiper>
		</van-skeleton>
	</div>
</template>

<style lang="less" scoped>
.new-song {
	background: var(--van-white);
	box-sizing: border-box;
	margin-top: 20px;
	padding: 10px;
}
</style>
