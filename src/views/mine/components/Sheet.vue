<script setup lang="ts">
import { ref } from 'vue'

const active = ref<number>(0)
</script>

<template>
	<van-tabs v-model:active="active" sticky swipeable>
		<van-tab title="创建歌单">内容 1</van-tab>
		<van-tab title="收藏歌单">内容 2</van-tab>
	</van-tabs>
</template>

<style lang="less" scoped></style>
