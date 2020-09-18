<template>
    <!-- 农事记录 -->
	<view class="farming-records-box">
        <tui-list-view>
            <tui-list-cell :arrow="true">
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">基地名称</view>
            		<view class="tui-right" :class="{'gray':!baseList[baseIndex]}">
                        <picker id="base" mode='selector' :range="baseList" 
                            @change="pickerChange" :value="baseIndex" > 
                            {{baseList[baseIndex] || '请选择基地名称'}}
                        </picker>
                    </view>
            	</view>
            </tui-list-cell>
        	<tui-list-cell :arrow="true">
        		<view class="tui-item-box">
        			<view class="tui-list-cell_name">地块名称</view>
        			<view class="tui-right">
                        <picker id="massif" mode='selector' :range="massifList" 
                            @change="pickerChange" :value="massifIndex"> 
                            {{massifList[massifIndex] || '请选择地块名称'}}
                        </picker>
        	        </view>
        		</view>
        	</tui-list-cell>
        	<tui-list-cell :arrow="true">
        		<view class="tui-item-box">
        			<view class="tui-list-cell_name">作业内容</view>
        			<view class="tui-right">
                        <picker id="taskL" mode='selector' :range="taskList"
                            @change="pickerChange" :value="taskIndex"> 
                            {{taskList[taskIndex] || '请选择作业内容'}}
                        </picker>
        	        </view>
        		</view>
        	</tui-list-cell> 
        	<tui-list-cell :arrow="true">
        		<view class="tui-item-box">
        			<view class="tui-list-cell_name">产出物</view>
        			<view class="tui-right">
        	            {{'产出物'}}
        	        </view>
        		</view>
        	</tui-list-cell>  
            <tui-list-cell>
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">产量</view>
            		<view class="tui-right flex" style="margin:0 0 0 50rpx; flex:1;">
                       <input type="text" placeholder="请输入"> 
                       <view class="text-right" style="padding:0 34rpx 0 20rpx;">公斤</view>
                    </view>
            	</view>
            </tui-list-cell>  
            <tui-list-cell  :arrow="true">
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">投入品</view>
                    <!-- 一选择的投入品 -->
                    <view class="tui-right">
                        <view class="" >
                            投入品1
                        </view>
                        <view class="">
                            投入品 2
                        </view>
                        <view class="">
                            产出物 1
                        </view>
                    </view>
                </view>
                <!-- 添加投入品 -->
                <view class="trp-box-ck " @click="linkTo('stockList')" />
                <!-- 添加库存 -->
                <view class="text-sx text-blue trp-box-rk" style="padding-bottom: 30rpx;" >
                    <text @click="linkTo('warehousing')">
                       如果库存没有，请先去添加 
                    </text> 
                </view>
            </tui-list-cell>  
            <tui-list-cell class="margin-top" :arrow="true">
            	<view class="tui-item-box">
            		<view class="tui-list-cell_name">作业人</view>
            		<view class="tui-right">
                        <picker id="operator" mode='selector' :range="operatorList" 
                            @change="pickerChange" :value="operatorIndex"> 
                            {{operatorList[operatorIndex] || '请选择作业人'}}
                        </picker>
                    </view>
            	</view>
            </tui-list-cell>  
            <tui-list-cell>
             	<view class="tui-item-box">
             		<view class="tui-list-cell_name">备注</view>
             		<view class="tui-right flex" style="margin-left:50rpx;flex:1;">
                        <input type="text" placeholder="请输入"> 
                     </view>
             	</view>
            </tui-list-cell>
            <tui-list-cell class="margin-top">
             	<view class="tui-item-box">
             		<view class="tui-list-cell_name">上传图片</view>
             	</view>
                <view class="tui-item-box margin-top-sm" >
                    <tui-upload :value="value" @complete="result" @remove="remove" /> 
                 </view>
            </tui-list-cell> 
            <tui-list-cell>
             	<view class="tui-item-box">
             		<view class="tui-list-cell_name"> 
                        <tui-tag shape="circle" type="btn-gray" >
                            <tui-icon name="position" :size="14" />
                            <text class="text-sm">当前获取到的地址</text>
                        </tui-tag>
                    </view>
             	</view>
            </tui-list-cell> 
            <!-- 占位符 -->
            <view style="height: 100rpx;" />
        </tui-list-view>
        <!-- 底部提交按钮 -->
        <tui-bottom-navigation :itemList="bottomBtnList" @click="submitApply" />
        <confirmModal :showModal.sync="showModal" @submitFn="submitHandle" />
    </view>
</template>

<script>
    import confirmModal from "./components/confirmModal.vue"
	export default {
        components:{ confirmModal },
		data() {
			return {
                baseList: ['基地1号地', '基地2号地', '基地3号地', '基地4号地'],
                baseIndex:'',
				massifList: ['地块1', '地块2', '地块3'],
                massifIndex:'',
                taskList: ['作业内容1', '作业内容2', '作业内容3'],
                taskIndex:'',
                operatorList: ['作业人1', '作业人2', '作业人3'],
                operatorIndex:'',
                imageData: [],
                //上传地址
                serverUrl: "https://api.thorui.cn/",
                value:[], //初始化图片
                bottomBtnList: [{ //底部按钮
                    text: '提交',
                    color: '#666',
                    fontSize:'30rpx'
                }],
                sizeIcon:10,
                showModal:false //提交确认框
			}
		},
        onNavigationBarButtonTap(btn) {
            uni.navigateTo({
                url:'historyInfo'
            })
        },
		methods: {
            // 提交按钮 确认
            submitApply(){
                this.showModal = true;
            },
            // 提交
            submitHandle(){
                this.tui.toast("可以提交了")
            },
            // picker 打开事件
            pickerOpenHandle(type){
                this.currentPicker = type;
                this.pickerList = Object.assign([], this[type+'List']);
                switch(type) {
                    case 'base':
                        this.tips = '请选择基地名称';
                        break;
                    case 'massif':
                        if(this.baseIndex === ''){
                            this.tui.toast("请先选择基地名称")
                            return;
                        } 
                        this.tips = '请选择地块名称';
                        break;
                    case 'task':
                        if(this.massifIndex === ''){
                            this.tui.toast("请先选择地块名称")
                            return;
                        } 
                        this.tips = '请选择作业内容';
                        break;
                    case 'operator':
                        this.tips = '请选择作业人';
                        break;
                    default:
                        this.tips = '请选择';
                }  
                this.$refs.pickerRef._show();
            },
            // picker 选项点击事件
			pickerChange(e){
                switch(e.currentTarget.id) {
                    case 'base':
                        this.baseIndex = e.detail.value;
                        break;
                    case 'massif':
                        this.massifIndex = e.detail.value;
                        break;
                    case 'task':
                        this.taskIndex = e.detail.value;
                    case 'operator':
                        this.operatorIndex = e.detail.value;
                    default:
                        undefined;
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
            // 跳转至
            linkTo(urlStr){
                uni.navigateTo({ url:urlStr })
            }
		}
	}
</script>

<style lang="scss" scoped>
	.project-list+.project-list {
		margin-top: 2rpx !important;
	}
    .tui-item-box {
    	width: 100%;
    	display: flex;
    	align-items: center;
    }
    .tui-list-cell_name {
    	/* padding-left: 20rpx; */
    	display: flex;
    	align-items: center;
    	justify-content: center;
    }
    .tui-right {
    	margin-left: auto;
    	margin-right: 34rpx;
    	font-size: 26rpx;
    }
    
    // 投入品
    .trp-box-ck{
        position: absolute;
        left:0;
        right: 0;
        top:0;
        bottom: 0;
    }
    .trp-box-rk{
        position: absolute;
        bottom: -5px;
        font-size: 12px;
        z-index: 2;
    }
    
    ::v-deep .tui-image-item, ::v-deep .tui-upload-add, ::v-deep .tui-item-img{
        width: 100px;
        height: 100px;   
    }
    
    input{
        margin-top:6rpx;
        font-size:14px;
        flex:1;
        text-align: right;
    }
    ::v-deep .tui-navigation-item, ::v-deep .tui-bottom-navigation{
        background: #0081FF !important;
        .tui-item-inner{
            .tui-navigation-text{
                color:#fff !important;
            }
        }
    }
</style>
