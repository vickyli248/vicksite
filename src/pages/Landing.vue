<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})
</script>

<template>
    <div class="fullscreen-bg"></div>
    <div class="heading">
        <h1 class="landing-title">
            <span class="bold">vicky:</span> designer, product-lover, creator, &
            engineer in new york city
        </h1>
        <p class="spaced">
            <span class="bold">enthused by: </span> the quiet mechanics behind
            the everyday, invisible choices behind delightful products, the
            choreography between humans and machines, storytelling, & the
            pigeons on my window ledge
        </p>
        <p class="currently spaced">
            <span class="bold">currently: </span> consumer product @ stubhub,
            yapping on
            <a
                href="https://linktr.ee/design.talks"
                class="inline-link"
                target="_blank"
                >@design.talks</a
            >
            , creating on
            <a
                href="https://www.tiktok.com/@vickyyli"
                class="inline-link"
                target="_blank"
                >@vickyyli</a
            >
            , and designing something fun in stealth
        </p>
        <p class="currently spaced">
            <span class="bold">previous lives: </span> cs at uc berkeley, design
            sys at redfin, engineering at bill.com & canoo, freelance photographer
            & web designer/developer
        </p>
    </div>
    <div class="content">
        <router-link to="/professional" class="row-box">
            <div>
                <h3>work experience</h3>
                <p>in product, design, and engineering</p>
            </div>
        </router-link>

        <router-link to="/funfunfun" class="row-box">
            <div>
                <h3>fun forays</h3>
                <p>projects fueled with glee and curiosity</p>
            </div> </router-link
        ><router-link to="/consumption" class="row-box">
            <div>
                <h3>curated consumption</h3>
                <p>all the content that shapes my brain</p>
            </div>
        </router-link>
    </div>
    <Footer></Footer>
</template>

<style scoped>
.landing-title {
    margin-bottom: 16px;
}
.content {
    display: flex;
    margin-top: 36px;
    gap: 8px;
    width: 100%;
    align-content: space-evenly;
}
.row-box {
    border: 2px solid #ffffff;
    padding: 20px 24px;
    width: 30%;
    margin-right: 12px;
    /* background-color: #1c271c; */
    transition: all 300ms ease-in-out;
    color: #ffffff;
}
.row-box:hover {
    background-color: rgba(8, 15, 60, 0.3);
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
    .currently.spaced {
        margin-top: 24px;
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
