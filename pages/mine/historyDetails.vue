
<template>
    <!-- 农事记录 -->
    <view class="farming-records-box">
        <tui-list-view>
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">基地名称</view>
                    <view class="tui-right"> {{'基地名称1'}} </view>
                </view>
            </tui-list-cell>
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">地块名称</view>
                    <view class="tui-right"> {{'地块名称1'}} </view>
                </view>
            </tui-list-cell>
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">作业内容</view>
                    <view class="tui-right"> {{ '作业内容1' }} </view>
                </view>
            </tui-list-cell> 
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">产出物</view>
                    <view class="tui-right"> {{'产出物'}} </view>
                </view>
            </tui-list-cell>  
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">产量</view>
                    <view class="tui-right"> 10公斤  </view>
                </view>
            </tui-list-cell>  
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">投入品</view>
                    <!-- 一选择的投入品 -->
                    <view class="tui-right">
                        <view class="" >
                            投入品1
                        </view>
                        <view class="">
                            投入品 2
                        </view>
                        <view class="">
                            产出物 1
                        </view>
                    </view>
                </view>
            </tui-list-cell>  
            <tui-list-cell class="margin-top">
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">作业人</view>
                    <view class="tui-right"> {{'作业人1'}} </view>
                </view>
            </tui-list-cell>  
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">备注</view>
                    <view class="tui-right"> 备注信息 </view>
                </view>
            </tui-list-cell>
            <tui-list-cell class="margin-top">
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">上传图片</view>
                </view>
                <view class="tui-item-box margin-top-sm padding-tb-sm" >
                    <img src="../../static/images/basic/badge.png" />
                    <img src="../../static/images/basic/badge.png" />
                    <img src="../../static/images/basic/badge.png" />
                 </view>
            </tui-list-cell> 
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name"> 
                        <tui-tag shape="circle" type="btn-gray" >
                            <tui-icon name="position" :size="14" />
                            <text class="text-sm">当前获取到的地址</text>
                        </tui-tag>
                    </view>
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
                    url:'historyInfo'
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
        /* padding-left: 20rpx; */
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
