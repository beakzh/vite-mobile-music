<script setup lang="ts"></script>

<template>
	<div class="recommend">
		<div class="recommend-top">
			<div class="recommend-title">推荐歌单</div>
			<van-button icon="arrow" icon-position="right" round size="mini">更多</van-button>
		</div>
	</div>
</template>

<style lang="less" scoped>
.recommend {
	background: var(--van-white);
    padding: 10px;
    box-sizing: border-box;
    .recommend-top {
        display: flex;
        justify-content: space-between;
        .recommend-title {
            font-size: 15px;
            color: #333;
            font-weight: bold;
        }
    }
}
</style>
