<script setup lang='ts'>
import type { MvInterface } from '@/types/public/mv'

interface Prop {
    mvData: MvInterface,
    index: number
}
const props = withDefaults(defineProps<Prop>(), {
    mvData: () => ({
        id: 0,
        cover: '',
        name: '',
        playCount: 0,
        artistName: '',
        artistId: 0
    }),
    index: 0
})
</script>

<template>
    <div class="top-item">
        <img :src="mvData.cover + '?param=200y200'" alt="">
        <div class="info">
            <div class="number">{{ index }}</div>
            <div>
                <div class="name">{{ mvData.name }}</div>
                <div class="artist-name">{{ mvData.artistName }}</div>
            </div>
        </div>
    </div>
</template>

<style lang='less' scoped>
.top-item {
    display: flex;
    flex-direction: column;
    padding: 10px;

    img {
        width: 100%;
        height: 320px;
        object-fit: cover;
        border-radius: 20px;
    }

    .info {
        display: flex;
        align-items: center;
        gap: 0 20px;
        margin-top: 20px;

        .number {
            font-size: 50px;
            font-weight: bold;
            color: var(--my-primary-color);
        }

        .name {
            font-size: 30px;
            font-weight: bold;
        }

        .artist-name {
            font-size: 24px;
            margin-top: 5px;
            color: var(--my-text-color-gray);
        }
    }
}
</style>