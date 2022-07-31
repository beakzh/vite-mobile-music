<script setup lang="ts">
import { ref } from 'vue'

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
</script>

<template>
	<div class="menu-wrapper" @touchmove="scroll">
		<div class="menu-list">
			<div class="menu-item" v-for="(v, i) in menuList" :key="i">
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
		gap: 0 15px;
		.menu-item {
			display: flex;
			flex-direction: column;
			align-items: center;
			flex-shrink: 0;
			min-width: 55px;
			.icon-wrapper {
				background: #fef1f1;
				width: 45px;
				height: 45px;
				border-radius: 50%;
				.iconfont {
					color: #e20001;
					font-size: 20px;
				}
			}
			.menu-name {
				margin-top: 5px;
				color: #999;
				font-size: 12px;
			}
		}
	}
}
</style>
