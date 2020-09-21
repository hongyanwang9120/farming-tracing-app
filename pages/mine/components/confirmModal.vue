<template>
    <!-- 提交确认框 -->
	<tui-modal :show="showModal" :custom="true">
		<view class="tui-modal-custom">
			<view class="tui-modal-custom-text text-center">
	            <view class="">
	                您现在的操作会执行产出物的自动入库 
	            </view>
	            <view class="">
	                请确认以下信息是否错误
	            </view>
	        </view>
	        <view class="margin-top">
	            <view class="flex">
	                <view class="uni-label"> 作业内容 </view> ：
	                收割
	            </view>
	            <view class="flex">
	                <view class="uni-label"> 产出物 </view> ：
	                收割
	            </view>
	            <view class="flex">
	                <view class="uni-label"> 产量 </view> ：
	                收割
	            </view>
	        </view>
	        <view class="flex margin-top justify-between">
	            <tui-button height="72rpx" :size="28" type="gray" shape="circle" 
	            width="30vw" @click="cancleHandle">取消</tui-button>
	            <tui-button height="72rpx" :size="28" type="danger" shape="circle"
	            width="30vw" @click="$emit('update:showModal',false),$emit('submitFn')">确定</tui-button>
	        </view>
		</view>
	</tui-modal>
</template>

<script>
	export default {
        props:['showModal'],
		data() {
			return {
				
			};
		},
        methods:{
            cancleHandle(){
                this.$emit('update:showModal',false)
            }
        }
	}
</script>

<style lang="scss" scoped>
    .uni-label{
        width:160rpx;
        text-align-last: justify;   
    }
</style>
