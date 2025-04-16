<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})
</script>

<template>
    <div class="fullscreen-bg"></div>

    <div class="container">
        <router-link to="/funfunfun">
            <h1 class="back-arrow">←</h1>
        </router-link>

        <div>
            <div class="heading">
                <img src="/assets/together/together.png" class="job-banner" />
                <img
                    src="/assets/stubhub/stubhub-mobile.png"
                    class="job-banner-mobile"
                />
                <h1>
                    <span class="bold">Together, Long distance cooking:</span>
                    Sep 2021
                </h1>
            </div>

            <Transition name="fade">
                <div class="content">
                    <p>
                        Together is a cooking app for friends and family who are
                        living separately. They should be able to share and
                        follow along with recipes while cooking together across
                        their different households.
                    </p>
                    <p>
                        Below, I have included a brief on my design process and
                        final mockups. To see the full case, visit the link
                        below.
                    </p>
                    <a
                        class="see-work-subpage-alone"
                        href="https://www.figma.com/file/Ry8FJJoRmbEwyJ2WHwMNBv/Together---Vicky-Li?node-id=819%3A4"
                        target="_blank"
                    >
                        → see full case study
                    </a>

                    <div class="project">
                        <div class="h2-row" id="projectOne" ref="projectOne">
                            <h2>My Design Process</h2>
                        </div>
                        <p>
                            1. <span class="bold">Research</span> - Conduct user
                            interviews to identify key pains and features.
                        </p>
                        <p>
                            2. <span class="bold">Plan</span> - Build user flow
                            and plan feature design through a lo-fi wireframe.
                        </p>
                        <p>
                            3. <span class="bold">Iterate</span> - Test out
                            lo-fi wireframe with users and identify
                            improvements.
                        </p>
                        <p>
                            4. <span class="bold">Design</span> - Create a
                            design system and implement a hi-fi wireframe.
                        </p>
                    </div>
                    <div class="project">
                        <div class="h2-row" id="projectOne" ref="projectOne">
                            <h2>Key Goals and Features</h2>
                        </div>
                        <p>
                            From the prompt, there were two main goals in mind
                            for the app. First, users should have an easy way to
                            discover and share recipes among their friend /
                            family groups. Secondly, users should be able to
                            cook synchronously with their groups so that they
                            can truly feel connected when cooking together from
                            afar.
                        </p>
                    </div>
                    <div class="project">
                        <div class="h2-row" id="projectOne" ref="projectOne">
                            <h2>Initial Findings from Interviews</h2>
                        </div>
                        <p>
                            I spent some time chatting with my friends who like
                            to cook to gain some insights on how they like to
                            cook with recipes and the biggest pains of doing so.
                            I also asked them how they like to socialize with
                            friends when they are not together.
                        </p>
                        <img
                            src="/assets/together/initial-findings.png"
                            class="job-img"
                        />
                    </div>
                    <div class="project">
                        <div class="h2-row" id="projectOne" ref="projectOne">
                            <h2>Defining User Flow</h2>
                        </div>
                        <p>
                            To organize my features and thoughts, I created a
                            basic user flow map to depict the way that users
                            would move across the application.
                        </p>
                        <img
                            src="/assets/together/user-flow.png"
                            class="job-img"
                        />
                    </div>
                    <div class="project">
                        <div class="h2-row" id="projectOne" ref="projectOne">
                            <h2>Lo-Fi Wireframe</h2>
                        </div>
                        <p>
                            To better visualize the user flow and features, I
                            created a low-fidelity wireframe. Below are some of
                            the screens I created.
                        </p>
                        <img
                            src="/assets/together/lofi-wireframe.png"
                            class="job-img"
                        />
                    </div>
                    <div class="project">
                        <div class="h2-row" id="projectOne" ref="projectOne">
                            <h2>Feature Design Iteration</h2>
                        </div>
                        <p>
                            After designing the layout and core features through
                            the lo-fi wireframe, I interviewed a few more people
                            to see what sorts of features they would like to see
                            on top of what already existed in the current
                            wireframe. Here are the key insights:
                        </p>
                        <img
                            src="/assets/together/feature-iteration.png"
                            class="job-img"
                        />
                    </div>
                    <div class="project">
                        <div class="h2-row" id="projectOne" ref="projectOne">
                            <h2>Design System</h2>
                        </div>
                        <p>
                            After interviewing some folks, I moved forward with
                            creating a very basic style guideline consisting of
                            colors and typography to guide the creation of the
                            high-fidelity wireframe.
                        </p>
                        <img
                            src="/assets/together/design-system.png"
                            class="job-img"
                        />
                    </div>
                    <div class="project">
                        <div class="h2-row" id="projectOne" ref="projectOne">
                            <h2>High Fidelity Wireframe</h2>
                        </div>
                        <p>
                            After identifying missing features and getting
                            feedback through user interviewers, I was able to
                            move forward with a high fidelity wireframe that
                            incorporated these fixes as well as the design
                            system that I developed for the application. Below
                            are a subset of frames from my high-fidelity mockup.
                        </p>
                        <img
                            src="/assets/together/hifi-wireframe.png"
                            class="job-img"
                        />
                    </div>
                    <div class="project">
                        <div class="h2-row" id="projectOne" ref="projectOne">
                            <h2>Next Steps</h2>
                        </div>
                        <p>
                            While I learned a lot from building this
                            application, I would like to continue iterating the
                            application in the following ways:
                        </p>
                        <img
                            src="/assets/together/next-steps.png"
                            class="job-img"
                        />
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<style scoped></style>

<script>
import '../../subpage-style.css'
export default {
    name: 'Together',
    mounted() {
        window.scrollTo(0, 0)
    },
}
</script>
