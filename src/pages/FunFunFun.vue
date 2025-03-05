<template>
    <div class="container">
        <router-link to="/">
            <h1 class="back-arrow">←</h1>
        </router-link>

        <div class="content">
            <div class="heading">
                <h1>
                    <span class="bold">fun forays:</span> the involuntary
                    projects that fill me with glee
                </h1>
            </div>
            <!-- <div class="nav-row">
                <h3 class="nav-label bold">jump to →</h3>
                <a
                    @click.prevent="scrollToSection('booksSection')"
                    class="nav-item"
                >
                    design
                </a>
                <a
                    @click.prevent="scrollToSection('videosSection')"
                    class="nav-item"
                >
                    engineering
                </a>
                <a
                    @click.prevent="scrollToSection('articlesSection')"
                    class="nav-item"
                >
                    education
                </a>
                <a
                    @click.prevent="scrollToSection('articlesSection')"
                    class="nav-item"
                >
                    business ops
                </a>
                <a
                    @click.prevent="scrollToSection('articlesSection')"
                    class="nav-item"
                >
                    content creation
                </a>
            </div> -->
            <Transition name="fade">
                <div v-if="showForays">
                    <div
                        class="content-section"
                        id="foraysSection"
                        ref="foraysSection"
                    >
                        <div v-for="foray in forays" class="foray-list">
                            <Foray :foray="foray" class="foray" />
                        </div>
                    </div>
                </div>
            </Transition>
        </div>
    </div>
</template>

<script>
import '../style.css'
import '../subpage-style.css'
import foraysData from '../data/forays.json'
import Foray from '../components/Foray.vue'
import { Transition } from 'vue'

export default {
    name: 'FunFunFun',
    data() {
        return {
            forays: foraysData,
            showForays: false,
        }
    },
    components: {
        Foray,
    },
    mounted() {
        setTimeout(() => {
            this.showForays = true
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
}
</style>
