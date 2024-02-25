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
            <div class="nav-row">
                <h3 class="nav-label bold">jump to →</h3>
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
            <Transition name="fade">
                <div v-if="showBooks">
                    <div
                        class="content-section"
                        id="booksSection"
                        ref="booksSection"
                    >
                        <h2 class="section-header">2024 reading list</h2>

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
                        <h2 class="section-header">
                            interesting youtube videos
                        </h2>

                        <div v-for="video in videos" class="video-list">
                            <Video :video="video" class="video" />
                        </div>
                    </div>
                    <div
                        class="content-section"
                        id="articlesSection"
                        ref="articlesSection"
                    >
                        <h2 class="section-header">other things</h2>
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
            const booksSection = this.$refs.booksSection
            const videosSection = this.$refs.videosSection
            const articlesSection = this.$refs.articlesSection
            if (section == 'booksSection') {
                booksSection.scrollIntoView({ behavior: 'smooth' })
            } else if (section == 'videosSection') {
                videosSection.scrollIntoView({ behavior: 'smooth' })
            } else if (section == 'articlesSection') {
                articlesSection.scrollIntoView({ behavior: 'smooth' })
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
.section-header {
    margin-top: 0px;
}
.content-section {
    padding-top: 48px;
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
    text-decoration: underline;
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
    .content-section {
        padding-top: 8px;
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
