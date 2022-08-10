<script setup lang="ts">
import { useUserStore } from '@/stores'
import { storeToRefs } from 'pinia'
import { reqUserSubCount } from '@/api/user'
import { ref } from 'vue'

const userStore = useUserStore()
const { userInfo } = storeToRefs(userStore)

const total = ref<number>(0)
let getCount = () => {
	reqUserSubCount().then((res: any) => {
		total.value = res.createdPlaylistCount
	})
}
getCount()
</script>

<template>
	<div class="creat-sheet">
		<div class="menu">
			<div>创建歌单（{{ total }}）个</div>
			<div class="flex_box_center_column">
				<van-icon name="plus" />
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.creat-sheet {
	.menu {
		display: flex;
		justify-content: space-between;
		color: var(--my-text-color-gray);
		font-size: 25px;
		padding: 5px;
	}
}
</style>
