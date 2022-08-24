<script setup lang="ts">
import { goBack } from '@/utils/back'
import Bannner from '@/views/home/components/Swiper.vue'
import NewAlbum from './components/NewAlbum.vue'
</script>

<template>
	<div class="album">
		<van-nav-bar title="数字专辑" left-arrow fixed placeholder @click-left="goBack" />
		<Bannner />
        <NewAlbum />
	</div>
</template>

<style lang="less" scoped>
.album {
	height: 100vh;
	overflow: auto;
	box-sizing: border-box;
	padding: 10px;
}
:deep(.van-nav-bar .van-icon) {
	color: unset;
}
</style>
