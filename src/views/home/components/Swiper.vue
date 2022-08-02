<script setup lang="ts">
import { reqBanner } from '@/api/home'
import { ref } from 'vue'

interface ImgList {
	pic: string
	typeTitle: string
	bannerId: string
}
const imgList = ref<ImgList[]>([])
let getList = async () => {
	const res: any = await reqBanner()
	imgList.value = res.banners
}
getList()

defineExpose({
	getList
})
</script>

<template>
	<div class="swiper">
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(v, i) in imgList" :key="i">
				<img :src="v.pic" :alt="v.typeTitle" class="swiper-img" />
			</van-swipe-item>
		</van-swipe>
	</div>
</template>

<style lang="less" scoped>
.swiper {
	padding: 10px;
	background-image: linear-gradient(#e8e9eb, #fff);
	.my-swipe {
		.swiper-img {
			width: 100%;
			height: 4.1rem;
			border-radius: 0.2rem;
		}
	}
}
</style>
