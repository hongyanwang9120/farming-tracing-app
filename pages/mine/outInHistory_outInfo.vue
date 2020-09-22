
<template>
    <!-- 出库详情 -->
    <view class="farming-records-box">
        <tui-list-view>
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">通用名</view>
                    <view class="tui-right"> {{'通用名1'}} </view>
                </view>
            </tui-list-cell>
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">入库批次</view>
                    <view class="tui-right"> {{'20200909181818'}} </view>
                </view>
            </tui-list-cell> 
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">库存类型</view>
                    <view class="tui-right"> {{ '库存类型1' }} </view>
                </view>
            </tui-list-cell> 
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">商品名</view>
                    <view class="tui-right"> {{'商品名1'}} </view>
                </view>
            </tui-list-cell>
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">出库数量</view>
                    <view class="tui-right"> 100  </view>
                </view>
            </tui-list-cell>
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">出库总价</view>
                    <view class="tui-right"> 1900元 </view>
                </view>
            </tui-list-cell> 
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">溯源编码</view>
                    <!-- 一选择的投入品 -->
                    <view class="tui-right">
                        <view class="" >
                           AB11011,AB11012
                        </view>
                        <view class="">
                           AB11011,AB11012
                        </view>
                        <view class="">
                            AB11011,AB11012
                        </view>
                    </view>
                </view>
            </tui-list-cell>  
            
            <tui-list-cell class="margin-top">
                <view class="tui-item-box ">
                    <view class="tui-list-cell_name">购买客户</view>
                    <view class="tui-right"> 购买客户1 </view>
                </view>
            </tui-list-cell>
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">客户地址</view>
                    <view class="tui-right"> 北京市海淀区XXXXX </view>
                </view>
            </tui-list-cell>
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">联系人</view>
                    <view class="tui-right"> 王小五 </view>
                </view>
            </tui-list-cell>
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">联系方式</view>
                    <view class="tui-right"> 188101909090 </view>
                </view>
            </tui-list-cell>
           <tui-list-cell class="margin-top">
             <view class="tui-item-box">
                 <view class="tui-list-cell_name">出库事由</view>
                 <view class="tui-right"> 销售 </view>
             </view>
           </tui-list-cell>
           
            <!-- 占位符 -->
            <view style="height: 130rpx;" />
        </tui-list-view>
        <!-- 底部提交按钮 -->
        <tui-bottom-navigation :itemList="bottomBtnList" @click="linkTo" />
    </view>
</template>

<script>
    export default {
        data() {
            return {
                bottomBtnList: [{ //底部按钮
                    text: '返回',
                    color: '#666',
                    fontSize:'30rpx'
                }]
            }
        },
        
        methods: {
            // 提交按钮 确认
            linkTo(){
                uni.navigateTo({
                    url:'outInHistory'
                })
            }
        }
    }
</script>

<style lang="scss" scoped>
    .tui-item-box {
        width: 100%;
        display: flex;
        align-items: center;
    }
    .tui-list-cell_name {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .tui-right {
        margin-left: auto;
        font-size: 26rpx;
    }
    ::v-deep .tui-navigation-item, ::v-deep .tui-bottom-navigation{
        background: #0081FF !important;
        .tui-item-inner{
            .tui-navigation-text{
                color:#fff !important;
            }
        }
    }
</style>
