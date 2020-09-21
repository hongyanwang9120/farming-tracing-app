<template>

	<view>

		<view class="cu-list-box text-left flex">
			<view class="cu-avatar lg radius margin" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
			<view class="qy-name-box">
				<view class="text-lg"> 王小五 </view>
				<text> 北京技术股份有限公司 </text>
			</view>
			<view class="tui-flex-box" @tap="handleClick">
				<view class="tui-badge-item">
					<tui-icon name="message"></tui-icon>
					<tui-badge type="danger" absolute :scaleRatio="0.8" translateX="40%" top="20rpx">9</tui-badge>
				</view>
				</view>
		</view>

		<view class="tui-rolling-news">
			<tui-icon name="news-fill" :size='28' color='#5677fc' @tap="goMsg"></tui-icon>
			<swiper vertical autoplay circular interval="3000" class="tui-swiper">
				<swiper-item v-for="(item,index) in newsList" :key="index" class="tui-swiper-item">
					<view class="tui-news-item" @tap='detail'>{{item}}</view>
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import {
		mapGetters
	} from 'vuex'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar'

	export default {
		components: {
			uniNavBar,
		},
		onReady() {

		},
		onLoad() {

		},
		onShow(e) {

		},
	
		data() {
			return {
				showModal: false,
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
			goMsg(){
				uni.navigateTo({
				    url: '../../pages/message/index'
				});
			},
            linkTo(){
                uni.navigateTo({
                    url: '../../pages/enterprise/enterprise'
                });
            },
            detail(){
                
            },
			handleClick(){
				uni.navigateTo({
				    url: '../../pages/task/task'
				});
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
		color: #fff;
		border-top: 1rpx solid #40719e;

		.round {
			width: 50px;
		}

		.qy-name-box {
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
		background: white
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
	
	
	.tui-flex-box {

		align-items: center;
		padding-bottom: 30rpx;

	}
	
	.tui-badge-box {
		padding-right: 40rpx;
	}
	
	.tui-badge-item {
		    position: absolute;
		    right: 30rpx;
			.tui-icon-message{
				color: white !important;
			}
	}
</style>
