<template>
    <div class="one-book">
        <img
            :src="`src/assets/books/${book.image}`"
            :alt="book.title"
            class="book-cover"
        />
        <div class="book-info">
            <h3>{{ book.title }}</h3>
            <p>{{ book.description }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        book: Object,
    },
}
</script>

<style scoped>
img {
    margin-right: 24px;
}
.one-book {
    display: flex;
    width: 80%;
}
.book-info {
    display: flex;
    flex-direction: column;
}
.book-cover {
    height: 125px;
}
</style>
