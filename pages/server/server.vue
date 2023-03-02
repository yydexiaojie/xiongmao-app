<template>
	<view class="server">
		<view class="server-content">
			<FromItemComp title="参保人信息" tipInfo="" class='form-item'>
				ceshi
			</FromItemComp>
			<FromItemComp title="缴费城市" tipInfo="" class='form-item'>
				<!-- <picker @change="(ev) => bindPickerChange(ev, 'city')" :value="selectState.cityIndex" :range="cityData">
					<view class="picker-input">
						<view class="picker-input-title">{{cityData[selectState.cityIndex].label}}</view>
						<view class="picker-jiantou" :class="`iconfont xm-youjiantou`"></view>
					</view>
				</picker> -->
				<PickerComp @pickerChange="(val) => bindPickerChange(val, 'city')" :value="selectState.cityIndex" :data="cityData" />
			</FromItemComp>
			<FromItemComp title="户口性质" tipInfo="" class='form-item'>
				<!-- <picker @change="(ev) => bindPickerChange(ev, 'household')" :value="selectState.householdIndex" :range="householdData">
					<view class="picker-input">
						<view class="picker-input-title">{{householdData[selectState.householdIndex].label}}</view>
						<view class="picker-jiantou" :class="`iconfont xm-youjiantou`"></view>
					</view>
				</picker> -->
				<PickerComp @pickerChange="(val) => bindPickerChange(val, 'household')" :value="selectState.householdIndex" :data="householdData" />
			</FromItemComp>
			<FromItemComp title="缴费类型" tipInfo="" class='form-item'>
				<!-- <picker @change="(ev) => bindPickerChange(ev, 'renewal')" :value="selectState.renewalIndex" :range="renewalData">
					<view class="picker-input">
						<view class="picker-input-title">{{renewalData[selectState.renewalIndex].label}}</view>
						<view class="picker-jiantou" :class="`iconfont xm-youjiantou`"></view>
					</view>
				</picker> -->
				<PickerComp @pickerChange="(val) => bindPickerChange(val, 'renewal')" :value="selectState.renewalIndex" :data="renewalData" />
			</FromItemComp>
			<FromItemComp title="参保类型" tipInfo="" class='form-item'>
				<!-- <picker @change="(ev) => bindPickerChange(ev, 'pay')" :value="selectState.payTypeIndex" :range="payTypeData">
					<view class="picker-input">
						<view class="picker-input-title">{{payTypeData[selectState.payTypeIndex].label}}</view>
						<view class="picker-jiantou" :class="`iconfont xm-youjiantou`"></view>
					</view>
				</picker> -->
				<PickerComp @pickerChange="(val) => bindPickerChange(val, 'pay')" :value="selectState.payTypeIndex" :data="payTypeData" />
			</FromItemComp>
			<FromItemComp title="参保月份" tipInfo="" class='form-item'>
				<!-- <picker @change="(ev) => bindPickerChange(ev, 'month')" :value="selectState.monthIndex" :range="selectMonthData">
					<view class="picker-input">
						<view class="picker-input-title">{{selectMonthData[selectState.monthIndex].label}}</view>
						<view class="picker-jiantou" :class="`iconfont xm-youjiantou`"></view>
					</view>
				</picker> -->
				<PickerComp @pickerChange="(val) => bindPickerChange(val, 'month')" :value="selectState.monthIndex" :data="selectMonthData" />
			</FromItemComp>
			<FromItemComp title="社保基数" tipInfo="(5869-31884)" class='form-item'></FromItemComp>
			<FromItemComp title="公积金基数" tipInfo="(2500-31884)" class='form-item'></FromItemComp>
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
</style>
