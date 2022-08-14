<script setup lang="ts">
import { computed, WritableComputedRef } from 'vue'

interface Prop {
	show: boolean
	hideEdit: boolean
}

const props = withDefaults(defineProps<Prop>(), {
	show: false,
	hideEdit: false,
})
const emit = defineEmits<{
	(e: 'update:show', value: boolean): void
	(e: 'del'): void
	(e: 'edit'): void
}>()
const show: WritableComputedRef<boolean> = computed({
	get: () => props.show,
	set: v => emit('update:show', v),
})

let del = () => {
	emit('del')
}
let edit = () => {
	emit('edit')
}
</script>

<template>
	<van-popup v-model:show="show" round position="bottom">
		<div class="content">
			<van-cell-group>
				<van-cell title="删除"  is-link>
					<template #right-icon>
						<van-icon name="delete-o" @click="del" />
					</template>
				</van-cell>
				<van-cell title="编辑" is-link v-if="!hideEdit" @click="edit">
					<template #right-icon>
						<van-icon name="edit" />
					</template>
				</van-cell>
			</van-cell-group>
		</div>
	</van-popup>
</template>

<style lang="less" scoped>
.content {
	padding: 30px;
}
</style>
