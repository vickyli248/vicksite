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
                <img src="/assets/bill/bill.png" class="job-banner" />
                <h1>
                    <span class="bold">Software Development @ BILL:</span> May
                    2021 - Aug 2021, internship
                </h1>
            </div>

            <Transition name="fade">
                <div class="content">
                    <p>
                        At Bill.com, I was given a chance to work on the Simba
                        team. Simba, standing for simple + basic, is Bill.com’s
                        most simple AR (accounts receivable) and AP (accounts
                        payable) solution targeted towards sole proprietors. By
                        the end of my internship, Simba had moved over $2M. I
                        specifically worked on features of Bill.com within the
                        Bank of America website application.
                    </p>
                    <p>
                        At Bill.com, I worked on two main projects which I cover
                        below.
                    </p>

                    <!-- Project 1 -->
                    <div>
                        <div class="h2-row">
                            <h2>Project #1 - Empty States</h2>
                        </div>
                        <p>
                            My first task at Bill.com was to build the empty
                            states within the application. Empty states are
                            moments in a user's experience with a product where
                            there is nothing to display. Empty states improve
                            user experience and engagement by hinting users
                            towards the correct action to take on the page.
                        </p>
                        <p>
                            Through this project I was able to communicate with
                            designers, get warmed up with Angular and GraphQL
                            for the first time, and get the hang of moving
                            around the codebase.
                        </p>
                    </div>

                    <!-- Project 2 -->
                    <div>
                        <div class="h2-row">
                            <h2>Project #2 - Bulk Payment</h2>
                        </div>
                        <p>
                            My second project involved building out the bulk
                            payment feature within Simba. Bulk pay allow users
                            to schedule up to 20 bills at one time, shortening
                            and simplifying the user workflow.
                        </p>
                        <p>
                            Since I was working on this independently, I got a
                            chance to learn about how different roles work
                            together to discuss feature requirements and
                            feasibility.
                        </p>
                        <p>For this feature, I worked on</p>
                        <p>
                            - Building the overall interface layout with
                            attention to detail regarding spacing, type, and
                            look and feel
                            <br />
                            - Fetching and parsing through data using GraphQL
                            <br />
                            - Standardizing the styling across the page
                            <br />
                            - Passing input data from user to the schedule
                            payment step
                        </p>
                    </div>

                    <!-- Takeaways -->
                    <div>
                        <div class="h2-row">
                            <h2>Takeaways</h2>
                        </div>

                        <p>
                            Through my internship at Bill.com, I learned both
                            soft and hard skills. Given that it was my first
                            time using the tech stack, I had to pick up Angular
                            and GraphQL at the very beginning of my internship
                            while starting my projects and getting acclimated to
                            the codebase and ecosystem.
                        </p>
                        <p>
                            Furthermore, I learned what it was like to write
                            quality code through code reviews and the many
                            pipelines that my code passed through. I also
                            learned how to test frontend code and learned the
                            importance of test-driven development.
                        </p>
                        <p>
                            Lastly, I got the chance to work with an amazingly
                            supportive team and practice my speaking skills
                            through passion presentations and more.
                        </p>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>
<script>
import '../../subpage-style.css'
export default {
    name: 'Bill',
    mounted() {
        window.scrollTo(0, 0)
    },
}
</script>
