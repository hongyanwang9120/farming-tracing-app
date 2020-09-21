<template>
    <view class="qiun-charts" >
        <!--#ifdef MP-ALIPAY -->
        <canvas :canvas-id="'canvasArea_'+dataList.data" class="chartsa"
            :id="'canvasArea_'+dataList.data"  :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
        <!--#endif-->
        <!--#ifndef MP-ALIPAY -->
        <canvas :canvas-id="'canvasArea_'+dataList.data" 
            :id="'canvasArea_'+dataList.data" class="chartsa"  />
        <!--#endif-->
    </view>
</template>

<script>
	import uCharts from '@/common/lib/u-charts.min.js';
	let _self, canvaArea = null;
	export default {
        props:['dataList'],
		mounted() {
			this.initHandler();
		},
        data() {
			return {
				cWidth:'',
				cHeight:'',
				arcbarWidth:0,
				pixelRatio:1
			}
		},
        watch:{
            dataList:{
                handler(val){
                    this.initHandler();
                    this.showArea("canvasArea_"+this.dataList.data, val)
                },
                immediate: true,
                deep:true
            }
        },
		methods: {
			// getServerData(){
			// 	let Area = {series:[{name:'排名',data:0.55}]};
			// 	this.showArea("canvasArea",Area);
			// },
			showArea(canvasId,chartData){
				let border = this.arcbarWidth;
				let aWidth = this.cWidth/2-border -30;
				let aHeight = this.cHeight-border;
				let radius = (aWidth*aWidth+aHeight*aHeight)/aHeight/2;
				let centerPoint={
					x:this.cWidth/2*this.pixelRatio,
					y:(radius+border)*this.pixelRatio + 10
				};
				canvaArea=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'arcbar',
					fontSize:12,
					colors:['#00FF00','#FF0000','#FF7F00','#FFFF00','#00FFFF','#0000FF','#8B00FF'],
					legend:{show:false},
					// background:'#ff0000',
					pixelRatio:_self.pixelRatio,
					series:[{name:chartData.dataTitle,data:chartData.data}],
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
                    title: {
                    	name: chartData.dataTitle + chartData.dataUnit,
                    	color: '#666666',
                    	fontSize: 14*_self.pixelRatio,
                    	offsetY:26*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
                    },
                    subtitle: {
                    	name: chartData.dataTitle,
                    	color: '#666666',
                    	fontSize: 25*_self.pixelRatio,
                        textAlign:'center',
                    	offsetY:-35*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
                    },
					extra: {
						arcbar:{
							type:'default',
							width: border*_self.pixelRatio,
							backgroundColor:'rgba(233,233,233,.9)',
							startAngle:0.9999,
							endAngle:0.0001,
							radius:radius*_self.pixelRatio,
							gap:5*_self.pixelRatio,
							center:centerPoint
						}
					}
				});
			},
            initHandler(){
                _self = this;
                //#ifdef MP-ALIPAY
                uni.getSystemInfo({
                	success: function (res) {
                		if(res.pixelRatio>1){
                			//正常这里给2就行，如果pixelRatio=3性能会降低一点
                			//_self.pixelRatio =res.pixelRatio;
                			_self.pixelRatio = 2;
                		}
                	}
                });
                //#endif
                this.cWidth = uni.upx2px(347);
                this.cHeight = uni.upx2px(260);
                this.arcbarWidth = uni.upx2px(26);
            }
		}
	}
</script>

<style lang="scss" scoped>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 100%;
		height: 260rpx;
		// background: linear-gradient(to top, #28E5A0, #0BB7D6);
        background: #fff;
		// background-size: 100% 100%;
        
	}
	
	.chartsa {
		width: 347rpx;
		height: 260rpx;
	}
</style>
