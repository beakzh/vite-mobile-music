<script setup lang="ts">
import CreateSheet from './CreateSheet.vue'
import CollectSheet from './CollectSheet.vue'
import { ref } from 'vue'

const active = ref<number>(0)
</script>

<template>
	<div class="sheet">
		<van-tabs v-model:active="active" scrollspy sticky :lazy-render="false" :offset-top="45">
			<van-tab title="创建歌单">
				<div class="box_white_container">
					<CreateSheet />
				</div>
			</van-tab>
			<van-tab title="收藏歌单">
				<div class="box_white_container">
					<CollectSheet />
				</div>
			</van-tab>
		</van-tabs>
	</div>
</template>

<style lang="less" scoped>
.sheet {
	.box_white_container {
		margin-top: 30px;
	}
}
</style>
