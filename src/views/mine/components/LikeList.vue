<script setup lang="ts">
import { useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { reqLikeList } from '@/api/user'
import { reqSongDetail } from '@/api/song'
import { ref } from 'vue'

const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)
const url = () => new URL('../../../assets/images/public/heijiao.png', import.meta.url).href
const imgUrl = ref<string>(url())
const total = ref<number>(0)
let ids: number[] = []
let pid = 0 // 歌单id 心动模式播放需要
let getLikeList = () => {
	reqLikeList({ uid: userInfo.value.userId, timestamp: Date.now() }).then((res: any) => {
		total.value = res.ids.length
		ids = res.ids
		pid = res.checkPoint
		reqSongDetail({ ids: ids.join(',') }).then((res: any) => {
			if (res.songs.length) imgUrl.value = res.songs[0].al.picUrl
		})
	})
}

getLikeList()
</script>

<template>
	<div class="box_white_container like-list">
		<div class="left">
			<div class="cover">
				<img :src="imgUrl" alt="" />
				<div class="mask flex_box_center_column">
					<i class="iconfont icon-xihuan"></i>
				</div>
			</div>
			<div>
				<div class="title">我喜欢的音乐</div>
				<div class="total">{{ total }}首</div>
			</div>
		</div>
		<div class="flex_box_center_column play-btn">
			<van-button round size="small"> <i class="iconfont icon-huaban"></i>心动模式 </van-button>
		</div>
	</div>
</template>

<style lang="less" scoped>
.like-list {
	display: flex;
	justify-content: space-between;

	.left {
		display: flex;
		align-items: center;

		.cover {
			width: 100px;
			height: 100px;
			position: relative;
			margin-right: 10px;

			img {
				width: 100%;
				height: 100%;
				border-radius: 10px;
			}

			.mask {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				z-index: 1;
				border-radius: 10px;
				background: rgba(0, 0, 0, 0.3);

				.iconfont {
					color: var(--my-text-color-white);
				}
			}
		}

		.title {
			font-size: 28px;
		}

		.total {
			font-size: 23px;
			color: var(--my-text-color-gray);
		}
	}

	.play-btn {
		.iconfont {
			font-size: 25px;
			margin-right: 10px;
		}
	}
}
</style>
