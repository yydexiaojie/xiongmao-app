<template>
	<view class="policy-item">
		<view class="policy-item-font">
			<view class="policy-item-font-title">{{props.title}}</view>
			<view class="policy-item-font-tip">{{props.tip}}</view>
		</view>
		<view class="policy-item-img">
			<image src="../../static/icon/icon.png" style="width: 90rpx; height: 100rpx;"></image>
		</view>
	</view>
</template>

<script setup lang="ts">
	interface IPolicyItemProps {
		title: string
		tip: string
		imgName: string
		url?: string
	}
	const props = defineProps<IPolicyItemProps>()
	
</script>

<style scoped>
.policy-item {
	display: flex;
	flex: 1;
	flex-direction: row;
	align-items: center;
	justify-content: center;
	border: 2rpx #f6f7f9 solid;
	border-radius: 10rpx;
	padding: 20rpx 10rpx;
}
.policy-item-font {
	margin-right: 10rpx;
}
.policy-item-font-title {
	font-size: 32rpx;
	font-weight: 500;
	line-height: 40rpx;
}
.policy-item-font-tip {
	font-size: 24rpx;
	color: #999;
	line-height: 40rpx;
	margin-top: 20rpx;
}
</style>