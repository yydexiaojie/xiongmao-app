<template>
	<view class="icon-title" @click="gotoPages(props.url)">
		<view class="icon" :class="`iconfont icon-${props.iconName}`"></view>
		<view class="title-font">{{props.title}}</view>
	</view>
</template>

<script setup lang="ts">
	interface IIconTitleProps {
		iconName: string
		title: string
		url?: string
	}
	const props = defineProps<IIconTitleProps>()
	
	const gotoPages = (url: string) => {
		if (!url) return
		uni.navigateTo({
			url: url
		})
	}
</script>

<style scoped>
.icon-title {
	display: flex;
	flex: 1;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
.icon {
	font-size: 70rpx;
	color: #F15352;
}
</style>