<template>
    <!-- 库存选择 -->
	<tui-modal :show="showModal" :custom="true">
		<view class="th-box flex justify-between">
		    <view> 入库批次 </view>
		    <view> 商品类型 </view>
		    <view> 库存量 </view>
		</view>
        <view class="tui-modal-custom">
            <view class="table">
                <view v-for="(item,key) in list" :key="key" 
                    class="tr-box" :class="{active:sltIds.includes(item.id)}"
                    @click="trBoxClick(item)">
                    <view> {{item.pc}} </view>
                    <view> {{item.name}} </view>
                    <view>  
                        {{item.cl}}
                        <text class="text-sm"> /{{item.dw}}</text>
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
        props:['showModal','stockSlt'],
		data() {
			return {
				list:[
                    {
                        id:'1',
                        pc:'20200909120988',
                        name:'稻谷',
                        cl:'100,1001',
                        dw:'千克',
                        sp:'小米',
                        gg:'10斤/袋'
                    },
                    {
                        id:'2',
                        pc:'20200909120988',
                        name:'蔬菜',
                        cl:'100,1002',
                        dw:'千克',
                        sp:'白菜',
                        gg:'2kg/包'
                    },
                    {
                        id:'3',
                        pc:'20200909120988',
                        name:'水果',
                        cl:'100,1003',
                        dw:'克',
                        sp:'苹果',
                        gg:'3kg/箱'
                    }
                ],
                sltIds:[],
                sltList:[],
			};
		},
        methods:{
            trBoxClick(item){
                if(this.sltIds.includes(item.id)){
                    let idIndex = this.sltIds.findIndex((val)=>{
                        return val == item.id;
                    })
                    this.sltIds.splice(idIndex,1);
                    this.sltList.splice(idIndex,1);
                }else{
                    this.sltIds.push(item.id);
                    this.sltList.push(item);
                } 
            },
            submitHandle(){
                if(this.sltIds.length == 0){
                    this.tui.toast('请先选择库存')
                    return;
                }
                this.$emit('update:stockSlt',this.sltList);
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
            width: 250rpx;
        }
        .th-box >:nth-child(2),.tr-box >:nth-child(2){
           flex:1;
        }
        .th-box :nth-child(3),.tr-box :nth-child(3){
            width: 198rpx;
        }
    }
    uni-toast { 
        
    }
</style>
