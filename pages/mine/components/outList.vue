<template>
    <!-- 产出物表 -->
	<view>
		<block v-for="(item,index) in ccwList" :key="index">
			<tui-collapse :index="index" :current="item.current" @click="openHandle">
				<template v-slot:title>
					<tui-list-cell>
		                <view class="flex justify-between"
		                    style="padding-right:70rpx">
		                    <text> {{item.name}}</text>
		                    <tui-tag v-if="item.kc=='紧张'" type="danger" padding="12rpx 16rpx" size="24rpx">库存紧张</tui-tag>
		                    <tui-tag v-if="item.kc=='爆满'" type="green" padding="12rpx 16rpx" size="24rpx">库存爆满</tui-tag>
		                    <text> 共{{item.weight}}斤 </text>
		                </view>
		            </tui-list-cell>
				</template>
				<template v-slot:content>
					<tui-list-view>
						<tui-list-cell class="flex justify-between">
							<text>小龙虾</text>
		                    <text>批次：1213121212</text>
		                    <text>100斤</text>
		                    <tui-button shape="circle" type="blue" 
                                width="100rpx" height="48rpx" :size="24" 
                                @click="linkTo(item)">出库</tui-button>
						</tui-list-cell>
					</tui-list-view>
				</template>
			</tui-collapse>
		</block>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				ccwList: [
				    {
						name: "小龙虾",
						current: 0,
						weight:'1000',
				        kc:'紧张',
				        children:[
				            {
				                name:'小龙虾',
				                pc:'1234588888',
				                wt:'666'
				            },
				            {
				                name:'小龙虾',
				                pc:'1234588888',
				                wt:'666'
				            }
				        ]
					},
					{
						name: "李清照",
						current: -1,
				        weight:'1000',
				        kc:'爆满',
				        children:[
				            {
				                name:'小龙虾',
				                pc:'1234588888',
				                wt:'666'
				            },
				            {
				                name:'小龙虾',
				                pc:'1234588888',
				                wt:'666'
				            }
				        ]
					},
					{
						name: "鲁迅",
						current: -1,
				        weight:'1000',
				        kc:'爆满',
				        children:[
				            {
				                name:'小龙虾',
				                pc:'1234588888',
				                wt:'666'
				            },
				            {
				                name:'小龙虾',
				                pc:'1234588888',
				                wt:'666'
				            }
				        ]
					}
				]
			};
		},
        methods:{
            linkTo(item){
                console.log(34)
                uni.navigateTo({
                    url:'../mine/outputStock'
                })
            },
            // 打开产出物
            openHandle(e) {
                let index = 0, item = '';
                if(e.type) return;
            	index = e.index;
            	item = this.ccwList[index];
            	item.current = item.current == index ? -1 : index
            },
        }
	}
</script>

<style lang="scss" scoped>
    ::v-deep .tui-list-content {
        .tui-list-cell{
            background-color: #eaeaea !important;
        }
    }
    ::v-deep .tui-icon-arrow{
        top:36% !important;
    }
</style>
