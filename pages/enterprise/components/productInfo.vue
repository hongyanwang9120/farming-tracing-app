<template>
    <!-- 产品介绍 -->
	<view class="product-info-box flex">
		<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25004.jpg" />
        <view class="product-info padding-left">
            <view class="flex">
                <view class="cu-avatar lg round" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view> 
                <text style="line-height: 84rpx; padding-left:20rpx;">产品名称</text>
            </view>
            <view class="flex">
               <text class="title-txt">生产许可证</text>
               <text class="title-cnt text-gray">SXY1234567890</text>
            </view>
            <view class="">
               <text class="title-txt">产品描述</text>
               <view class="text-gray">产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述产品描述</view>
            </view>
        </view>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
   .product-info-box{
        padding-top:20rpx;
        uni-image{
            width: 200rpx;
            height:200rpx;
        }
        .product-info{
            flex:1;
            .title-txt{
                padding:20rpx 20rpx 0 0;
            }
            .title-cnt{
                padding:20rpx 0rpx 0 0;
            }
        }
     }
    
</style>
