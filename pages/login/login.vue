<template>
	<view class="container">
		<!-- #ifndef MP -->
		<view class="tui-status-bar"></view>
		<!-- 		<view class="tui-header">
				<view>ThorUI组件库</view>
				<tui-icon name="shut" :size="26" @click="back"></tui-icon>
			</view> -->
		<!-- #endif -->
		<view class="header">
			<image :src="logoImage"></image>
		</view>
		<view class="tui-page-title">农业区块链溯源平台</view>
		<view class="tui-form">
			<view class="tui-view-input">
				<tui-list-cell :hover="false" :lineLeft="false" backgroundColor="transparent">
					<view class="tui-cell-input">
						<tui-icon name="mobile" color="#6d7a87" :size="20"></tui-icon>

						<input :adjust-position="false" v-model="phoneData" placeholder="请输入手机号" placeholder-class="tui-phcolor" type="number"
						 maxlength="11" @input="inputMobile" />
						<view class="tui-icon-close" v-show="mobile" @tap="clearInput(1)">
							<tui-icon name="close-fill" :size="16" color="#bfbfbf"></tui-icon>
						</view>
					</view>
				</tui-list-cell>

				<tui-list-cell :hover="false" :lineLeft="false" backgroundColor="transparent">
					<view class="tui-cell-input">
						<tui-icon name="shield" color="#6d7a87" :size="20"></tui-icon>
						<input placeholder="请输入验证码" placeholder-class="tui-phcolor" type="text" maxlength="6" @input="inputCode" v-model="verCode" />
						<view class="tui-btn-send" :class="{ 'tui-gray': isSend }" :hover-class="isSend ? '' : 'tui-opcity'"
						 :hover-stay-time="150" ref="runCode" @tap="getVerCode()">{{ btnSendText }}</view>
					</view>
				</tui-list-cell>
			</view>
			<view class="tui-cell-text">
				<view class="tui-color-primary" hover-class="tui-opcity" :hover-stay-time="150" @tap="href(0)">手机号/密码登录</view>

			</view>
			<view class="tui-btn-box">
				<tui-button :disabledGray="true" :disabled="disabled" :shadow="true" shape="circle">登录</tui-button>
			</view>
		</view>
		<view class="tui-login-way" v-if="!popupShow">
			<view hover-class="tui-opcity" :hover-stay-time="150" @tap="href(3)">用户协议及隐私条款</view>
		</view>
		
	</view>
</template>

<script>
	var _this;
	import {
		mapGetters
	} from 'vuex'
	import {
		mapMutations
	} from 'vuex';
	import md5 from '@/common/lib/md5.min.js'

	export default {
		computed: {
			disabled: function() {
				let bool = true;
				if (this.phoneData && this.verCode) {
					bool = false;
				}
				return bool;
			}
		},
		data() {
			return {
				// logo图片
				logoImage: '/static/img/logo.png',
				phoneData: '', //用户/电话
				passData: '', //密码
				mobile: '',
				verCode: '',
				password: '',
				isSend: false,
				btnSendText: '获取验证码', //倒计时格式：(60秒)
				popupShow: false
			};
		},
		components: {

		},
		onLoad(options) {
			if (options.errorMsg) {
				uni.showToast({
					title: options.errorMsg,
					icon: 'none'
				})
			}
		},
		mounted() {
			_this = this;
		},
		methods: {
			...mapMutations(['login', 'logout']),
			getVerCode() {
				console.log('yzm')
				console.log(_this.phoneData.length)
				//获取验证码
				if (_this.phoneData.length != 11) {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '手机号不正确'
					});
					return false;
				}
				this.$refs.runCode.$emit('runCode'); //触发倒计时（一般用于请求成功验证码后调用）
				uni.showToast({
					icon: 'none',
					position: 'bottom',
					title: '模拟倒计时触发'
				});

				setTimeout(function() {
					_this.$refs.runCode.$emit('runCode', 0); //假装模拟下需要 终止倒计时
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '模拟倒计时终止'
					});
				}, 3000)
			},
			inputCode(e) {
				console.log('验证码改变')
				this.code = e.detail.value;
			},
			back() {
				uni.navigateBack();
			},
			inputMobile: function(e) {
				this.mobile = e.detail.value;
			},
			inputPwd: function(e) {
				this.password = e.detail.value;
			},
			clearInput(type) {
				if (type == 1) {
					this.mobile = '';
				} else {
					this.password = '';
				}
			},
			href(type) {
				if (type == 0) {
									uni.navigateTo({
										url: '/pages/login/loginPwd'
									})
								}else if(type == 1){
									uni.navigateTo({
										url: '/pages/login/forgetPwd'
									})
								}else if(type==3){
									uni.navigateTo({
										url: '/pages/login/userTerms'
									})
								}
				// let url = '../forgetPwd/forgetPwd';
				// if (type == 2) {
				// 	url = '../reg/reg';
				// }
				// this.tui.href(url);
			},
			
			login(params) {
				if (params) {
					this.isRotate = true
					this.$store.dispatch('login', params).then(res => {
						this.isRotate = false
						uni.reLaunch({
							url: '/pages/index/index',
						})
					}).catch(() => {
						this.isRotate = false
					})
				}
			},

			startLogin() {
				//登录
				if (this.isRotate) {
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.phoneData.length == "") {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '用户名不能为空'
					});
					return;
				}
				if (this.passData.length < 5) {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '密码不正确'
					});
					return;
				}

				// 网络请求
				const params = {
					name: this.phoneData,
					passwd: md5(this.passData)
				}
				this.login(params)
			}
		}
	}
</script>


<style lang="scss">
	.container {
		height: 100%;
		background-image: linear-gradient(to bottom, #1e76fa, #0edae7);

		.tui-status-bar {
			width: 100%;
			height: var(--status-bar-height);
		}

		.tui-header {
			width: 100%;
			padding: 40rpx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			box-sizing: border-box;
		}

		.header {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 100%;
			height: 400rpx;

			uni-image {
				width: 200rpx;
				height: 200rpx;
			}
		}

		.tui-page-title {
			display: flex;
			justify-content: center;
			width: 100%;
			font-size: 48rpx;
			font-weight: bold;
			color: white;
			line-height: 42rpx;
			padding: 0rpx;
			box-sizing: border-box;
		}

		.tui-form {
			padding-top: 10rpx;

			.tui-view-input {
				width: 100%;
				box-sizing: border-box;
				padding: 0 40rpx;

				.tui-cell-input {
					width: 100%;
					display: flex;
					align-items: center;
					padding-top: 48rpx;
					padding-bottom: $uni-spacing-col-base;
					// 获取验证码
					// color:#0000FF;
					color: white;

					input {
						flex: 1;
						padding-left: $uni-spacing-row-base;
					}

					.tui-icon-class {
						color: white !important;

					}

					.uni-input-input {
						color: white
					}

					.uni-input-placeholder {
						color: #CCE6FF;
					}

					.tui-icon-close {
						margin-left: auto;
					}
				}
			}

			.tui-cell-text {
				width: 100%;
				padding: $uni-spacing-col-lg $uni-spacing-row-lg;
				box-sizing: border-box;
				font-size: $uni-font-size-sm;
				// 没有账号
				color: #0000FF;
				display: flex;
				align-items: center;
				justify-content: space-between;

				// 注册按钮
				.tui-color-primary {
					color: white;
				}
			}

			.tui-btn-box {
				width: 100%;
				padding: 0 $uni-spacing-row-lg;
				box-sizing: border-box;
				margin-top: 80rpx;
			}
		}

		.tui-login-way {
			width: 100%;
			font-size: 26rpx;
			color: $uni-color-primary;
			display: flex;
			justify-content: center;
			position: fixed;
			left: 0;
			bottom: 80rpx;

			view {
				padding: 12rpx 0;
			}
		}

		.tui-auth-login {
			width: 100%;
			display: flex;
			align-items: center;
			justify-content: center;
			padding-bottom: 80rpx;
			padding-top: 20rpx;

			.tui-icon-platform {
				width: 90rpx;
				height: 90rpx;
				display: flex;
				align-items: center;
				justify-content: center;
				position: relative;
				margin-left: 40rpx;

				&::after {
					content: '';
					position: absolute;
					width: 200%;
					height: 200%;
					transform-origin: 0 0;
					transform: scale(0.5, 0.5) translateZ(0);
					box-sizing: border-box;
					left: 0;
					top: 0;
					border-radius: 180rpx;
					border: 1rpx solid $uni-text-color-placeholder;
				}
			}

			.tui-login-logo {
				width: 60rpx;
				height: 60rpx;
			}
		}
	}
</style>
