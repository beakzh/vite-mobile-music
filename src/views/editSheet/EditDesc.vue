<script setup lang="ts">
import { reqUpdateSheetDesc } from '@/api/sheet'
import { reqSheetDetail } from '@/api/song'
import { goBack } from '@/utils/back'
import { Toast } from 'vant'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()
const desc = ref<string>()
let onClickRight = () => {
	if (!desc.value) return Toast.fail('请输入歌单描述')
	const loading = Toast.loading({
		duration: 0,
		message: '加载中...',
		overlay: true,
	})
	reqUpdateSheetDesc({ id: Number(route.query.id), desc: desc.value })
		.then(() => {
			router.back()
		})
		.finally(() => {
			loading.clear()
		})
}
let getDetail = () => {
	reqSheetDetail({ id: Number(route.query.id), timestamp: Date.now() }).then((res: any) => {
		desc.value = res.playlist.description
	})
}
getDetail()
</script>

<template>
	<div class="edit-desc">
		<van-nav-bar title="编辑描述" right-text="保存" left-arrow fixed placeholder @click-left="goBack"
			@click-right="onClickRight" />
		<van-form input-align="right">
			<van-cell-group>
				<van-field v-model="desc" :autosize="{ maxHeight: 600, minHeight: 300 }" type="textarea" label="描述"
					maxlength="2000" :row="10" :show-word-limit="true" placeholder="请输入歌单描述" />
			</van-cell-group>
		</van-form>
	</div>
</template>

<style lang="less" scoped>
.edit-desc {
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
	padding: 15px;
}

:deep(.van-nav-bar .van-icon) {
	color: unset;
}
</style>
