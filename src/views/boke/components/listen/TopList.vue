<script setup lang="ts">
import DjItem from '@/components/DjItem/index.vue'
import type { DjData } from '@/types/public/dj.js'
import { BoxType } from '@/types/public/index.js'
import { getTopList } from '@/api/dj'
import { ref } from 'vue'

const topList = ref<DjData[]>([])
let getList = () => {
    getTopList().then((res: any) => {
        topList.value = res.toplist
    })
}
getList()
</script>

<template>
	<div class="list">
        <van-row :gutter="10">
		<van-col span="8" v-for="v in topList" :key="v.id">
            <DjItem :box-type="BoxType.box" :dj-data="v" />
        </van-col>
	</van-row>
    </div>
</template>

<style lang="less" scoped>
.list {
    padding:  25px;
}
</style>
