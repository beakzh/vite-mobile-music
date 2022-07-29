<script setup lang="ts">
import TabBar from './components/TabBar.vue'
import SideMenu from './components/SideMenu.vue'
import $bus from '@/utils/eventBus'
import type { SwipeCellInstance } from 'vant'
import { ref } from 'vue'

let show = ref<boolean>(false)
let swipe = ref<SwipeCellInstance>()
$bus.on('openMenu', ():void => {
	swipe.value?.open('left')
})
</script>

<template>
	<div class="layout">
		<van-swipe-cell @open="show = true" @close="show = false" ref="swipe">
			<template #left>
				<SideMenu />
			</template>
			<router-view v-slot="{ Component }">
				<keep-alive>
					<component :is="Component" />
				</keep-alive>
			</router-view>
			<TabBar />
			<van-overlay :show="show" />
		</van-swipe-cell>
	</div>
</template>

<style lang="less" scoped>
.layout {
	display: flex;
	flex-direction: column;
	height: 100vh;
	overflow: hidden;

	:deep(.van-swipe-cell) {
		height: 100%;

		.van-swipe-cell__wrapper {
			height: 100%;
		}
		.van-swipe-cell__left {
			width: 70vw;
		}
	}
}
</style>
