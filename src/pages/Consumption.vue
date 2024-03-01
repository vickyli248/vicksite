<template>
    <div class="container">
        <router-link to="/">
            <h1 class="back-arrow">←</h1>
        </router-link>

        <div class="content">
            <div class="heading">
                <h1>
                    <span class="bold">curated consumption:</span> books,
                    videos, articles, things that shape my brain
                </h1>
            </div>
            <div class="nav">
                <h3 class="nav-label">jump to →</h3>
                <div class="nav-row">
                    <a
                        @click.prevent="scrollToSection('booksSection')"
                        class="nav-item"
                    >
                        2024 reading list
                    </a>
                    <a
                        @click.prevent="scrollToSection('videosSection')"
                        class="nav-item"
                    >
                        interesting youtube videos
                    </a>
                    <a
                        @click.prevent="scrollToSection('articlesSection')"
                        class="nav-item"
                    >
                        other things
                    </a>
                </div>
            </div>

            <Transition name="fade">
                <div v-if="showBooks">
                    <div
                        class="content-section"
                        id="booksSection"
                        ref="booksSection"
                    >
                        <h2>2024 reading list</h2>

                        <div
                            v-for="book in books"
                            :key="book.id"
                            class="book-list"
                        >
                            <Book :book="book" class="book" />
                        </div>
                    </div>
                    <div
                        class="content-section"
                        id="videosSection"
                        ref="videosSection"
                    >
                        <h2>interesting youtube videos</h2>

                        <div v-for="video in videos" class="video-list">
                            <Video :video="video" class="video" />
                        </div>
                    </div>
                    <div
                        class="content-section"
                        id="articlesSection"
                        ref="articlesSection"
                    >
                        <h2>other things</h2>
                        <div class="other-things-item">
                            <h3>
                                ML applications on roads, how to make traffic
                                more coordinated, efficient, and safe.
                            </h3>
                            <a
                                href="https://news.mit.edu/2022/machine-learning-anticipating-behavior-cars-0421"
                                class="link-item"
                            >
                                https://news.mit.edu/2022/machine-learning-anticipating-behavior-cars-0421</a
                            >
                            <a
                                href="https://news.mit.edu/2022/ai-autonomous-driving-idle-0517"
                                class="link-item"
                            >
                                https://news.mit.edu/2022/ai-autonomous-driving-idle-0517</a
                            >
                            <iframe
                                style="border-radius: 12px"
                                src="https://open.spotify.com/embed/episode/1Xgm7p8I4q37uRVPt1OqOP?utm_source=generator"
                                width="100%"
                                height="152"
                                frameBorder="0"
                                allowfullscreen=""
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                                class="spotify"
                            ></iframe>
                        </div>
                        <h3 class="loading">🐿️ gathering</h3>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script>
import '../style.css'
import Book from '../components/Book.vue'
import Video from '../components/Video.vue'
import booksData from '../data/books.json'
import videosData from '../data/videos.json'
import { Transition } from 'vue'

export default {
    name: 'Consumption',
    data() {
        return {
            books: booksData,
            showBooks: false,
            videos: videosData,
        }
    },
    components: {
        Book,
        Video,
    },
    mounted() {
        setTimeout(() => {
            this.showBooks = true
        }, 0)
    },
    methods: {
        scrollToSection(section) {
            let targetSection = null
            let offset = 20; // Default offset for desktop
            if (window.innerWidth <= 1000) { // Adjust threshold as needed
            offset = 110; // Offset for mobile devices
        }


            // Determine the target section based on the provided argument
            if (section === 'booksSection') {
                targetSection = this.$refs.booksSection
            } else if (section === 'videosSection') {
                targetSection = this.$refs.videosSection
            } else if (section === 'articlesSection') {
                targetSection = this.$refs.articlesSection
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

<style scoped>
.container {
    display: flex;
}
.content {
    display: flex;
    flex-direction: column;
    margin-top: 0;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 900ms ease-in;
}

.fade-enter-from {
    opacity: 0;
}
.loading:after {
    overflow: hidden;
    display: inline-block;
    vertical-align: bottom;
    -webkit-animation: ellipsis steps(4, end) 900ms infinite;
    animation: ellipsis steps(5, end) 900ms infinite;
    content: '\2026'; /* ascii code for the ellipsis character */
    width: 0px;
}
.other-things-item {
    display: flex;
    flex-direction: column;
    margin-top: 24px;
    width: 80%;
}
a.link-item {
    /* text-decoration: underline; */
}
.spotify {
    margin: 12px 0;
}
@keyframes ellipsis {
    to {
        width: 1.25em;
    }
}

@-webkit-keyframes ellipsis {
    to {
        width: 1.25em;
    }
}

@media screen and (max-width: 1000px) {
    .container {
        flex-direction: column;
    }
    .section-header {
        margin-top: 48px;
    }
    .other-things-item {
        width: 100%;
    }
    .link-item {
        margin-top: 12px;
    }
}
</style>
