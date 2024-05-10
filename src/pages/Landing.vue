<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})
</script>

<template>
    <div class="heading">
        <h1 class="landing-title">
            <span class="bold">vicky:</span> designer, product person, &
            engineer in nyc
        </h1>
        <h3 class="spaced">
            <span class="bold">enthused by: </span> HCI of autonomous systems,
            the ingredients of a delightful consumer product, transportation &
            mobility, aviation, storytelling, engineering youtube videos,
            community-building, & the pigeons on my window ledge
        </h3>
        <h3 class="currently spaced">
            <span class="bold">currently: </span> consumer product @
            <a
                href="https://www.stubhub.com/"
                class="inline-link"
                target="_blank"
                >stubhub</a
            >, bringing more folks to more live events. yapping on
            <a
                href="https://linktr.ee/design.talks"
                class="inline-link"
                target="_blank"
                >@design.talks</a
            >
        </h3>
    </div>
    <div class="content">
        <router-link to="/professional" class="row-box">
            <div>
                <h3>work experience</h3>
                <p>some stuff that i've worked on as an employee</p>
            </div>
        </router-link>

        <router-link to="/funfunfun" class="row-box">
            <div>
                <h3>fun forays</h3>
                <p>the involuntary things that fill me with glee</p>
            </div> </router-link
        ><router-link to="/consumption" class="row-box">
            <div>
                <h3>curated consumption</h3>
                <p>books, videos, articles, the things that shape my brain</p>
            </div>
        </router-link>
    </div>
    <Footer></Footer>
</template>

<style scoped>
.landing-title {
    margin-bottom: 24px;
}
.content {
    display: flex;
    margin-top: 24px;
    width: 100%;
    align-content: space-around;
}
.row-box {
    border: 3px solid #ffffff;
    padding: 24px;
    width: 30%;
    margin-right: 12px;
    background-color: #1c271c;
    color: #ffffff;
}
.row-box:hover {
    border: 3px dashed #ffffff;
    background-color: #121f12;
    color: #ffffff;
}

@media screen and (max-width: 1000px) {
    .content {
        flex-direction: column;
        width: 100%;
    }
    .row-box {
        width: auto;
        margin-right: 0px;
        margin-bottom: 24px;
    }
    .currently {
        margin-top: 16px;
    }
}
</style>

<script>
import Footer from '../components/Footer.vue'

export default {
    name: 'Landing',
    components: {
        Footer,
    },
}
</script>
