<template>
    <!-- 企业排行榜 -->
    <view class="cu-list menu text-left bg-white">
		<apphead></apphead>
        <view class="cu-item arrow" v-for="item in 20" :key="item">
            <view class="content flex" @click="linkTo">
                <view class="cu-avatar lg radius margin" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view> 
                <view class="margin-top">
                    <view class="text-bold">湖南省云上茶叶有限公司</view>
                    <text class="text-sm">湖南省益阳市安化县马路镇云台山村五组</text>
                </view>
            </view>
        </view>
    </view> 
</template>

<script>
	import apphead from '@/pages/common/apphead'
	export default {
		components: {

					apphead
				},
        onLoad() {
            // uni.setNavigationBarColor({
            //     frontColor: '#ffffff',
            //     backgroundColor: this.themeBgColor,
            //     animation: {
            //         duration: 400,
            //         timingFunc: 'easeIn'
            //     }
            // })
        },
		data() {
			return {
				
			};
		},
        methods:{
            linkTo(){
                uni.navigateTo({
                    url: 'detailsInfo'
                });
            }
        }
	}
</script>

<style lang="scss" scoped>
    .cu-list{
        padding-bottom:166rpx;
    }
</style>
