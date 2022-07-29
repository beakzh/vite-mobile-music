<script setup lang="ts">
import { useUserStore, useMsgStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'
import { ref } from 'vue'

const router = useRouter()
const userStore = useUserStore()
const { isLogin, userInfo } = storeToRefs(userStore)

const msgStore = useMsgStore()
const { newMsgCount } = storeToRefs(msgStore)

let toLogin = () => router.push('/login')
const loading = ref<boolean>(false)
let loginOut = async () => {
	loading.value = true
	userStore
		.loginOut()
		.then(() => {
			loading.value = false
		})
		.catch(() => {
			loading.value = false
		})
}
</script>

<template>
	<div class="sideMenu" @click="e => e.stopPropagation()">
		<div v-if="!isLogin">
			<div class="unlogin" @click="toLogin">
				<div>
					<i class="iconfont icon-morentouxiang"></i>
				</div>
				<div class="text">前往登录</div>
			</div>
		</div>
		<div class="user-info" v-else>
			<div class="left">
				<img class="avatarUrl" :src="userInfo.avatarUrl" alt="" />
				<div class="nickname">{{ userInfo.nickname }}</div>
				<van-icon name="arrow" />
			</div>
			<div class="right">
				<i class="iconfont icon-iconfontscan"></i>
			</div>
		</div>
		<div v-if="isLogin">
			<div class="box-container">
				<van-cell-group inset>
					<van-cell title="我的消息" is-link>
						<template #icon>
							<i class="iconfont icon-xiaoxitongzhi"></i>
						</template>
						<template #value>
							<van-badge :content="newMsgCount" :offset="[-15, -5]" :show-zero="false">
								<div></div>
							</van-badge>
						</template>
					</van-cell>
					<van-cell title="云贝中心" is-link>
						<template #icon>
							<i class="iconfont icon-yun_o"></i>
						</template>
					</van-cell>
					<van-cell title="创作者中心" is-link>
						<template #icon>
							<i class="iconfont icon-dengpao"></i>
						</template>
					</van-cell>
				</van-cell-group>
			</div>
		</div>
		<div class="box-container">
			<van-cell-group inset>
				<van-cell title="音乐服务">
					<template #title>
						<span class="box-title">音乐服务</span>
					</template>
				</van-cell>
				<van-cell title="云村有票" is-link>
					<template #icon>
						<i class="iconfont icon-youhuobaopiaoju"></i>
					</template>
				</van-cell>
				<van-cell title="商城" is-link>
					<template #icon>
						<i class="iconfont icon-shangcheng"></i>
					</template>
				</van-cell>
				<van-cell title="Beat交易平台" is-link>
					<template #icon>
						<i class="iconfont icon-zhongchengdujiaoyi"></i>
					</template>
				</van-cell>
				<van-cell title="游戏专区" is-link>
					<template #icon>
						<i class="iconfont icon-youxi"></i>
					</template>
				</van-cell>
				<van-cell title="口袋彩铃" is-link>
					<template #icon>
						<i class="iconfont icon-icon--"></i>
					</template>
				</van-cell>
			</van-cell-group>
		</div>
		<div class="box-container">
			<van-cell-group inset>
				<van-cell title="其他设置">
					<template #title>
						<span class="box-title">其他设置</span>
					</template>
				</van-cell>
				<van-cell title="设置" is-link>
					<template #icon>
						<i class="iconfont icon-shezhi"></i>
					</template>
				</van-cell>
			</van-cell-group>
		</div>
		<van-button v-if="isLogin" :loading="loading" type="danger" round block @click="loginOut"
			>退出登录</van-button
		>
	</div>
</template>

<style lang="less" scoped>
.user-info {
	display: flex;
	justify-content: space-between;
	align-items: center;
	.left {
		display: flex;
		align-items: center;
		.avatarUrl {
			width: 1.1rem;
			height: 1.1rem;
			border-radius: 50%;
			margin-right: 0.2rem;
		}
		.nickname {
			font-size: 0.412rem;
			color: var(--my-text-color-black);
		}
		:deep(.van-icon) {
			font-size: 0.45rem;
			line-height: 0.2rem;
		}
	}
	.right {
		display: flex;
		justify-content: center;
		align-items: center;
	}
}
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
.box-container {
	margin-top: 0.5rem;
	.box-title {
		color: #999;
		font-size: 0.35rem;
	}
	:deep(.van-cell-group--inset) {
		margin: unset;
	}
	.iconfont {
		font-size: 0.45rem;
		margin-right: 0.1rem;
	}
}
:deep(.van-button) {
	margin-top: 0.5rem;
	background-color: var(--my-back-color-white);
	color: #e20001;
	border: var(--van-button-border-width) solid var(--van-button-default-border-color);
}
</style>
