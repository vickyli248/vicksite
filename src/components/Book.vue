<template>
    <div class="one-book">
        <img
            :src="`/assets/books/${book.image}`"
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
    width: 90%;
    margin-top: 32px;
}
.book-info {
    display: flex;
    flex-direction: column;
}
.book-cover {
    height: 150px;
}

@media screen and (max-width: 1000px) {
    .one-book {
        flex-direction: column;
        width: 100%;
        margin-top: 28px;
    }
    .book-cover {
        height: auto;
        width: 125px;
        margin-bottom: 16px
    }
}
</style>
