<template>
	<view class="server">
		<view class="server-content">
			<FromItemComp title="参保人信息" tipInfo="" class='form-item'>
				<view class="form-item-info">
					<view class="info-name">ceshi</view>
					<view class="icon-jiantou" :class="`iconfont xm-youjiantou`"></view>
				</view>
			</FromItemComp>
			<FromItemComp title="缴费城市" tipInfo="" class='form-item'>
				<PickerComp @pickerChange="(val) => bindPickerChange(val, 'city')" :value="selectState.cityIndex" :data="cityData" />
			</FromItemComp>
			<FromItemComp title="户口性质" tipInfo="" class='form-item'>
				<PickerComp @pickerChange="(val) => bindPickerChange(val, 'household')" :value="selectState.householdIndex" :data="householdData" />
			</FromItemComp>
			<FromItemComp title="缴费类型" tipInfo="" class='form-item'>
				<PickerComp @pickerChange="(val) => bindPickerChange(val, 'renewal')" :value="selectState.renewalIndex" :data="renewalData" />
			</FromItemComp>
			<FromItemComp title="参保类型" tipInfo="" class='form-item'>
				<PickerComp @pickerChange="(val) => bindPickerChange(val, 'pay')" :value="selectState.payTypeIndex" :data="payTypeData" />
			</FromItemComp>
			<FromItemComp title="参保月份" tipInfo="" class='form-item'>
				<PickerComp @pickerChange="(val) => bindPickerChange(val, 'month')" :value="selectState.monthIndex" :data="selectMonthData" />
			</FromItemComp>
			<FromItemComp title="社保基数" tipInfo="(5869-31884)" class='form-item'>
				<input class="xm-input" type="number" @input="(ev) => bindPickerChange(ev, 'slbase')" :value="5869" placeholder="请输入要缴费基数" />
			</FromItemComp>
			<FromItemComp title="公积金基数" tipInfo="(2500-31884)" class='form-item'>
				<input class="xm-input" type="number" @input="(ev) => bindPickerChange(ev, 'gjjbase')" :value="2500" placeholder="请输入要缴费基数" />
			</FromItemComp>
		</view>
		<view class="from-submit">
			<view class="submit-check"></view>
			<view class="submit-btn">下一步</view>
		</view>
	</view>
</template>

<script setup lang="ts">
	import { reactive } from 'vue'
	import FromItemComp from '../../components/FromItemComp/FromItemComp.vue';
	import PickerComp from '../../components/PickerComp/PickerComp.vue'
	import { selectMonthData, cityData, householdData, payTypeData, renewalData } from '../../tools/opts'
	const selectState = reactive({
		cityIndex: 0,
		householdIndex: 0,
		renewalIndex: 0,
		payTypeIndex: 0,
		monthIndex: 6,
	})
	console.log('........selectMonthData:', selectMonthData)
	const bindPickerChange = (value, type) => {
		selectState.monthIndex = value.index
	}
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
.picker-jiantou {
	font-size: 20rpx;
	color: #666;
}
.xm-input {
	height: 50rpx;
	line-height: 50rpx;
	font-size: 20rpx;
	text-align: right;
}
.form-item-info {
	display: flex;
	flex-direction: row;
	font-size: 20rpx;
}
.icon-jiantou {
	font-size: 15rpx;
	color: #999;
	margin-left: 10rpx;
}
.from-submit {
	border-radius: 20rpx;
	height: 60rpx;
	line-height: 60rpx;
	text-align: center;
	color: #fff;
	background: #C0A369;
	font-size: 30rpx;
	padding: 5rpx 0;
	margin-top: 30rpx;
}
</style>
