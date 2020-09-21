<template>
	<view class="warehousing-box">
		<tui-list-view>
		    <tui-list-cell :arrow="true">
		    	<view class="tui-item-box">
		    		<view class="tui-list-cell_name">库存类型</view>
		    		<view class="tui-right">
                        <picker id="stock" mode='selector' :range="stockList"
                            @change="pickerChange" :value="stockIndex" > 
                            {{stockList[stockIndex] || '请选择库存类型'}}
                        </picker>
		            </view>
		    	</view>
		    </tui-list-cell>
            <tui-list-cell :arrow="true">
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">商品名称</view>
            		<view class="tui-right">
                        <picker id="goods" mode='selector' :range="stockList"
                            @change="pickerChange" :value="stockIndex" > 
                            {{goodsList[goodsIndex] || '请选择商品名称'}}
                        </picker>
                    </view>
            	</view>
            </tui-list-cell>
            <tui-list-cell>
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">溯源编码</view>
            		<view class="tui-right" style="flex:1">
            		    <input type="text" placeholder="请输入"> 
            		 </view>
            	</view>
            </tui-list-cell>
            <tui-list-cell>
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">商品规格</view>
            		<view class="tui-right">
            		    <picker id="unit" mode='selector' :range="unitList"
            		        @change="pickerChange" :value="unitIndex" > 
            		        {{unitList[unitIndex] || '请选择商品规格'}}
            		    </picker>
            		</view>
            	</view>
            </tui-list-cell>
            <tui-list-cell>
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">数量</view>
            		<view class="tui-right flex justify-end" style="flex:1">
            		    <input type="text" placeholder="请输入"> 
                        <text class="padding-left">袋</text> 
            		 </view>
            	</view>
            </tui-list-cell>
            <tui-list-cell>
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">入库总价</view>
            		<view class="tui-right flex justify-end" style="flex:1">
            		    <input type="text" placeholder="请输入"> 
                        <text class="padding-left">元</text> 
            		 </view>
            	</view>
            </tui-list-cell>
            <tui-list-cell class="margin-top">
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">供货人</view>
            		<view class="tui-right" style="flex:1">
            		    <input type="text" placeholder="请输入"> 
            		 </view>
            	</view>
            </tui-list-cell>
            <tui-list-cell>
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">联系方式</view>
            		<view class="tui-right" style="flex:1">
            		    <input type="text" placeholder="请输入"> 
            		 </view>
            	</view>
            </tui-list-cell>
            <tui-list-cell class="margin-top">
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">生产厂家</view>
            		<view class="tui-right" style="flex:1">
            		    <input type="text" placeholder="请输入"> 
            		 </view>
            	</view>
            </tui-list-cell>
            <tui-list-cell>
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">生产批号</view>
            		<view class="tui-right" style="flex:1">
            		    <input type="text" placeholder="请输入"> 
            		 </view>
            	</view>
            </tui-list-cell>
            <tui-list-cell>
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">有效期</view>
                    <view class="tui-right" style="flex:1">
                        <picker mode="date" @change="pickerDateChange">
                            <view class="text-right">{{dataVal || "请选择"}}</view>
                        </picker>
                    </view>
            	</view>
            </tui-list-cell>
            <tui-list-cell class="margin-top">
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">备注</view>
            		<view class="tui-right" style="flex:1">
            		    <input type="text" placeholder="请输入"> 
            		 </view>
            	</view>
            </tui-list-cell>
            <view class="margin-top" />
        </tui-list-view>
        <!-- 底部按钮 -->
        <tui-bottom-navigation :itemList="bottomBtnList" @click="menuClick" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
                stockList: ['库存1', '库存2', '库存3', '库存4'],
                stockIndex:'',
                goodsList: ['商品1', '商品2', '商品3', '商品4'],
                goodsIndex:'',
                dataVal:'',
                unitList:['规格1', '规格2', '规格3', '规格4'],
                unitIndex:'',
				bottomBtnList: [ //底部按钮
					{
						text: '取消',
						color: '#666',
                        fontSize:'30rpx'

					},
					{
						text: '保存',
						color: '#fff'
					}
				], 
			}
		},
		mounted() {
			 
		},
		methods: {
            // picker 选项点击事件
            pickerChange(e){
                switch(e.currentTarget.id) {
                    case 'stock':
                        this.stockIndex = e.detail.value;
                        break;
                    case 'goods':
                        this.goodsIndex = e.detail.value;
                        break;
                    case 'unit':
                        this.unitIndex = e.detail.value;
                        break;
                    default:
                        undefined;
                }  
            },
            // 日期选择事件
            pickerDateChange(e){
                this.dataVal = e.detail.value;
            },
            // 底部按钮点击事件
			menuClick(e){
                if(e.index == 0){
                    //取消
                    uni.navigateTo({
                        url:"farmingRecords"
                    })
                }else{
                    this.tui.toast("保存成功~")
                }
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
    .tui-ml-auto {
    	margin-left: auto;
    }
    
    .tui-right {
    	margin-left: auto;
    	margin-right: 34rpx;
    	font-size: 26rpx;
    }
    input{
        margin-top:4rpx;
        font-size:14px;
        text-align:right;
    }
	::v-deep .tui-navigation-item:last-child{
        background: #0081FF !important;
        color:#fff !important;
    }
</style>
