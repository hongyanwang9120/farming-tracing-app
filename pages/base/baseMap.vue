<template>
    <!-- 基地管理 - 地图模式 -->
	<view class="base-map-box">
        <view class="base-info padding-left padding">
            <view class="">
                基本信息
            </view>
            <view class="margin-top-sm">
                当前共有2个基地，配套设备 10 套
            </view>
            <view class="margin-top-sm">
                共使用地块 12 个，面积 100 亩
            </view>
        </view>
        <view style="position: fixed; z-index: -1;">
            <map id="baseMap"
               :style="{height:'650px', width:'750rpx', position: 'fixed','z-index':'1'}"
               :latitude="latitude"
               :longitude="longitude"
               scale="16" 
               :markers="markers"
               show-location="true"
               show-compass="true"
               enable-3D="true"
               @markertap="markertap"
               @updated="markertap" />
        </view>
	</view>
</template>

<script>
    import amap from "../../common/AMapWX_SDK/amap-wx.js";
	export default {
        onLoad(){
            this.amapPlugin = new amap.AMapWX({
                key: 'cd6b99d17278e156a69d3dec3760d1c3'
            });
            let that = this;
            this.amapPlugin.getPoiAround({
                success: function(data) {
                    //成功回调
                    that.markers = data.markers;
                    that.poisdatas = data.poisData;
                    var markers_new = [];
                    that.markers.forEach(function(item, index) {
                        markers_new.push({
                            id: item.id,              //marker 序号
                            width: item.width,        //marker 宽度
                            height: item.height,      //marker 高度
                            iconPath: '../../static/images/index/map.png',  //marker 图标路径
                            latitude: item.latitude,  //marker  纬度
                            longitude: item.longitude, //marker 经度
                            //自定义标记点上方的气泡窗口
                            callout:{
                                padding:2,        //callout 文本边缘留白
                                fontSize:15,      //callout  文字大小
                                bgColor:'#0081FF',   //callout 背景颜色
                                color:'#6B8E23',  //callout 文字颜色
                                borderRadius:5,   //边框圆角
                                display:'ALWAYS',//callout 'BYCLICK':点击显示; 'ALWAYS':常显
                                content:that.poisdatas[index].name //地理位置名称
                            }
                        })
                    })
                    that.markers = markers_new;
                },
                fail: function(info) {
                    //失败回调
                    console.log("info", info)
                }
            })
        },
        onReady(){
            // 计算屏幕高度 ，宽度
            let _this = this;
            uni.getSystemInfo({
                success(res) {
                    _this.phoneHeight = res.windowHeight;
                    _this.phoneWidth = res.windowWidth
                }
            });
        },
		data() {
			return {
				amapPlugin:'',
                phoneHeight:'',
                phoneWidth:'',
                latitude: 40.044419,
                longitude: 116.285102,
                poisdatas:[],
                markers: [
                    {
                        id:1,
                        latitude: 40.044419,
                        longitude: 116.285102,
                        iconPath: '../../static/images/index/map.png'
                    }, 
                    {
                        id:2,
                        latitude: 40.044419,
                        longitude: 116.285112,
                        iconPath: '../../static/images/index/map.png'
                    }
                ]
			};
		},
        computed:{
            nintyPercentScreenHeight(){
                if(this.phoneHeight!=='' && this.phoneWidth!==''){
                    return 750/(this.phoneWidth)*(this.phoneHeight)+'rpx'
                }else{
                    return '1250rpx'
                }
            },
            seventyPercentScreenHeight(){
                if(this.phoneHeight!=='' && this.phoneWidth!==''){
                    return 750/(this.phoneWidth)*(this.phoneHeight)+'rpx'
                }else{
                    return '1000rpx'
                }
            }
        },
        methods:{
            markertap(e){
                uni.navigateTo({ url: 'baseDetails' });
            }
        }
	}
</script>

<style lang="scss" scoped>
    .base-map-box{
        .base-info{
            position: fixed;
            bottom:0;
            width: 100%;
            height:236rpx;
            background: rgba(0,0,0,.6);
            color:#fff;
            z-index: 99999999;
        }
    }
    
</style>
