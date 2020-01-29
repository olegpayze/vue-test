<template>
    <div class="p-footer">
        <div class="container">
            <div class="p-footer-content row m-0 justify-content-center justify-content-xl-between flex-column flex-xl-row">
                <div class="p-footer-wrapper col col-auto justify-content-between">
                    <div class="row justify-content-center justify-content-xl-start">
                        <a href="javascript: void(0);"
                           @click="goToHome()"
                           class="p-footer-logo p-svg d-none d-xl-block"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 28"><path d="M44.98 6.79h4.44v20.47h-4.44v-5.77h-.72l-4.77 5.77h-2.38V6.79h4.44V9.9c0 2.12-.12 5.72-.21 8.21l-.03.83h.73l2.94-3.88V6.79zm-15.72 0l5.42 20.47h-4.53l-.89-3.6h-6.91l-.89 3.61h-4.53L22.35 6.8h6.91zm-.97 13.11l-2.1-8.64h-.81l-2.06 8.64h4.97zm45.95-2.86c0 4.91-3.88 8.35-8.73 8.35v2.44h-4.32v-2.46c-4.85 0-8.73-3.44-8.73-8.35s3.88-8.35 8.73-8.35V5.9h4.32v2.79c4.85 0 8.73 3.44 8.73 8.35zm-13.05-4.8c-1.62 0-4.24 1.51-4.24 4.79 0 3.28 2.63 4.79 4.24 4.79v-9.58zm8.56 4.8c0-3.28-2.63-4.79-4.24-4.79v9.57c1.61 0 4.24-1.5 4.24-4.78zM2.87 14.62c0 4.09-.53 8.15-2.87 9V28c5.46-.57 7.15-5.4 7.15-12.61v-4.98h2.91v16.86h4.44V6.79H2.87v7.83zM47.12 0H45.5l-5.41 3.15v1.72h7.03V0zM153 13.55c0 4.18-3.15 6.92-7.27 6.92-.66 0-1.33-.05-1.98-.16v6.96h-4.49V6.88c.11 0 .42-.03.87-.07 1.11-.1 3.06-.26 4.67-.26 4.73 0 8.2 2.25 8.2 7zm-4.49.08c0-2.05-1.33-3.03-3.31-3.03-.44 0-1.22 0-1.46.04v5.78c.47.17.96.25 1.46.24 1.94 0 3.31-1.06 3.31-3.03zm-26.34-6.84h-4.61l-2.99 10.03h-.97V6.79h-4.4v20.47h4.4v-6.62h.81l5.17 6.62h1.87v-4.75c-.35-.49-.75-1.03-1.16-1.57-.61-.83-1.23-1.67-1.72-2.36.53-1.55 1.24-3.81 1.7-5.36l1.9-6.43zm-20.81 0l5.42 20.47h-4.53l-.89-3.6h-6.91l-.89 3.61h-4.53L94.45 6.8h6.91zm-.98 13.11l-2.1-8.64h-.81l-2.06 8.64h4.97zm-13.29-7.5V6.79h-1.94l-.26.48c-.85 1.57-1.92 3.53-2.65 5.01l-.85.01c-.82-1.65-2.02-3.86-2.92-5.5h-1.94v5.61l2.55 4.26-2.9 4.95v5.65h1.94l3.27-6.22h.85l3.27 6.22h1.94v-5.65l-2.9-4.95 2.54-4.26zm42.84 7.71h4.33v-3.94h-4.33v-5.29h5.26V6.79h-9.66v20.47h9.98v-4.09h-5.58v-3.06z"/></svg>
                        </a>
                        <div class="p-footer-menu navbar-expand">
                            <ul class="navbar-nav mr-auto flex-wrap flex-md-nowrap">
                                <li class="nav-item col-6 col-md-auto">
                                    <a href="javascript:void(0);" class="nav-link text-center" target="_blank">О компании</a>
                                </li>
                                <li class="nav-item col-6 col-md-auto">
                                    <a href="javascript:void(0);" class="nav-link text-center" target="_blank">Помощь</a>
                                </li>
                                <li class="nav-item col-6 col-md-auto">
                                    <a href="javascript:void(0);" class="nav-link text-center" target="_blank">Презентация</a>
                                </li>
                                <li class="nav-item col-6 col-md-auto">
                                    <a href="javascript:void(0);" class="nav-link text-center" target="_blank">Контакты</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div class="p-footer-social col col-auto justify-content-center justify-content-xl-between">
                    <div class="row justify-content-center">
                        <a href="https://www.facebook.com/" class="p-footer-social-item p-svg" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13.5 26.64"><path d="M3.86 26.64V14.8H0V9.87h3.86V6.91C3.86 2.84 6.1 0 9.64 0h3.86v4.93h-1.93c-1.93 0-2.89.99-2.89 2.96v1.97h4.82l-.96 4.93H8.68v11.84H3.86z"/></svg>
                        </a>
                        <a href="http://vk.com/" class="p-footer-social-item p-svg" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.4 17.6"><path d="M14.87 17.53s-4.01.25-7.54-3.48C3.48 9.97.08 1.9.08 1.9s-.2-.53.02-.78C.34.83.99.81.99.81L5.33.78s.41.07.7.29c.24.18.38.52.38.52s.7 1.8 1.63 3.43C9.85 8.2 10.7 8.9 11.32 8.56c.9-.5.63-4.5.63-4.5s.02-1.45-.45-2.1c-.36-.5-1.05-.65-1.35-.69-.24-.03.16-.61.68-.87.78-.39 2.16-.41 3.79-.39 1.27.01 1.64.09 2.13.22 1.5.37.99 1.78.99 5.18 0 1.09-.19 2.62.58 3.13.33.22 1.15.03 3.18-3.48.97-1.66 1.69-3.62 1.69-3.62s.16-.35.4-.5c.25-.15.59-.11.59-.11L28.75.8s1.37-.17 1.6.46c.23.66-.51 2.2-2.38 4.73-3.07 4.15-3.41 3.76-.86 6.16 2.43 2.29 2.94 3.4 3.02 3.54 1.01 1.69-1.12 1.83-1.12 1.83l-4.06.06s-.87.18-2.02-.63c-1.52-1.06-2.95-3.81-4.07-3.45-1.13.36-1.1 2.84-1.1 2.84s.01.53-.25.81c-.28.31-.83.37-.83.37h-1.81v.01z"/></svg>
                        </a>
                        <a href="https://instagram.com/" class="p-footer-social-item p-svg" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26.83 26.83"><path d="M25.1 1.86C23.86.62 22.25 0 20.15 0H6.55C4.58 0 2.84.62 1.73 1.73.62 2.84 0 4.57 0 6.55v13.6c0 1.98.62 3.71 1.86 4.95 1.23 1.11 2.84 1.73 4.82 1.73h13.48c1.98 0 3.71-.62 4.82-1.73 1.23-1.11 1.85-2.85 1.85-4.82V6.68c0-1.98-.62-3.58-1.73-4.82zm-11.75 19.9c-4.7 0-8.41-3.84-8.41-8.41 0-4.7 3.84-8.41 8.41-8.41 4.58 0 8.53 3.71 8.53 8.41s-3.83 8.41-8.53 8.41zm8.78-15.2c-1.11 0-1.98-.87-1.98-1.98s.87-1.98 1.98-1.98 1.98.86 1.98 1.98c0 1.11-.87 1.98-1.98 1.98zm-2.84 6.86c0 3.22-2.63 5.84-5.87 5.84s-5.87-2.61-5.87-5.84 2.63-5.84 5.87-5.84 5.87 2.61 5.87 5.84z"/></svg>
                        </a>
                        <a href="http://www.youtube.com/" class="p-footer-social-item p-svg" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 34.4 22.4"><path d="M32.41 20.7c-1.36 1.21-3.47 1.7-7.26 1.7H9.25C1.43 22.4 0 19.56 0 13.96V8.45c0-2.89 0-4.98 1.21-6.4C2.44.59 4.77 0 9.25 0h15.89c4.38 0 6.67.56 7.91 1.92 1.25 1.37 1.34 3.47 1.34 6.52v5.51c.01 3.5-.59 5.52-1.98 6.75zM22.08 10.14l-7.22-3.47c-.34-.16-.76-.15-1.09.03-.33.19-.53.52-.53.88v6.96c0 .36.2.69.53.88.18.1.38.15.57.15.18 0 .35-.04.51-.12l7.22-3.49c.37-.18.6-.53.6-.91.01-.38-.22-.73-.59-.91z"/></svg>
                        </a>
                        <a href="https://twitter.com/" class="p-footer-social-item p-svg" target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.4 22.4"><path d="M30.28 2.7c.14.15.15.37.03.53-.8 1.08-1.78 2.01-2.92 2.78.01.16.01.33.01.49 0 3.86-1.66 7.76-4.55 10.71-2.32 2.37-6.47 5.18-13.12 5.18-3.38 0-6.67-.87-9.52-2.51a.432.432 0 0 1-.2-.52c.08-.19.29-.31.52-.29.45.05.92.07 1.38.07 2.22 0 4.33-.55 6.17-1.59-2.22-.45-4.07-1.93-4.78-3.94a.41.41 0 0 1 .1-.43c.11-.12.29-.17.46-.14.17.03.33.05.5.06-1.93-1.04-3.19-2.94-3.19-5.05v-.08c0-.15.1-.3.25-.37a.51.51 0 0 1 .48 0c.28.14.57.26.87.35-.98-1.03-1.54-2.37-1.54-3.78 0-1.04.31-2.06.88-2.95a.53.53 0 0 1 .81-.06c2.85 3.15 7 5.12 11.47 5.48-.03-.25-.05-.5-.05-.76 0-3.24 2.93-5.87 6.53-5.87 1.7 0 3.35.61 4.57 1.68 1.2-.24 2.35-.65 3.42-1.22.18-.09.4-.08.56.03.16.11.22.31.16.48-.28.78-.73 1.49-1.32 2.09.5-.13.99-.29 1.47-.48.18-.09.41-.04.55.11z"/></svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        data() {
            return {}
        },
        methods: {
            // возврат на страницу Карьера
            goToHome() {
                // если мы уже на странице Карьера
                if(this.$route.path.indexOf('career') !== -1) {
                    //скроллим к шапке
                    this.$scrollTo('.p-header', 1300);
                } else {
                    //переходим на страницу Карьера
                    this.$router.push({ path: '/career/' });
                }
            }
        }
    }
</script>

<style lang="scss" scoped>

    @import "../assets/scss/variables.scss";

    .p-footer {
        background-color: #001722;
    }
    .p-footer-content {
        padding: 3.25rem 0;
    }
    .p-footer-logo {
        display: block;
        width: 129px;
        padding-bottom: 39px;
        margin-right: 68px;

        svg {
            fill: #656565;
        }
    }
    .p-footer-menu {
        font-family: $font-family-alternative;
        font-size: 16px;
        line-height: 16px;

        .navbar-nav {
            .nav-item {
                padding: 0;
            }
            .nav-link {
                padding: 0.7rem 0.81rem;
                -webkit-transition: color 300ms;
                -moz-transition: color 300ms;
                -ms-transition: color 300ms;
                -o-transition: color 300ms;
                transition: color 300ms;
                color: #858585;

                &:hover {
                    color: $color-general;
                }
            }
        }
    }
    .p-footer-social {
        margin-top: 5px;
    }
    .p-footer-social-item {
        width: 33px;
        padding-bottom: 28px;
        margin: 0 1.13rem;

        &:first-child {
            margin-left: 0;
        }
        &:last-child {
            margin-right: 0;
        }
        svg {
            -webkit-transition: fill 300ms;
            -moz-transition: fill 300ms;
            -ms-transition: fill 300ms;
            transition: fill 300ms;
            fill: #656565;
        }
        &:hover svg {
            fill: $color-general;
        }
    }

    //Adaptive
    @import "../assets/scss/custom.scss";
    @import "../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-footer-content {
            padding: 1.5rem 0 1.8rem;
        }
        .p-footer-menu .navbar-nav .nav-link {
            margin-bottom: 0.45rem;
        }
        .p-footer-social {
            margin-top: 1.75rem;
        }
        .p-footer-social-item {
            width: 28px;
            padding-bottom: 22px;
            margin: 0 0.95rem;
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-footer-content {
            padding: 0.85rem 0 1.9rem;
        }
        .p-footer-social {
            margin-top: 0.9rem;
        }
        .p-footer-social-item {
            width: 25px;
            padding-bottom: 22px;
            margin: 0 1rem;
        }
    }

</style>

<style lang="scss">

    .p-header + .p-footer {
        margin-top: calc(100vh - 143px);
    }

    //Adaptive
    @import "../assets/scss/custom.scss";
    @import "../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-header + .p-footer {
            margin-top: calc(100vh - 194px);
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-header + .p-footer {
            margin-top: calc(100vh - 119px);
        }
    }

</style>
