<template>
		
	<view :class="darkMode?'custom-dark':'custom-light'">
		<apphead></apphead>
		<view class="analysis padding-xs flex align-center">
			<view class="flex-sub text-center">
				<view class="solid-bottom text-xxl padding">
					<text class="analysis-num">{{userNum}}</text>
				</view>
				<view class="padding">{{$t('RegisteredUser')}}</view>
			</view>
			<view class="flex-sub text-center">
				<view class="solid-bottom text-xxl padding">
					<text class="analysis-num">{{projectNum}}</text>
				</view>
				<view class="padding">{{$t('ProjectThisMonth')}}</view>
			</view>
		</view>
		<ucharts-demo></ucharts-demo>
		<project-time-table></project-time-table>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	import ProjectTimeTable from '@/pages/mine/time-table.vue'
	import UchartsDemo from '@/pages/mine/ucharts-demo.vue'
	import apphead from '@/pages/common/apphead'
	export default {
		onNavigationBarButtonTap(e) {
				    console.log("success")        
				},
		components: {
			ProjectTimeTable,
			UchartsDemo,
			apphead
		},
		computed: {
			...mapGetters(['themeBgColor', 'darkMode']),
		},
		data() {
			return {
				projectNum: 199,
				userNum: 128
			}
		},
		onReady() {
		
		},
		onShow() {
			
		},
		methods: {
			
		}
	}
</script>
