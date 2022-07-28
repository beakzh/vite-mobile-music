<script setup lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const router = useRouter()
const userStore = useUserStore()
const { isLogin } = storeToRefs(userStore)
let toLogin = (): void => {
	router.push('/login')
}
</script>

<template>
	<div class="sideMenu">
		<div v-if="!isLogin">
			<div class="unlogin" @click="toLogin">
				<div>
					<i class="iconfont icon-morentouxiang"></i>
				</div>
				<div class="text">前往登录</div>
			</div>
		</div>
		<div v-else></div>
	</div>
</template>

<style lang="less" scoped>
.sideMenu {
	background: var(--my-back-color-gray);
	height: 100%;
	padding: 0.4rem;
}
.unlogin {
	display: flex;
	align-items: center;
	.iconfont {
		font-size: 0.7rem;
		color: var(--my-text-color-black);
	}
	.text {
		margin-left: 0.2rem;
		font-size: 0.4rem;
		color: var(--my-text-color-black);
		margin-top: 0.2rem;
	}
}
</style>
