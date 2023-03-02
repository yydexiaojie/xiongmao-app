<<<<<<< HEAD
import dayjs from 'dayjs';

export const cityData = {
=======
import dayjs from 'dayjs'

export const cityData = [{
>>>>>>> 2a120b6554f41e66e2fd411ac4c50ab8764511ac
	label: '北京',
	value: 'bj',
	children: [
		{
			label: '东城区',
			value: '110102',
			children: []
		},
		{
			label: '西城区',
			value: '110102',
			children: []
		},
		{
			label: '朝阳区',
			value: '110105',
			children: []
		},
		{
			label: '丰台区',
			value: '110106',
			children: []
		},
		{
			label: '石景山区',
			value: '110107',
			children: []
		},
		{
			label: '海淀区',
			value: '110108',
			children: []
		},
		{
			label: '门头沟区',
			value: '110109',
			children: []
		},
		{
			label: '房山区',
			value: '110111',
			children: []
		},
		{
			label: '通州区',
			value: '110112',
			children: []
		},
		{
			label: '顺义区',
			value: '110113',
			children: []
		},
		{
			label: '昌平区',
			value: '110114',
			children: []
		},
		{
			label: '大兴区',
			value: '110115',
			children: []
		},
		{
			label: '怀柔区',
			value: '110116',
			children: []
		},
		{
			label: '平谷区',
			value: '110117',
			children: []
		},
		{
			label: '密云区',
			value: '110118',
			children: []
		},
		{
			label: '延庆区',
			value: '110119',
			children: []
		},
	]
}]

export const householdData = [
	{
		label: '本市城镇',
		value: '1',
	},
	{
		label: '本市农村',
		value: '2',
	},
	{
		label: '外埠城镇',
		value: '3',
	},
	{
		label: '外埠农村',
		value: '4',
	},
]

export const renewalData = [
	{
		label: '新缴(首次在该城市参缴)',
		value: '1',
	},
	{
		label: '续缴(非首次在该城市参缴)',
		value: '2',
	},
	{
		label: '补缴(先续缴当月,再补缴)',
		value: '3',
	},
]

export const payTypeData = [
	{
		label: '社保',
		value: '1',
	},
	{
		label: '社保+公积金',
		value: '2',
	},
	{
		label: '社保+公积金+个税',
		value: '3',
	},
	{
		label: '公积金',
		value: '4',
	},
]

const monthArr = [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6]
export const selectMonthData = monthArr.map((item: number) => {
	return {
		label: dayjs().add(item, 'M').format('YYYY-MM'),
		value: dayjs().add(item, 'M').format('YYYYMM'),
	}
})