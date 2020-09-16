<template>
	<view class="container">
		<view class="tui-box-upload">
			<view class="idcard">
				
			
			<view class="sub-title"> <span class="iconfont icon-shenfenzhengrenxiangmian idcard" ></span> 身份证人像面 </view>
			<tui-upload :value="value" :serverUrl="serverUrl" @complete="result" @remove="remove"></tui-upload>
			</view>
		</view>
		<view class="tui-box-upload">
			<view class="idcard">
				
			
			<view class="sub-title"> <span class="iconfont icon-shenfenzhengguohuimian idcard" ></span> 身份证国徽面 </view>
			<tui-upload :value="value" :serverUrl="serverUrl" @complete="result" @remove="remove"></tui-upload>
			</view>
		</view>
		<form @submit="formSubmit" @reset="formReset" class="myform">
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">姓名</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="name" placeholder="请输入姓名" maxlength="50" type="text" />
					
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">性别</view>
					<radio-group class="radio-group" name="sex">
											<label class="tui-radio">
												<radio value="1" color="#5677fc" />男
											</label>
											<label class="tui-radio">
												<radio value="2" color="#5677fc" />女
											</label>
										</radio-group>
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">民族</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="age" placeholder="请输入民族" maxlength="50" type="number" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">生日</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="mobile" placeholder="请输入生日" maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">身份证号</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="idcard" placeholder="请输入身份证号码" maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">身份证有效期截至日</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="email" placeholder="请输入身份证有效期截至日" maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			
			<tui-list-cell :hover="false">
				<view class="tui-line-cell">
					<view class="tui-title">地址</view>
					<input placeholder-class="tui-phcolor" class="tui-input" name="pwd" placeholder="请输入地址" maxlength="50" type="text" />
				</view>
			</tui-list-cell>
			
			
		<!-- <view class="tui-flex-box position-sticky fixed-bottom">
			<tui-button  width="50%" height="90rpx" type="gray" :size="32" @click="detail">取消</tui-button>
			<tui-button  width="50%" height="90rpx" :size="32" @click="detail" formType="submit" type="primary">提交</tui-button>
			</view> -->
		<tui-bottom-navigation :current="current2" :itemList="itemList2"  @click="menu"></tui-bottom-navigation>
		</form>
	</view>
</template>

<script>
	const form = require("@/components/common/tui-validation/tui-validation.js")
	//实际使用需要传入上传地址，以及上传接口返回数据进行调整组件
	export default {
		data() {
			return {
				imageData: [],
				//上传地址
				serverUrl: "https://api.thorui.cn/",
				value:[] ,//初始化图片
				
				current2: 1,
				itemList2: [
					{
						text: '取消',
						color: '#666',
						//1-选中切换，2-跳转、请求、其他操作，3-菜单
						
						type: 1
					},
					{
						text: '提交',
						color: '#666',
						//1-选中切换，2-跳转、请求、其他操作，3-菜单
						type: 1
					}
				]
			}
		},
		onLoad() {
		
		},
		methods: {
			// 导航
			menu(e) {
						//菜单类型 主菜单/子菜单
						let menuType = e.menu;
						//主菜单索引
						let index = e.index;
						//1-选中切换，2-跳转、请求、其他操作，3-菜单
						//操作自行约定好即可，传入参数 parameter,也可以直接取传入的itemList值
			
						//此处默认全部知晓菜单按钮以及相关操作，实际开发中可自行约定判断处理操作
						let type = e.type;
						if (menuType === 'main') {
							if(index == 0){
								this.tui.toast('点击了取消按钮');
							}else {
								this.tui.toast('点击了提交按钮');
								this.formSubmit()
							}
						} 
					},
			result: function(e) {
				console.log(e)
				this.imageData = e.imgArr;
			},
			remove: function(e) {
				//移除图片
				console.log(e)
				let index = e.index
			},
			
				formSubmit: function(e) {
					uni.navigateTo({
						url: '../../pages/attestation/join'
					});
					return false;
					//表单规则
					let rules = [{
						name: "name",
						rule: ["required", "isChinese", "minLength:2", "maxLength:6"], //可使用区间，此处主要测试功能
						msg: ["请输入姓名", "姓名必须全部为中文", "姓名必须2个或以上字符", "姓名不能超过6个字符"]
					}, {
						name: "sex",
						rule: ["required"],
						msg: ["请选择性别"]
					}, {
						name: "age",
						rule: ["required", "isNum", "range:[0,150]"],
						msg: ["请输入年龄", "请输入正确的年龄", "请输入正确的年龄范围：0-150"]
					}, {
						name: "mobile",
						rule: ["required", "isMobile"],
						msg: ["请输入手机号", "请输入正确的手机号"]
					}, {
						name: "email",
						rule: ["required", "isEmail"],
						msg: ["请输入邮箱", "请输入正确的邮箱"]
					}, {
						name: "idcard",
						rule: ["required", "isIdCard"],
						msg: ["请输入身份证号码", "请输入正确的身份证号码"]
					}, {
						name: "pwd",
						rule: ["required", "isEnAndNo"],
						msg: ["请输入密码", "密码为8~20位数字和字母组合"]
					}, {
						name: "pwd2",
						rule: ["required", "isSame:pwd"],
						msg: ["请输入确认密码", "两次输入的密码不一致"]
					}, {
						name: "range",
						rule: ["required", "range:[3,20]"],
						msg: ["请输入区间数字", "请输入3-20之间的数字"]
					}, {
						name: "amount",
						rule: ["required", "isAmount"],
						msg: ["请输入金额", "请输入正确的金额，允许保留两位小数"]
					}];
					//进行表单检查
					let formData = e.detail.value;
					let checkRes = form.validation(formData, rules);
					if (!checkRes) {
						uni.showToast({
							title: "验证通过!",
							icon: "none"
						});
					} else {
						uni.showToast({
							title: checkRes,
							icon: "none"
						});
					}
				},
				formReset: function(e) {
					console.log("清空数据")
				}
		}
	}
</script>

<style lang="scss" scoped>
	page {
		background: white;
	}
	
	.container {
		padding: 20rpx 0 0rpx 0;
		box-sizing: border-box;
	}
	
	.header {
		padding: 80rpx 90rpx 60rpx 90rpx;
		box-sizing: border-box;
	}
	
	.title {
		font-size: 34rpx;
		color: #333;
		font-weight: 500;
	}
	
	.sub-title {
		font-size: 30rpx;
		color: #7a7a7a;
		padding-top: 18rpx;
	}
	
	.tui-box-upload {
		padding: 0 25rpx 25rpx;
		border: 1px dashed #C8C7CC;
		margin: 40rpx;
		display: flex;
		justify-content:center;
		.idcard{
			margin: 0 auto;
		}
		
	}
	.myform{
		.tui-line-cell {
			width: 100%;
			box-sizing: border-box;
			display: flex;
			align-items: center;
		}
		
		.tui-title {
			line-height: 32rpx;
			min-width: 120rpx;
			flex-shrink: 0;
		}
		
		.tui-input {
			font-size: 32rpx;
			color: #333;
			padding-left: 20rpx;
			flex: 1;
			overflow: visible;
		}
		
		.radio-group {
			margin-left: auto;
			transform: scale(0.8);
			transform-origin: 100% center;
			flex-shrink: 0;
		}
		
		.tui-radio {
			display: inline-block;
			padding-left: 28rpx;
			font-size: 36rpx;
			vertical-align: middle;
		}
		
		
		.tui-btn-box {
			padding: 40rpx 50rpx;
			box-sizing: border-box;
		}
		
		.tui-button-gray {
			margin-top: 30rpx;
		}
		
		.tui-tips {
			padding: 30rpx;
			color: #999;
			font-size: 24rpx;
		}
		}
		.tui-flex-box{
			display: flex;
			}
	// .position-sticky {
	//     position: -webkit-sticky!important;
	//     position: sticky!important;
	// }
	    
	// .fixed-bottom {
	//     position: fixed;
	//     right: 0;
	//     bottom: calc( var(--window-bottom) + 0px);
	//     left: 0;
	//     z-index: 1030;
	//     margin-bottom: 6;
	// }
</style>
