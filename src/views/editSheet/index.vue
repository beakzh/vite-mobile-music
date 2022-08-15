<script setup lang="ts">
import { goBack } from '@/utils/back'
import { reqSheetDetail } from '@/api/song'
import { Toast } from 'vant'
import { reqUpdateCover } from '@/api/sheet'
import { useRoute, useRouter } from 'vue-router'
import { reactive } from 'vue'

const route = useRoute()
const router = useRouter()
const { id } = route.query
const details = reactive({
	tags: '',
	coverImgUrl: '',
	name: '',
	description: '',
})
let afterRead = (file: any) => {
	const params = {
		id: Number(id),
		timestamp: Date.now(),
	}
	const formData = new FormData()
	formData.append('imgFile', file.file)
	const loading = Toast.loading({
		duration: 0,
		message: '加载中...',
		overlay: true,
	})
	reqUpdateCover(formData, { params })
		.then((res: any) => {
			details.coverImgUrl = res.data.url
		})
		.finally(() => {
			loading.clear()
		})
}
let getDetail = () => {
	reqSheetDetail({ id: Number(id), time: Date.now() }).then((res: any) => {
		console.log(res)
		details.coverImgUrl = res.playlist.coverImgUrl
		details.name = res.playlist.name
		details.description = res.playlist.description
		details.tags = res.playlist.tags.join(',')
	})
}
getDetail()

let toEditName = () => {
	router.push({
		path: '/editName',
		query: {
			id,
		},
	})
}
let toEditTags = () => {
	router.push({
		path: '/editTags',
		query: {
			id,
		},
	})
}
let toEditDesc = () => {
	router.push({
		path: '/editDesc',
		query: {
			id,
		},
	})
}
</script>

<template>
	<div class="creat-sheet">
		<van-nav-bar title="编辑歌单" fixed placeholder left-arrow @click-left="goBack" />
		<van-form input-align="right">
			<van-cell-group>
				<van-field label="更换封面">
					<template #input>
						<van-uploader :after-read="afterRead">
							<template #default>
								<img
									class="cover-img"
									v-if="details.coverImgUrl"
									:src="details.coverImgUrl + '?param=100y100'"
									alt=""
								/>
								<div class="photograph" v-else>
									<van-icon name="photograph" size="30px" />
								</div>
							</template>
						</van-uploader>
					</template>
				</van-field>
				<van-field
					label="名称"
					:model-value="details.name"
					placeholder="请输入名称"
					readonly
					@click="toEditName"
				/>
				<van-field
					label="标签"
					:model-value="details.tags"
					placeholder="请选择标签"
					readonly
					@click="toEditTags"
				/>
				<van-field
					label="描述"
					:model-value="details.description"
					placeholder="请输入描述"
					readonly
					@click="toEditDesc"
				/>
			</van-cell-group>
		</van-form>
	</div>
</template>

<style lang="less" scoped>
.creat-sheet {
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
	padding: 15px;
	.cover-img {
		width: 200px;
		height: 200px;
	}
	.photograph {
		width: 200px;
		height: 200px;
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: var(--my-back-color-gray);
	}
}
:deep(.van-nav-bar .van-icon) {
	color: unset;
}
</style>
