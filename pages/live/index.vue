<template>
	<view class="video-list-box">
		<apphead />
        <!-- 视频列表 -->
        <view class="grid text-center col-2">
            <view class="padding-sm video-item" v-for="item in 8" :key="item">
                <view class="bg-black" @click="linkTo">
                    <text class="cuIcon-videofill text-white" />
                    <view>视频名称</view>
                </view>
            </view>
        </view>
        <view class="padding margin" />
        <!-- 视频播放 -->
        <view class="cu-modal" :class="showVideo?'show':''">
            <view class="cu-dialog" >
                <view class="video-play-box bg-gradual-green">
                    <view class="cu-bar justify-end text-white">
                        <view class="action" @tap="showVideo=false">
                            <text class="cuIcon-close " />
                        </view>
                    </view>
                </view>
            </view>
        </view>
	</view>
</template>

<script>
	import apphead from '@/pages/common/apphead'
	export default {
		components: { apphead },
		data() {
			return {
                showVideo:''
			}
		},
		onReady() {

		},
		onNavigationBarButtonTap(btn) {
		    let that = this;
		    uni.scanCode({
		        success: function (res) {
		            // console.info(res)
		            if(res.result){
		                that.scanCodeUrl = res.result;
		                uni.showToast({
		                    title:'扫码信息为：' + res.result,
		                    icon:false
		                })
		            }
		        }
		    }); 
		},
		methods: {
            linkTo(){
                uni.navigateTo({
                    url:'player'
                })
            }
		}
	}
</script>
<style lang="scss" scoped>
    .video-list-box{
        .video-item{
            margin:0 0 20rpx ;
            .bg-black{
                height:200rpx;
                padding-top:20rpx;
                [class*="cuIcon-"] {
                    font-size: 56rpx;
                }
            }
        }
        .video-item:nth-child(2n-1){
           padding:0 10rpx 0 0;
        }
        .video-item:nth-child(2n){
            padding:0 0 0 10rpx;
        }
    }
    .video-play-box{
        height:460rpx;
    }
</style>
