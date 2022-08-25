<script setup lang="ts">
import type { albumDataInterface } from '@/types/public/album'

interface Prop {
	albumData: albumDataInterface
}
const props = withDefaults(defineProps<Prop>(), {
	albumData: () => ({
		albumId: 0,
		albumName: '',
		coverUrl: '',
		price: 0,
		artistName: '',
	}),
})
</script>

<template>
	<div class="album-item">
		<div class="cover">
			<img src="" alt="" />
		</div>
	</div>
</template>

<style lang="less" scoped>
.album-item {
}
</style>
