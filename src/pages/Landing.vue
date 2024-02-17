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
            engineer in new york city
        </h1>
        <h3>
            <span class="bold">enthused by: </span> HCI of autonomous systems,
            the ingredients of a delightful consumer product, transportation &
            mobility, aviation, storytelling, engineering youtube videos, the
            pigeons on my window ledge, community building
        </h3>
        <h3>
            <span class="bold">currently: </span> consumer product @ stubhub,
            bringing more folks to more live events
        </h3>
    </div>
    <div class="content">
        <router-link to="/professional" class="row-box">
            <div>
                <h2 class="bold">“professional” work</h2>
                <p>stuff that i've done on 20 lb work laptops</p>
            </div>
        </router-link>
        <router-link to="/consumption" class="row-box">
            <div>
                <h2 class="bold">curated consumption</h2>
                <p>books, videos, articles, the things that shape my brain</p>
            </div>
        </router-link>
        <router-link to="/funfunfun" class="row-box">
            <div>
                <h2 class="bold">fun forays</h2>
                <p>the involuntary things that fill me with glee</p>
            </div>
        </router-link>
    </div>
</template>

<style scoped>
.landing-title {
    margin-bottom: 24px;
}
</style>

<script>
export default {
    name: 'Landing',
}
</script>
