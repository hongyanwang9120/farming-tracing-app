<template>
    <!-- 视频列表 + 播放 -->
	<view class="video-list-box">
        <!-- 视频列表 -->
		<view class="grid text-center col-2">
		    <view class="padding-sm video-item" v-for="item in 4" :key="item">
		        <view class="bg-black" @click="showVideo=true">
		            <text class="cuIcon-videofill text-white" />
                    <view>视频名称</view>
		        </view>
		    </view>
		</view>
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
	export default {
		data() {
			return {
				showVideo:false
			};
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
