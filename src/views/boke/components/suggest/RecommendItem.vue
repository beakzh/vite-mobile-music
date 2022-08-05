<script setup lang="ts">
import Title from '@/components/Title/index.vue'
import DjItem from '@/components/DjItem/index.vue'
import type { DjCategoryRecommend } from '@/types/public/dj'
import { BoxType } from '@/types/public'

interface Prop {
	list: DjCategoryRecommend
	boxType: BoxType
}

const props = withDefaults(defineProps<Prop>(), {
	list: () => ({
		categoryId: 0,
		categoryName: '',
		radios: [],
	}),
	boxType: BoxType.box,
})
</script>

<template>
	<div class="recommend-item">
		<Title :title="list.categoryName" icon="arrow" position="right" btn-text="更多" />
		<div v-if="boxType == BoxType.box">
			<van-row :gutter="10">
				<van-col span="8" v-for="(v ,i) in list.radios" :key="i">
                    <DjItem :box-type="boxType" :dj-data="v" />
                </van-col>
			</van-row>
		</div>
		<div v-else>
            <DjItem v-for="(v ,i) in list.radios" :key="i" :box-type="boxType" :dj-data="v" />
        </div>
	</div>
</template>

<style lang="less" scoped>
.recommend-item {
    background-color: var(--my-back-color-white);
    padding: 20px 10px 20px 10px;
    margin-bottom: 20px;
}
</style>
