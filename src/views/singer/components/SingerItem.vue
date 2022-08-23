<script setup lang="ts">
import type { singerInterface } from '@/types/public/singer'
import { reqSubSinger } from '@/api/singer'
import { Toast } from 'vant'
import { ref, toRaw } from 'vue'

interface Prop {
	singerData: singerInterface
}
const props = withDefaults(defineProps<Prop>(), {
	singerData: () => ({
		name: '',
		picUrl: '',
		id: 0,
		followed: false, // 是否已经关注了
		accountId: 0,
	}),
})
const loading = ref<boolean>(false)
const followed = ref<boolean>(toRaw(props.singerData.followed))
function subSinger(t: number) {
	loading.value = true
	reqSubSinger({ id: props.singerData.id, t }).then(() => {
		if (t == 1) {
			Toast.success('关注成功')
			followed.value = true
		} else {
			Toast.success('取消成功')
			followed.value = false
		}
	}).finally(()=> {
        loading.value = false
    })
}
</script>

<template>
	<div class="singer-item">
		<div class="left">
			<img :src="singerData.picUrl + '?param=140y140'" alt="" />
			<div class="singer-name">{{ singerData.name }}</div>
		</div>
		<div class="right">
			<van-button size="small" round v-if="!followed" @click.stop="subSinger(1)">关注</van-button>
			<van-button size="small" round v-if="followed" @click.stop="subSinger(0)">取消</van-button>
		</div>
	</div>
</template>

<style lang="less" scoped>
.singer-item {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 30px;
	border-bottom: 1px solid var(--van-cell-border-color);
	.left {
		display: flex;
		align-items: center;
		gap: 0 20px;
		img {
			width: 100px;
			height: 100px;
			border-radius: 50%;
		}
		.singer-name {
			font-size: 28px;
			color: var(--my-text-color-black);
		}
	}
}
</style>
