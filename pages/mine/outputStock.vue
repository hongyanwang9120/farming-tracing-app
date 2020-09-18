<template>
    <!-- 产出物出库 -->
	<view class="output-stock-box">
		<tui-list-view>
		    <tui-list-cell>
		    	<view class="tui-item-box">
		    		<view class="tui-list-cell_name">通用名</view>
		    		<view class="tui-right">
		                {{'稻米'}}
		            </view>
		    	</view>
		    </tui-list-cell>
			<tui-list-cell>
				<view class="tui-item-box">
					<view class="tui-list-cell_name">入库批次</view>
					<view class="tui-right">
			            {{'20200909080812003'}}
			        </view>
				</view>
			</tui-list-cell>
            <tui-list-cell>
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">库存量</view>
            		<view class="tui-right">
                        {{'1000斤'}}
                    </view>
            	</view>
            </tui-list-cell>
            <tui-list-cell class="margin-top">
            	<view class="tui-item-box" @click="$refs.pickerRef._show()">
            		<view class="tui-list-cell_name">商品名称</view>
            		<view class="tui-right">
                        {{goodsNameList[goodsIndex] || '请选择商品名称'}}
                    </view>
            	</view>
            </tui-list-cell>
            <tui-list-cell>
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">商品规格</view>
            		<view class="tui-right">
                       <text v-if="goodsIndex !== ''">{{goodsList[goodsIndex].unit}}</text>
                    </view>
            	</view>
            </tui-list-cell>
            <tui-list-cell class="margin-top">
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">出库数量</view>
            		<view class="tui-right flex" v-if="goodsIndex !== ''">
                        <input type="text" class="text-right text-sm" value="" 
                            placeholder="请输入" style="margin-top:8rpx" />
                        <text class="padding-left-sm">
                            {{goodsList[goodsIndex].dw}}
                        </text>
                    </view>
            	</view>
            </tui-list-cell>
            <tui-list-cell>
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">出库事由</view>
            		<view class="tui-right flex" style="flex:1">
                        <input type="text" class="text-right text-sm padding-left-sm" value=""
                            placeholder="请输入" style="flex:1;" />
                    </view>
            	</view>
            </tui-list-cell>
        </tui-list-view>
        <!-- 底部按钮 -->
        <tui-bottom-navigation :itemList="bottomBtnList" @click="menuClick" />
        <!-- 底部选择器 -->
        <picker mode='selector' :range="goodsNameList" @change="pickerChange"  
            :value="goodsIndex" ref="pickerRef"/>
	</view>
</template>

<script>
	export default {
		data() {
			return {
                goodsList: [
                    {
                        name:'商品1',
                        unit:'10斤/袋',
                        dw:'袋'
                    },
                    {
                        name:'商品2',
                        unit:'2斤/袋',
                        dw:'袋'
                    },
                    {
                        name:'商品3',
                        unit:'8斤/袋',
                        dw:'袋'
                    }
                ],
				goodsNameList: ['商品1', '商品2', '商品3', '商品4'],
				goodsIndex:'',
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
			};
		},
        methods:{
            // 商品选择事件
            pickerChange(e){
                this.goodsIndex = e.detail.value;
            },
            // 底部按钮点击事件
            menuClick(e){
                if(e.index == 0){
                    // 取消
                    uni.navigateTo({
                        url:'warehousing'
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
    	/* padding-left: 20rpx; */
    	display: flex;
    	align-items: center;
    	justify-content: center;
    }
    .tui-right {
    	margin-left: auto;
    	margin-right: 34rpx;
    	font-size: 26rpx;
    }
    ::v-deep .tui-navigation-item:last-child{
        background: #0081FF !important;
        color:#fff !important;
    }
</style>
