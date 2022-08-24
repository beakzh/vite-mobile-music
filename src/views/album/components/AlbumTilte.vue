<script setup lang="ts">
import { ref } from 'vue'

interface Prop {
	showMenu: boolean
	title: string
}
const props = withDefaults(defineProps<Prop>(), {
	showMenu: false,
	title: '',
})
const emit = defineEmits(['menuTap'])

const menuList = ref([
	{ name: '日榜', type: 'daily' },
	{ name: '周榜', type: 'week' },
	{ name: '总榜', type: 'total' },
])
const active = ref('daily')
let tapMenu = (type: string) => {
	active.value = type
	emit('menuTap', type)
}
</script>

<template>
	<div class="title">
		<div class="left">
			<div>{{ title }}</div>
			<div class="flex_box_center_column">
				<van-icon name="arrow" />
			</div>
		</div>
		<div class="menu" v-if="showMenu">
			<div
				class="menu-item"
				:class="{ menuActive: active == v.type }"
				v-for="(v, i) in menuList"
				:key="i"
				@click="tapMenu(v.type)"
			>
				{{ v.name }}
			</div>
		</div>
	</div>
</template>

<style lang="less" scoped>
.title {
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 10px;
	.left {
		display: flex;
		align-items: center;
		padding-left: 15px;
		margin-bottom: 10px;
		font-size: 36px;
		color: var(--my-text-color-black);
		font-weight: bold;
	}
	.menu {
		display: flex;
		align-items: center;
		font-size: 26px;
		.menu-item {
			color: var(--my-text-color-black);
			padding: 0 15px;
			border-right: 1px solid var(--my-text-color-gray);
			&:last-child {
				border: none;
			}
		}
		.menuActive {
			color: var(--my-primary-color);
		}
	}
}
</style>
