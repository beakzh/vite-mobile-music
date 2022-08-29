<script setup lang="ts">
import { goBack } from '@/utils/back'
import { reqCatList, reqUpdateSheetTags } from '@/api/sheet'
import { reqSheetDetail } from '@/api/song'
import { useRouter, useRoute } from 'vue-router'
import { ref } from 'vue'
import { Toast } from 'vant'

const route = useRoute()
const router = useRouter()
interface Tag {
	name: string
	category: string
}
interface Parent {
	name: string
	icon: string
	children: Array<Tag>
	category: string
}

const selectList = ref<string[]>([])
const parent = ref<Parent[]>([])
let handleSave = () => {
	const loading = Toast.loading({
		duration: 0,
		message: '加载中...',
		overlay: true,
	})
	reqUpdateSheetTags({ id: Number(route.query.id), tags: selectList.value.join(';') })
		.then(() => {
			router.back()
		})
		.finally(() => {
			loading.clear()
		})
}
let selectTag = (tag: Tag) => {
	const index = selectList.value.findIndex(v => v == tag.name)
	if (index > -1) {
		selectList.value.splice(index, 1)
	} else {
		if (selectList.value.length >= 3) return Toast.fail('最多选择三个标签')
		selectList.value.push(tag.name)
	}
}
let getCatList = () => {
	reqCatList().then((res: any) => {
		const categories = Object.values(res.categories)
		parent.value = categories.map((v, i) => ({
			category: String(i),
			name: String(v),
			children: res.sub.filter((u: Tag): boolean => u.category == String(i)),
			icon: getIcon(String(i)),
		}))
	})
}
let getIcon = (category: string) => {
	switch (category) {
		case '0':
			return 'icon-diqiu'
		case '1':
			return 'icon-gangqin'
		case '2':
			return 'icon-kafei'
		case '3':
			return 'icon-xiaolian'
		case '4':
			return 'icon-zhuti'
		default:
			return 'icon-diqiu'
	}
}
let getDetail = () => {
	reqSheetDetail({ id: Number(route.query.id), timestamp: Date.now() }).then((res: any) => {
		selectList.value = res.playlist.tags || []
	})
}
getDetail()
getCatList()
</script>

<template>
	<div class="edit-tags">
		<van-nav-bar title="编辑标签" right-text="保存" left-arrow fixed placeholder @click-left="goBack"
			@click-right="handleSave" />
		<van-sticky offset-top="1.22667rem">
			<div class="tip-info">
				<van-icon name="info-o" />
				请选择合适的标签，最多选择3个，已选择{{ selectList.length }}个
			</div>
		</van-sticky>
		<div class="grid-container" v-for="(v, i) in parent" :key="i">
			<div class="parent-name">
				<div>
					<i class="iconfont" :class="v.icon"></i>
				</div>
				<div class="txt">{{ v.name }}</div>
			</div>
			<div class="children-name" v-for="(u, j) in v.children" :key="j" @click="selectTag(u)">
				<div class="txt-name">{{ u.name }}</div>
				<div class="child-check" v-if="selectList.includes(u.name)">
					<i class="iconfont icon-gou"></i>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.edit-tags {
	height: 100%;
	overflow: auto;
	box-sizing: border-box;
	padding: 15px;

	.tip-info {
		background-color: var(--my-back-color-white);
		font-size: 24px;
		padding: 20px;
		color: var(--my-text-color-gray);
	}

	.grid-container {
		display: grid;
		grid: auto / repeat(5, 20%);
		border-top: 1px solid var(--my-gray-1);
		border-left: 1px solid var(--my-gray-1);
		margin-bottom: 60px;

		.parent-name {
			font-size: 22px;
			grid-area: 1 / auto/ 3 / auto;
			text-align: center;
			border-right: 1px solid var(--my-gray-1);
			border-bottom: 1px solid var(--my-gray-1);
			color: var(--my-text-color-gray);
			display: flex;
			flex-direction: column;
			justify-content: center;

			.iconfont {
				font-size: 38px;
			}

			.txt {
				margin-top: 20px;
			}
		}

		.children-name {
			border-right: 1px solid var(--my-gray-1);
			border-bottom: 1px solid var(--my-gray-1);
			text-align: center;
			font-size: 30px;
			height: 80px;
			color: var(--my-text-color-black);
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
			position: relative;

			.txt-name {
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
				line-height: 80px;
			}

			.child-check {
				position: absolute;
				top: 1px;
				left: 5px;
				color: var(--my-primary-color);
			}
		}
	}
}
</style>
