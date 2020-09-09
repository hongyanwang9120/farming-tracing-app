<template>
    <!-- 左侧弹框 -->
	<view class="cu-modal drawer-modal justify-start" :class="showModelOver?'show':''" 
        @tap="showModelOver = false">
		<!-- 内容框 -->
	    <view class="cu-dialog basis-lg" @tap.stop="" >
			<view class="cu-list-box text-left">
				<view class="cu-avatar lg round margin" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view> 
	            <view class="qy-name-box">
	                <view class=""> {{infoObj.userName}} </view>
	                <view class="qy-box text-blue"> 
	                    (企业) {{infoObj.company}} 
	                </view>
	            </view>
	        </view>
	        <view class="grid text-center col-3 user-fn-box">
	            <view class="padding-sm">
	                <view class="">
	                    <text class="cuIcon-safe text-white round bg-blue" />
	                </view>
	                <text class="text-sm">身份认证</text>
	            </view>
	            <view class="padding-sm">
	                <view class="">
	                    <text class="cuIcon-peoplelist text-white round bg-blue" />
	                </view>
	                <text class="text-sm">个人信息</text>
	            </view>
	            <view class="padding-sm text-center">
	                <view class="">
	                    <text class="cuIcon-friendfavor round bg-blue text-white" />
	                </view>
	                <text class="text-sm">个人主页</text>
	            </view>
	        </view>
	        <view class="cu-list menu text-left">
	        	<view class="cu-item arrow"  >
	                <view>
	                    <text class="cuIcon-notification" />
	                    <text class="padding-left-sm">系统消息</text>
	                </view>
	        	</view>
	            <view class="cu-item arrow"  >
	                <view>
	                    <text class="cuIcon-settings" />
	                    <text class="padding-left-sm">设置</text>
	                </view>
	            </view>
	        </view>
	    </view>
	</view>
</template>

<script>
	export default {
        props:["showModel","infoObj"],
		data() {
			return {
				showModelOver:false
			};
		},
        watch:{
            showModel:{
                handler(val){
                    this.showModelOver = val;
                },
                immediate:true
            },
            showModelOver(val){
                this.$emit('update:showModel', val);
            }
        },
        methods:{
  
        }
	}
</script>

<style lang="scss" scoped>
    // 用户头像
    .cu-list-box {
        display:flex;
        background: #3D414D;
        color:#fff;
        .round{
            width:50px;
        }
        .qy-name-box{
            width: 200rpx;
            flex:1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            .qy-box{
                height:40rpx;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
            }
        }
    }
    // 用户三个按钮
    .user-fn-box.grid{
        padding:40rpx 0;
        border-bottom:1rpx solid #C9D7E1;
        [class*="cuIcon-"] {
            font-size: 46rpx;
        }
        .text-white{
            display: inline-block;
            width: 88rpx;
            height: 88rpx;
        }
    }
    // 系统消息 + 设置
    .cu-list{
        [class*="cuIcon-"] {
            font-size: 30rpx;
        }
    }
</style>
