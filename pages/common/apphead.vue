<template>
		
	<view>
		<!-- 头部 搜索 -->
		<!-- <uni-nav-bar :fixed="true" color="#333333" :background-color="themeBgColor" :border="false">
			
		    <view class="input-view nav-btn">
		        <text class="text-white text-xxl" @click="showModal=true"> ☰</text>
		    </view>
		    <view class="input-view top-txt-box text-white text-lg text-bold">
		        农产品区块链溯源平台
		    </view>
		    <view class="input-view nav-btn">
		        <text class="cuIcon-scan text-white" />
		    </view>
		</uni-nav-bar> -->
   <!-- 个人信息 -->
        <view class="cu-list-box text-left flex">
        	<view class="cu-avatar lg radius margin" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view> 
            <view class="qy-name-box">
                <view class="text-lg"> 王小五 </view>
                <text> 北京技术股份有限公司 </text>
            </view>
        </view>
        <!-- 公告 -->
     <!--   <uni-nav-bar :fixed="true" :border="false" class="notice-box">
            <view class="notice-box-title">
                <text class="cuIcon-notificationfill text-xl text-purple">
                    <text style="padding-left:10rpx;">公告</text>
                </text>
            </view>
        </uni-nav-bar> -->
		 <view class="tui-rolling-news">
		 			<tui-icon name="news-fill" :size='28' color='#5677fc'></tui-icon>
		 			<swiper vertical autoplay circular interval="3000" class="tui-swiper">
		 				<swiper-item v-for="(item,index) in newsList" :key="index" class="tui-swiper-item">
		 					<view class="tui-news-item" @tap='detail'>{{item}}</view>
		 				</swiper-item>
		 			</swiper>
		 		</view>
		  <!-- 功能格 -->      
    </view>
</template>

<script>
    import { mapGetters } from 'vuex'
    import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar'

    export default {
        components: { uniNavBar,  },
        onReady() {
           
        },
        onLoad() {
             
        },
        onShow(e) {
             
        },
        data() {
            return {
                showModal:false,
                winHeight: "", // 窗口高度
				newsList: [
					"致力发展负责任的人工智能 中国发布八大治理原则",
					"格兰仕暗示拜访拼多多后遭天猫打压，拼多多高层赞其有勇气",
					"阿里计划将每股普通股拆为8股，增加筹资灵活性"
				],
            }
        },
        computed: {
            ...mapGetters(['themeBgColor', 'darkMode'])
        },
        methods: {
            linkTo(){
                uni.navigateTo({
                    url: '../../pages/enterprise/enterprise'
                });
            },
            detail(){
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    [class*="cuIcon-"] {
        font-size: 80rpx;
    }
    // 头部导航
    .input-view {
        background: none;
        [class*="cuIcon-"] {
            font-size: 46rpx;
        }
    }
    .nav-btn {
        width: auto;
        padding: 0 10px;  
    }
    .top-txt-box {
        justify-content: center;
        [class*="cuIcon-"] {
            font-size: 46rpx;
        }
    }
    // 用户头像
    .cu-list-box {
        background: #0081FF;
        color:#fff;
        border-top:1rpx solid #40719e;
        .round{
            width:50px;
        }
        .qy-name-box{
            display: flex;
            flex-direction: column;
            justify-content: center; 
        }
    }
    // 公告
    .notice-box {
        [class*="cuIcon-"] {
            padding-left: 30rpx;
            font-size: 26rpx;
        }
    }
    
	
	// 公告样式
	.tui-rolling-news {
		width: 100%;
		padding: 0rpx 10rpx;
		box-sizing: border-box;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;
		background:white
	}
	
	.tui-swiper {
		font-size: 28rpx;
		height: 50rpx;
		flex: 1;
	}
	
	.tui-swiper-item {
		display: flex;
		align-items: center
	}
	
	.tui-news-item {
		line-height: 28rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	
	.tui-searchbox {
		padding: 60rpx 80rpx;
		box-sizing: border-box;
	}
	
	.tui-rolling-search {
		width: 100%;
		height: 70rpx;
		border-radius: 35rpx;
		padding: 0 40rpx 0 30rpx;
		box-sizing: border-box;
		background: #fff;
		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: nowrap;
		color: #999;
	}
    
</style>
