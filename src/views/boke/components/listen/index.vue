<script setup lang="ts">
import TopList from './TopList.vue'
import DjList from '../djCategory/DjList.vue'
import TopPopular from './TopPopular.vue'
import { ref } from 'vue'

const active = ref<number>(0)
</script>

<template>
	<van-tabs v-model:active="active" sticky swipeable background="transparent" line-width="0">
		<van-tab>
			<template #title>
				<div class="tab_title" :class="{ active_tab: active == 0 }">热门</div>
			</template>
			<TopList />
		</van-tab>
		<van-tab>
			<template #title>
				<div class="tab_title" :class="{ active_tab: active == 1 }">音乐</div>
			</template>
			<DjList :cate-id="2" />
		</van-tab>
		<van-tab>
			<template #title>
				<div class="tab_title" :class="{ active_tab: active == 2 }">情感</div>
			</template>
			<DjList :cate-id="3" />
		</van-tab>
		<van-tab>
			<template #title>
				<div class="tab_title" :class="{ active_tab: active == 3 }">二次元</div>
			</template>
			 <DjList :cate-id="3001" />
		</van-tab>
		<van-tab>
			<template #title>
				<div class="tab_title" :class="{ active_tab: active == 4 }">红人馆</div>
			</template>
			<TopPopular />
		</van-tab>
	</van-tabs>
</template>

<style lang="less" scoped>
.tab_title {
	padding: 10px 20px;
}
.active_tab {
	background-color: var(--my-primary-color);
	color: var(--my-text-color-white);
	border-radius: 30px;
}
</style>
