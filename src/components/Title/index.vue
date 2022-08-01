<script setup lang="ts">
interface Prop {
    title: string,
    icon:string,
    position: any,
    btnText: string
}
const props = withDefaults(defineProps<Prop>(), {
    title: '',
    icon: '',
    position: 'left',
    btnText: ''
})

</script>

<template>
	<div class="title">
		<div class="title-text">{{ title }}</div>
		<van-button :icon="icon" :icon-position="position" round size="mini">{{ btnText }}</van-button>
	</div>
</template>

<style lang="less" scoped>
	.title {
		display: flex;
		justify-content: space-between;
        align-items: center;
        margin-bottom: 15px;
		.title-text {
			font-size: 30px;
			color: #333;
			font-weight: bold;
		}
        :deep(.van-button) {
            line-height: unset;
        }
	}
</style>
