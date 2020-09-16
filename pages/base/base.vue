<template>
    <!-- 基地管理 -->
	<view class="base-info-box ">
        <apphead></apphead>
        <view class="padding bg-white margin-top-sm">
            <view class="flex input-box">
                <text style="padding-top:10rpx;">基地名称</text> 
                <view class="padding-left flex-treble">
                    <picker @change="pickerChange" :value="baseName" :range="baseList">
                        <view class="picker">
                            <input type="text" class="text-sm padding-left-sm" disabled :value="baseName" />
                            <icon type="" class="cuIcon-fold" />
                        </view>
                    </picker>
                </view>
                <text class="padding-left cuIcon-global" style="padding-top:10rpx;" @click="linkToMap" />
            </view>
            <!-- 基地列表 -->
            <view class="grid text-center margin-top padding-tb-sm col-2">
                <view class="base-item flex" v-for="item in 4" :key="item" >
                    <view class="cu-avatar xl radius" @click="detailsHandle"
                        style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big25002.jpg);"></view>
                    <view class="text-left padding-left" @click="detailsHandle">
                        <text class="text-lg text-bold"> 1号种植</text>
                        <view>16亩</view>
                        <text class="text-sm">王小五</text>
                    </view>
                </view>
            </view>
        </view>
    </view>
</template>

<script>
    import apphead from '@/pages/common/apphead'
	export default {
        components:{ apphead },
        //当点击了右上角的  筛选后
        onNavigationBarButtonTap(btn) {
            if(btn.text == '地图模式'){
                console.log('切换地图模式') 
            }
        },
		data() {
			return {
				baseList: ['基地1号地', '基地2号地', '基地3号地'],
                baseName:'基地1号地'
			};
		},
        methods:{
            // 跳转至详情
            detailsHandle(id){
                uni.navigateTo({ url: 'baseDetails' });
            },
            // 选择基地
            pickerChange(e){
                this.baseName = this.baseList[e.detail.value];
            },
            // 跳转至地图模式
            linkToMap(){
                uni.navigateTo({ url: 'baseMap' });
            }
        }
	}
</script>

<style lang="scss" scoped>
    .base-info-box{
        .input-box{
            position: relative;
            input{
                height:66rpx;
                border: 1rpx solid #ddd;
                font-size: 12px;
            }
            .cuIcon-fold{
                position: absolute;
                top:8rpx;
                right: 80rpx;
                transform: rotate(180deg);
            }
            [class*="cuIcon-"] {
                font-size: 40rpx;
                margin-top:-10rpx;    
            }
        }
        .base-item{
            margin-bottom: 36rpx;
            .cu-avatar{
                width:152rpx;
                height: 152rpx;
            }
        }
    }
    
</style>
