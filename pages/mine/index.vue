<template>
    <!-- 我的功能 -->
    <view class="mine-box">
		<apphead></apphead>
        <view class="bg-white padding margin-top" >
            <view class="grid text-center col-2">              
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-cascades text-yellow"></text>
                    </view>
                    <text class="text-sm">库存管理</text>
                </view>
                <view class="padding-sm">
                    <view @click="linkTo('农事记录')">
                        <text class="cuIcon-copy text-yellow"></text>
                    </view>
                    <text class="text-sm" @click="linkTo('农事记录')">农事记录</text>
                </view>
            </view>
            <view class="grid text-center col-2">
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-record text-yellow"></text>
                    </view>
                    <text class="text-sm">销售记录</text>
                </view>
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-circle text-yellow"></text>
                    </view>
                    <text class="text-sm">设备查看</text>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import { mapGetters } from 'vuex'
	import apphead from '@/pages/common/apphead'
    export default {
        components: { apphead },
        onReady() {

        },
        onLoad() {
             
        },
        onShow(e) {
             
        },
        data() {
            return {

            }
        },
        computed: {
            ...mapGetters(['themeBgColor', 'darkMode'])
        },
        methods: {
            linkTo(type){
                let strUrl = '';
                if(type == '农事记录'){
                    strUrl = 'farmingRecords'
                }else if(type == '企业排行'){
                    strUrl = '../../pages/enterprise/enterprise'
                }
                uni.navigateTo({ url: strUrl });
            }
        }
    }
</script>

<style lang="scss" scoped>
    [class*="cuIcon-"] {
        font-size: 90rpx;
    }
 
    
    
</style>
