<template>
	<view class="custom-div">
		<view class="custom-div-header">
			<view class="custom-div-header-title">
				{{ props.title || '标题' }}
			</view>
			<view class="custom-div-header-more" @click="gotoPage(props.url)">More></view>
		</view>
		<view class="custom-div-body">
			<slot></slot>
		</view>
	</view>
</template>

<script setup lang="ts">
	interface ICustomDivProps {
		title: string
		url: string
		moreTitle: string
	}
	const props = defineProps<ICustomDivProps>()
	const gotoPage = (url: string) => {
		uni.navigateTo({
			url: url
		})
	}
</script>

<style>
.custom-div {
	background: #fff;
	border-radius: 10rpx;
	padding: 30rpx 20rpx;
}
.custom-div-header {
	line-height: 60rpx;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	border-bottom: 1rpx #f6f7f9 solid;
	padding-bottom: 10rpx;
}
.custom-div-header-title {
	font-size: 600;
	line-height: 50rpx;
	font-size: 36rpx;
}
.custom-div-header-more {
	font-size: 20rpx;
	color: #999;
}
.custom-div-body {
	padding: 30rpx 0rpx;
	/* font-size: 26rpx; */
}
</style>