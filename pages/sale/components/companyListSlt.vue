<template>
    <!-- 公司选择 -->
	<tui-modal :show="showModal" :custom="true">
		<view class="th-box flex justify-between">
		    <view> 公司名称/地址 </view>
		    <view> 联系电话/人  </view>
		</view>
        <view class="tui-modal-custom">
            <view class="table">
                <view v-for="(item,key) in list" :key="key" 
                    class="tr-box" :class="{active:sltObj&&sltObj.name.includes(item.name)}"
                    @click="trBoxClick(item)">
                    <view> 
                        <view> {{item.name}} </view>
                        <text class="text-sm"> {{item.addr}}</text>
                    </view>
                    <view> 
                        <view> {{item.phone}} </view>
                        <text class="text-sm"> {{item.ren}}</text>
                    </view>
                </view>
            </view>
		</view>
        <view class="flex margin-top">
            <tui-button type="gray" height="72rpx" :size="28" shape="circle" 
                @click="$emit('update:showModal',false)">取消</tui-button>
            <text class="padding-lr" />
            <tui-button height="72rpx" :size="28" shape="circle" @click="submitHandle">确定</tui-button>
        </view>
    </tui-modal>
</template>

<script>
	export default {
        props:['showModal','companySlt'],
		data() {
			return {
				list:[
                    {
                        id:'1',
                        name:'湖南省云上茶叶有限公司1',
                        ren:'王小五',
                        phone:'13888888888',
                        addr:'北京市海淀区西北旺街道软件园2号',
                    },
                    {
                        id:'1',
                        name:'湖南省云上茶叶有限公司2',
                        ren:'王小六',
                        phone:'13888888888',
                        addr:'北京市海淀区西北旺街道软件园2号',
                    },
                    {
                        id:'1',
                        name:'湖南省云上茶叶有限公司3',
                        ren:'王五',
                        phone:'13888888888',
                        addr:'北京市海淀区西北旺街道软件园2号',
                    },
                    {
                        id:'1',
                        name:'湖南省云上茶叶有限公司4',
                        ren:'王六',
                        phone:'13888888888',
                        addr:'北京市海淀区西北旺街道软件园2号',
                    }
                ],
                sltObj:null
			};
		},
        methods:{
            trBoxClick(item){
               this.sltObj = Object.assign({},item);
            },
            submitHandle(){
                if(!this.sltObj){
                    this.tui.toast('请先选择公司')
                    return;
                }
                this.$emit('update:companySlt',this.sltObj);
                this.$emit('update:showModal',false);
            }
        }
	}
</script>

<style lang="scss" scoped>
    ::v-deep .tui-modal-show, .tui-modal-show{
        z-index: 997 !important;
    }
    ::v-deep .tui-modal-mask{
        z-index: 996 !important;
    }
    ::v-deep .tui-modal-box {
        width: 96% !important;
        padding: 25rpx 20rpx !important;
        >uni-view{
            .tui-modal-custom{
                max-height: 60vh;
                overflow-y:auto;
            }
        }
        .th-box {
            padding-bottom:8rpx;
            margin-left:10rpx;
            border-bottom:1rpx solid #0081FF;
        }
        .tr-box{
            padding:8rpx 0;
            padding-left:10rpx;
            border-top:1rpx solid #d9d9d9;
            display: flex;
            justify-content: space-between;
        }
        // 选中的样式
        .tr-box.active{
            background: #0081FF;
            color: #fff;   
        }
        .th-box >:first-child,.tr-box >:first-child{
            flex:1;
            
        }
        .th-box >:nth-child(2),.tr-box >:nth-child(2){
           width: 188rpx;
        }
        // .th-box :nth-child(3),.tr-box :nth-child(3){
        //     width: 198rpx;
        // }
    }
    uni-toast { 
        
    }
</style>
