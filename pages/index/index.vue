<template>
    <view>
        <!-- 头部 搜索 -->
        <uni-nav-bar :fixed="true" color="#333333" :background-color="themeBgColor" :border="false">
            <view class="input-view nav-btn">
                <text class="text-white text-xxl" @click="showModal=true"> ☰</text>
            </view>
            <view class="input-view top-txt-box text-white text-lg text-bold">
                农产品区块链溯源平台
            </view>
            <view class="input-view nav-btn">
                <text class="cuIcon-scan text-white" />
            </view>
        </uni-nav-bar>
        <!-- 公告 -->
        <uni-nav-bar :fixed="true" :border="false" class="notice-box">
            <view class="notice-box-title">
                <text class="cuIcon-notificationfill text-xl">
                    <text style="padding-left:10rpx;">公告</text>
                </text>
            </view>
        </uni-nav-bar>
        <!-- 功能格 -->
        <view class="bg-white padding margin-top" :style="{height: winHeight + 'rpx'}">
            <view class="grid text-center col-4">
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-punch text-brown"></text>
                    </view>
                    <text class="text-sm">我的任务</text>
                </view>
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-global text-brown"></text>
                    </view>
                    <text class="text-sm">基地查看</text>
                </view>
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-cascades text-brown"></text>
                    </view>
                    <text class="text-sm">库存管理</text>
                </view>
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-copy text-brown"></text>
                    </view>
                    <text class="text-sm">农事记录</text>
                </view>
            </view>
            <view class="grid text-center col-4">
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-record text-brown"></text>
                    </view>
                    <text class="text-sm">销售记录</text>
                </view>
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-cart text-brown"></text>
                    </view>
                    <text class="text-sm">我的直播</text>
                </view>
                <view class="padding-sm">
                    <view>
                        <text class="cuIcon-circle text-brown"></text>
                    </view>
                    <text class="text-sm">设备查看</text>
                </view>
                <view class="padding-sm" @click="linkTo('企业排行')">
                    <view>
                        <text class="cuIcon-rank text-brown"></text>
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
    export default {
        components: { uniNavBar, leftMenu },
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
        font-size: 40rpx;
    }
    // 头部导航
    .input-view {
        background: none;
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
    // 公告
    .notice-box {
        [class*="cuIcon-"] {
            padding-left: 30rpx;
            font-size: 26rpx;
        }
    }
    
    
</style>
