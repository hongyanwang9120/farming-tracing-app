<template>
    <!-- 环形图 -->
	<view class="qiun-columns">
		<view class="qiun-charts" >
			<!--#ifdef MP-ALIPAY -->
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts" :style="{'width':cWidth*pixelRatio+'px','height':cHeight*pixelRatio+'px', 'transform': 'scale('+(1/pixelRatio)+')','margin-left':-cWidth*(pixelRatio-1)/2+'px','margin-top':-cHeight*(pixelRatio-1)/2+'px'}" @touchstart="touchRing"></canvas>
			<!--#endif-->
			<!--#ifndef MP-ALIPAY -->
			<canvas canvas-id="canvasRing" id="canvasRing" class="charts" @touchstart="touchRing"></canvas>
			<!--#endif-->
		</view>
	</view>
</template>

<script>
	import uCharts from '@/components/u-charts/u-charts.js';
	import  { isJSON } from '@/common/u-charts/checker.js';
	let _self, canvaRing = null;
	export default {
        mounted(){
            _self = this;
            //#ifdef MP-ALIPAY
            uni.getSystemInfo({
            	success: function (res) {
            		if(res.pixelRatio>1){
            			//正常这里给2就行，如果pixelRatio=3性能会降低一点
            			//_self.pixelRatio =res.pixelRatio;
            			_self.pixelRatio =2;
            		}
            	}
            });
            //#endif
            this.cWidth=uni.upx2px(750-80);
            this.cHeight=uni.upx2px(500);
            this.getServerData();
        },
		data() {
			return {
				cWidth:'',
				cHeight:'',
				pixelRatio:1
			}
		},
		methods: {
			getServerData(){
                let Ring={series:[]};
                //这里我后台返回的是数组，所以用等于，如果您后台返回的是单条数据，需要push进去
                Ring.series = [{
                  "name": "一班",
                  "data": 50
                }, {
                  "name": "二班",
                  "data": 30
                }, {
                  "name": "三班",
                  "data": 20
                }, {
                  "name": "四班",
                  "data": 18
                }, {
                  "name": "五班",
                  "data": 8
                }];
                //自定义文案示例，需设置format字段
                for(let i = 0 ;i < Ring.series.length;i++){
                    Ring.series[i].format=()=>{return Ring.series[i].name+Ring.series[i].data};
                }
                _self.showRing("canvasRing",Ring);
			},
			showRing(canvasId,chartData){
				canvaRing=new uCharts({
					$this:_self,
					canvasId: canvasId,
					type: 'ring',
					fontSize:12,
					padding:[10,10,10,10],
					legend:{ // 图例
						show:false,
						position:'right',
						float:'center',
						itemGap:10,
						padding:5,
						lineHeight:26,
						margin:5,
						//backgroundColor:'rgba(41,198,90,0.2)',
						//borderColor :'rgba(41,198,90,0.5)',
						borderWidth :1
					},
					background:'#FFFFFF',
					pixelRatio:_self.pixelRatio,
					series: chartData.series,
					animation: false,
					width: _self.cWidth*_self.pixelRatio,
					height: _self.cHeight*_self.pixelRatio,
					disablePieStroke: true,
					dataLabel: false,
					subtitle: {
						name: '70%',
						color: '#7cb5ec',
						fontSize: 25*_self.pixelRatio,
					},
					title: {
						name: '收益率',
						color: '#666666',
						fontSize: 20*_self.pixelRatio,
					},
					extra: {
						pie: {
						  offsetAngle: 0,
						  ringWidth: 20*_self.pixelRatio,
						  labelWidth:10
						}
					},
				});
			},
			touchRing(e){
				canvaRing.touchLegend(e, {
					animation : false
				});
				canvaRing.showToolTip(e, {
					format: function (item) {
						return item.name + ':' + item.data 
					}
				});
			}
		}
	}
</script>

<style>
	/*样式的width和height一定要与定义的cWidth和cHeight相对应*/
	.qiun-charts {
		width: 100%;
		height: 500upx;
		background-color: #FFFFFF;
	}
	
	.charts {
		width: 100%;
		height: 500upx;
		background-color: #FFFFFF;
	}
</style>
