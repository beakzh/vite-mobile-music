<script setup lang="ts">
interface TopInterface {
	id: number
	name: string
	coverImgUrl: string
}
interface Prop {
	itemData: TopInterface
}
const props = withDefaults(defineProps<Prop>(), {
	itemData: () => ({
		id: 0,
		name: '',
		coverImgUrl: '',
	}),
})
</script>

<template>
	<div class="top-item">
		<div class="top-name">{{ itemData.name }}</div>
		<div class="cover">
			<img :src="itemData.coverImgUrl" alt="" />
		</div>
	</div>
</template>

<style lang="less" scoped>
.top-item {
	padding: 30px;

	.top-name {
		color: var(--my-text-color-black);
		font-size: 40px;
		margin-bottom: 20px;
		font-weight: bold;
	}

	.cover {
		width: 300px;
		height: 300px;

		img {
			width: 100%;
			height: 100%;
			border-radius: 20px;
		}
	}
}
</style>
