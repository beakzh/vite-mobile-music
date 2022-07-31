<script setup lang="ts">
import { songListFace } from '@/types/public'

interface Prop {
	songListData: songListFace
}
const props = withDefaults(defineProps<Prop>(), {
	songListData: () => ({
		alg: '',
		canDislike: false,
		copywriter: '',
		highQuality: false,
		id: 0,
		name: '',
		picUrl: '',
		playCount: 0,
		trackCount: 0,
		trackNumberUpdateTime: 0,
		type: 0,
		coverImgUrl: '',
	}),
})
</script>

<template>
	<div></div>
</template>

<style lang="less" scoped></style>
