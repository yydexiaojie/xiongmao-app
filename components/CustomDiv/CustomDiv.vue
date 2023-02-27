<template>
	<view class="custom-div">
		<view class="custom-div-header">
			<view class="custom-div-header-title">
				<view class="custom-div-icon" :class="`iconfont xm-${props.iconName}`" v-if="props.iconName"></view>
				<view>{{ props.title || '标题' }}</view>
			</view>
			<view class="custom-div-header-more" @click="gotoPage(props.url)">{{ props.moreTitle }}</view>
		</view>
		<view class="custom-div-body">
			<slot></slot>
		</view>
	</view>
</template>

<script setup lang="ts">
import { toRefs } from "vue";
	interface ICustomDivProps {
		title: string
		url?: string
		iconName?: string
		iconColor?: string
		moreTitle?: string
	}
	const props = defineProps<ICustomDivProps>()
	const {iconColor} = toRefs(props)
	
	const gotoPage = (url: string) => {
		if (!url) return
		uni.navigateTo({
			url: url
		})
	}
</script>

<style scoped>
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
	display: flex;
	flex-direction: row;
}
.custom-div-icon {
	font-size: 45rpx;
	margin-right: 20rpx;
	color: v-bind(iconColor || '#F15352') 
}
.custom-div-header-more {
	font-size: 20rpx;
	color: #C0A369;
}
.custom-div-body {
	/* padding: 30rpx 0rpx; */
	/* font-size: 26rpx; */
}
</style>