<template>
    <!-- 出入库历史 -->
	<view class="out-in-history-box">
		<uni-nav-bar :fixed="true" :border="false" class="">
		    <view class="tui-header-slt flex justify-between padding-sm">
		        <view class="tui-header-item flex justify-between" >
		            <picker id="type" mode='selector' :range="typeList" style="flex:1"
		                @change="pickerChange" :value="typeIndex" > 
		                <view class="text-black">{{typeList[typeIndex]}}</view>
		            </picker>
		            <tui-icon :name="'arrowdown'" :size="14" color="#444" />
		        </view>
		        <view class="tui-header-item flex justify-between" >
		            <picker id="goods" mode='selector' :range="goodsList" style="flex:1"
		                @change="pickerChange" :value="goodsIndex" > 
		                <view class="text-black">{{goodsList[goodsIndex]}}</view>
		            </picker>
		            <tui-icon :name="'arrowdown'" :size="14" color="#444" />
		        </view>
                <view class="tui-header-item flex justify-between" >
                    <picker id="time" mode='date' style="flex:1"
                        @change="pickerChange" :value="timeValue" > 
                        <view class="text-black">{{timeValue||'请选择日期'}}</view>
                    </picker>
                    <tui-icon :name="'arrowdown'" :size="14" color="#444" />
                </view>
		     </view>
		</uni-nav-bar>
 
        <view class="bg-white table-box flex" >
            <view class="table">
                <view class="th-box flex justify-between">
                    <view> 时间 </view>
                    <view> 入库/<br>出库 </view>
                    <view> 入库批次 </view>
                    <view>  通用名 </view>
                    <view> 商品名 </view>
                    <view> 数量 </view>
                </view>
                <view class="tr-box time-box">
                    <view> 2020 </view>
                </view>
                <view class="tr-box" @click="linkTo('outInHistory_inInfo')">
                    <view> 09/19 </view>
                    <view> 入库 </view>
                    <view> 20200909080808 </view>
                    <view>  稻谷 </view>
                    <view> 鱼乡一号 </view>
                    <view> 1000斤 </view>
                </view>
                <view class="tr-box twoTr" @click="linkTo('outInHistory_outInfo')">
                    <view> 09/19 </view>
                    <view> 出库 </view>
                    <view> 20200909080808 </view>
                    <view>  稻谷 </view>
                    <view> 龙虾一号大米 </view>
                    <view> 
                        <text class="text-orange"> 1000袋 </text> 
                        <view class="text-sm"> (100斤/袋) </view>
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
                typeList:['全部','入库','出库'],
                typeIndex:'0',
				goodsList: ['全部', '物品1', '物品2', '物品3'],
				goodsIndex:'0',
				massifList: ['地块1', '地块2', '地块3'],
				massifIndex:'0',
                timeValue:''
			};
		},
        methods:{
            pickerChange(e){
                console.log(e)
                e.currentTarget.id == 'base'
                    ? this.baseIndex = e.detail.value
                    : e.currentTarget.id == 'goods' 
                        ? this.massifIndex = e.detail.value
                        : this.timeValue = e.detail.value;
                this.pickerVal = e.detail.value;
            },
            linkTo(strUrl){
                uni.navigateTo({ url: strUrl })
            }
        }
	}
</script>

<style lang="scss" scoped>
    .tui-header-slt{
        flex:1;
        background: #D9D9D9;
        padding-bottom: 20rpx;
        .tui-header-item{
            flex:1;
            padding: 4rpx 20rpx;
            background: #fff;
            border:1px solid #0081FF;
            .text-black{
                line-height: 25px;
            }
        }
        .tui-header-item + .tui-header-item{
            margin-left:20rpx;
        }
    }
 
    // 表格
    .table-box{
        width:100%;
        overflow: auto;
        .table{
            .th-box,.tr-box{
                padding:16rpx 11px 10rpx;
                white-space: nowrap;
                >uni-view{
                    flex-shrink: 0;
                }
            }
            .th-box {
                >uni-view:not(:nth-child(2)){
                    line-height: 90rpx;
                }
            }
            .tr-box.time-box{
               background-color: #d9d9d9;
            }
            .tr-box{
                border-top:1rpx solid #d9d9d9;
                display: flex;
                justify-content: space-between;
            }
            
            .tr-box.twoTr{
                >uni-view:not(:last-child){
                    line-height: 90rpx;
                }
                
            }
            
            
            
            .th-box >:first-child,.tr-box >:first-child{
                width: 88rpx;
            }
            .th-box >:nth-child(2),.tr-box >:nth-child(2){
                width: 88rpx;
            }
            .th-box :nth-child(3),.tr-box :nth-child(3){
                width: 230rpx;
            }
            .th-box :nth-child(4),.tr-box :nth-child(4){
                width: 108rpx;
            }
            .th-box :nth-child(5),.tr-box :nth-child(5){
                width: 200rpx;
            }
            .th-box :nth-child(6),.tr-box :nth-child(6){
                width: 150rpx;
            }
        }
    }
</style>
