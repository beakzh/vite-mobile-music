<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const menuList = ref([
	{
		name: '每日推荐',
		icon: 'icon-rili',
		path: '/daysRecommend',
	},
	{
		name: '私人FM',
		icon: 'icon-shouyinji',
		path: 'personalFm',
	},
	{
		name: '歌单',
		icon: 'icon-24gf-playlistMusic2',
		path: '/sheetSquare',
	},
	{
		name: '排行榜',
		icon: 'icon-paihangbang',
		path: '/topList',
	},
	{
		name: '歌手',
		icon: 'icon-zhiboshenqing',
		path: '/singer',
	},
	{
		name: '数字专辑',
		icon: 'icon-zhuanji',
		path: '/album',
	},
])

let scroll = (e: Event): void => {
	e.stopPropagation()
}
let goPath = (path: string): void => {
	router.push(path)
}
</script>

<template>
	<div class="menu-wrapper" @touchmove="scroll">
		<div class="menu-list">
			<div class="menu-item" v-for="(v, i) in menuList" :key="i" @click="goPath(v.path)">
				<div class="icon-wrapper flex_box_center_column">
					<i class="iconfont" :class="v.icon"></i>
				</div>
				<div class="menu-name">{{ v.name }}</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.menu-wrapper {
	padding: 20px 10px;
	box-sizing: border-box;
	background: var(--van-white);
	width: 100%;
	overflow-x: scroll;

	// margin-top: 10px;
	&::-webkit-scrollbar {
		//滚动条的高度
		height: 0px;
	}
	.menu-list {
		display: flex;
		.menu-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex-shrink: 0;
			min-width: 140px;
			.icon-wrapper {
				background: #fef1f1;
				width: 80px;
				height: 80px;
				border-radius: 50%;
				.iconfont {
					color: #e20001;
					font-size: 40px;
				}
			}
			.menu-name {
				margin-top: 5px;
				color: #999;
				font-size: 24px;
			}
		}
	}
}
</style>
