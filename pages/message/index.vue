<template>
	<view>
	<view v-for="(item,index) in card" :key=index class="item-card">
		
			<view class="card-header"> <img src="/ua/static/img/task/inprogress@2x.png" mode=""></img> <span>[ <span>农产品区块链溯源平台</span> ]</span></view>
			<view class="tui-flex">
				<view class='tui-cell-title'>农产品溯源平台通知</view>
				
				<view class='tui-cell-content'>
					<view>您的身份认证已通过</view>
				</view>
				<view class="tui-cell-bottom">
					<span class="iconfont icon-shijian"></span>
				
					<view class='note'>
						<view>9月22日  15:37</view>
					</view>
				</view>
			</view>
		
		
	</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
				modal: false,
		
				card: [{
						img: {
							url: "/static/img/task/inprogress@2x.png",
							circle: true
						},
						title: {
							text: "未完成"
						},
						
						header: {
							line: true,
							bgcolor: "#F7F7F7"
						}
					},
					{
						img: {
							url: "/static/img/task/end@2x.png",
							circle: true
						},
						title: {
							text: "已完成"
						},

						header: {
							line: true,
							bgcolor: "#F7F7F7"
						}
					},
					{
						img: {
							url: "/static/img/task/end@2x.png",
							circle: true
						},
						title: {
							text: "已完成"
						},
					
						header: {
							line: true,
							bgcolor: "#F7F7F7"
						}
					},
					
				]
			}
		},
		methods: {
			detail: function() {
				// console.log(this.tui)
				this.tui.toast('click~');
			},
			show() {
				this.modal = true;
			},
			hide() {
				this.modal = false;
			},
			handleClick(e) {
				let index = e.index;
				if (index === 0) {
					this.tui.toast('你点击了取消按钮');
				} else {
					this.tui.toast('你点击了确定按钮');
				}
				this.hide();
			},
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: #EDEDED;
	}

	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}
.item-card {
	margin:15rpx 15rpx 0;
	border:1rpx solid #C0C0C0;
	border-radius: 15rpx;
	background-color: white;
	padding:20rpx;
	.card-header{
		display: flex;
		justify-content: left;
		align-items: center;
		img{
			width:50rpx;
			height:50rpx;
		}
		span{
			padding: 0 20rpx;
			span{
				padding: 0 8rpx;
			}
		};
		}
	}
	.tui-title {
		width: 100%;
		padding: 70rpx 30rpx 30rpx 30rpx;
		box-sizing: border-box;
		font-size: 30rpx;
		line-height: 30rpx;
		color: #666;
	}

	.tui-default {
		padding: 20rpx 30rpx;
	}

	.tui-article {
		position: relative;
	}

	.tui-article-img {
		width: 100%;
		height: 300rpx;
		display: block;
	}

	.tui-article-title {
		position: absolute;
		left: 0;
		bottom: 0;
		color: #fff;
		font-size: 32rpx;
		font-weight: 500;
		box-sizing: border-box;
		padding: 20rpx 30rpx;
		background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.6));
	}

	.tui-cell-title {
		font-size: 30rpx;
		font-weight: 800;
		padding: 0 10rpx;
		word-break: break-all;
		word-wrap: break-word;
	}

	.tui-cell-content {
		font-size: 32rpx;
	}

	.tui-cell-note {
		font-size: 32rpx;
	}

	.tui-cell-bottom {
		display: flex;
		justify-content: left;
		align-items: center;
		.note {
			margin:0 20rpx;
		}
	}

	.tui-flex {}

	.tui-mr {
		margin-right: 20rpx;
	}


	.tui-flex-pic {
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		flex-direction: row;
		flex-wrap: wrap;
		box-sizing: border-box;
		background: #fff;
		padding: 0 120rpx;
	}

	.tui-flex-pic image {
		width: 32%;
		margin-bottom: 2%;
	}

	.tui-content {
		padding: 0rpx 30rpx 20rpx 120rpx;
		box-sizing: border-box;
		font-size: 34rpx;
		font-weight: 400;
		color: #333;
	}

	.tui-color-gray {
		color: #ccc;
	}

	.tui-pleft {
		padding-left: 120rpx;
	}
</style>
