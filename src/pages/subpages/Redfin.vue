<script setup>
import { ref } from 'vue'

defineProps({
    msg: String,
})
</script>

<template>
    <div class="container">
        <router-link to="/professional">
            <h1 class="back-arrow">←</h1>
        </router-link>

        <div>
            <div class="heading">
                <img src="/assets/redfin/redfin.png" class="job-banner" />
                <h1>
                    <span class="bold">Product Design @ Redfin:</span> May 2022
                    - Aug 2022, internship
                </h1>
            </div>

            <Transition name="fade">
                <div class="content">
                    <p>
                        I spent 13 weeks at Redfin in 2022, honing my technical
                        design skills and exploring the world of industry
                        product design. During my time, I exercised my design
                        research skills, learned how to effectively articulate
                        my design decisions, and how to address accessibility
                        and scalability within a design system.
                    </p>
                    <p>
                        Below, I included briefs on my internship projects. Feel
                        free to reach out to learn more about my work.
                    </p>

                    <div class="nav">
                        <h3 class="nav-label">jump to →</h3>
                        <div class="nav-row">
                            <a
                                @click.prevent="scrollToSection('projectOne')"
                                class="nav-item"
                            >
                                meta design system
                            </a>
                            <a
                                @click.prevent="scrollToSection('projectTwo')"
                                class="nav-item"
                            >
                                dynamic type
                            </a>
                            <a
                                @click.prevent="scrollToSection('otherWork')"
                                class="nav-item"
                            >
                                other work
                            </a>
                        </div>
                    </div>

                    <!-- Project 1 -->
                    <div class="project">
                        <div class="h2-row" id="projectOne" ref="projectOne">
                            <h2>Project #1 - Creating a meta design system</h2>
                            <a
                                class="see-work-subpage"
                                href="https://www.figma.com/file/F6pGiDw8OWnqbCnJrhJA5H/Meta-System---Vicky-Li?node-id=0%3A1"
                                target="_blank"
                            >
                                → see project
                            </a>
                        </div>
                        <p>
                            Redfin's Blueprint design system as a product, has a
                            separate brand identity from Redfin itself.
                            Previously, Blueprint had a scattered and
                            unorganized design system, leading to a lack of
                            brand cohesion.
                        </p>
                        <p>
                            My goal was to create a design system for the
                            Blueprint design system that is consistent with the
                            team's vision and the system's values and mission.
                        </p>
                        <h3>1. Audit of the current materials</h3>
                        <p>
                            To gather necessary components of the meta system, I
                            did an audit of the Blueprint documentation website
                            and presentational materials.
                        </p>
                        <img src="/assets/redfin/pic_1.png" class="job-img" />
                        <p>
                            Through auditing the existing materials, I started
                            to get an understanding of what types, colors, and
                            components to include in the design system.
                        </p>

                        <h3>2. The first iteration</h3>
                        <p>
                            After auditing and ensuring all color styles were
                            accessible in both light and dark mode, I put
                            together the first version of my meta system,
                            including color, type, and icon guidelines.
                        </p>
                        <img src="/assets/redfin/pic_2.png" class="job-img" />
                        <p>
                            After reviewing this version of the system with my
                            teammates, I got a few key pieces of feedback that I
                            later built on:
                        </p>
                        <p>
                            - Ensure that the typefaces included are the bare
                            minimum required to support their various use cases.
                            Does every typeface serve a necessary use case or
                            can we remove redundancies and edge cases?
                            <br />
                            - Provide usage guidelines for each style to help
                            designers know how to use your design system.
                            <br />
                            - How strict is your system? Define clear guidance
                            on how and when to extend this system as it's being
                            used.
                        </p>
                        <h3>3. The final iteration</h3>
                        <p>
                            Through applying the feedback above and going
                            through a couple more iterations, I reached my final
                            iteration.
                        </p>
                        <img src="/assets/redfin/pic_3.png" class="job-img" />
                        <p>
                            Some key changes included improvements on
                            organization, guidelines for extending the system,
                            usage guidelines, and a better balance of
                            scalability and specificity.
                        </p>
                    </div>

                    <!-- Project 2 -->
                    <div class="project">
                        <div class="h2-row" id="projectTwo" ref="projectTwo">
                            <h2>Project #2 - Dynamic Type</h2>
                            <a
                                class="see-work-subpage"
                                href="https://www.figma.com/file/dk1diZEh3o5Pmmk3mnWbrm/Dynamic-Type---Vicky-Li?node-id=0%3A1"
                                target="_blank"
                            >
                                → see project
                            </a>
                        </div>

                        <p>
                            Dynamic Type is an iOS feature that allows users to
                            change the size of the text on their screens based
                            on their needs and preferences. With approximately
                            25% of users selecting larger text sizes, improper
                            Dynamic Type support within the Redfin iOS
                            application is a major accessibility issue.
                        </p>
                        <p>
                            My goal was to research Dynamic Type and create a
                            set of guidelines that would help designers build
                            products with dynamic content sizes in mind.
                        </p>

                        <h3>1. Mobile application audit</h3>
                        <p>
                            First, I went onto the Redfin app and increased the
                            text size to look for common problems and content
                            patterns.
                        </p>
                        <img src="/assets/redfin/pic_4.png" class="job-img" />
                        <p>
                            Through the audit, I came across several common
                            issues within the application.
                        </p>
                        <p>
                            - Overflowing and cut-off text
                            <br />
                            - Cluttered layouts and disrupted content hierarchy
                            <br />
                            - Poor text truncation, loss of meaning
                        </p>
                        <h3>2. Defining scope</h3>
                        <p>
                            After auditing the app, I narrowed down the scope of
                            my guidelines to two main parts:
                        </p>
                        <p>
                            <span style="font-weight: 600"
                                >1. Selective sizing:</span
                            >
                            How should designers choose which elements should or
                            shouldn't scale based on priority?
                        </p>
                        <p>
                            <span style="font-weight: 600"
                                >2. Designing for Dynamic Type:</span
                            >
                            What guidelines should designers follow to create
                            layouts that withstand changing content sizes and
                            maintain accessibility standards?
                        </p>

                        <h3>3. Selective Sizing</h3>
                        <p>
                            Within mobile applications, screen space is
                            extremely valuable. Thus, designers must be able to
                            decide which content to scale and prioritize when
                            users select larger text sizes. To create a
                            guideline for selective sizing, I performed another
                            audit of the application to see what sorts of
                            content existed.
                        </p>
                        <img src="/assets/redfin/pic_5.png" class="job-img" />
                        <p>
                            Through this audit, I determined what types of
                            information were to be prioritized over others.
                        </p>
                        <img src="/assets/redfin/pic_6.png" class="job-img" />
                        <p>
                            As a general rule, components like nav and search,
                            do not require scaling as their consistent placement
                            across applications can communicate their usage
                            without the need for text labels. Furthermore,
                            nested components should not be scaled.
                        </p>

                        <h3>4. Designing for Dynamic Type</h3>
                        <p>
                            Following these set of guidelines, designers can
                            create layouts that are flexible to dynamic content
                            sizes. Below, I have included a subset of the
                            guidelines I proposed.
                        </p>
                        <p>
                            <span style="font-weight: 600"
                                >Column Layouts:</span
                            >
                            Making use of vertical space
                        </p>
                        <img src="/assets/redfin/pic_7.png" class="job-img" />
                        <p>
                            <span style="font-weight: 600"
                                >Expandable Containers:</span
                            >
                            Containers flex as content sizes change
                        </p>
                        <img src="/assets/redfin/pic_8.png" class="job-img" />
                        <p>
                            <span style="font-weight: 600"
                                >Multiline Text:</span
                            >
                            Avoiding text truncation
                        </p>
                        <img src="/assets/redfin/pic_9.png" class="job-img" />

                        <h3>5. The final product</h3>
                        <p>
                            Finally, after creating these guidelines, I compiled
                            them into a readable and organized page within the
                            Blueprint documentation site for designers to
                            reference.
                        </p>
                        <img src="/assets/redfin/pic_10.png" class="job-img" />
                    </div>

                    <!-- Other work -->
                    <div class="project">
                        <div class="h2-row" id="otherWork" ref="otherWork">
                            <h2>Other Work</h2>
                        </div>

                        <p>
                            Besides the two main projects I worked on, I got the
                            chance to explore various other aspects of working
                            at Redfin!
                        </p>

                        <div class="h3-row">
                            <h3>Emerging Talent marketing</h3>
                            <a
                                class="see-work-subpage"
                                href="https://www.tiktok.com/@vickyyli/video/7132972138893544746"
                                target="_blank"
                            >
                                → see content
                            </a>
                        </div>
                        <p>
                            I worked closely with the Emerging Talent team to
                            promote the 2023 internship program. Through
                            ideating and creating content for TikTok and
                            Instagram, I was able to create videos that reached
                            over 150k potential applicants.
                        </p>
                        <p>
                            Furthermore, through this effort, we quadrupled the
                            total number of applicants from the previous year,
                            reaching 10k applicants within one month of
                            application release.
                        </p>

                        <div class="h3-row">
                            <h3>Hackathon Project: Redfin Stay</h3>
                            <a
                                class="see-work-subpage"
                                href="https://www.vickyli.me/for-fun/redfin-stay"
                                target="_blank"
                            >
                                → see work
                            </a>
                        </div>
                        <img src="/assets/redfin/pic_11.png" class="job-img" />
                        <p>
                            At our company-wide hackathon, I was able to explore
                            the concept of a short-term rental application
                            within Redfin. (Note: this project is purely a
                            hypothetical design exploration) I worked with a
                            team of software engineers and designers to create a
                            prototype for this concept.
                        </p>

                        <div class="h3-row">
                            <h3>Other explorations</h3>
                        </div>
                        <p>
                            - Assisted in the rollout and beta testing process
                            for the Redfin design system.
                            <br />
                            - Worked on defining the design system and standards
                            for Redfin dark mode.
                            <br />
                            - Translated the iOS Listing Details Page to the new
                            design system.
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
    name: 'Redfin',
    mounted() {
        window.scrollTo(0, 0)
    },
    methods: {
        scrollToSection(section) {
            let targetSection = null
            let offset = 60 // Default offset for desktop
            if (window.innerWidth <= 1000) {
                // Adjust threshold as needed
                offset = 110 // Offset for mobile devices
            }

            // Determine the target section based on the provided argument
            if (section === 'projectOne') {
                targetSection = this.$refs.projectOne
            } else if (section === 'projectTwo') {
                targetSection = this.$refs.projectTwo
            } else if (section === 'otherWork') {
                targetSection = this.$refs.otherWork
            }

            // Scroll to the target section
            if (targetSection) {
                // Recalculate the section's position relative to the viewport
                const rect = targetSection.getBoundingClientRect()
                const scrollTop =
                    window.pageYOffset || document.documentElement.scrollTop
                const sectionTop = rect.top + scrollTop

                // Scroll to the target section with adjusted offset
                window.scrollTo({
                    top: sectionTop - offset, // Adjust as needed
                    behavior: 'smooth',
                })
            }
        },
    },
}
</script>
