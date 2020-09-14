<template>
    <view>
        
		<apphead></apphead>
        
        <view class="bg-white padding margin-top" :style="{height: winHeight + 'rpx'}">
            <view class="grid text-center col-4">
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-punch text-yellow"></text>
                    </view>
                    <text class="text-sm">我的任务</text>
                </view>
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-global text-yellow"></text>
                    </view>
                    <text class="text-sm">基地查看</text>
                </view>
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-cascades text-yellow"></text>
                    </view>
                    <text class="text-sm">库存管理</text>
                </view>
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-copy text-yellow"></text>
                    </view>
                    <text class="text-sm">农事记录</text>
                </view>
            </view>
            <view class="grid text-center col-4">
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-record text-yellow"></text>
                    </view>
                    <text class="text-sm">销售记录</text>
                </view>
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-cart text-yellow"></text>
                    </view>
                    <text class="text-sm">我的直播</text>
                </view>
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-circle text-yellow"></text>
                    </view>
                    <text class="text-sm">设备查看</text>
                </view>
                <view class="padding-sm" @click="linkTo('企业排行')">
                    <view>
                        <text class="cuIcon-rank text-yellow"></text>
                    </view>
                    <text class="text-sm">企业排行</text>
                </view>
            </view>
        </view>
        <left-menu :showModel.sync="showModal" 
            :infoObj="{userName:'王小五',company:'北京技术股份有限公司 '}" />
    </view>
</template>

<script>
    import { mapGetters } from 'vuex'
    import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar'
    import leftMenu from './components/leftMenu'
	import apphead from '@/pages/common/apphead'
    export default {
        components: { uniNavBar, leftMenu, apphead},
        onReady() {
           
        },
        onLoad() {
             
        },
        onShow(e) {
             
        },
        data() {
            return {
                showModal:false,
                winHeight: "", // 窗口高度
            }
        },
        computed: {
            ...mapGetters(['themeBgColor', 'darkMode'])
        },
        methods: {
            linkTo(){
                uni.navigateTo({
                    url: '../../pages/enterprise/enterprise'
                });
            }

        }
    }
</script>

<style lang="scss" scoped>
    [class*="cuIcon-"] {
        font-size: 80rpx;
    }
    // 头部导航
    .input-view {
        background: none;
        [class*="cuIcon-"] {
            font-size: 46rpx;
        }
    }
    .nav-btn {
        width: auto;
        padding: 0 10px;  
    }
    .top-txt-box {
        justify-content: center;
        [class*="cuIcon-"] {
            font-size: 46rpx;
        }
    }
    // 用户头像
    .cu-list-box {
        background: #0081FF;
        color:#fff;
        border-top:1rpx solid #40719e;
        .round{
            width:50px;
        }
        .qy-name-box{
            display: flex;
            flex-direction: column;
            justify-content: center; 
        }
    }
    // 公告
    .notice-box {
        [class*="cuIcon-"] {
            padding-left: 30rpx;
            font-size: 26rpx;
        }
    }
    
    
</style>
