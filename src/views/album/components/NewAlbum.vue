<script setup lang="ts">
import AlbumTitle from './AlbumTilte.vue'
import AlbumItem from './AlbumItem.vue'
import { reqAlbumList } from '@/api/album'
import type { albumDataInterface } from '@/types/public/album'
import { ref } from 'vue'

const list = ref<albumDataInterface[]>([])
function getAlbumList() {
	reqAlbumList({ limit: 6 }).then((res: any) => {
		list.value = res.products
	})
}
getAlbumList()
</script>

<template>
	<div class="new-album">
		<AlbumTitle title="最新上架" />
		<van-row>
			<van-col v-for="(v, i) in list" :key="i" span="8">
				<AlbumItem :album-data="v" />
			</van-col>
		</van-row>
	</div>
</template>

<style lang="less" scoped></style>
