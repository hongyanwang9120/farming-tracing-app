<template>
	<view class="container">
		<tui-list-cell :hover="false" :lineLeft="false">
			<view class="tui-cell-input">
				<input :value="address" placeholder="请输入地址" placeholder-class="tui-phcolor" type="text" :auto-focus="true" :focus="true" maxlength="40" @input="inputAddressname" />
		
			   <icon type="clear" :size="14" color="#bfbfbf" v-show="nickname" @tap="clearInput"></icon>
			</view>
		</tui-list-cell>
		<!-- <view class="tui-btn-box">
			<tui-button shadow height="88rpx" shape="circle" type="primary">确定</tui-button>
		</view> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			address: ''
		};
	},
	methods: {
		inputAddressname(e) {
			this.address = e.detail.value;
		},
		clearInput() {
			this.address = '';
		}
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
