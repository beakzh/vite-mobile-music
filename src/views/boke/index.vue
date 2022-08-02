<script setup lang="ts">
import Suggest from './components/suggest/index.vue'
import $bus from '@/utils/eventBus'
import { ref } from 'vue'

const active = ref<number>(1)
let openMenu = () => $bus.emit('openMenu')
</script>

<template>
	<div class="boke">
		<van-tabs v-model:active="active" sticky swipeable>
			<template #nav-left>
				<div class="tab-left flex_box_center_column" @click.stop="openMenu">
					<i class="iconfont icon-caidan"></i>
				</div>
			</template>
			<template #nav-right>
				<div class="tab-right flex_box_center_column" @click.stop="openMenu">
					<i class="iconfont icon-icon_tianjia"></i>
				</div>
			</template>
			<van-tab title="听听">内容 1</van-tab>
			<van-tab title="推荐">
				<Suggest />
			</van-tab>
			<van-tab title="故事">内容 3</van-tab>
		</van-tabs>
	</div>
</template>

<style lang="less" scoped>
.boke {
	background: var(--my-back-color-gray);
	box-sizing: border-box;
	overflow: auto;
	padding: 0 10px;
	padding-bottom: 150px;
	height: 100%;
	.iconfont {
		font-size: 40px;
		font-weight: 600;
		color: var(--my-text-color-black);
	}
	.tab-left {
		margin-left: 20px;
	}
	.tab-right {
		margin-right: 20px;
	}
}
</style>
