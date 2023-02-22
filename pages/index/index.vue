<template>
	<view class="content">
		<swiper class="swiper" circular :indicator-dots="true" :autoplay="true" :interval="2000"
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
		</swiper>
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
						<View class="fast-main-right-btn bg-right">补缴公积金</View>
					</view>
				</view>
				<view class="fast-tip">
					<view class="fast-tip-label">NEW</view>
				</view>
			</view>
			<CustomDiv :title="'专属服务'" :url="'/pages/about/about'" class='space-30'>
				<view class="server-content">
					<IconAndTitle :title="'自助服务'" iconName='wangluozizhufuwu'></IconAndTitle>
					<IconAndTitle :title="'进度查询'" iconName='jindudengdai'></IconAndTitle>
					<IconAndTitle :title="'申请减员'" iconName='icon-person-jianshao'></IconAndTitle>
					<IconAndTitle :title="'活动专区'" iconName='liwuhuodong'></IconAndTitle>
				</view>
			</CustomDiv>
			<CustomDiv :title="'政策解读'" :url="'1'" moreTitle='More' class='space-30'>
				<view class="home-policy">
					<PolicyItemComp title='买房政策' tip='买房政策要知道' imgName='icon' style='margin-right: 10rpx;'></PolicyItemComp>
					<PolicyItemComp title='买车政策' tip='买车政策要知道' imgName='icon'></PolicyItemComp>
				</view>
				<view class="home-policy" style="margin-top: 10rpx;">
					<PolicyItemComp title='买房政策' tip='买房政策要知道' imgName='icon' style='margin-right: 10rpx;'></PolicyItemComp>
					<PolicyItemComp title='买车政策' tip='买车政策要知道' imgName='icon'></PolicyItemComp>
				</view>
			</CustomDiv>
			<CustomDiv :title="'服务保障'" :url="'1'" moreTitle='More' class='space-30'>
				<view class="home-policy">
					<PolicyItemComp title='买房政策' tip='买房政策要知道' imgName='icon' style='margin-right: 10rpx;'></PolicyItemComp>
					<PolicyItemComp title='买车政策' tip='买车政策要知道' imgName='icon'></PolicyItemComp>
				</view>
				<view class="home-policy" style="margin-top: 10rpx;">
					<PolicyItemComp title='买房政策' tip='买房政策要知道' imgName='icon' style='margin-right: 10rpx;'></PolicyItemComp>
					<PolicyItemComp title='买车政策' tip='买车政策要知道' imgName='icon'></PolicyItemComp>
				</view>
			</CustomDiv>
			<CustomDiv :title="'社保解析'" :url="'2'" moreTitle='More' class='space-30'>
				<view>社保解析块</view>
			</CustomDiv>
			<CustomDiv :title="'查询工具'" :url="'4'" moreTitle='More' class='space-30'>
				<view class="home-tools">
					<ToolsComp title="社保计算" imgName="icon"></ToolsComp>
					<ToolsComp title="公积金计算" imgName="icon"></ToolsComp>
					<ToolsComp title="养老金计算" imgName="icon"></ToolsComp>
					<ToolsComp title="房贷计算" imgName="icon"></ToolsComp>
				</view>
			</CustomDiv>
			<CustomDiv :title="'关于我们'" :url="'5'" moreTitle='More' class='space-30'>
				<view class="home-about">
					<view class="home-about-img">
						<image src="../../static/logo.png" class="home-about-img"></image>
					</view>
					<view class="home-about-font">小豆企服是一家SAAS服务云智慧平台,平台致力于为全国用户提供’互联网十人资”服务，为全国企业提供一站式“互联网＋薪酬”服务,为个人提供便捷的社会保障服务,帮助企业以极高的效率完成人员管理，协助个业构建自性云昔牛态系统快谏提高个业者争力.</view>
				</view>
			</CustomDiv>
		</view>
	</view>
</template>

<script setup lang="ts">
	import CustomDiv from '../../components/CustomDiv/CustomDiv.vue';
	import IconAndTitle from '../../components/IconAndTitle/IconAndTitle.vue';
	import ToolsComp from '../../components/ToolsComp/ToolsComp.vue';
	import PolicyItemComp from '../../components/PolicyItemComp/PolicyItemComp.vue';
</script>

<style scoped>
	.content {
		display: flex;
		flex: 1;
		flex-direction: column;
		background: #f6f7f9;
	}
	.swiper {
		width: 100%;
		height: 300rpx;
	}
	.swiper-item {
		display: block;
		height: 300rpx;
		line-height: 300rpx;
		text-align: center;
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
		padding: 40rpx 30rpx;
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
		background: #acd360;
		color: #fff;
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
		border: 1rpx #f77213 solid;
		padding: 10rpx;
		line-height: 40rpx;
		border-radius: 40rpx;
		margin-right: 10rpx;
		text-align: center;
		color: #f77213;
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
		flex: 1;
		align-items: center;
		justify-content: start;
		background: #59acfc;
		color: #fff;
		border-radius: 10rpx;
		margin-bottom: 20rpx;
		padding: 10rpx 30rpx;
	}
	.bg-right {
		background: #55d8c1;
		box-shadow: #31a759;
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
	.server-content {
		display: flex;
		flex-direction: row;
		margin-top: 30rpx;
	}
	.home-policy {
		margin-top: 30rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	.home-tools {
		margin-top: 30rpx;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	.home-about {
		display: flex;
		/* align-items: center; */
		margin-top: 30rpx;
	}
	.home-about-img {
		width: 120rpx;
		height: 120rpx;
	}
	.home-about-font {
		margin-left: 20rpx;
		font-size: 26rpx;
		line-height: 36rpx;
	}
</style>
