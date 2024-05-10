<template>
    <div class="one-video">
        <iframe
            width="300"
            height="170"
            :src="video.link"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            modestbranding="1"
            controls="0"
            rel="0"
        ></iframe>

        <div class="video-info">
            <h3 class="bold">{{ video.name }}</h3>
            <p>{{ video.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        video: Object,
    },
}
</script>

<style scoped>
.one-video {
    display: flex;
    width: 90%;
    margin-top: 32px;
}
iframe {
    margin-right: 24px;
}
.video-info {
    display: flex;
    flex-direction: column;
}
.video-cover {
    height: 125px;
}
@media screen and (max-width: 1000px) {
    .one-video {
        flex-direction: column-reverse;
    }
    iframe {
        width: 100%;
    }
}
</style>
