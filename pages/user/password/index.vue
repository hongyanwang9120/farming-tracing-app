<template>
	<view class="container">
		<tui-list-cell :hover="false" :lineLeft="false">
			<view class="tui-cell-input">
				<input :value="oldPassword" placeholder="请输入旧密码(如果尚未设定密码,此项可以为空!)" placeholder-class="tui-phcolor" type="text" :auto-focus="true" :focus="true" maxlength="40" @input="inputOld" />
			   <icon type="clear" :size="14" color="#bfbfbf" v-show="oldPassword" @tap="clearOldInput"></icon>
			</view>
		</tui-list-cell>
		<tui-list-cell :hover="false" :lineLeft="false">
			<view class="tui-cell-input">
				<input :value="newPassword" placeholder="请输入新密码" placeholder-class="tui-phcolor" type="text" :auto-focus="true" :focus="true" maxlength="40" @input="inputNew" />
			   <icon type="clear" :size="14" color="#bfbfbf" v-show="newPassword" @tap="clearNewInput"></icon>
			</view>
		</tui-list-cell>
		<tui-list-cell :hover="false" :lineLeft="false">
			<view class="tui-cell-input">
				<input :value="confirmPassword" placeholder="请再次输入新密码" placeholder-class="tui-phcolor" type="text" :auto-focus="true" :focus="true" maxlength="40" @input="inputConfirm" />
			   <icon type="clear" :size="14" color="#bfbfbf" v-show="confirmPassword" @tap="clearConfirmInput"></icon>
			</view>
		</tui-list-cell>
		<view class="note"> 密码可以为大写字母、小写字母、数字和特殊符号</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			oldPassword: '',
			newPassword:'',
			confirmPassword:''
		};
	},
	methods: {
		inputOld(e) {
			this.oldPassword = e.detail.value;
		},
		clearOldInput() {
			this.oldPassword = '';
		},
		inputNew(e) {
			this.newPassword = e.detail.value;
		},
		clearNewInput() {
			this.newPassword = '';
		},
		inputConfirm(e){
			this.confirmPassword = e.detail.value;
		},
		clearConfirmInput() {
			this.confirmPassword = '';
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
	.note{
		color:rgb(0, 129, 255);
		display: flex;
		justify-content: center;
		margin-top:40rpx;
		
	}
}
</style>
