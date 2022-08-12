<script setup lang="ts">
interface Prop {
	sheetData: any
}
const props = withDefaults(defineProps<Prop>(), {
	sheetData: () => ({}),
})
</script>

<template>
	<div class="sheet-item">
		<div class="left">
			<div class="cover">
				<img class="cover-img" :src="sheetData.coverImgUrl" alt="" />
			</div>
			<div class="info">
				<div class="name">{{ sheetData.name }}</div>
				<div class="count">{{ sheetData.trackCount }}首</div>
			</div>
		</div>
		<div class="play-btn">
            <i class="iconfont icon-Androidgengduo"></i>
        </div>
	</div>
</template>

<style lang="less" scoped>
.sheet-item {
	padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .left {
        display: flex;
        align-items: center;
        .cover {
            width: 100px;
            height: 100px;
            .cover-img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
            }
        }
        .info {
            margin-left: 10px;
            .name {
                font-size: 20px;
            }
            .count {
                font-size: 20px;
                color: var(--my-text-color-gray);
            }
        }
    }
}
</style>
