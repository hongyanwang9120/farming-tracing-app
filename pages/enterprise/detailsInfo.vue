<template>
    <!-- 企业门户详情 -->
	<view class="details-info-box">
		<image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25004.jpg" />
        <title-box title="湖南省云上茶叶有限公司" :content="contentTmp"/>
        <title-box title="主要营销" :content="contentTmp"/>
        <title-box title="产品介绍"> 
            <product-info v-for="item in 3" :key="item" />
        </title-box>
        <title-box title="资质证书">
            <image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25004.jpg" />
            <image src="https://ossweb-img.qq.com/images/lol/web201310/skin/big25004.jpg" />
        </title-box>
        <title-box title="企业直播" >
            <video-list />
        </title-box>
        <title-box title="企业经营位置">
            <map class="margin-top-sm" style="width: 100%; height: 300px;" 
                :latitude="latitude"
                :longitude="longitude" 
                :markers="covers" />
            <!-- <view id="wrapper" style="width: 500px; height: 500px;"></view> -->
        </title-box>                   
    </view>
</template>
<script>
    import titleBox from './components/titleBox'
    import productInfo from './components/productInfo'
    import videoList from './components/videoList'
    import amap from '../../common/AMapWX_SDK/amap-wx.js';
	export default {
        components:{ titleBox, productInfo, videoList },
        onReady(){
            uni.setNavigationBarTitle({
                title: '湖南省云上茶叶有限公司'
            })
            let amapPluginInstance = new amap.AMapWX({	
                key: 'cd6b99d17278e156a69d3dec3760d1c3'  //该key 是在高德中申请的微信小程序key
            });
            console.log(amapPluginInstance)
            amapPluginInstance.getPoiAround({
                success: function(data){
                    //成功回调
                    console.log('00',data)
                },
                fail: function(info){
                    //失败回调
                    console.log('11',info)
                }
            })
        },
		data() {
			return {
				contentTmp:'湖南省云上茶叶有限公司湖南省云上茶叶有限公司湖南省云上茶叶有限公司湖南省云上茶叶有限公司湖南省云上茶叶有限公司湖南省云上茶叶有限公司湖南省云上茶叶有限公司湖南省云上茶叶有限公司湖南省云上茶叶有限公司湖南省云上茶叶有限公司',
                id:0, // 使用 marker点击事件 需要填写id
                title: 'map',
                latitude: 39.909,
                longitude: 116.39742,
                covers: [{
                    latitude: 39.909,
                    longitude: 116.39742,
                    iconPath: '../../../static/location.png'
                }, {
                    latitude: 39.90,
                    longitude: 116.39,
                    iconPath: '../../../static/location.png'
                }]
			};
		}
	}
</script>

<style lang="scss" >
    .details-info-box{
        uni-image{
            width: 100%;
            height:400rpx;
        }
    }
</style>
