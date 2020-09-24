<template>
	<view class="container">
	
		<tui-sticky :scrollTop="scrollTop" stickyHeight="104rpx" container>
			<template v-slot:header>
				<view class="sticky-item">
					<tui-tabs :tabs="navbar" :currentTab="currentTab>1?0:currentTab" @change="change" itemWidth="50%"></tui-tabs>
				</view>

			</template>
			
			<template v-slot:content>
				<!--内容 start-->
				<view class="list-view">
							
							<view class="my-table ">
								<view class="my-table-tr tui-flex">
									<view class="my-table-td tui-col-2"  v-for="(item,index) in HeaderData" :key=index>
									{{item.key}}
									</view>
								</view>
							</view>
				</view>
				<!--内容 end-->
			</template>
		</tui-sticky>

	

	

	</view>
</template>

<script>

	export default {
		data() {
			return {
				scrollTop: 0,
				currentTab: 0,
				navbar: [{
					name: "未出码"
				}, {
					name: "已出码"
				}],
				HeaderData: [{
										key: "张三",
										age: 18,
										gender: ''
									},
									{
										key: "赵四",
										age: 16,
										gender: "女"
									},
									{
										key: "王五",
										age: 20,
										gender: "男"
									},
									{
										key: "李六",
										age: 18,
										gender: "女"
									},
									{
										key: "王五",
										age: 20,
										gender: "男"
									},
									{
										key: "李六",
										age: 18,
										gender: "女"
									}
								],
								baseColumns: [{
										title: "姓名",
										key: "name",
										width: 100
									},
									{
										title: "性别",
										key: "gender",
										width: 400
									},
									{
										title: "年龄",
										key: "age",
										width: 400
									}
								],
			}
		},
		methods: {
			detail(e) {
				this.tui.toast("功能开发中~")
			},
			change(e) {
				this.currentTab = e.index
			},
			sticky(type) {
				let url="../stickyBasic/stickyBasic"
				if(type==2){
					url="../stickyAsync/stickyAsync"
				}else if(type==3){
					url="../stickyWxs/stickyWxs"
				}
				this.tui.href(url)
			}
		},
		//页面滚动执行方式
		onPageScroll(e) {
			this.scrollTop = e.scrollTop
		}
	}
</script>

<style lang="scss" scoped>
	@import '../../static/style/thorui.css';
	.container {
		padding-bottom: env(safe-area-inset-bottom);
	}

	.list-view{

		.my-table{
			
			.my-table-tr{
				 display: -webkit-flex; /* Safari */
				 display: flex;
		
			
				.my-table-td{
					border-top: 1rpx solid #ccc;
					border-bottom: 1rpx solid #ccc;
					border-left: 1rpx solid #ccc;
					background-color: white;
					
				}
				.my-table-td:last-child{
					border-right: 1rpx solid #ccc;
				}
			}
		}
	}

	/* sticky 容器 start */
	.sticky-item {
		width: 100%;
		height: 104rpx;
		/* padding: 20rpx 30rpx; */
		background-color: #fafafa;
		display: flex;
		align-items: center;
		justify-content: space-between;
		box-sizing: border-box;
	}

	/* sticky 容器 end */

	
.tui-title {
		padding: 50rpx 30rpx 30rpx 30rpx;
		font-size: 32rpx;
		color: #333;
		box-sizing: border-box;
		font-weight: bold;
		clear: both;
	}

	.tui-grid-icon {
		width: 64rpx;
		height: 64rpx;
		margin: 0 auto;
		text-align: center;
		vertical-align: middle;
	}


	

	.tui-grid-label {
		display: block;
		text-align: center;
		font-weight: 400;
		color: #333;
		font-size: 28rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
		margin-top: 10rpx;
	}
	.tui-grid-label-5 {
	
		color: #8a5966 !important;
	}
</style>
