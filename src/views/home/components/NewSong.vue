<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import Title from '@/components/Title/index.vue'
import { songData } from '@/types/public'
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
		console.log(tempList)
		console.log(res)
	} catch {
		loading.value = false
	}
}
getList()
</script>

<template>
	<div class="new-song">
		<Title title="新歌推荐" icon="play" position="left" btn-text="播放" />
		<van-skeleton title :row="1" :loading="loading">
			<swiper
				:slides-per-view="1.2"
				:space-between="20"
				navigation
				:pagination="{ clickable: true }"
				:scrollbar="{ draggable: true }"
			>
				<swiper-slide v-for="(v, i) in list" :key="i">
					<div v-for="u in v" :key="u.id" class="wrapper">
						<div class="new-song-item">
							<div class="left">
								<div class="cover">
									<img
										class="cover-img"
										:src="u.picUrl + '?param=140y140'"
										alt=""
									/>
									<i class="iconfont icon-24gf-play"></i>
								</div>
								<div>
									<span>Training</span>
									<span> - 满舒克</span>
								</div>
							</div>
							<div class="right">111</div>
						</div>
					</div>
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
.wrapper {
	padding: 20px;
	.new-song-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		.left {
			display: flex;
			align-items: center;
			.cover {
				position: relative;
				width: 80px;
				height: 80px;
				flex-shrink: 0;
				border-radius: 20px;
				.cover-img {
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
				.iconfont {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					color: #fff;
					font-size: 24px;
				}
			}
		}
	}
}
</style>
