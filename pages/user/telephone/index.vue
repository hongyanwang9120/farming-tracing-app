<template>
	<view class="container">
		<tui-list-cell :hover="false" :lineLeft="false">
			<view class="tui-cell-input">
				<input :value="phoneData" placeholder="请输入手机号" placeholder-class="tui-phcolor" type="text" :auto-focus="true" :focus="true" maxlength="40" @input="inputPhoneNum" />
			<!-- 	<view class="tui-icon tui-icon-close_fill" v-show="nickname" @tap="clearInput"></view> -->
				<tui-icon name="close-fill" :size="16" color="#bfbfbf"  v-show="phoneData" @tap="clearInput"></tui-icon>
			   <!-- <icon type="clear" :size="14" color="#bfbfbf"></icon> -->
			</view>
		</tui-list-cell>
		<tui-list-cell :hover="false" :lineLeft="false" >
			<view class="tui-cell-input">
		
				<input v-model="verCode" placeholder="请输入验证码" placeholder-class="tui-phcolor" type="text" maxlength="6" @input="inputCode" />
				<view class="tui-btn-send" :class="{ 'tui-gray': isSend }" :hover-class="isSend ? '' : 'tui-opcity'"
				 :hover-stay-time="150" @tap="getVerCode()" ref="runCode">{{ btnSendText }}</view>
			</view>
		</tui-list-cell>
		<!-- <view class="tui-btn-box">
			<tui-button shadow height="88rpx" shape="circle" type="primary">确定</tui-button>
		</view> -->
	</view>
</template>

<script>
	var _this;
export default {
	data() {
		return {
			phoneData: '',
			verCode: '', //验证码
			isSend: false,
			btnSendText: '获取重置码' //倒计时格式：(60秒)
		};
	},
	mounted() {
		_this = this;
	},
	methods: {
		inputCode(e) {
			this.code = e.detail.value;
		},
		inputPhoneNum(e) {
			this.phoneData = e.detail.value;
		},
		clearInput() {
			this.phoneData = '';
		},
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
	}
};
</script>

<style lang="scss">
.container {
	padding-top: 20rpx;
	.tui-cell-input {
		width: 100%;
		display: flex;
		align-items: center;
		box-sizing: border-box;
		
		input {
			flex: 1;
			padding-left: $uni-spacing-row-base;
		}
	}
	.tui-btn-box {
		padding: 40rpx 30rpx 10rpx 30rpx;
		box-sizing: border-box;
	}
}
</style>
