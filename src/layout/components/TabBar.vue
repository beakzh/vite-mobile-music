<script setup lang="ts">
import { reactive, ref } from 'vue'

const menuList = reactive([
	{
		name: '发现',
		url: '/home',
		icon: 'icon-faxian',
	},
	{
		name: '播客',
		url: '/boke',
		icon: 'icon-zhiboziyuan',
	},
	{
		name: '我的',
		url: '/mine',
		icon: 'icon-yinle',
	},
	{
		name: '关注',
		url: '/follow',
		icon: 'icon-guanzhu',
	},
	{
		name: '云村',
		url: '/village',
		icon: 'icon-shequ-active',
	},
])
</script>

<template>
	<div class="tabbar">
		<van-tabbar route :fixed="false" :border="false" active-color="#e20001">
			<van-tabbar-item replace v-for="(v, i) in menuList" :key="i" :to="v.url">
				{{ v.name }}
				<template #icon>
					<i class="iconfont" :class="v.icon"></i>
				</template>
			</van-tabbar-item>
		</van-tabbar>
	</div>
</template>

<style scoped>
.tabbar {
	position: fixed;
	width: 100%;
	left: 0;
	bottom: 0;
	padding-bottom: constant(safe-area-inset-bottom);
	padding-bottom: env(safe-area-inset-bottom);
	box-shadow: -2px 0 20px 0 rgb(0 0 0 / 20%);
	background: #fff;
	z-index: 1;
	transition: all 0.4s ease;
}
.iconfont {
    font-weight: bold;
}
</style>
