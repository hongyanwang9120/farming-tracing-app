<template>
   <!-- 农事列表记录 -->
    <view class="history-info-box">
        <uni-nav-bar :fixed="true"   :border="false">
            <view class="tui-header-slt flex justify-between bg-white">
                <view class="tui-header-item flex justify-between" >
                    <picker id="base" mode='selector' :range="baseList" style="flex:1"
                        @change="pickerChange" :value="baseIndex" > 
                        <view class="tui-header-text">{{baseList[baseIndex]}}</view>
                    </picker>
                    <tui-icon :name="'arrowdown'" :size="14" :color="'#444'" />
                </view>
                <view class="tui-header-item flex justify-between" >
                    <picker id="massif" mode='selector' :range="massifList" style="flex:1"
                        @change="pickerChange" :value="massifIndex" > 
                        <view class="tui-header-text">{{massifList[massifIndex]}}</view>
                    </picker>
                    <tui-icon :name="'arrowdown'" :size="14" :color="'#444'" />
                </view>
             </view>
        </uni-nav-bar>
        <view class="padding baseInfo-box margin-top bg-white">
            <view class="flex justify-between">
                <view class="">
                   <text class="label-uni">地块类型</text>：种植
                </view>
                <view class="">
                    <text class="label-uni">面积</text>：15亩
                </view>
            </view>
            <view class="flex justify-between">
                <view class="">
                    <text class="label-uni">品种</text>：种植
                </view>
                <view class="flex">
                    <text class="label-uni">管理员</text>：
                    <view class="">
                        <view class="">王小五</view>
                        <view class="">13888888888</view>
                    </view>
                </view>
            </view>
        </view>
        <view class="list-box padding bg-white margin-top">
            <view class="" v-for="(item,key) in 9" :key="key">
                <view class="flex justify-between">
                    <tui-tag shape="circle" padding="8rpx 18rpx" >采摘</tui-tag>
                    <text>张三</text>
                </view>
                <view class="flex justify-between bottom-box">
                    <text class=" ">2020/09/19 15:18:00</text>
                    <tui-icon :name="'more-fill'" :size="16" color="#444" 
                        class="text-bold" @click="linkTo(item)" />
                </view>
            </view>
        </view>
    </view>
</template>
	
<script>
    export default {
        data() {
            return {
                baseList: ['基地1号地', '基地2号地', '基地3号地', '基地4号地'],
                baseIndex:'0',
                massifList: ['地块1', '地块2', '地块3'],
                massifIndex:'0',
                pickerList:[],
                currentPicker:'',
                pickerVal:''
            }
        },
        methods: {
            pickerChange(e){
                e.currentTarget.id == 'base'
                    ? this.baseIndex = e.detail.value
                    : this.massifIndex = e.detail.value;
                this.pickerVal = e.detail.value;
            },
            linkTo(){
                uni.navigateTo({
                    url:'historyDetails'
                })
            } 
        }
    }
</script>
	
<style lang="scss">
    .history-info-box{
        height: 100%;
        overflow: auto;
    }
    .tui-header-slt{
        flex:1;
        .tui-header-item{
            flex:1;
            padding: 15rpx 30rpx;
        }
        .tui-header-item:last-child{
            border-left:1rpx solid #D9D9D9;
        }
    }
    .baseInfo-box{
        .justify-between{
            >uni-view{
                flex:1;
            }
        }
        .label-uni{
            display: inline-block;
            width: 126rpx;
            text-align-last: justify;
        }
    }  
    .list-box{
        >uni-view{
            margin-bottom: 28rpx;
            padding: 10px 10px 5px;
            border:1rpx solid #D8D8D8;
            .bottom-box{
                line-height: 28px;
            }
        }
    }
</style>
	