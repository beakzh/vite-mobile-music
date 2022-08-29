<script setup lang="ts">
import TopMvItem from './TopMvItem.vue'
import { reqMvTop } from '@/api/video'
import type { MvInterface } from '@/types/public/mv'
import { ref } from 'vue'

interface Prop {
    title: string
}
const props = withDefaults(defineProps<Prop>(), {
    title: '',
})

let offset = -1
let limit = 30
const list = ref<MvInterface[]>([])
const loading = ref<boolean>(false)
const finished = ref<boolean>(false)
function getList() {
    offset++
    const params = {
        limit,
        offset: limit * offset,
        area: props.title
    }
    loading.value = true
    reqMvTop(params).then((res: any) => {
        list.value = list.value.concat(res.data)
        finished.value = !res.hasMore
    }).finally(() => {
        loading.value = false
    })
}
let onLoad = () => {
    getList()
}
</script>

<template>
    <div class="mv-top">
        <van-list v-model:loading="loading" :finished="finished" finished-text="没有更多了~" @load="onLoad">
            <TopMvItem v-for="(v ,i) in list" :mv-data="v" :index="i+1" :key="v.id" />
        </van-list>
    </div>
</template>

<style lang="less" scoped>
</style>
