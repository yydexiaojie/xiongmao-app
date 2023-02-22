<template>
	<view class="server">
		<view class="server-content">
			<FromItemComp title="姓名" tipInfo="(测试)" class='form-item'>
				ceshi
			</FromItemComp>
			<FromItemComp title="姓名" tipInfo="(测试)" class='form-item'></FromItemComp>
			<FromItemComp title="姓名" tipInfo="(测试)" class='form-item'></FromItemComp>
			<FromItemComp title="姓名" tipInfo="(测试)" class='form-item'></FromItemComp>
		</view>
	</view>
</template>

<script setup lang="ts">
	import FromItemComp from '../../components/FromItemVomp/FromItemVomp.vue';
</script>

<style scoped>
.server {
	padding: 30rpx;
}
.server-content {
	background: #fff;
	padding: 0rpx 30rpx;
	border-radius: 20rpx;
}
.form-item {
	border-bottom: 2rpx #f6f7f9 solid;
}
</style>
