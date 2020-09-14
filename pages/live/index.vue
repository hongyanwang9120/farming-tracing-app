<template>
	<view>
		<apphead></apphead>
		<uni-nav-bar :fixed="true" color="#333333" :background-color="themeBgColor" :border="false">
			<view class="input-view">
				<uni-icons type="search" size="22" color="#666666" />
				<input v-model="searchVal" confirm-type="search" class="input" type="text" placeholder="搜索项目" @confirm="search">
				<uni-icons :color="'#999999'" v-if="searchVal!==''" class="icon-clear" type="clear" size="22" @click="clear" />
			</view>
		</uni-nav-bar>
		<swiper :class="darkMode?'custom-dark':'custom-light'" class="tab-content" :style="{height:winHeight+'px'}">
			<swiper-item>
				<scroll-view scroll-y class="scoll-y">
					<project-list ref="projectListRef"></project-list>
				</scroll-view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import { mapGetters } from 'vuex'
	import uniIcons from '@/components/uni-icons/uni-icons.vue'
	import uniNavBar from '@/components/uni-nav-bar/uni-nav-bar.vue'
	import projectList from '@/pages/live/project-list.vue'
	import apphead from '@/pages/common/apphead'
	export default {
		components: {
			uniIcons,
			uniNavBar,
			projectList,
			apphead
		},
		computed: {
			...mapGetters(['themeBgColor', 'darkMode']),
		},
		data() {
			return {
				searchVal: '',
				// 窗口高度
				winHeight: ""
			}
		},
		onReady() {
			// uni.setNavigationBarTitle({
			//     title: this.$t('企业直播')
			// })
			// this.setNavBarColor()
		},
		onShow() {
		
		},
		onLoad() {
			//  高度自适应
			uni.getSystemInfo({
				success: res => {
					this.winHeight = res.windowHeight
				}
			})
		},
		methods: {
		
			search() {
				this.$refs.projectListRef.queryByName(this.searchVal)
			},
			clear() {
				this.searchVal = ''
				this.search()
			}
		}
	}
</script>
