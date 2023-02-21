<template>
	<view class="content">
		<!-- <swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="2000"
			:duration="500">
			<swiper-item>
				<view class="swiper-item" style="background: red;">A</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" style="background: green;">B</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item" style="background: blue;">C</view>
			</swiper-item>
		</swiper> -->
		<!-- <view class="banner"></view> -->
		<view class="main">
			<view class="fast-goto">
				<view class="fast-main">
					<view class="fast-main-block fast-main-left">
						<view class="fast-left-title-font">个人/企业社保</view>
						<view class="fast-left-title-font">公积金一站式服务</view>
						<view class="fast-main-left-goto">
							<view class="fast-main-left-btn fs-26">社保缴纳</view>
							<view class="fast-main-left-btn fs-26">缴公积金</view>
						</view>
					</view>
					<view class="fast-main-block fast-main-right">
						<View class="fast-main-right-btn">补缴社保</View>
						<View class="fast-main-right-btn">补缴公积金</View>
					</view>
				</view>
				<view class="fast-tip">
					<view class="fast-tip-label">NEW</view>
				</view>
			</view>
			<CustomDiv :title="'专属服务'" :url="'/pages/about/about'" class='space-30'>
				<view>专属服务块</view>
			</CustomDiv>
			<CustomDiv :title="'政策解读'" :url="'1'" class='space-30'>
				<view>政策解读块</view>
			</CustomDiv>
			<CustomDiv :title="'社保解析'" :url="'2'" class='space-30'>
				<view>社保解析块</view>
			</CustomDiv>
			<CustomDiv :title="'自助工具'" :url="'3'"class='space-30'>
				<view>自助工具块</view>
			</CustomDiv>
			<CustomDiv :title="'新闻资讯'" :url="'4'" class='space-30'>
				<view>新闻资讯块</view>
			</CustomDiv>
			<CustomDiv :title="'关于我们'" :url="'5'" class='space-30'>
				<view>关于我们块</view>
			</CustomDiv>
		</view>
	</view>
</template>

<script setup lang="ts">
	import CustomDiv from '../../components/CustomDiv/CustomDiv.vue'
</script>

<style>
	.content {
		display: flex;
		flex-direction: column;
		/* align-items: center; */
		/* justify-content: center; */
		background: #f6f7f9;
		height: 100vh;
	}
	.banner {
		width: 100%;
		height: 300rpx;
		background: green;
	}
	.info-tip {
		display: flex;
		flex-direction: row;
		height: 100rpx;
	}
	.main {
		padding: 0rpx 30rpx;
	}
	.fast-goto {
		display: flex;
		flex-direction: column;
		background: #fff;
		border-radius: 10rpx;
		color: #666;
		
	}
	.fast-main {
		flex: 1;
		display: flex;
		flex-direction: row;
		padding: 4rpx;
		border-bottom: 3rpx #f6f7f9 solid;
		padding-bottom: 30rpx;
	}
	.fast-main-block {
		flex: 1;
		padding: 20rpx;
		border-radius: 10rpx;
		margin-right: 20rpx;
	}
	.fast-main > .fast-main-block:last-child {
		margin-right: 0rpx;
	}
	.fast-main-left {
		background: #A6AAE3;
	}
	.fast-main-left-goto {
		display: flex;
		flex-direction: row;
		margin-top: 20rpx;
	}
	.fast-left-title-font {
		line-height: 50rpx;
	}
	.fast-main-left-btn {
		flex: 1;
		border: 1rpx #fff solid;
		padding: 10rpx;
		line-height: 40rpx;
		border-radius: 40rpx;
		margin-right: 10rpx;
		text-align: center;
	}
	.fast-main-left-goto > .fast-main-left-btn:last-child{
		margin-right: 0rpx;
	}
	.fs-26 {
		font-size: 26rpx;
	}
	.fast-main-right {
		display: flex;
		flex-direction: column;
		padding: 0rpx;
	}
	.fast-main-right-btn {
		display: flex;
		align-items: center;
		justify-content: center;
		background: #A6AAE3;
		height: 50%;
		border-radius: 10rpx;
		text-align: center;
		margin-bottom: 20rpx;
	}
	.fast-main-right > .fast-main-right-btn:last-child {
		margin-bottom: 0rpx;
	}
	.fast-tip {
		display: flex;
		flex-direction: row;
		padding: 20rpx;
		border-radius: 10rpx;
		align-items: center;
	}
	.fast-tip-label {
		padding: 6rpx 10rpx;
		font-size: 16rpx;
		background: linear-gradient(#f9a50f, #f77213);
		border-radius: 6rpx;
		color: #fff;
	}
	.space-30 {
		margin-top: 30rpx;
	}
</style>
