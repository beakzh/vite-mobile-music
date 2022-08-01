<script setup lang="ts"></script>

<template>
	<div class="wrapper">
		<div class="new-song-item">
			<div class="left">
				<div class="cover">
					<img class="cover-img" alt="" />
					<i class="iconfont icon-24gf-play"></i>
				</div>
				<div>
					<span>Training</span>
					<span> - 满舒克</span>
				</div>
			</div>
			<div class="right">111</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.wrapper {
	padding: 20px;
	.new-song-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 100%;
		.left {
			display: flex;
			align-items: center;
			.cover {
				position: relative;
				width: 80px;
				height: 80px;
				flex-shrink: 0;
				border-radius: 20px;
				.cover-img {
					width: 100%;
					height: 100%;
					border-radius: 10px;
				}
				.iconfont {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -50%);
					color: #fff;
					font-size: 24px;
				}
			}
		}
	}
}
</style>
