<template>
	<view>
		
	
	<view v-for="item in card">
		<tui-card  :image="item.img" :title="item.title" :tag="item.tag" :header="item.header">
			<template v-slot:body>
				<tui-list-cell>
					<view class="tui-flex">
						<view class='tui-cell-title'>test</view>
						<hr>
						<view class='tui-cell-content'>
							<view>开始时间</view>
							<view>结束时间</view>
						</view>
						<hr>
						<view class='tui-cell-note'>
							<view>备注：test</view>
						</view>
						<view class="tui-cell-bottom">
							<tui-button class="tui-cell-btn" margin="20rpx 20rpx 26rpx 0" type="primary" shape="circle" width="100rpx"
							 height="50rpx" :size="24" @click="detail">完成</tui-button>
							<view class='note'>
								<view>结束时间：</view>
							</view>
						</view>
					</view>
				</tui-list-cell>
				<tui-list-cell>
					<view class="tui-flex">
						<view class='tui-cell-title'>test</view>
						<hr>
						<view class='tui-cell-content'>
							<view>开始时间</view>
							<view>结束时间</view>
						</view>
						<hr>
						<view class='tui-cell-note'>
							<view>备注：test</view>
						</view>
						<view class="tui-cell-bottom">
							<tui-button class="tui-cell-btn" margin="20rpx 20rpx 26rpx 0" type="primary" shape="circle" width="100rpx"
							 height="50rpx" :size="24" @click="detail">完成</tui-button>
							<view class='note'>
								<view>结束时间：</view>
							</view>
						</view>
					</view>
				</tui-list-cell>

			</template>
		</tui-card>
		<tui-button margin="36rpx 0 0" type="white" shape="circle" @click="show">一般弹框</tui-button>
		<tui-modal :show="modal" @click="handleClick" @cancel="hide" title="提示" content="确定退出登录吗？"></tui-modal>
	</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
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
.tui-card-class {
	margin-top: 50rpx;
	.tui-card-body{
		background:#f2f6f9;
		
		}
	.tui-list-class{
		background:#f2f6f9 !important;
		border: 1px solid #ccc;
		border-radius: 10rpx;
		margin-top:25rpx;
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
		font-size: 50rpx;
		font-weight: 500;
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
		justify-content: flex-end;

		.note {
			margin-top: 20rpx;
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
