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
                <img src="/assets/canoo/canoo.png" class="job-banner" />
                <h1>
                    <span class="bold">Software Development @ Canoo:</span> Jan
                    2021 - Apr 2021, internship
                </h1>
            </div>

            <Transition name="fade">
                <div class="content">
                    <p>
                        As an intern on the Software Operations team, I worked
                        on a variety of internal tools including a company KPI
                        dashboard, a vehicle software deployment tool, and a
                        vehicle tracking tool.
                    </p>
                    <p>
                        Using React and Tailwind CSS, I was able to not only
                        build features on the frontend, but also got a chance to
                        explore UI design. Here are some of the things that I
                        worked on at Canoo.
                    </p>
                    <p>
                        - Created an NPM graph wrapper package around Victory
                        charts to improve ease of development when creating data
                        visualizations.
                        <br />
                        - Took charge of redesigning an internal vehicle
                        software deployment tool to give it a brand new UI and
                        improved user experience.
                        <br />
                        - Built and designed a vehicle tracking tool from
                        scratch, fetching and parsing data from the backend, and
                        designing and building the overall page layout. This
                        application allows users to monitor information about
                        Canoo's test vehicles.
                        <br />
                        - Implemented a walkthrough tutorial component to guide
                        users through the user flow of various internal
                        applications.
                    </p>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped></style>

<script>
import '../../subpage-style.css'
export default {
    name: 'Canoo',
    mounted() {
        window.scrollTo(0, 0)
    },
}
</script>
