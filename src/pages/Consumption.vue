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
            <div class="books-section">
                <h2>2024 reading list</h2>
                <div v-for="book in books" :key="book.id" class="book-list">
                    <Book :book="book" class="book" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '../style.css'
import Book from '../components/Book.vue'
import booksData from '../data/books.json'

export default {
    name: 'Consumption',
    data() {
        return {
            books: booksData,
        }
    },
    components: {
        Book,
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
.book {
    margin-top: 16px;
}
</style>
