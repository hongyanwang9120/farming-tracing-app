<template>
    <!-- 仪表盘 -->
    <view class="qiun-charts" >
        <!--#ifdef MP-ALIPAY -->
        <canvas canvas-id="canvasGauge" id="canvasGauge" class="charts" :width="cWidth*pixelRatio" :height="cHeight*pixelRatio" :style="{'width':cWidth+'px','height':cHeight+'px'}"></canvas>
        <!--#endif-->
        <!--#ifndef MP-ALIPAY -->
        <canvas canvas-id="canvasGauge" id="canvasGauge" class="charts"></canvas>
        <!--#endif-->
    </view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	let _self, canvaGauge = null;
	export default {
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1,
				gaugeWidth:15,
				type:'default'
			}
		},
		mounted() {
			_self = this;
			//#ifdef MP-ALIPAY
			uni.getSystemInfo({
				success: function (res) {
					if(res.pixelRatio > 1){
						//正常这里给2就行，如果pixelRatio=3性能会降低一点
						//_self.pixelRatio =res.pixelRatio;
						_self.pixelRatio = 2;
					}
				}
			});
			//#endif
			this.cWidth = uni.upx2px(375);
			this.cHeight = uni.upx2px(200);
            console.log(3434,this.cWidth)
			this.getServerData();
		},
		methods: {
			getServerData(){
                let Gauge={categories:[],series:[]};
                //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
                Gauge.categories =[{
                        "value": 0.2,
                        "color": "#1890ff"
                      }, {
                        "value": 0.8,
                        "color": "#2fc25b"
                      }, {
                        "value": 1,
                        "color": "#f04864"
                      }];
                Gauge.series =  [{
                    "name": "完成率",
                    "data": 0.66
                }];
                // _self.textarea = JSON.stringify(res.data.data.Gauge);
                _self.showGauge("canvasGauge",Gauge);
			},
			showGauge(canvasId,chartData){
				canvaGauge = new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'gauge',
					fontSize:11,
					legend:{show:false},
					title: {
						name: Math.round(chartData.series[0].data*100)+'%',
						color: chartData.categories[1].color,
						fontSize: 25*_self.pixelRatio,
						offsetY:25*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					subtitle: {
						name: chartData.series[0].name,
						color: '#666666',
						fontSize: 15*_self.pixelRatio,
						offsetY:-50*_self.pixelRatio,//新增参数，自定义调整Y轴文案距离
					},
					extra: {
						gauge:{
							type:'default',
							width: _self.gaugeWidth*_self.pixelRatio,//仪表盘背景的宽度
							startAngle:0.75,
							endAngle:0.25,
							startNumber:0,
							endNumber:100,
							splitLine:{
								fixRadius:0,
								splitNumber:0, //刻度
								width: _self.gaugeWidth*_self.pixelRatio ,//仪表盘背景的宽度
								color:'#FFFFFF',
								childNumber:5,
								childWidth:_self.gaugeWidth*0.4*_self.pixelRatio,//仪表盘背景的宽度
							},
                            //指针
							pointer:{
								width: _self.gaugeWidth*0.8*_self.pixelRatio,
								color:'auto'
							}
						}
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					categories: chartData.categories,
					series: chartData.series,
					animation: true,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					dataLabel: true,
				});
			}
		}
	}
</script>

<style lang="scss" scoped>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 375upx;
		height: 200upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 375upx;
		height: 200upx;
		background-color: #FFFFFF;
	}
</style>
