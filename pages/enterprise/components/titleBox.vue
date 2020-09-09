<template>
    <!-- title 盒子 -->
	<view class="title-box">
		<view class="title text-center padding-sm text-xl text-bold">
		    {{title}}
		</view>
        <view class="content">
          <slot> {{content}} </slot>  
        </view>
	</view>
</template>

<script>
	export default {
        props:['title','content'],
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss" scoped>
    .title-box{
        margin:0 40rpx;
        .title{
            border-bottom: 1rpx solid #ddd;
        }
        .content{
            padding: 20rpx 0;
        }
    }
</style>
