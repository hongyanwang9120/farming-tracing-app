import Vue from 'vue'
import _ from 'lodash'
export default {
	state: {
		user: null,
		//用户登录手机号
		mobile: uni.getStorageSync("thorui_mobile") || "echo.",
		//是否登录 项目中改为真实登录信息判断，如token
		isLogin: uni.getStorageSync("thorui_mobile") ? true : false,
		//登录后跳转的页面路径 + 页面参数
		returnUrl: "",
		//app版本
		version: "1.5.8",
		//当前是否有网络连接
		networkConnected: true,
		isOnline: false
	},
	mutations: {
		login(state, user) {
			// user要传一个对象
			state.user = user.name;
			state.mobile = user.mobile;
			state.isLogin = true;
			// 缓存用户信息
			Vue.prototype.$cache.set('_userInfo', user, 0)
		},
		logout(state) {
			state.user = null;
			state.mobile = "";
			state.isLogin = false;
			state.returnUrl = ""
			// 清理缓存用户信息
			Vue.prototype.$cache.delete('_userInfo')
		},
		setReturnUrl(state, returnUrl) {
			state.returnUrl = returnUrl
		},
		networkChange(state, payload) {
			state.networkConnected = payload.isConnected
		},
		setOnline(state, payload) {
			state.isOnline = state.isOnline
		}
	},
	actions: {
		autoLogin({ commit, getters, dispatch }) {
			// 判断本地是否有账号信息，如果有，就自动重新登录
			if (getters.user && getters.user.id && getters.user.name && getters.user.passwd) {
				const params = {
					name: getters.user.name,
					passwd: getters.user.passwd
				}
				uni.showLoading({
					title: '自动登录中...'
				})
				dispatch('login', params).then(res => {
					uni.hideLoading()
					// uni.showToast({
					// 	title: '已自动登录！',
					// 	icon: 'success'
					// })
					setTimeout(() => {
						uni.reLaunch({
							url: '/pages/index/index'
						})
					}, 1000)
				}).catch(() => {
					uni.hideLoading()
					uni.showToast({
						title: '会话过期，请重新登录！',
						icon: 'none'
					})
					setTimeout(() => {
						uni.reLaunch({
							url: '/pages/login/login'
						})
					}, 1000)
				})
			} else {
				// 如果本地没有账号信息，就提示用户必须登录
				uni.showModal({
					title: '未登录',
					content: '您未登录，需要登录后才能继续',
					showCancel: false,
					confirmText: '确定',
					success: res => {
						if (res.confirm) {
							uni.reLaunch({
								url: '/pages/login/login'
							})
						}
					}
				})
			}
		},
		login({ commit }, params) {
			return new Promise((resolve, reject) => {
				Vue.prototype.$minApi.login().then(res => {
					if (res.ok()) {
						let tmp = { ...params, ...res.data }
						commit('login', tmp)

						// 关于消息推送的保存
						// 保存clientid到服务器
						// #ifdef APP-PLUS
						const clientInfo = plus.push.getClientInfo()
						let pushUser = {
							clientid: clientInfo.clientid,
							appid: clientInfo.appid,
							appkey: clientInfo.appkey,
							userName: tmp.userName,
							userRole: tmp.roleStr
						}
						// 提交api请求，服务端保存客户端角色信息
						// Vue.prototype.$minApi.savePushUser(pushUser)
						// #endif

						resolve(res)
					} else {
						reject(res)
					}
				}).catch(err => {
					reject(err)
				})
			})
		},
		logout({ commit }) {
			commit('logout')
			uni.reLaunch({
				url: '/pages/login/login'
			})
		},
		getOnlineStatus: async function({
			commit,
			state
		}) {
			return await new Promise((resolve, reject) => {
				// #ifndef MP-WEIXIN
				resolve(true)
				// #endif
				// #ifdef MP-WEIXIN
				if (state.isOnline) {
					resolve(state.isOnline)
				} else {
					fetch.request("/Home/GetStatus", "GET", {}, false, true, true).then((res) => {
						if (res.code == 100 && res.data == 1) {
							commit('setOnline', {
								isOnline: true
							})
							resolve(true)
						} else {
							commit('setOnline', {
								isOnline: false
							})
							resolve(false)
						}
					}).catch((res) => {
						reject(false)
					})
				}
				// #endif
			})
		}
	},
	getters: {
		user: state => {
			if (state.user) {
				return state
			}
			return Vue.prototype.$cache.get('_userInfo')
		}
	}
}
