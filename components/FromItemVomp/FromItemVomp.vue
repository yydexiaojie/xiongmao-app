<template>
	<view class="from-item">
		<view class="from-item-left">
			<view class="from-item-left-title">{{ props.title }}</view>
			<view class="from-item-left-tip" v-if="props.tipInfo">{{ props.tipInfo }}</view>
		</view>
		<view class="from-item-right">
			<slot></slot>
		</view>
	</view>
</template>

<script setup lang="ts">
	interface IFromItemProps {
		title?: string
		tipInfo?: string
	}
	const props = defineProps<IFromItemProps>()
</script>

<style scoped>
	.from-item {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 20rpx 0rpx;
	}
	.from-item-left {
		display: flex;
		flex-direction: row;
		line-height: 40rpx;
	}
	.from-item-left-tip {
		font-size: 20rpx;
		color: #C0A369;
		margin-top: 4rpx;
	}
</style>