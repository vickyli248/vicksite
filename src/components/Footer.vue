<template>
    <div class="footer-nav">
        <h3 class="footer-nav-label">reach me →</h3>
        <div class="footer-nav-row">
            <a
                class="footer-nav-item"
                href="https://www.linkedin.com/in/victoriayli/"
                target="_blank"
            >
                linkedin
            </a>
            <a class="footer-nav-item" href="https://twitter.com/vickyy_li">
                twitter
            </a>
            <a
                class="footer-nav-item"
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=victoria.li@berkeley.edu"
            >
                email
            </a>
        </div>
    </div>
</template>

<script>
export default {}
</script>

<style scoped>
.footer-nav {
    position: fixed;
    bottom: 16px;
}

.footer-nav,
.footer-nav-row {
    display: flex;
    align-items: center;
    gap: 32px;
}
.footer-nav-row {
    gap: 24px;
}
</style>
