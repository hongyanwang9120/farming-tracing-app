<template>
    <!-- 投入品列表 -->
	<view class="input-list-box">
		<tui-list-view>
		     <tui-list-cell class="flex justify-between tui-list-view"
		         v-for="(item,key) in trList" :key="key">
		         <text> {{item.name}} </text>
		         <text> {{item.unit}} </text>
		         <view>
		             <tui-tag v-if="item.kc=='紧张'" type="danger" padding="12rpx 16rpx" size="24rpx">库存紧张</tui-tag>
		             <tui-tag v-if="item.kc=='爆满'" type="green" padding="12rpx 16rpx" size="24rpx">库存爆满</tui-tag>
		         </view>
		         <view >
		             <tui-button shape="circle" type="blue" 
		                width="100rpx" height="48rpx" :size="24" 
		                @click="$emit('openInput',item)">出库</tui-button>
		         </view>
		     </tui-list-cell>
		</tui-list-view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				trList:[
				    {
				        name:'玉针香种子',
				        unit:'97袋(1斤/袋)',
				        kc:'紧张'
				    },
				    {
				        name:'鲁西化肥',
				        unit:'4袋(100斤/袋)',
				        kc:'爆满'
				    },
				    {
				        name:'碳酸二氢钾',
				        unit:'30袋(1斤00/袋)',
				        kc:'爆满'
				    },
				    {
				        name:'碳酸二氢钾',
				        unit:'8袋(50斤/袋)',
				        kc:'紧张'
				    },
				    {
				        name:'玉针香种子',
				        unit:'66袋(3斤/袋)',
				        kc:'爆满'
				    }
				]
			};
		}
	}
</script>

<style lang="scss">

</style>
