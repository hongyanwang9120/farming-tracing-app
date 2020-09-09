<template>
	<view class="container">
		<view class="tui-news-title">用户协议及隐私条款</view>

		<view class="tui-news-content">
			<view class="tui-article">北京时间6月22日，重庆斯威队召开了赛前新闻发布会，主教练小克鲁伊夫和球员彭欣力出席。</view>
			<view class="tui-article">
				这是一场很重要的比赛，武汉卓尔在中超目前打的还是不错的，现在积分与我们一样。我们面对这个对手做了充分的准备，他们的战术变化很多，我也认为他们是一支训练有素的队伍。虽然这是一场艰难的比赛，我们也充满了动力去拿到我们想要的分数，实现我们的目标。联赛上半程还有两场比赛，我们也会竭尽全力拿到尽量多的分数。
			</view>
			<image src="/static/images/news/banner_2.jpg" class="tui-article-pic" mode="widthFix"></image>
			<view class="tui-article">大家下午好，明天非常重要，这星期我们的备战时间比较充裕，我们针对对手做了有效的布置，希望明天给大家呈现精彩的比赛。</view>
			<view class="tui-article">
				我相信大家比我更了解他，但是就像刚刚提到的一样，这支球队的战术是丰富而多变的，这就意味着他在应对不同比赛时做了充分的准备。我们非常尊重明天的对手，他们最近状态出色，拿到许多分数。
			</view>
			<image src="/static/images/news/banner_1.jpg" class="tui-article-pic" mode="widthFix"></image>
			<view class="tui-article">
				对我而言，我还是想保持沉默，我不打算就这个问题做过多的评论。因为这个政策的变化是马上实施了，我们肯定是尊重它，然后在我们力所能及的范围上找到最好的应对的方案，我个人意见并不重要，我们尊重和遵守相关决定。
			</view>
		</view>


	
	</view>
</template>

<script>
export default {
	data() {
		return {
			fabulous: 123,
			isFabulous: false,
			isCollection: false,

			loadding: false,
			pullUpOn: true
		}
	},
	computed: {
		iconColor() {
			return this.isFabulous ? '#5677fc' : '#333'
		},
		itemIconColor() {
			return function(isFabulous) {
				return isFabulous ? '#5677fc' : '#9a9a9a'
			}
		},
		iconName() {
			return function(isFabulous) {
				return isFabulous ? 'agree-fill' : 'agree'
			}
		}
	},
	methods: {
		btnFabulous: function() {
			this.fabulous = this.isFabulous ? 123 : 124;
			this.isFabulous = !this.isFabulous
		},
		cmtFabulous: function(e) {
			let index = e.currentTarget.id;
			let fabulousObj = this.cmtList[index];
			let isFabulous = this.cmtList[index].isFabulous;
			let fabulous = this.cmtList[index].fabulous;
			let fabulousNum = isFabulous ? fabulous - 1 : fabulous + 1;
			this.$set(fabulousObj, "fabulous", fabulousNum);
			this.$set(fabulousObj, "isFabulous", !isFabulous);
		},
		collection: function() {
			this.isCollection = !this.isCollection
			if (this.isCollection) {
				this.tui.toast("收藏成功！");
			}
		},
		btnCmt: function() {
			uni.navigateTo({
				url: '../comment/comment'
			})
		},
		cmtAll: function() {
			uni.navigateTo({
				url: '../commentList/commentList'
			})
		},
		cmtReply: function() {
			uni.navigateTo({
				url: '../commentReply/commentReply'
			})
		},
		btnShare(){
			// #ifdef H5
			location.href = 'https://www.thorui.cn/';
			// #endif

			//#ifdef APP-PLUS
			plus.share.sendWithSystem(
				{
					content: 'ThorUI组件库',
					href: 'https://www.thorui.cn/'
				},
				function() {
					console.log('分享成功');
				},
				function(e) {
					console.log('分享失败：' + JSON.stringify(e));
				}
			);
			//#endif
		}
	},
	// 页面上拉触底事件的处理函数
	onReachBottom: function() {
		if (!this.pullUpOn) return;
		this.loadding = true
		if (this.pageIndex == 3) {
			this.loadding = false;
			this.pullUpOn = false
		} else {
			let arr = JSON.parse(JSON.stringify(this.cmtList));
			this.cmtList = this.cmtList.concat(arr);
			this.pageIndex = this.pageIndex + 1;
			this.loadding = false
		}
	}
}
</script>

<style>
page {
	background: #fff;
	color: #333;
}

.container {
	padding: 40rpx 30rpx 110rpx 30rpx;
	box-sizing: border-box;
}

.tui-news-title {
	font-size: 48rpx;
	font-weight: 500;
	text-align: justify;
}

.tui-sub-info {
	padding-top: 30rpx;
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 28rpx;
	color: #999;
}

.tui-author {
	color: #5677fc;
	padding-right: 20rpx;
}

.tui-news-content {
	padding-top: 40rpx;
}

.tui-article {
	/* text-indent: 2em; */
	font-size: 34rpx;
	padding-bottom: 40rpx;
	line-height: 60rpx;
	text-align: justify;
	word-break: break-all;
	word-wrap: break-word;
}

.tui-article-pic {
	width: 100%;
	display: block;
	margin-bottom: 40rpx;
}

.tui-news-source {
	font-size: 24rpx;
	color: #999;
}

.tui-operate-box {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 60rpx 40rpx;
	box-sizing: border-box;
}

.tui-black {
	color: #333;
	padding-left: 12rpx;
}

.tui-cmt-title {
	font-size: 30rpx;
	font-weight: bold;
	position: relative;
}

.tui-cmt-title::after {
	content: '';
	position: absolute;
	left: -18rpx;
	top: 18%;
	width: 6rpx;
	height: 64%;
	background: #5677fc;
}

.tui-cmtbox {
	padding-bottom: 20rpx;
}

.tui-cmt-cell {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	padding-top: 44rpx;
}

.tui-avatar {
	width: 64rpx;
	height: 64rpx;
	border-radius: 32rpx;
	display: block;
	flex-shrink: 0;
}

.tui-cmt-detail {
	width: 100%;
	padding-left: 16rpx;
	box-sizing: border-box;
}

.tui-header-box {
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	font-size: 30rpx;
}

.tui-cmt-nickname {
	color: #5677fc;
}

.tui-fabulous {
	color: #9a9a9a;
}

.tui-fabulous text {
	padding-right: 4rpx;
	font-size: 24rpx;
}

.tui-cmt-content {
	font-size: 32rpx;
	color: #333;
	text-align: justify;
	padding-top: 8rpx;
	word-break: break-all;
	word-wrap: break-word;
}

.tui-reply-box {
	border-radius: 8rpx;
	overflow: hidden;
	margin-top: 16rpx;
}

.tui-cell-last {
	display: flex;
	align-items: center;
	word-wrap: break-word;
	color: #5677fc;
}
.tui-flex-1 {
	flex: 1;
	width: 100%;
}

.tui-reply-nickname {
	font-size: 24rpx;
	color: #7a7a7a;
	padding-bottom: 8rpx;
}

.tui-footer {
	display: flex;
	align-items: center;
	font-size: 24rpx;
	margin-top: 16rpx;
	color: #9a9a9a;
}

.tui-primary {
	color: #5677fc !important;
}

.tui-ml {
	margin-left: 16rpx;
}

.tui-operation {
	width: 100%;
	height: 100rpx;
	overflow: hidden;
	background: #fff;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: fixed;
	left: 0;
	bottom: 0;
	z-index: 99999;
	padding-bottom: env(safe-area-inset-bottom);
}

.tui-safearea-bottom {
	width: 100%;
	height: env(safe-area-inset-bottom);
}

.tui-operation::before {
	content: '';
	position: absolute;
	top: 0;
	right: 0;
	left: 0;
	border-top: 1rpx solid #eaeef1;
	-webkit-transform: scaleY(0.5);
	transform: scaleY(0.5);
}

.tui-operation-left {
	display: flex;
	align-items: center;
}

.tui-operation-item {
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	position: relative;
}

.tui-operation-right {
	height: 100rpx;
	box-sizing: border-box;
	padding-top: 0;
}

.tui-right-flex {
	display: flex;
	align-items: center;
	justify-content: center;
}

.tui-btn-comment {
	height: 64rpx;
	width: 84%;
	background: #ededed;
	color: #999;
	border-radius: 8rpx;
	font-size: 28rpx;
	display: flex;
	align-items: center;
	padding-left: 20rpx;
	box-sizing: border-box;
	padding-top: 0;
	margin-left: 30rpx;
}

.tui-col-7 {
	width: 58.33333333%;
}

.tui-col-5 {
	width: 41.66666667%;
}

.tui-share-btn {
	display: block;
	background: none;
	margin: 0;
	padding: 0;
}
</style>
