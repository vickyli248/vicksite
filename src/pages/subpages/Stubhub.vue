<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})
</script>

<template>
    <div class="fullscreen-bg"></div>

    <div class="container">
        <router-link to="/professional">
            <h1 class="back-arrow">←</h1>
        </router-link>

        <div>
            <div class="heading">
                <img src="/assets/stubhub/stubhub.png" class="job-banner" />
                <img
                    src="/assets/stubhub/stubhub-mobile.png"
                    class="job-banner-mobile"
                />
                <h1>
                    <span class="bold">Product Manager @ StubHub:</span> Aug
                    2023 - Present
                </h1>
            </div>

            <Transition name="fade">
                <div class="content">
                    <p>Cooking, please hold.</p>

                    <!-- Project 1 -->
                    <div class="project">
                        <div class="h2-row">
                            <h2>In the meantime, the TLDR:</h2>
                        </div>
                        <p>
                            50% Scoping, planning, and prioritizing product
                            features and projects to target the highest impact
                            areas and user problems. Bridging product, data, and
                            engineering to create delightful and useful
                            experiences for event-goers.
                        </p>
                        <p>
                            20% on Snowflake or Hex writing various SQL queries
                            to glean user behavior insights to support product
                            decisions and build dashboards to serve as
                            continuous sources of truth about our product and
                            users.
                        </p>
                        <p>
                            20% running and prepping weekly team innovation
                            ceremonies to ensure healthy ideation. Managing and
                            grooming our backlog, running retros to improve team
                            process, and of course... the correspondences...
                        </p>
                        <p>
                            10% on Figma, designing and prototyping upcoming
                            features, reviewing designs, dropping an obscene
                            number of comments.
                        </p>
                        (This would've been better as a pie chart huh)
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped>
</style>

<script>
import '../../subpage-style.css'
export default {
    name: 'Stubhub',
    mounted() {
        window.scrollTo(0, 0)
    },
}
</script>
