<template>
    <div class="one-job">
        <img
            :src="`public/assets/jobs/${job.img}`"
            :alt="job.title"
            class="logo"
        />
        <div class="job-info">
            <h3 class="bold">{{ job.title }}</h3>
            <p>{{ job.description }}</p>
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
    margin-right: 24px;
}
.one-job {
    display: flex;
    flex-direction: row;
    margin-top: 24px;
    width: 85%;
}
.job-info {
    display: flex;
    flex-direction: column;
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
