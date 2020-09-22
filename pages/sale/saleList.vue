<template>
    <!-- 销售一览表 -->
	<view class="sale-list-box">
        <view class="flex search-box bg-white padding">
            <input type="text" value="" placeholder="请输入搜索内容" />
            <tui-button type="blue"  width="98rpx" height="66rpx" :size="28" 
                @tap="searchHandler">搜索</tui-button>
        </view>
        <view class="bg-white margin-top-sm padding" v-for="(item,key) in 6" :key="key">
            <view class="padding-sm baseInfo-box bg-white">
                <view class="flex justify-between">
                    <view class="">
                       <text class="label-uni">销售单号</text>
                       <text class="text-sm">：xs123456789</text>
                    </view>
                    <view class="">
                        <text class="label-uni">库存批次</text>
                        <text class="text-sm">：202009091234</text>
                    </view>
                </view>
                <view class="flex justify-between">
                    <text class="">贵州七星椒</text>
                    <text class="">50袋</text>
                    <text class="text-price" style="min-width: 158rpx;">7638.99</text>
                </view>
                <view class="flex justify-between">
                    <text class="text-sm">东方红魔农产品贸易有限公司</text>
                    <view class="flex text-sm">
                        <text class="label-uni">联系电话</text>
                        <text>：12345678900</text>
                    </view>
                </view>
            </view>
        </view> 
        <view class="margin-top padding" />
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
        onNavigationBarButtonTap(btn) {
            uni.navigateTo({
                url:'saleInfoAdd'
            })
        },
        methods:{
            searchHandler(){
                this.tui.toast('可以搜索了');
            }
        }
	}
</script>

<style lang="scss">
    .search-box{
        input{
            flex:1;
            height:66rpx;
            margin-right:20rpx;
            padding:0 20rpx;
            border: 1rpx solid #ddd;
            font-size: 12px;
        }
    }
    .baseInfo-box{
        padding-bottom:26rpx;
        border:1rpx solid #D8D8D8;
        .justify-between{
            >uni-view:first-child{
                flex:1;
            }
            >uni-view:last-child{
                width: 310rpx;
            }
        }
        .label-uni{
            display: inline-block;
            width: 126rpx;
            text-align-last: justify;
        }
        
    }  
 
</style>
