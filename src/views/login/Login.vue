<script setup lang="ts">
import { useRouter } from 'vue-router'
import { goBack } from '@/utils/back'

let router = useRouter()
let phoneLogin = (): void => {
	router.push('/phoneLogin')
}
let emailLogin = (): void => {
	router.push('/emailLogin')
}
</script>

<template>
	<div>
		<van-nav-bar left-arrow title="登录方式" @click-left="goBack" />
		<div class="login">
			<div class="logo">
				<img src="@/assets/images/public/logo.jpg" alt="" />
			</div>
			<div class="btn-wrapper">
				<van-button type="default" round @click="phoneLogin">手机登录</van-button>
				<van-button type="default" round @click="emailLogin">邮箱登录</van-button>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
:deep(.van-nav-bar .van-icon) {
	color: unset;
}
.login {
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.logo img {
	width: 2.66667rem;
	border-radius: 0.13333rem;
}
.btn-wrapper {
	display: flex;
	flex-direction: column;
	margin-top: 0.5rem;
	gap: 0.5rem 0;
}
:deep(.van-button) {
	width: 8rem;
}
</style>
