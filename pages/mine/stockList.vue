<template>
    <!-- 库存管理 -->
	<view class="stock-list-box">
        <tui-sticky :scrollTop="scrollTop" stickyHeight="100rpx" container>
        	<template v-slot:header>
        		<!-- title -->
                <view class="top-item-nav flex">
        		    <view class="lf-nav" :class="{active:current==0}" @click="current=0"> 
                        投入品及其他 </view>
                    <view class="rt-nav" :class="{active:current==1}" @click="current=1"> 
                        产出物 </view>
        		</view>
        	</template>
        	<template v-slot:content>
                <!-- title 对应的内容 -->
                <swiper class="tui-stock-swiper" :duration="150" 
                    :current="current" @change="swiperChange">
                    <swiper-item class="tui-banner-item">
                        <inputList @openInput="openInputHandle"/>
                    </swiper-item>
                    <swiper-item class="tui-banner-item">
                        <outList />
                    </swiper-item>
                </swiper>
            </template>
        </tui-sticky>
        <!-- 投入出库 -->
        <inputNumber :showModal.sync="showModalNumber" :goodsObj="goodsObj" />
        <!-- 底部菜单 -->
        <tui-bottom-navigation :itemList="bottomBtnList" @click="bottomBtnClick" />
	</view>
</template>

<script>
    import inputNumber from './components/inputNumber'
    import inputList from './components/inputList'
    import outList from './components/outList'
	export default {
        components:{ inputNumber, inputList, outList },
		data() {
			return {
                current: 0,
                scrollTop:0,
                bottomBtnList:[{text: '入库'}],
                showModalNumber:false,
                goodsObj:{}
			}
		},
		methods: {
            // title 选择事件
            swiperChange(e){
                this.current = e.detail.current;
            },
            // 打开投入品弹框
            openInputHandle(item){
                this.showModalNumber = true;
                this.goodsObj = item;
            },
           
            // picker 选项点击事件
            pickerChange(e){
              
            },
            // 底部按钮点击事件
			bottomBtnClick(e){
                uni.navigateTo({
                    url:'warehousing'
                })
            }
		}
	}
</script>

<style lang="scss" scoped>
    .top-item-nav{
        border-top:1rpx solid #fff;
        .lf-nav, .rt-nav{
            height:80rpx;
            line-height: 80rpx;
            text-align: center;
            flex:1;
            background: #d6d9ec;
            transition: all .2s;
        }
        .active{
            background:#0081FF;
            color:#fff;
        }
    }
    .tui-stock-swiper{
        height: calc(100vh - 140px);
        overflow: auto;
        uni-swiper-item{
            overflow: auto;
        }
    }
    
    // 底部按钮
    ::v-deep .tui-navigation-item, ::v-deep .tui-bottom-navigation{
        background: #0081FF !important;
        .tui-item-inner{
            .tui-navigation-text{
                color:#fff !important;
            }
        }
    }
</style>
