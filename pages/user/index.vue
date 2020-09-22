<template>
	<view>
		<view class="tui-userinfo-box">
				<tui-list-cell padding="0" :arrow="true" @click="changeAvatar" class="head-pic">
					<view class="tui-list-cell">
						<view>头像</view>
						<image src="/static/images/my/mine_def_touxiang_3x.png" class="tui-avatar"></image>
					</view>
				</tui-list-cell>
			
				<tui-list-cell padding="0" :arrow="true" @click="nickname">
					<view class="tui-list-cell">
						<view>昵称</view>
						<view class="tui-content">溯源</view>
					</view>
				</tui-list-cell>
				<tui-list-cell padding="0" >
					<view class="tui-list-cell">
						<view>姓名</view>
						<view class="tui-content">echo.</view>
					</view>
				</tui-list-cell>
				<tui-list-cell padding="0" >
					<view class="tui-list-cell">
						<view>性别</view>
						<view class="tui-content">女</view>
					</view>
				</tui-list-cell>
				<tui-list-cell padding="0" >
					<view class="tui-list-cell">
						<view>民族</view>
						<view class="tui-content">汉</view>
					</view>
				</tui-list-cell>
				<tui-list-cell padding="0" >
					<view class="tui-list-cell">
						<view>生日</view>
						<view class="tui-content">1986/09/27</view>
					</view>
				</tui-list-cell>
				<tui-list-cell padding="0" :arrow="true" @click="nickname">
					<view class="tui-list-cell">
						<view>实名认证</view>
						<view class="tui-content">未认证</view>
					</view>
				</tui-list-cell>
				<tui-list-cell padding="0" :arrow="true" @click="telephone">
					<view class="tui-list-cell">
						<view>手机号</view>
						<view class="tui-content">15600458086</view>
					</view>
				</tui-list-cell>
				<tui-list-cell padding="0" :arrow="true" @click="password">
					<view class="tui-list-cell">
						<view>密码</view>
						<view class="tui-content">未设置/已设置</view>
					</view>
				</tui-list-cell>
				<tui-list-cell padding="0" :arrow="true" @click="address">
					<view class="tui-list-cell">
						<view>地址</view>
						<view class="tui-content">江苏省无锡市XXX县XXX...</view>
					</view>
				</tui-list-cell>
			</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		methods: {
			changeAvatar(){
				uni.chooseImage({
					count: 1,
					sizeType: ['original', 'compressed'],
					sourceType: ['album', 'camera'],
					success: res => {
						const tempFilePaths = res.tempFilePaths[0];
						this.tui.href('/pages/user/cropper-default?src=' + tempFilePaths);
					}
				});
			},
			nickname(){
				this.tui.href("./nickname/index")
			},
			telephone(){
				this.tui.href("./telephone/index")
			},
			password(){
				this.tui.href("./password/index")
			},
			address(){
				this.tui.href("./address/index")
			}
		}
	}
</script>

<style lang="scss" scoped>
.tui-userinfo-box {
		margin: 20rpx 0;
		color: #333;
		.head-pic{
			 margin-bottom: 40rpx;
			}
	}

	.tui-list-cell {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 24rpx 60rpx 24rpx 30rpx;
		box-sizing: border-box;
		font-size: 30rpx;
	}

	.tui-pr30 {
		padding-right: 30rpx;
	}

	.tui-avatar {
		width: 100rpx;
		height: 100rpx;
		display: block;
	}

	.tui-content {
		font-size: 26rpx;
		color: #666;
	}
</style>
