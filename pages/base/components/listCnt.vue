<template>
    <!-- 折叠框 -->
	<view class="cu-list menu text-left" >
		<view class="cu-item arrow" :class="{arrowOpen:isShow}" @click="itemClick">
	        <view class="content">
	            <!-- <text class="cuIcon-notification" /> -->
	            <text class="padding-left-sm"> {{title}}</text>
	        </view>
		</view>
	    <view class="cu-item-content" :style="contentSty"  >
	        <slot type="string">  </slot>  
	    </view>
	</view> 
</template>

<script>
	export default {
        props:['title','open'],
		data() {
			return {
				isShow:false,
				contentSty:'height:0;padding:0 32rpx;',
				arrowSty:'rotate(-90deg)'
			};
		},
        watch:{
            open:{
                handler(val){
                    val ? this.itemClick() : '';
                },  
                immediate:true
            }
        },
        methods:{
            itemClick(){
                console.log(this.open)
                if(this.open === 'panorama') return;
                this.isShow = !this.isShow;
                this.isShow 
                    ? this.contentSty = 'height:auto; padding: 32rpx;opacity: 1;' 
                    : this.contentSty = 'height:0; padding:0 32rpx; opacity: 0;'
            }
        }
	}
</script>

<style lang="scss" scoped>
    .cu-list+.cu-list {
        margin-top: 0;
    }
    .cu-list.menu>.cu-item.arrow:before{
        display: inline-block;
        transform: rotate(90deg);
        top:-6rpx;
        font-size: 16px;
        transition: all .25s;
    }
    .cu-list.menu>.cu-item.arrowOpen.arrow:before{
        transform: rotate(-90deg);
        top:4rpx;
    }
    .cu-item-content{
        background: #f1f1f1;
        transition: all .25s;
    }
</style>
