<template>
    <!-- 销售新增 -->
    <view class="sale-infoAdd-box">
        <tui-list-view>
            <tui-list-cell  :arrow="true">
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">库存选择</view>
                    <view class="tui-right text-right" style="width:50vw" 
                        @click="showModalStock=true">
                        <view v-if="!stockSltList.length"> 点击选择库存 </view>
                        <view v-else 
                            v-for="(item,key) in stockSltList" :key="key">
                            {{item.name}}
                        </view>
                    </view>
                </view>
            </tui-list-cell>  
            <tui-list-cell :arrow="true">
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">商品名称</view>
                    <view class="tui-right">
                        <picker id="goods" :range="goodsList"  
                            @change="pickerChange" :value="goodsIndex"> 
                            <text v-if="goodsList[goodsIndex]">
                                {{goodsList[goodsIndex]}}
                                <text class="padding-left">
                                    规格：{{stockSltList[goodsIndex].gg}}
                                </text>
                            </text>
                            <text v-else> 请选择商品名称 </text>
                        </picker>
                    </view>
                </view>
            </tui-list-cell>
            <tui-list-cell>
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">销售数量</view>
                    <view class="tui-right flex padding-left" style="flex:1;">
                        <input style="flex:1;" type="text" placeholder="请输入数量"> 
                        <text class="padding-left" v-if="goodsIndex!==''">
                            单位：{{stockSltList[goodsIndex].dw}}
                        </text>
                    </view>
                </view>
            </tui-list-cell> 
            <tui-list-cell :arrow="true">
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">检验报告</view>
                    <view class="tui-right report-upload">
                        <tui-upload :value="value" @complete="result" @remove="remove" >wewe</tui-upload>
                    </view>
                </view>
            </tui-list-cell>  
            <tui-list-cell :arrow="true">
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">购买客户</view>
                    <view class="tui-right" >
                        <text v-if="!companyObj" class="padding-left" 
                            @click="showModalCompany=true">请选择购买客户</text>
                        <view v-else @click="showModalCompany=true">
                            <view> {{companyObj.name}} </view>
                            <view> {{companyObj.addr}} </view>
                        </view>
                    </view>
                </view>
            </tui-list-cell>  
            <tui-list-cell :arrow="true">
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">销售价格</view>
                    <view class="tui-right flex padding-left" style=" flex:1;">
                        <input style="flex:1;" type="text" placeholder="请输入价格"> 
                        <text class="padding-left">人民币：元</text>
                    </view>
                </view>
            </tui-list-cell>  
            <tui-list-cell :arrow="true">
                <view class="tui-item-box">
                    <view class="tui-list-cell_name">关联溯源码</view>
                    <view class="tui-right flex padding-left" style="flex:1;">
                        <textarea style="background: #ececec;padding:18rpx;font-size: 28rpx;"   
                            placeholder="请输关联溯源码" v-model="syCode"/>
                        <view class="padding-left-sm flex flex-direction justify-center" >
                            <view class="bg-blue text-white" @click="showModalScanCode=true"
                                style="padding:4rpx 16rpx;border-radius: 4rpx;">
                                扫码<br/>添加
                            </view>
                        </view>
                    </view>
                </view>
            </tui-list-cell>  
            <tui-list-cell v-if="syCode" style="padding-top:0;">
                <view >
                    已添加{{syCodeCheck.length}}个
                    <view class="padding-sm" style="background: #ececec;">
                        {{syCode}}
                    </view>
                </view>
            </tui-list-cell> 
            <!-- 占位符 -->
            <view style="height: 126rpx;" />
        </tui-list-view>
        <!-- 底部提交按钮 -->
        <tui-bottom-navigation :itemList="[{text: '提交'}]" @click="submitHandle" />
        <!-- 库存选择 -->
        <stockListSlt :showModal.sync="showModalStock" :stockSlt.sync="stockSltList"   />
        <!-- 公司选择 -->
        <companyListSlt :showModal.sync="showModalCompany" :companySlt.sync ="companyObj" />
        <scanCode :showModal.sync="showModalScanCode" :companySlt.sync ="scanCodeObj" />
    </view>
</template>
	
<script>
    import stockListSlt from "./components/stockListSlt"
    import companyListSlt from "./components/companyListSlt"
    import scanCode from "./components/scanCode"
    export default {
        components:{ stockListSlt, companyListSlt, scanCode },
        data() {
            return {
                goodsIndex:'',
                companyIndex:'',
                imageData: [],
                //上传地址
                serverUrl: "https://api.thorui.cn/",
                value:[], //初始化图片
                
                showModalStock:false, //库存选择
                stockSltList:[], //已选择的库存
                showModalCompany:false,
                companyObj:null, //已选择的公司
                showModalScanCode:false, //扫码添加
                scanCodeObj:null,
                syCode:''
            }
        },
        computed:{
            goodsList(){
                return this.stockSltList.map(obj => obj.sp)
            },
            syCodeCheck(){
                // if(this.syCode.split(',')){
                    return this.syCode.split(',');
                // } 
            }
        },
        methods: {
            // 提交
            submitHandle(){
                this.tui.toast("可以提交了")
            },
            // picker 选项点击事件
            pickerChange(e){
                this.goodsIndex = e.detail.value;
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
    
    .report-upload{
        ::v-deep .tui-container{
            width:450rpx;
        }
        ::v-deep .tui-upload-box{
            justify-content: flex-end;
            .tui-upload-icon::before{
                content:'点击上传'
            }
            .tui-image-item, .tui-item-img{
                width: 136rpx !important;
                height:136rpx !important;
                margin-bottom: 0 !important;
            }
            .tui-upload-add{
                width: 126rpx !important;
                height:56rpx !important;
                background-color: #fff !important;
            }
            .tui-upload-icon::before{
                 content:'点击上传';
                 color:rgb(51, 51, 51);
                 font-family: Helvetica Neue, Helvetica, sans-serif;
            }
        }
    } 
 
    input{
        margin-top:6rpx;
        font-size:14px;
        flex:1;
        text-align: right;
    }
    uni-textarea {
        width: auto;
        height:100px;
        min-width: 100rpx;
        flex: 1;
    }
    ::v-deep .tui-navigation-item, ::v-deep .tui-bottom-navigation{
        background: #0081FF !important;
        z-index:996;
        .tui-item-inner{
            .tui-navigation-text{
                color:#fff !important;
            }
        }
    }
</style>
