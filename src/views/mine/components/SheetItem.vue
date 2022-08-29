<script setup lang="ts">
import PopupMenu from './PopupMenu.vue'
import { reqDelSheet } from '@/api/sheet'
import { Toast } from 'vant'
import { ref } from 'vue'

interface Prop {
	sheetData: any
	showEdit: boolean
	hideEdit: boolean
}
const props = withDefaults(defineProps<Prop>(), {
	sheetData: () => ({}),
	showEdit: false,
	hideEdit: false,
})
const emit = defineEmits<{
	(e: 'delSuccess'): void
	(e: 'edit'): void
}>()

const show = ref(false)
let handleMenu = () => {
	show.value = true
}

let del = () => {
	const loading = Toast.loading({
		duration: 0,
		message: '加载中...',
		overlay: true,
	})
	reqDelSheet({ id: props.sheetData.id })
		.then(() => {
			emit('delSuccess')
		})
		.finally(() => {
			loading.clear()
		})
}
let edit = () => {
	emit('edit')
}
</script>

<template>
	<div class="sheet-item">
		<div class="left">
			<div class="cover">
				<img class="cover-img" :src="sheetData.coverImgUrl + '?param=100y100'" alt="" />
			</div>
			<div class="info">
				<div class="name">{{ sheetData.name }}</div>
				<div class="count">{{ sheetData.trackCount }}首</div>
			</div>
		</div>
		<div class="play-btn" @click.stop="handleMenu" v-if="showEdit">
			<i class="iconfont icon-Androidgengduo"></i>
		</div>
		<PopupMenu v-model:show="show" :hide-edit="hideEdit" @del="del" @edit="edit" />
	</div>
</template>

<style lang="less" scoped>
.sheet-item {
	padding: 10px;
	display: flex;
	justify-content: space-between;
	align-items: center;

	.left {
		display: flex;
		align-items: center;

		.cover {
			width: 100px;
			height: 100px;

			.cover-img {
				width: 100%;
				height: 100%;
				border-radius: 10px;
			}
		}

		.info {
			margin-left: 10px;

			.name {
				font-size: 23px;
			}

			.count {
				font-size: 23px;
				color: var(--my-text-color-gray);
			}
		}
	}

	.play-btn {
		.iconfont {
			font-size: 25px;
		}
	}
}
</style>
