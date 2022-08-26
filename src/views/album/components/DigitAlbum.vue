<script setup lang="ts">
import AlbumTitle from './AlbumTilte.vue'
import AlbumItem from './AlbumItem.vue'
import { reqDigitAlbum } from '@/api/album'
import type { albumDataInterface } from '@/types/public/album'
import { ref } from 'vue'

const list = ref<albumDataInterface[]>([])
const type = ref<string>('daily')
function getDigitAlbum() {
	const params = {
		limit: 6,
		type: type.value,
	}
	reqDigitAlbum(params).then((res: any) => {
		list.value = res.products.slice(0, 6)
	})
}
let tapMenu = (v: string) => {
	type.value = v
	getDigitAlbum()
}

getDigitAlbum()
</script>

<template>
	<div class="digit-album">
		<AlbumTitle title="数字专辑" :showMenu="true" @menuTap="tapMenu" />
		<van-row>
			<van-col v-for="(v, i) in list" :key="i" span="8">
				<AlbumItem :album-data="v" />
			</van-col>
		</van-row>
	</div>
</template>

<style lang="less" scoped></style>
