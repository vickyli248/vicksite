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
        ></iframe>

        <div class="video-info">
            <h3>{{ video.name }}</h3>
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
    margin-top: 24px;
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
</style>
