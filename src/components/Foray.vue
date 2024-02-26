<template>
    <div class="one-foray">
        <img
            :src="`/assets/forays/${foray.img}`"
            :alt="foray.title"
            class="logo"
        />
        <div class="foray-info">
            <h3 class="bold">{{ foray.title }}</h3>
            <p>{{ foray.subtitle }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        foray: Object,
    },
}
</script>

<style scoped>
p {
    margin-top: 4px;
}
.logo {
    min-height: 150px;
    max-height: 150px;
    height: 100%;
    margin-right: 24px;
}
.one-foray {
    display: flex;
    flex-direction: row;
    margin-top: 32px;
    width: 90%;
}
.foray-info {
    display: flex;
    flex-direction: column;
}
@media screen and (max-width: 1000px) {
    .one-foray {
        flex-direction: column;
        width: 100%;
        margin-bottom: 20px;
    }
    .logo {
        margin-bottom: 12px;
    }
}
</style>
