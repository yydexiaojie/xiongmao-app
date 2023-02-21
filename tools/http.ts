/**
 * 只封装get、post（兼容性考虑）
 */
import {BASE_URL} from '../config/setting';

export const http = (params) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL, //接收请求的API
			method: 'GET', //接收请求的方式,如果不传默认为GET
			data: {}, //接收请求的data,不传默认为空
			success: (res) => { //数据获取成功
				// if (res.data.meta.status !== 200) { //因为200是返回成功的状态码，如果不等于200,则代表获取失败,
				// 	return uni.showToast({
				// 		title: "数据获取失败！"
				// 	})
				// }
				resolve(res) //成功,将数据返回
			},
			fail: (err) => { //失败操作
				uni.showToast({
					title: "请求接口失败！"
				})
				reject(err)
			}
		})
	})
}