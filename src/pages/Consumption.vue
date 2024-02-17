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
                <h3 class="nav-label">jump to →</h3>
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
                    good articles
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
                        <h2 class="section-header">good articles</h2>
                        <h3 class="book">🐿️ gathering...</h3>
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
        // Set showBooks to true after a delay (optional)
        setTimeout(() => {
            this.showBooks = true
        }, 0) // Adjust delay as needed
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
.nav-row {
    padding: 16px 0px 8px 0px;
    display: flex;
    position: sticky;
    top: 0px;
    background-color: #121f12;
}
.nav-label {
    margin-right: 24px;
}
.nav-item {
    text-decoration: underline;
    font-weight: 500;
    font-size: 1.2em;
    margin: 0;
    cursor: pointer;
    margin-right: 24px;
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
.book {
    margin-top: 20px;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 900ms ease-in;
}

.fade-enter-from {
    opacity: 0;
}
</style>
