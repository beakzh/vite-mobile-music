<script setup lang="ts">
import type { MvInterface } from '@/types/public/mv'
import { ref } from 'vue'

interface Prop {
	title: string
}
const props = withDefaults(defineProps<Prop>(), {
	title: '',
})

const list = ref<MvInterface[]>([])
</script>

<template>
	<div class="mv-top">
		<van-list> </van-list>
	</div>
</template>

<style lang="less" scoped>
.mv-top {
	padding: 10px;
	height: 100vh;
	overflow: auto;
	box-sizing: border-box;
}
</style>
