<template>
    <!-- 全景图片查看器 -->
	<view id="viewer" :style="styleCptOver" ref="vieweRef"> </view>
</template>

<script>
    // 全景图片查看器
    // 安装 npm install  photo-sphere-viewer --save-dev 
    import { Viewer } from 'photo-sphere-viewer';
	export default {
        props:['styleCpt', 'imgPath'],
        onLoad(){
            this.styleCpt ? this.styleCptOver = this.styleCpt : '';
        },
        mounted(){
            const query = uni.createSelectorQuery();
            query.select('#viewer').boundingClientRect(data => {
              console.log( data);
              console.log("节点离页面顶部的距离为" + data.top);
            }).exec();
        },
		data() {
			return {
				styleCptOver:'height:600rpx;width:100%;'
			};
		},
        watch:{
            imgPath:{
                handler(val){
                    if(!val) return
                    this.$nextTick(function(){
                      
                        new Viewer({
                            container:document.getElementById('viewer'),
                            panorama: require('../../../static/background.png'),
                            autorotateDelay:true, //是否自旋转动
                            captureCursor:true,
                            autorotateSpeed:0.12943951023931953, // 旋转速度
                            size: {
                                width: '100%',
                                height: '600rpx'
                            },
                            caption: '一号地块',
                            // time_anim: false,
                            // defaultLat: 1.4441088145446443,
                            // defaultLong: 0.0800613513013615,
                            // sphereCorrection: {pan: 30.01, tilt: 0, roll: 0}, // 校正 低 倾斜 卷
                            maxFov: 100,         // 最大缩放值
                            minFov: 10,          // 最小缩放值
                            defaultZoomLvl: 20,     // 默认缩放值，在1-179之间
                            // mousewheel: false,    // 禁止鼠标滚轮缩放
                            touchmoveTwoFingers:false,
                            moveSpeed: 1, // 鼠标拖拽的速度
                            loadingImg: null,
                            loadingTxt: "place wait...",
                            navbar: false,
                            navbar: [
                              'autorotate',
                              'zoom',
                              'caption',
                              'fullscreen' //全屏
                            ]
                        }) 
                    })
                },
                immediate:true
            }
        }
	}
</script>

<style lang="scss">
    @import 'photo-sphere-viewer/dist/photo-sphere-viewer.css'
</style>
