<template>
    <div class="video-wrap">
        <video
            width="320"
            height="240"
            controls
            crossorigin="anonymous"
            src="~@/assets/images/index/2k1.mp4"
        />
        <video
            crossorigin="anonymous"
            preload="auto"
            :src="src"
        />
        <iframe
            src="//player.bilibili.com/player.html?aid=55537010&bvid=BV1D4411P7Bi&cid=97101176&page=1"
            scrolling="no"
            border="0"
            frameborder="no"
            framespacing="0"
            allowfullscreen="true"
        />
        <button @click="getBlob">
            请求视频
        </button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            src: '',
        };
    },
    methods: {
    },
};
</script>
