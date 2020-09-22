
<template>
    <!-- 入库详情 -->
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
                    <view class="tui-list-cell_name">商品名</view>
                    <view class="tui-right"> {{'商品名1'}} </view>
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
                    <view class="tui-list-cell_name">入库批次</view>
                    <view class="tui-right"> {{'入库批次'}} </view>
                </view>
            </tui-list-cell>  
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">溯源编码</view>
                    <view class="tui-right"> 溯源编码1  </view>
                </view>
            </tui-list-cell>  
            <tui-list-cell class="margin-top">
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">数量</view>
                    <view class="tui-right"> {{'100打(100只/打)'}} </view>
                </view>
            </tui-list-cell>  
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">入库总价</view>
                    <view class="tui-right"> 19 </view>
                </view>
            </tui-list-cell>
            <tui-list-cell>
                <view class="tui-item-box margin-top">
                    <view class="tui-list-cell_name">供货人</view>
                    <view class="tui-right"> 供货人1 </view>
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
                   <view class="tui-list-cell_name">生产厂家</view>
                   <view class="tui-right"> 生产厂家1 </view>
               </view>
            </tui-list-cell>
            <tui-list-cell>
               <view class="tui-item-box">
                   <view class="tui-list-cell_name">生产批次</view>
                   <view class="tui-right"> 20200909121212 </view>
               </view>
            </tui-list-cell>
            <tui-list-cell>
              <view class="tui-item-box">
                  <view class="tui-list-cell_name">有效期</view>
                  <view class="tui-right"> 2020/09/09 </view>
              </view>
            </tui-list-cell>
           <tui-list-cell class="margin-top">
             <view class="tui-item-box">
                 <view class="tui-list-cell_name">备注</view>
                 <view class="tui-right"> 备注内容 </view>
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
