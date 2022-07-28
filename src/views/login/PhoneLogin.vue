<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Toast } from 'vant'
import { reqSendCode } from '@/api/user'
import { goBack } from '@/utils/back'

let router = useRouter()

let phone = ref<number>()
let sendCode = async (): Promise<any> => {
	const reg = /^[1][3,4,5,7,8,9][0-9]{9}$/
	if (phone.value && reg.test(phone.value + '')) {
		await reqSendCode({ phone: phone.value })
		sessionStorage.setItem('loginPhone', phone.value + '')
		Toast.success('验证码发送成功')
		router.push('/inputCode')
	} else Toast('请输入正确的手机号')
}
</script>

<template>
	<div>
		<van-nav-bar left-arrow title="手机号登录" @click-left="goBack" />
		<div class="phone-login">
			<div class="more_marvellous">登录体验更多精彩</div>
			<van-form class="phone-form">
				<van-field v-model="phone" placeholder="请输入手机号" type="number" maxlength="11" />
			</van-form>
			<van-button type="danger" block round @click="sendCode">下一步</van-button>
		</div>
	</div>
</template>

<style lang="less" scoped>
:deep(.van-nav-bar .van-icon) {
	color: unset;
}
.more_marvellous {
	font-size: 0.35rem;
	font-weight: bold;
	color: var(--my-text-color-black);
	margin-bottom: 0.1rem;
}
.phone-login {
	margin-top: 1rem;
	margin-left: 0.5rem;
}
.phone-form {
	border-bottom: 1px solid var(--van-button-default-border-color);
	width: 9rem;
	margin-bottom: 1rem;
}
:deep(.van-button) {
	width: 8rem;
	margin: 0 auto;
}
</style>
