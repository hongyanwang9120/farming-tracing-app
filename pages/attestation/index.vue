<template>
	<view>		
	<apphead></apphead>
		<view class="iconfont icon-shenfenzhengrenxiangmian idcard" ></view>
		<view class="tui-btn-box"><tui-button shape="circle" type="blue" @tap="detail">您还没有实名认证，点击进入认证</tui-button></view>
	
	</view>
</template>

<script>
	import apphead from '@/pages/common/apphead'
	export default {
		components:{apphead},
		data() {
			return {
				}
		},
		methods: {
			detail() {
				uni.navigateTo({
					url: './updata'
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: white;
	}
	.idcard{
		display: flex;
		justify-content: center;
		font-size: 400rpx;
		color:#0084ff;
		margin-top:-100rpx;
	}
	.tui-btn-box{
		width:80%;
margin:0 auto;
	}
</style>
