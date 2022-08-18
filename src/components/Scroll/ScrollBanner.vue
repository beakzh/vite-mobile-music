<script setup lang="ts">
import BScroll from 'better-scroll'
import { ref, onMounted, watch, nextTick } from 'vue'

interface Prop {
	imgUrl: string
}
const props = withDefaults(defineProps<Prop>(), {
	imgUrl: 'https://img1.baidu.com/it/u=1966616150,2146512490&fm=253&fmt=auto&app=138&f=JPEG?w=751&h=500',
})
const emit = defineEmits(['scroll', 'scrollEnd'])

const wrapper = ref<HTMLElement>() // 滚动容器
const banner = ref<HTMLElement>() // 图片
const clientHeight = ref<number>()
let originalHeight = 0 // 原始高度
const scrollY = ref<number>() // 滚动距离

const wrapperStyle = ref({}) //图片容器样式
const imgStyle = ref({}) // 图片样式
const layerStyle = ref({}) // 图片位置占位
const seizeStyle = ref({}) // 滚动容器内占位
interface Position {
	x: number
	y: number
}
let bs: any = null
onMounted(() => {
	// 保证在DOM渲染完毕后初始化better-scroll
	setTimeout(() => {
		if (wrapper.value) {
			bs = new BScroll(wrapper.value, {
				probeType: 3,
				click: true,
			})
			clientHeight.value = banner.value?.clientHeight || 0
			originalHeight = banner.value?.clientHeight || 0
			bs.on('scroll', (position: Position) => {
				scrollY.value = position.y
				emit('scroll', position)
			})
			bs.on('scrollEnd', () => {
				emit('scrollEnd')
			})
		}
	}, 0)
})
nextTick(() => {
	bs && bs.refresh()
})
function refresh() {
	bs && bs.refresh.apply(bs, arguments)
}
watch(scrollY, val => {
	console.log(val)
})
defineExpose({
	refresh,
})
</script>

<template>
	<div class="scroll-view">
		<div class="img-wrapper" :style="wrapperStyle">
			<img class="cover-img" :src="imgUrl" alt="" ref="banner" :style="imgStyle" />
			<div class="btn">
				<slot name="btn"></slot>
			</div>
		</div>
		<div class="layer" :style="layerStyle"></div>
		<div class="scroll-wrapper" ref="wrapper">
			<div class="scroll-content">
				<div class="seize" :style="seizeStyle"></div>
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.scroll-view {
	height: 100%;
	display: flex;
	flex-direction: column;
	overflow: hidden;
	background-color: var(--my-back-color-white);
}
.scroll-wrapper {
	flex: 1;
	height: 100%;
	overflow: hidden;
	background-color: var(--my-back-color-white);
	.scroll-content {
		background-color: var(--my-back-color-white);
		min-height: 100%;
		padding-bottom: 100px;
	}
}
.img-wrapper {
	width: 100%;
	height: 400px;
	overflow: hidden;
	position: absolute;
	.cover-img {
		width: 100%;
		height: 400px;
		min-height: 100px;
		object-fit: cover;
	}
	.btn {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
	}
}
.layer {
	height: 400px;
	background-color: var(--my-back-color-white);
}
</style>
