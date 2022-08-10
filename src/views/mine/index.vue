<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { storeToRefs } from 'pinia'
import $bus from '@/utils/eventBus'
import { reactive, ref, computed } from 'vue'
import { getUserDetail } from '@/api/user'

const userStore = useUserStore()
const { isLogin, userInfo } = storeToRefs(userStore)
const profile = reactive({
	follows: 0,
	followeds: 0,
})
const level = ref<number>()
let getDetail = () => {
	getUserDetail({ uid: userInfo.value.userId }).then((res: any) => {
		profile.follows = res.profile.follows
		profile.followeds = res.profile.followeds
		level.value = res.level
	})
}
getDetail()

const appList = computed(() => [
	{ name: '最近播放', icon: 'icon-bofang1', path: '/recentPlay' },
	{ name: '云盘', icon: 'icon-rili', path: '/cloudDisk' },
	{ name: '我的好友', icon: 'icon-guanzhu', path: `/fansFollows?id=${userInfo.value.userId}` },
	{ name: '收藏和赞', icon: 'icon-paihangbang' },
	{ name: '我的播客', icon: 'icon-zhiboziyuan' },
	{ name: '推歌精选', icon: 'icon-zhiboshenqing' },
	{ name: '本地下载', icon: 'icon-shouyinji' },
	{ name: '已购', icon: 'icon-zhongchengdujiaoyi' },
	{ name: '音乐罐子', icon: 'icon-zhiboshenqing' },
])

let openMenu = () => $bus.emit('openMenu')
</script>

<template>
	<div class="mine">
		<van-sticky>
			<div class="nav">
				<div class="flex_box_center_column" @click.stop="openMenu">
					<i class="iconfont icon-caidan"></i>
				</div>
				<div>个人中心</div>
				<div class="flex_box_center_column">
					<i class="iconfont icon-sousuo"></i>
				</div>
			</div>
		</van-sticky>
		<div class="mine-content">
			<template v-if="isLogin">
				<div class="box_white_container user-info">
					<div class="user-img">
						<img :src="userInfo.avatarUrl" alt="" />
					</div>
					<div class="user-name">{{ userInfo.nickname }}</div>
					<div class="user-other">
						<div class="user-other-item">{{ profile.follows }} 关注</div>
						<div class="user-other-item">{{ profile.followeds }} 粉丝</div>
						<div class="user-other-item">Lv.{{ level }}</div>
					</div>
				</div>

				<div class="box_white_container app-box">
					<van-row>
						<van-col span="6" v-for="(v, i) in appList" :key="i">
							<div class="icon">
								<i class="iconfont" :class="v.icon"></i>
							</div>
							<div class="app-name">{{ v.name }}</div>
						</van-col>
					</van-row>
				</div>
			</template>
			<template v-else>
				<div class="unlogin">
					<router-link to="/login" class="login-link">
						<van-button block round>登录</van-button>
					</router-link>
				</div>
			</template>
		</div>
	</div>
</template>

<style lang="less" scoped>
.mine {
	background-color: var(--my-back-color-gray);
	height: 100%;
	box-sizing: border-box;
	.nav {
		background: transparent;
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 88px;
		box-sizing: border-box;
		padding: 10px 20px;
		.iconfont {
			font-size: 0.5rem;
			font-weight: bold;
			color: var(--my-text-color-black);
		}
	}
	.mine-content {
		padding: 20px;
		min-height: 80vh;
		.unlogin {
			display: flex;
			justify-content: center;
			align-items: center;
			min-height: 60vh;
			.login-link {
				display: block;
				width: 100%;
			}
		}
		.user-info {
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			margin: 20px 0;
			gap: 12px 0;
			.user-img {
				img {
					margin-top: -70px;
					width: 100px;
					height: 100px;
					border-radius: 50%;
				}
			}
			.user-name {
				font-size: 28px;
				font-weight: bold;
				color: var(--my-text-color-black);
			}
			.user-other {
				display: flex;
				align-items: center;
				color: var(--my-text-color-gray);
				font-size: 24px;
				.user-other-item {
					position: relative;
					padding: 0 20px;
					&:last-child {
						&:after {
							display: none;
						}
					}
					&:after {
						content: '';
						display: block;
						width: 2px;
						height: 28px;
						background: var(--my-text-color-gray);
						position: absolute;
						top: 10%;
						right: 0;
					}
				}
			}
		}
		.app-box {
			padding: 10px;
            :deep(.van-col) {
                margin: 20px 0;
            }
            .icon {
                display: flex;
                align-items: center;
                justify-content: center;
                margin-bottom: 10px;
                .iconfont {
                    font-size: 40px;
                    color: var(--my-primary-color);
                }
            }
            .app-name {
                text-align: center;
            }
		}
	}
}
</style>
