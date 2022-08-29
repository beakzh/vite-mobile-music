<script setup lang="ts">
import { goBack } from '@/utils/back'
import { Toast } from 'vant'
import { reqUpdateSheetName } from '@/api/sheet'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const name = ref<string>('')
let onClickRight = () => {
	if (!name.value) return Toast.fail('请输入歌单名称')
	const loading = Toast.loading({
		duration: 0,
		message: '加载中...',
		overlay: true,
	})
	reqUpdateSheetName({ id: Number(route.query.id), name: name.value })
		.then(() => {
			router.back()
		})
		.finally(() => {
			loading.clear()
		})
}
</script>

<template>
	<div class="edit-name">
		<van-nav-bar title="编辑名称" right-text="保存" left-arrow fixed placeholder @click-left="goBack"
			@click-right="onClickRight" />
		<van-form input-align="right">
			<van-cell-group>
				<van-field v-model="name" label="名称" placeholder="请输入歌单名称" />
			</van-cell-group>
		</van-form>
	</div>
</template>

<style lang="less" scoped>
.edit-name {
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
	padding: 15px;
}

:deep(.van-nav-bar .van-icon) {
	color: unset;
}
</style>
