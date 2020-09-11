<template>
    <!-- 环境监控 -->
	<view class="environment-control-box">
		<view class="title-box">
		    <icon type="" class="cuIcon-circle text-green" />
            <text class="text-xl padding-left-sm text-bold"> {{title}}</text>
		</view>
        <view class="flex padding-left-sm padding-tb-sm">
            <view class="basis-xs"> 
                <icon type="" class="cuIcon-roundcheckfill text-green" />
                <text class="padding-left-sm"> 在线 </text>
            </view> 
            <view class="basis-lg text-center"> 
                <text>采集时间</text>
                <text class="padding-left-sm">2020/09/10 11:18:00</text>
            </view>
            <view class="basis-xs text-right"> 
                <icon type="" class="cuIcon-refresh" />
            </view>
        </view>
        <view class="grid col-2 padding-tb-sm" style="border-top:1rpx solid #e8e8e8;">
            <view class="text-center">
                <text v-if="dataList&&dataList.length>0">{{dataList[0].title}}</text>
            </view>
            <view class="text-center" >
                <text v-if="dataList&&dataList.length>1">{{dataList[1].title}}</text>
            </view>
            <view class="text-center margin-top" >
                <speedArc :dataList="dataList[0]" v-if="dataList&&dataList.length>0"/>
            </view>
            <view class="text-center margin-top" >
                <speedArc :dataList="dataList[1]" v-if="dataList&&dataList.length>1"/>
            </view>
        </view>
	</view>
</template>

<script>
    import speedArc from './speedArc'
	export default {
        components:{ speedArc },
        props:['title','dataList'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
    
    .environment-control-box{
        .title-box [class*="cuIcon-"] {
                font-size: 40rpx;
                font-weight: bold;
            }
        
    }
    
</style>
