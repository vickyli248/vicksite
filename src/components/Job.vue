<template>
    <div class="one-job">
        <img :src="`/assets/jobs/${job.img}`" :alt="job.title" class="logo" />

        <div class="job-info">
            <h3>{{ job.title }}</h3>
            <p>{{ job.description }}</p>
            <a class="see-work"> → see work </a>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        job: Object,
    },
}
</script>

<style scoped>
.logo {
    min-width: 100px;
    max-width: 100px;
    height: 100%;
    margin-right: 36px;
}
.one-job {
    display: flex;
    flex-direction: row;
    margin-top: 32px;
    width: 85%;
}

.job-info {
    display: flex;
    flex-direction: column;
}

.see-work {
    font-size: 1em;
    margin-top: 16px;
    border: 1px white solid;
    padding: 4px 10px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    width: 100px;
}
@media screen and (max-width: 1000px) {
    .one-job {
        flex-direction: column;
        width: 100%;
        margin-bottom: 20px;
    }
    .logo {
        margin-bottom: 12px;
    }
}
</style>
