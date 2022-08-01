<script setup lang="ts">
import { Swiper, Menu, RecommendSongList, NewSong } from './components'
import { reqSearchDefault } from '@/api/search'
import $bus from '@/utils/eventBus'
import { ref } from 'vue'

const showKeyword = ref<string>('')
let getSearchDefault = async () => {
	const res: any = await reqSearchDefault()
	showKeyword.value = res.data.showKeyword
}

let openMenu = () => $bus.emit('openMenu')

const loading = ref<boolean>(false)
let onRefresh = () => {
	getSearchDefault()
	setTimeout(() => {
		loading.value = false
	}, 2000)
}

getSearchDefault()
</script>

<template>
	<div class="home">
		<van-pull-refresh v-model="loading" @refresh="onRefresh">
			<van-sticky>
				<div class="header">
					<div class="flex_box_center_column" @click.stop="openMenu">
						<i class="iconfont icon-caidan"></i>
					</div>
					<div class="search-wrapper">
						<div class="flex_box_center_column">
							<i class="iconfont icon-sousuo"></i>
						</div>
						<div class="search-text">{{ showKeyword }}</div>
					</div>
					<div class="flex_box_center_column">
						<i class="iconfont icon-yuyin"></i>
					</div>
				</div>
			</van-sticky>
			<div class="content">
				<Swiper />
				<Menu />
				<div class="line"></div>
				<RecommendSongList />
				<NewSong />
			</div>
		</van-pull-refresh>
	</div>
</template>

<style lang="less" scoped>
.home {
	background: var(--my-back-color-gray);
	box-sizing: border-box;
	height: 100vh;
	overflow-y: scroll;
	.header {
		padding: 0 0.2rem;
		height: 1.1rem;
		background-color: var(--my-gray-1);
		display: flex;
		justify-content: space-between;
		align-items: center;
		.iconfont {
			font-size: 0.5rem;
			font-weight: bold;
			color: var(--my-text-color-black);
		}
		.search-wrapper {
			background-color: #fff;
			height: 0.7rem;
			flex: 1;
			border-radius: 0.4rem;
			margin: 0 0.5rem;
			display: flex;
			align-items: center;
			justify-content: center;
			.iconfont {
				font-size: 0.4rem;
				color: var(--my-text-color-black);
			}
			.search-text {
				margin-left: 0.1rem;
				font-size: 0.35rem;
				color: var(--my-text-color-black);
			}
		}
	}
	.content {
		padding: 0 0.3rem;
		.line {
			background: var(--van-gray-3);
			height: 2px;
		}
	}
}
</style>
