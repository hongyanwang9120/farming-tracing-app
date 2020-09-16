<template>
    <!-- 农事记录详情 -->
	<view class="cu-modal details-info-box" :class="showModalOver?'show':''">
		<view class="cu-dialog" >
			<view class="video-play-box">
				<!-- 关闭按钮 -->
	            <view class="cu-bar bg-white justify-end">
	            	<view class="content text-bold">记录详情</view>
	            	<view class="action" @tap="showModalOver=false">
	            		<text class="cuIcon-close text-red" />
	            	</view>
	            </view>
	            <view class="info-content-box">
	            	<view class="cu-form-group">
	            		<view class="title text-bold">作业时间</view>
	            		<view class="title">2020/09/10 11:18:00</view>
	            	</view>
	                <view class="cu-form-group">
	                	<view class="title text-bold">作业内容</view>
	                	<view class="title">播种</view>
	                </view>
	                <view class="cu-form-group"  >
	                	<view class="title text-bold">投入品</view>
	                	<view style="padding-top:10rpx;">
	                        <view class="text-right">种子3袋</view>
	                        <view class="text-right">xx种子6包</view>
	                        <view class="text-right">时间选择</view>
	                    </view>
	                </view>
	                <view class="cu-form-group">
	                	<view class="title text-bold">作业人</view>
	                	<view class="title">王小五</view>
	                </view>
	                <view class="img-box">
	                	<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25004.jpg" />
	                	<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25004.jpg" />
	                </view>
	            </view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
        props:['showModal'],
		data() {
			return {
				showModalOver:false
			};
		},
        watch:{
            showModal:{
                handler(val){
                   this.showModalOver = val; 
                },
                immediate:true
            },
            showModalOver(val){
                this.$emit('update:showModal', val);
            }
        }
	}
</script>

<style lang="scss" scoped>
    .details-info-box{
        .cu-dialog{
            max-height: 80%;
            overflow: auto;
        }
        // 关闭按钮
        .cu-bar{
            border-bottom:1rpx solid #ddd;
            position: sticky;
            top:0;
            z-index: 10;
        }
        // 内容
        .cu-form-group{
            min-height:80rpx;
            .title {
                padding-right: 0;
                line-height: 70rpx;
            }
        }
        // 图片
        .img-box{
           padding:20rpx 30rpx 50rpx;
           uni-image{
               height:400rpx;
           }
        }
    }
</style>
