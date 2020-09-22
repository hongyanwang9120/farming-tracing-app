<template>
    <!-- 扫码 -->
    <tui-modal :show="showModal" :custom="true">
        <view class="text-center text-bold">关联溯源码 - 扫码添加</view>
        <view class="tui-modal-custom margin-top-sm">
            扫码结果： {{scanCodeObj}}
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
                scanCodeObj:{name:'dd'}
            };
        },
        watch:{
            showModal(val){
                val ? this.scanCodeHandle() : undefined; 
            }
        },
        methods:{
            scanCodeHandle(){
                uni.scanCode({
                    success: function (res) {
                        console.info(res)
                        this.scanCodeObj = JSON.stringify(res.result);
                    }
                }); 
            },
            submitHandle(){
                
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
                min-height: 20vh;
                max-height: 60vh;
                overflow-y:auto;
            }
        } 
    }
 
</style>
