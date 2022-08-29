<script setup lang="ts">
import VerifyCode from '@/components/VerifyCode/index.vue'
import { Toast } from 'vant'
import { goBack } from '@/utils/back'
import { ref, watch } from 'vue'
import { useUserStore } from '@/stores'
import { useRouter } from 'vue-router'

const loginPhone = sessionStorage.getItem('loginPhone') || ''
!loginPhone && goBack()

const router = useRouter()
const { loginByPhone } = useUserStore()
const code = ref<number | undefined>()
watch(code, v => {
	if ((v + '').length == 4) {
		Toast.loading('登录中...')
		loginByPhone({
			phone: +loginPhone,
			captcha: Number(code.value),
		})
			.then(() => {
				Toast.clear()
				router.replace('/')
			})
			.catch(() => {
				Toast.clear()
			})
	}
})
</script>

<template>
	<div>
		<van-nav-bar left-arrow title="手机号登录" @click-left="goBack" />
		<div class="input-code">
			<div class="code-text">请输入验证码</div>
			<div class="send-text">已发送至：{{ loginPhone }}</div>
		</div>
		<VerifyCode v-model:code="code" :len="4" />
	</div>
</template>

<style lang="less" scoped>
:deep(.van-nav-bar .van-icon) {
	color: unset;
}

.input-code {
	padding-left: 0.5rem;
}

.code-text {
	font-size: 0.4rem;
	color: var(--my-text-color-black);
	padding-top: 1.2rem;
}

.send-text {
	font-size: 0.4rem;
	color: var(--my-text-color-black);
}
</style>
