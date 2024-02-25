<template>
    <div class="container">
        <router-link to="/">
            <h1 class="back-arrow">←</h1>
        </router-link>

        <div class="content">
            <div class="heading">
                <h1>
                    <span class="bold">work experience:</span> some stuff that
                    i've worked on as an employee
                </h1>
            </div>
            <Transition name="fade">
                <div v-if="showJobs">
                    <div
                        class="content-section"
                        id="jobsSection"
                        ref="jobsSection"
                    >
                        <div v-for="job in jobs" class="job-list">
                            <Job :job="job" class="job" />
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script>
import '../style.css'
import jobsData from '../data/jobs.json'
import Job from '../components/Job.vue'
import { Transition } from 'vue'

export default {
    name: 'Professional',
    data() {
        return {
            jobs: jobsData,
            showJobs: false,
        }
    },
    components: {
        Job,
    },
    mounted() {
        setTimeout(() => {
            this.showJobs = true
        }, 0)
    },
}
</script>

<style scoped>
.container {
    display: flex;
}
.content {
    display: flex;
    flex-direction: column;
    margin-top: 0;
}
.section-header {
    margin-top: 0px;
}
.content-section {
    padding-top: 16px;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 300ms ease-in;
}

.fade-enter-from {
    opacity: 0;
}

@media screen and (max-width: 1000px) {
    .container {
        flex-direction: column;
    }
    .content-section {
        padding-top: 8px;
    }
}
</style>
