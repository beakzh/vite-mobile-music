<script setup lang="ts">
import { ref } from 'vue'
import { getTopPopular } from '@/api/dj'
import PopularItem from './PopularItem.vue'

const list = ref()
let getList = () => {
	getTopPopular({ limit: 30 }).then((res: any) => {
		console.log(res)
        list.value = res.data.list
	})
}
getList()
</script>

<template>
	<div class="list">
		<van-row :gutter="10">
			<van-col span="8" v-for="v in list" :key="v.id"> 
                <PopularItem :popular-data="v" />
            </van-col>
		</van-row>
	</div>
</template>

<style lang="less" scoped>
.list {
    padding: 25px;
}
</style>
