<script setup lang="ts">
import MvTop from './components/MvTop.vue'
import { goBack } from '@/utils/back'
import { ref } from 'vue'

const active = ref<number>(0)
const tags = ref<string[]>(['内地', '港台', '欧美', '日本', '韩国'])
</script>

<template>
    <div class="mv">
        <van-nav-bar title="MV排行" left-arrow fixed placeholder @click-left="goBack" />
        <van-tabs v-model:active="active" sticky  offset-top="1.22667rem">
            <van-tab :title="v" v-for="(v, i) in tags" :key="i" sticky offset-top="1.22667rem">
                <MvTop :title="v" />
            </van-tab>
        </van-tabs>
    </div>
</template>

<style lang="less" scoped>
.mv {
    height: 100vh;
    overflow: auto;
    box-sizing: border-box;
    padding: 15px;
}
</style>
