<template>
	<view class="tools-comp" @click="gotoPages(props.url)">
		<view class="tools-comp-img">
			<image src='../../static/icon/icon.png' class="tools-comp-img"></image>
		</view>
		<view class="tools-comp-title">{{ props.title }}</view>
	</view>
</template>

<script setup lang="ts">
	interface IToolsCompProps {
		imgName: string
		title: string
		url?: string
	}
	const props = defineProps<IToolsCompProps>()
	const gotoPages = (url: string) => {
		if (!url) return
		uni.navigateTo({
			url: url
		})
	}
	
</script>

<style scoped>
.tools-comp {
	display: flex;
	flex: 1;
	border: 1rpx #f6f7f9 solid;
	border-radius: 20rpx;
	padding: 20rpx;
	flex-direction: column;
	justify-content: center;
	align-items: center;
}
.tools-comp-img {
	width: 200rpx;
	height: 200rpx;
}
.tools-comp-title {
	font-size: 30rpx;
	margin-top: 20rpx;
}
</style>