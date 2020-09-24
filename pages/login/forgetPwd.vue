<template>
	<view class="forget">
		<view class="container">
			<view class="tips">若你忘记了密码，可在此重置新密码。</view>
			<view class="tui-form">
				<view class="tui-view-input">
					<tui-list-cell :hover="false" :lineLeft="false" backgroundColor="transparent">
						<view class="tui-cell-input">
							<tui-icon name="mobile" color="#6d7a87" :size="20"></tui-icon>
							<input v-model="phoneData" placeholder="请输入手机号" placeholder-class="tui-phcolor" type="number" maxlength="11"
							 @input="inputMobile" />
							<view class="tui-icon-close" v-show="phoneData" @tap="clearInput(1)">
								<tui-icon name="close-fill" :size="16" color="#bfbfbf"></tui-icon>
							</view>
						</view>
					</tui-list-cell>
					<tui-list-cell :hover="false" :lineLeft="false" backgroundColor="transparent">
						<view class="tui-cell-input">
							<tui-icon name="shield" color="#6d7a87" :size="20"></tui-icon>
							<input v-model="verCode" placeholder="请输入验证码" placeholder-class="tui-phcolor" type="text" maxlength="6" @input="inputCode" />
							<view class="tui-btn-send" :class="{ 'tui-gray': isSend }" :hover-class="isSend ? '' : 'tui-opcity'" ref="runCode"
							 :hover-stay-time="150" @tap="getVerCode()">{{ btnSendText }}</view>
						</view>
					</tui-list-cell>

				</view>
				<view class="tui-btn-box">
					<tui-button :disabledGray="true" :disabled="disabled" :shadow="true" shape="circle" @tap="href(2)">下一步</tui-button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	var _this;

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

				phoneData: '', //电话
				passData: '', //密码
				verCode: '', //验证码
				isSend: false,
				btnSendText: '获取重置码' //倒计时格式：(60秒)
			}
		},
		components: {

		},
		mounted() {
			_this = this;
		},
		methods: {
			href(type) {

				uni.navigateTo({
					url: '/pages/login/resetPwd'
				})


			},
			inputCode(e) {
				this.code = e.detail.value;
			},
			inputMobile: function(e) {
				this.phoneData = e.detail.value;
			},
			inputPwd: function(e) {
				this.passData = e.detail.value;
			},
			clearInput(type) {
				if (type == 1) {
					this.phoneData = '';
				} else {
					this.passData = '';
				}
			},
			//自身
			getVerCode() {
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
			startRePass() {
				//重置密码
				if (this.isRotate) {
					//判断是否加载中，避免重复点击请求
					return false;
				}
				if (this.phoneData.length != 11) {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '手机号不正确'
					});
					return false;
				}
				if (this.passData.length < 6) {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '密码不正确'
					});
					return false;
				}
				if (this.verCode.length != 4) {
					uni.showToast({
						icon: 'none',
						position: 'bottom',
						title: '验证码不正确'
					});
					return false;
				}
				_this.isRotate = true
				setTimeout(function() {
					_this.isRotate = false
				}, 3000)


			}
		}
	}
</script>

<style lang="scss">
	.container {
		.tui-page-title {
			width: 100%;
			font-size: 48rpx;
			font-weight: bold;
			color: $uni-text-color;
			line-height: 42rpx;
			padding: 110rpx 40rpx 40rpx 40rpx;
			box-sizing: border-box;
		}

		.tui-form {
			padding-top: 50rpx;

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

					input {
						flex: 1;
						padding-left: $uni-spacing-row-base;
					}

					.tui-icon-close {
						margin-left: auto;
					}

					.tui-btn-send {
						width: 156rpx;
						text-align: right;
						flex-shrink: 0;
						font-size: $uni-font-size-base;
						color: $uni-color-primary;
					}

					.tui-gray {
						color: $uni-text-color-placeholder;
					}
				}
			}

			.tui-btn-box {
				width: 100%;
				padding: 0 $uni-spacing-row-lg;
				box-sizing: border-box;
				margin-top: 80rpx;
			}
		}
	}
</style>
<style>
	@import url("../../components/watch-login/css/icon.css");
	@import url("./css/main.css");
</style>
