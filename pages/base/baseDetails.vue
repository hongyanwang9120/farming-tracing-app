<template>
    <!-- 基地详情 -->
	<view class="base-details-box">
        <list-cnt title="基础信息" open>
            <view class="zzd-Info">
                <icon type="" class="cuIcon-apps text-lg text-green" />
                <text class="text-xl text-bold">1号种植</text>
            </view>
            <view class="dk-info padding-tb-sm text-lg">
                <text class=""> 当前品种 : </text>
                <text class="padding-left-sm"> 茄子 </text>
                <text class="padding-left"> 编辑 : </text>
                <text class="padding-left-sm"> 15亩 </text>
            </view>
            <view class="dk-info text-lg">
                <text class="cuIcon-peoplefill text-blue" />
                <text>王小五</text>
                <icon type="" class="cuIcon-dianhua padding-left text-blue" />
                <text>136812346789</text>
            </view>
        </list-cnt>
        <list-cnt title="实时影像">
            <videoList />
        </list-cnt>
        <list-cnt title="全景展示" @click.native="showPanorama = 'panorama'" :open="showPanorama">
            <!-- <panorama :imgPath="imgPath" /> -->
            <view class="text-content action">
                正在努力加载，请稍后。。。
            </view>
            <view v-if="showPanorama == 'panorama'">
                <web-view style="background: rgba(0,0,0,.5);"
                    src="../../hybrid/html/panorama.html" @message="messageHandle" @onPostMessage="messageHandle" />
            </view>
        </list-cnt>
        <list-cnt title="环境监控">
            <environmentControl title="2号水EC传感器" :dataList="ringDataList1" />
            <environmentControl title="2号溶解氧传感器" :dataList="ringDataList2"/>
            <environmentControl title="2号体温度传感器" :dataList="ringDataList3"/>
        </list-cnt>
        <list-cnt title="农事记录">
            <view class="flex table-nsjl">  
                <view class="flex-treble"> 作业时间  </view>
                <view class="flex-twice text-center"> 作业内容 </view>
                <view class="flex-sub text-right"> 更多 </view>
            </view>
            <view class="flex table-nsjl margin-top-sm" v-for="item in 6" :key="item">
                <view class="flex-treble"> 2020/09/10 11:18:00  </view>
                <view class="flex-twice text-center"> 播种 </view>
                <view class="flex-sub text-right" @click="showModal=true"> 
                    <icon type="" class="cuIcon-forwardfill" />
                </view>
            </view>
        </list-cnt>
        <!-- 农事记录详情 -->
        <details-modal :showModal.sync="showModal" />
	</view>
</template>

<script>
    import videoList from '../enterprise/components/videoList'
    import listCnt from './components/listCnt'
    import detailsModal from './components/detailsModal'
    import environmentControl from './components/environmentControl'
	export default {
        components:{ videoList, listCnt, detailsModal, environmentControl },
        mounted(){
            this.ringDataList1 = [
                {
                    title:'水电导率',
                    data:'.0432',
                    dataTitle:'4.32',
                    dataUnit:'ms/cm'
                },
                {
                    title:'水温',
                    data:'.131',
                    dataTitle:'13.1',
                    dataUnit:'℃'
                }
            ]
            this.ringDataList2 = [
                {
                    title:'水溶解氧浓度',
                    data:'.1071',
                    dataTitle:'10.71',
                    dataUnit:'mg/L'
                },
                {
                    title:'水酸碱度',
                    data:'.0019',
                    dataTitle:'0.19',
                    dataUnit:'PH'
                }
            ]
            this.ringDataList3 = [
                {
                    title:'水温',
                    data:'.2592',
                    dataTitle:'25.92',
                    dataUnit:'℃'
                }
            ]
        },
		data() {
			return {
                showModal:false,
                ringDataList1:[],
                ringDataList2:[],
                ringDataList3:[],
                imgPath:'background.png',
                showPanorama:null
			};
		},
        methods:{
            messageHandle(){
                this.showPanorama = null;
            } 
        }
	}
</script>

<style lang="scss" scoped>
    .base-details-box{
        [class*="cuIcon-"] {
            font-size: 34rpx;
            padding-right:16rpx;
        }
        .zzd-Info{
            [class*="cuIcon-"] {
                font-size: 40rpx;
                font-weight: bold;
            }
        }
    }
</style>
