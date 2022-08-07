<script setup lang="ts">
import type { PopularData } from '@/types/public/dj.js'

interface Prop {
	popularData: PopularData
}
const props = withDefaults(defineProps<Prop>(), {
	popularData: () => ({
		avatarUrl: '',
		id: 0,
		liveId: 0,
		nickName: '',
		roomNo: 0,
		userFollowedCount: 0,
	}),
})
</script>

<template>
	<div class="popular">
		<div class="cover">
			<img class="cover-img" :src="popularData.avatarUrl + '?param=140y140'" alt="" />
		</div>
		<div class="name">{{ popularData.nickName }}</div>
	</div>
</template>

<style lang="less" scoped>
.popular {
	margin-bottom: 30px;
	.cover {
		width: 100%;
        .cover-img {
            width: 100%;
            border-radius: 20px;
        }
	}
    .name {
        font-size: 25px;
    }
}
</style>
