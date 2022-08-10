<script setup lang="ts">
import { computed, WritableComputedRef, ComputedRef } from 'vue'

interface props {
	code: string | number | undefined
	len: number
}
const prop = withDefaults(defineProps<props>(), {
	code: '',
	len: 4,
})
const emit = defineEmits(['update:code'])

const codeVal: WritableComputedRef<string | number> = computed({
	get: function () {
		return prop.code
	},
	set: function (v) {
		emit('update:code', v)
	},
})
const splitNum: ComputedRef<string[]> = computed(() => (codeVal.value + '').split(''))
</script>

<template>
	<div class="code-wrapper">
		<div class="split-code">
			<ul>
				<li v-for="(v, i) in len" :key="i">{{ splitNum[i] ? splitNum[i] : '' }}</li>
			</ul>
		</div>
		<van-field v-model="codeVal" class="input" type="number"  autofocus :maxlength="len" />
	</div>
</template>

<style lang="less" scoped>
.code-wrapper {
	position: relative;
	.input {
		position: absolute;
		top: 0;
		left: 0;
        z-index: 1;
        opacity: 0;
        width: 100%;
        height: 100%;
		:deep(.van-field__body) {
			height: 100%;
			.van-field__control {
				height: 100%;
			}
		}
	}
	.split-code {
		padding: 1rem;
		ul {
			display: flex;
			justify-content: space-between;
            align-items: center;
			gap: 0 1rem;
			li {
				width: 100px;
				height: 100px;
				font-size: 50px;
				border-bottom: 1px solid #e0e0e0;
				text-align: center;
				color: var(--my-text-color-black);
			}
		}
	}
}
</style>
