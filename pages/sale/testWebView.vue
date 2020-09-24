<template>
	<view>
		<web-view v-if="url.length" :src="url" />
	</view>
</template>

<script>
	export default {
        onLoad(options){
            this.url = options.url;
        },
		data() {
			return {
				url:''
			};
		}
	}
</script>

<style lang="scss">

</style>
