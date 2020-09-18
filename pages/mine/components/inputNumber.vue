<template>
    <!-- 投入品 数量选择 -->
	<view v-if="showModal" class="bottom-selecter-box flex flex-direction justify-between">
	    <view class="seat-box" @click="cancelHandle" />
	    <view class="selecter-box bg-white text-center flex flex-direction justify-between">
	        <view class="text-xl text-bold margin-top">
                {{goodsObj.name}}
	        </view>
	        <view class="text-sm margin-top-sm">
	            {{goodsObj.unit}}
	        </view>
	        <view class="padding ">
	            <tui-numberbox :min="1" :max="10000"
	                :height="60" :width="200" :iconSize="28" 
	                backgroundColor="rgba(0,0,0,.4)" color="#fff"
	                :value="value" @change="changeHandle" />
	        </view>
            <view class="flex justify-center" style="line-height: 68rpx;">
                <text>出库事由</text>     
                <view class="padding-left-sm">
                    <input type="text" value="" />
                </view>
            </view>
	        <view class="flex margin-top">
	            <tui-button type="gray" height="70rpx" :size="24" 
	                @click="cancelHandle">取消</tui-button>
                <tui-button type="blue" height="70rpx" :size="24"
                    @click="outHandle">确定</tui-button>
	        </view>
	    </view>
	</view>
</template>

<script>
	export default {
        props:['showModal','goodsObj'],
		data() {
			return {
				value:1
			};
		},
        methods:{
            changeHandle(e) {
                this.value = e.value
            },
            // 确定出库
            outHandle(){
                this.tui.toast("出库成功~")
            },
            // 关闭
            cancelHandle(){
                this.$emit("update:showModal",false);
            }
        }
	}
</script>

<style lang="scss" scoped>
    .bottom-selecter-box{
        position: fixed;
        top:0;
        bottom: 0;
        left:0;
        right:0;
        background: rgba(0,0,0,.4);
        z-index: 9999;
        // 占位符
        .seat-box{
            flex:1;
        }
        .selecter-box{
            min-height: 400rpx;
        }
    }
    input{
        height: 70rpx;
        border-radius: 8rpx;
        border:1rpx solid #0081FF;
    }
</style>
