<template>
	<view class="picker-comp">
		<picker @change="bindPickerChange" :mode="props.mode || 'selector'" :value="props.value" :range="props.data" range-key="label">
			<view class="picker-input">
				<view class="picker-input-title">{{props.data[props.value].label}}</view>
				<view class="picker-jiantou" :class="`iconfont xm-youjiantou`"></view>
			</view>
		</picker>
	</view>
</template>

<script setup lang="ts">
	interface IPickerProps {
		mode?: string
		data?: any
		value?: string | number
	}
	const props = defineProps<IPickerProps>()
	const emits = defineEmits(["pickerChange"])
	
	const bindPickerChange = (ev) => {
		console.log('ev-->:', ev.detail.value)
		emits('pickerChange', {selectVal: props.data[ev.detail.value], index: ev.detail.value})
	}
</script>

<style scoped>
.picker-input {
	display: flex;
	flex-direction: row;
}
.picker-input-title {
	margin-right: 10rpx;
	font-size: 24rpx;
}
.picker-jiantou {
	font-size: 15rpx;
	color: #999;
}
</style>