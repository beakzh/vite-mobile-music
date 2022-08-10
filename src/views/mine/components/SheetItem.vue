<script setup lang='ts'>
interface Prop {
    sheetData: any
}
const props = withDefaults(defineProps<Prop>(), {
    sheetData: ()=> ({})
})

</script>

<template>
    <div class="sheet-item">
        <div class="left">
            <div class="cover">
                <img src="" alt="">
            </div>
            <div></div>
        </div>
        <div class="play-btn"></div>
    </div>
</template>

<style lang='less' scoped>
.sheet-item {
    padding: 10px;
}
</style>