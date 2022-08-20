<script setup lang="ts">
import SongItem from '@/components/SongItem/index.vue'
import { reqHistoryRecommend } from '@/api/home'
import type { SongData } from '@/types/store/player'
import { Toast } from 'vant'
import { ref } from 'vue'

interface Prop {
	date: string
}
const props = withDefaults(defineProps<Prop>(), {
	date: '',
})
const emit = defineEmits(['refresh'])

const list = ref<SongData[]>([])
function getList() {
	const loading = Toast.loading({
		message: '加载中...',
		duration: 0,
	})
	reqHistoryRecommend({ date: props.date })
		.then((res: any) => {
			list.value = res.data.songs
			emit('refresh')
		})
		.finally(() => {
			loading.clear()
		})
}
getList()
</script>

<template>
	<div class="dateList">
		<SongItem v-for="v in list" :song-data="v" :key="v.id" />
	</div>
</template>

<style lang="less" scoped>
.dateList {
	padding: 30px;
}
</style>
