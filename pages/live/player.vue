<template>
    <view class="vedioBox">
        <!-- src="http://open.ys7.com/ezopen/h5/live?autoplay=1&audio=1&accessToken=at.c9nj0dvoduyzk4qxbdo5q0azd5tfkt0v-8kyfnl1it4-0kzm7yq-nmt7dvqra&hd=1&deviceSerial=C93363196&channelNo=1#" -->
        
        <web-view :src="linkUrl" width="100%" height="100%" />
        
        <!-- <video id="myPlayer" controls playsinline webkit-playsinline autoplay>
            <source type="application/x-mpegURL" :src="http_url"/>
            <source :src="rtmp_url"/>
        </video> -->
    </view>
</template>
<script>
    import qs from 'qs'
    export default {
        name: 'liveComponent',
        data() {
            return {
                accessToken:'at.4vacsz7o72b5lbt50my3n957af5vy29b-5fiy604xer-0heewbo-0wcopunke',
                iframeObj: {
                    // http://open.ys7.com/ezopen/h5/live?autoplay=1&audio=1&accessToken=at.c9nj0dvoduyzk4qxbdo5q0azd5tfkt0v-8kyfnl1it4-0kzm7yq-nmt7dvqra&hd=1&deviceSerial=C93363196&channelNo=1#
                    "AppKey": "ccba7185a57c4d54802a59c1dcc53532",
                    // "AccessToken":"at.4vacsz7o72b5lbt50my3n957af5vy29b-5fiy604xer-0heewbo-0wcopunke",
                    "AccessToken": "at.4vacsz7o72b5lbt50my3n957af5vy29b-5fiy604xer-0heewbo-0wcopunke",
                    "Url": "http://open.ys7.com/ezopen/h5/live?"
                },
                linkUrl: null,
            }
        },
        created() {
            // this.http_url = 'http://hls01open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.hd.m3u8'
            // this.rtmp_url = 'rtmp://rtmp01open.ys7.com/openlive/f01018a141094b7fa138b9d0b856507b.hd'
            // this.player = new EZUIPlayer('myPlayer'); 
           
            this.linkUrl = this.iframeObj.Url + "?autoplay=1&accessToken=" + 
                this.accessToken +
                "&deviceSerial=C93363196&channelNo=1&hd=1"
            // this.linkUrl="https://open.ys7.com/ezopen/h5/live?autoplay=1&audio=1&accessToken=at.c9nj0dvoduyzk4qxbdo5q0azd5tfkt0v-8kyfnl1it4-0kzm7yq-nmt7dvqra&hd=1&deviceSerial=C93363196&channelNo=1#"
        }
    }
</script>

<style lang="scss" scoped>

</style>
