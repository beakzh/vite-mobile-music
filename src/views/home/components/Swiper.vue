<script setup lang="ts">
import { reqBanner } from '@/api/home'
import { ref } from 'vue'

interface ImgList {
    pic: string
    typeTitle:string
    bannerId: string
}
const imgList = ref<ImgList[]>([])
let getBannerList =async () => {
    const res:any  = await reqBanner()
    console.log(res)
    imgList.value = res.banners
}
getBannerList()
</script>

<template>
	<div>
		<van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
			<van-swipe-item v-for="(v, i) in imgList" :key="i">
                <img :src="v.pic" :alt="v.typeTitle" class="swiper-img">
            </van-swipe-item>
		</van-swipe>
	</div>
</template>

<style lang="less" scoped>
.my-swipe {
    .swiper-img {
        width: 100%;
        height: 4.1rem;
        border-radius: 0.2rem;
    }
}
</style>
