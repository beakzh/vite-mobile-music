<script setup lang="ts">
import { goBack } from '@/utils/back'
import { Toast } from 'vant'
import { checkEmail } from '@/utils'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const { loginByEmail } = useUserStore()
const email = ref<string>('')
const password = ref<string>('')
const loading = ref<boolean>(false)
const onSubmit = () => {
	if (checkEmail(email.value)) return Toast(checkEmail(email.value))
	if (!password.value) return Toast('请输入密码')
	loading.value = true
	loginByEmail({ email: email.value, password: password.value })
		.then(() => {
			loading.value = false
			router.replace('/')
		})
		.catch(() => {
			loading.value = false
		})
}
</script>

<template>
	<div>
		<van-nav-bar left-arrow title="邮箱登录" @click-left="goBack" />
		<van-form @submit="onSubmit">
			<van-cell-group inset>
				<van-field v-model="email" name="邮箱" label="邮箱" placeholder="邮箱" />
				<van-field
					v-model="password"
					type="password"
					name="密码"
					label="密码"
					placeholder="密码"
				/>
			</van-cell-group>
			<div style="margin: 16px">
				<van-button :loading="loading" round block type="danger" native-type="submit">
					提交
				</van-button>
			</div>
		</van-form>
	</div>
</template>

<style lang="less" scoped>
:deep(.van-nav-bar .van-icon) {
	color: unset;
}
</style>
