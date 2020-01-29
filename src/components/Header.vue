<template>
    <div class="p-header"
         :class="{ 'is-fixed': fixedMenu }"
    >
        <div @click="closeAdaptiveMenu()"
             class="p-navigation"
             :class="{ 'p-active': menuOpen }"
        >
            <div class="container">
                <div class="p-header-content navbar navbar-expand flex-column flex-xl-row justify-content-start justify-content-xl-between align-items-start align-items-xl-center">

                    <router-link to="/" tag="a" class="p-header-logo p-svg" exact>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 28"><path d="M44.98 6.79h4.44v20.47h-4.44v-5.77h-.72l-4.77 5.77h-2.38V6.79h4.44V9.9c0 2.12-.12 5.72-.21 8.21l-.03.83h.73l2.94-3.88V6.79zm-15.72 0l5.42 20.47h-4.53l-.89-3.6h-6.91l-.89 3.61h-4.53L22.35 6.8h6.91zm-.97 13.11l-2.1-8.64h-.81l-2.06 8.64h4.97zm45.95-2.86c0 4.91-3.88 8.35-8.73 8.35v2.44h-4.32v-2.46c-4.85 0-8.73-3.44-8.73-8.35s3.88-8.35 8.73-8.35V5.9h4.32v2.79c4.85 0 8.73 3.44 8.73 8.35zm-13.05-4.8c-1.62 0-4.24 1.51-4.24 4.79 0 3.28 2.63 4.79 4.24 4.79v-9.58zm8.56 4.8c0-3.28-2.63-4.79-4.24-4.79v9.57c1.61 0 4.24-1.5 4.24-4.78zM2.87 14.62c0 4.09-.53 8.15-2.87 9V28c5.46-.57 7.15-5.4 7.15-12.61v-4.98h2.91v16.86h4.44V6.79H2.87v7.83zM47.12 0H45.5l-5.41 3.15v1.72h7.03V0zM153 13.55c0 4.18-3.15 6.92-7.27 6.92-.66 0-1.33-.05-1.98-.16v6.96h-4.49V6.88c.11 0 .42-.03.87-.07 1.11-.1 3.06-.26 4.67-.26 4.73 0 8.2 2.25 8.2 7zm-4.49.08c0-2.05-1.33-3.03-3.31-3.03-.44 0-1.22 0-1.46.04v5.78c.47.17.96.25 1.46.24 1.94 0 3.31-1.06 3.31-3.03zm-26.34-6.84h-4.61l-2.99 10.03h-.97V6.79h-4.4v20.47h4.4v-6.62h.81l5.17 6.62h1.87v-4.75c-.35-.49-.75-1.03-1.16-1.57-.61-.83-1.23-1.67-1.72-2.36.53-1.55 1.24-3.81 1.7-5.36l1.9-6.43zm-20.81 0l5.42 20.47h-4.53l-.89-3.6h-6.91l-.89 3.61h-4.53L94.45 6.8h6.91zm-.98 13.11l-2.1-8.64h-.81l-2.06 8.64h4.97zm-13.29-7.5V6.79h-1.94l-.26.48c-.85 1.57-1.92 3.53-2.65 5.01l-.85.01c-.82-1.65-2.02-3.86-2.92-5.5h-1.94v5.61l2.55 4.26-2.9 4.95v5.65h1.94l3.27-6.22h.85l3.27 6.22h1.94v-5.65l-2.9-4.95 2.54-4.26zm42.84 7.71h4.33v-3.94h-4.33v-5.29h5.26V6.79h-9.66v20.47h9.98v-4.09h-5.58v-3.06z"/></svg>
                    </router-link>

                    <div class="p-close d-xl-none" @click="switchAdaptiveMenu()"><!-- --></div>

                    <div class="p-header-menu">
                        <ul class="navbar-nav flex-column flex-xl-row">
                            <li class="nav-item"><a :href=" $urlGeneral " class="nav-link">Главная</a></li>
                            <li class="nav-item"><a :href=" $urlGeneral + '/games/'" class="nav-link">Игры</a></li>
                            <li class="nav-item active p-subnavbar-wrapper" :class="{ 'p-open': submenuOpen }">
                                <a href="javascript:void(0);" class="nav-link" @click="submenuOpen = !submenuOpen">карьера</a>
                                <ul class="p-subnavbar d-xl-none">
                                    <template v-for="item in router"
                                              v-if="!isHidden && !item.hiddenMenu">
                                        <router-link :to="item.path"
                                                     tag="li"
                                                     active-class="active"
                                                     @click.native="switchAdaptiveMenu()"
                                        >
                                            <a href="javascript:void(0);">{{item.meta.name}}</a>
                                        </router-link>
                                    </template>
                                </ul>
                            </li>
                            <li class="nav-item"><a :href=" $urlGeneral + '/about/'" class="nav-link">о компании</a></li>
                            <li class="nav-item"><a :href=" $urlGeneral + '/contacts/'" class="nav-link">контакты</a></li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>

        <div class="p-subnavigation">
            <div class="container">
                <div class="p-header-content navbar navbar-expand justify-content-between">
                    <div class="p-header-link">
                        <transition name="fade">
                            <router-link to="/vacancy/"
                                         tag="a"
                                         v-if="isButtonBack && !buttonBackHide"
                                         class="p-header-back"
                                         exact>
                                К вакансиям
                            </router-link>
                        </transition>
                        <div class="p-switcher d-xl-none" @click="switchAdaptiveMenu()"><!-- --></div>
                        <router-link to="/" tag="a" class="p-header-logo p-svg d-xl-none" exact>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 28"><path d="M44.98 6.79h4.44v20.47h-4.44v-5.77h-.72l-4.77 5.77h-2.38V6.79h4.44V9.9c0 2.12-.12 5.72-.21 8.21l-.03.83h.73l2.94-3.88V6.79zm-15.72 0l5.42 20.47h-4.53l-.89-3.6h-6.91l-.89 3.61h-4.53L22.35 6.8h6.91zm-.97 13.11l-2.1-8.64h-.81l-2.06 8.64h4.97zm45.95-2.86c0 4.91-3.88 8.35-8.73 8.35v2.44h-4.32v-2.46c-4.85 0-8.73-3.44-8.73-8.35s3.88-8.35 8.73-8.35V5.9h4.32v2.79c4.85 0 8.73 3.44 8.73 8.35zm-13.05-4.8c-1.62 0-4.24 1.51-4.24 4.79 0 3.28 2.63 4.79 4.24 4.79v-9.58zm8.56 4.8c0-3.28-2.63-4.79-4.24-4.79v9.57c1.61 0 4.24-1.5 4.24-4.78zM2.87 14.62c0 4.09-.53 8.15-2.87 9V28c5.46-.57 7.15-5.4 7.15-12.61v-4.98h2.91v16.86h4.44V6.79H2.87v7.83zM47.12 0H45.5l-5.41 3.15v1.72h7.03V0zM153 13.55c0 4.18-3.15 6.92-7.27 6.92-.66 0-1.33-.05-1.98-.16v6.96h-4.49V6.88c.11 0 .42-.03.87-.07 1.11-.1 3.06-.26 4.67-.26 4.73 0 8.2 2.25 8.2 7zm-4.49.08c0-2.05-1.33-3.03-3.31-3.03-.44 0-1.22 0-1.46.04v5.78c.47.17.96.25 1.46.24 1.94 0 3.31-1.06 3.31-3.03zm-26.34-6.84h-4.61l-2.99 10.03h-.97V6.79h-4.4v20.47h4.4v-6.62h.81l5.17 6.62h1.87v-4.75c-.35-.49-.75-1.03-1.16-1.57-.61-.83-1.23-1.67-1.72-2.36.53-1.55 1.24-3.81 1.7-5.36l1.9-6.43zm-20.81 0l5.42 20.47h-4.53l-.89-3.6h-6.91l-.89 3.61h-4.53L94.45 6.8h6.91zm-.98 13.11l-2.1-8.64h-.81l-2.06 8.64h4.97zm-13.29-7.5V6.79h-1.94l-.26.48c-.85 1.57-1.92 3.53-2.65 5.01l-.85.01c-.82-1.65-2.02-3.86-2.92-5.5h-1.94v5.61l2.55 4.26-2.9 4.95v5.65h1.94l3.27-6.22h.85l3.27 6.22h1.94v-5.65l-2.9-4.95 2.54-4.26zm42.84 7.71h4.33v-3.94h-4.33v-5.29h5.26V6.79h-9.66v20.47h9.98v-4.09h-5.58v-3.06z"/></svg>
                        </router-link>
                    </div>
                    <div class="p-header-menu d-none d-md-block">
                        <ul class="navbar-nav">
                            <template v-for="item in router"
                                      v-if="!isHidden
                                    && !item.hiddenMenu">
                                <router-link :to="item.path"
                                             tag="li"
                                             @click.native="resetModalStyle()"
                                             class="nav-item"
                                             active-class="active"
                                >
                                    <a href="javascript:void(0);" class="nav-link">{{item.meta.name}}</a>
                                </router-link>
                            </template>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { routes } from '../router/routes';

    export default {
        data() {
            return {
                router: routes,
                isHidden: false,
                menuOpen: false,
                submenuOpen: true,
                fixedMenu: false,
                buttonBackHide: false
            }
        },
        computed: {
            // Показываем кнопку "Назад к вакансиям" только на страницах (detail, questionary)
            isButtonBack() {
                return this.$route.path.indexOf('detail') !== -1 || this.$route.path.indexOf('questionary') !== -1;
            },
        },
        mounted() {
            window.addEventListener('scroll', this.setFixedMenu);
        },
        methods: {
            // Скрытие подменю при скролле
            setFixedMenu() {
                (window.pageYOffset > 0 && window.innerWidth >= 1200) ? this.fixedMenu = true : this.fixedMenu = false;
                if(window.innerWidth <= 1200) {
                    (window.pageYOffset === 0) ? this.buttonBackHide = false : this.buttonBackHide = true;
                }
            },
            // Переключение главного меню в адаптиве
            switchAdaptiveMenu() {
                if(this.menuOpen) {
                    this.menuOpen = !this.menuOpen;
                    this.resetModalStyle();
                } else {
                    this.menuOpen = !this.menuOpen;
                    this.setModalStyle();
                }
            },
            // Сброс стилей модального окна меню
            resetModalStyle() {
                const body = document.querySelector('body'),
                      header = document.querySelector('.p-header');
                body.removeAttribute('style');
                header.removeAttribute('style');
            },
            // Установка стилей модального окна меню
            setModalStyle() {
                const body = document.querySelector('body'),
                      header = document.querySelector('.p-header');
                body.style.overflow = 'hidden';
                body.style.paddingRight = '17px';
                header.style.paddingRight = '17px';
            },
            // Закрытие главного меню при клике на обёртку
            closeAdaptiveMenu() {
                (event.target.classList.contains('p-navigation')) ? this.switchAdaptiveMenu() : false
            },
        }
    }
</script>

<style lang="scss" scoped>

    @import "../assets/scss/variables.scss";

    .p-header {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 100;
        color: #3f3f3f;
        font-family: $font-family-alternative;
        box-shadow: 0 2px 22px hsla(210, 16%, 17%, 0.13);
        transition: opacity 300ms;
        pointer-events: auto;
        opacity: 1;

        &.is-fixed {

            .p-subnavigation {
                max-height: 0;
            }
            &:hover {
                .p-subnavigation {
                    max-height: 150px;
                }
            }
        }
    }
    .p-header-content {
        padding: 1.15rem 0;
    }
    .p-close {
        position: absolute;
        top: 1.5rem;
        right: 1.45rem;
        width: 18px;
        height: 0;
        padding-bottom: 18px;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNi44NSAxNi44NSI+PHBhdGggZmlsbD0iIzNGM0YzRiIgZD0iTTkuODQgOC40M2w2LjggNi44LTEuNDEgMS40MS02LjgtNi44LTcuMDEgNy4wMUwwIDE1LjQ0bDcuMDEtNy4wMS02LjgtNi44TDEuNjIuMjJsNi44IDYuOEwxNS40NCAwbDEuNDEgMS40MS03LjAxIDcuMDJ6Ii8+PC9zdmc+") 50% 50% no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        cursor: pointer;
    }
    .p-switcher {
        display: inline-block;
        vertical-align: middle;
        margin-right: 1rem;
        width: 20px;
        height: 0;
        padding-bottom: 20px;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMCAxNyI+PHBhdGggZmlsbD0iIzE3MTcxNyIgZD0iTTIwIDB2M0gwVjBoMjB6TTAgMTBoMjBWN0gwdjN6bTAgN2gyMHYtM0gwdjN6Ii8+PC9zdmc+") 50% 50% no-repeat;
        -webkit-background-size: 100% 100%;
        background-size: 100% 100%;
        cursor: pointer;
    }
    .p-header-menu .navbar-nav {
        .nav-link {
            color: $color-strong-text;
            padding-right: 1.03rem;
            padding-left: 1.03rem;
            -webkit-transition: color 300ms;
            -moz-transition: color 300ms;
            -ms-transition: color 300ms;
            transition: color 300ms;
            font-size: 15px;
            line-height: 15px;
            font-weight: 500;
        }
        .nav-item:last-child .nav-link {
            padding-right: 0;
        }
        .nav-item.active .nav-link,
        .nav-link:hover {
            color: $color-general;
        }
        /*.nav-item.active .nav-link {*/
            /*pointer-events: none;*/
        /*}*/
    }
    .p-navigation {
        background-color: hsla(100, 100%, 100%, 0.95);
        position: relative;
        z-index: 2;

        .p-header-menu .navbar-nav .nav-link {
            text-transform: uppercase;
        }
    }
    .p-subnavigation {
        max-height: 150px;
        background-color: hsla(210, 20%, 98%, 0.95);
        position: relative;
        overflow: hidden;
        -webkit-transition: max-height 500ms;
        -moz-transition: max-height 500ms;
        -ms-transition: max-height 500ms;
        transition: max-height 500ms;
        z-index: 1;

        .p-header-menu {
            margin: 3px 0;

            .navbar-nav .nav-link {
                padding-right: 1.23rem;
                padding-left: 1.23rem;
            }
        }
        .p-header-content {
            padding: 0.92rem 0;
        }
    }
    .p-subnavbar-wrapper {
        .p-subnavbar {
            list-style: none;
            margin: 0;
            padding: 0 2rem 0 3.1rem;
            max-height: 0;
            transition: all 400ms;
            overflow: hidden;
            a {
                display: block;
                width: 100%;
                padding: 0.5rem 0;
                font-size: 16px;
                line-height: 16px;
                font-weight: 500;
                font-family: $font-family-alternative;
                color: $color-strong-text;
                text-decoration: none !important;
                margin-bottom: 0.65rem;
            }
            li:last-child a {
                margin-bottom: 0 !important;
            }
            a:hover,
            .active a {
                color: $color-general;
            }
        }

        &.p-open {
            .p-subnavbar {
                padding-bottom: 1rem;
                max-height: 1000px;
            }
        }
    }
    .p-header-logo {
        display: inline-block;
        vertical-align: middle;
        position: relative;
        width: 159px;
        height: 0;
        padding-bottom: 49px;
        cursor: pointer;

        svg {
            fill: $color-general;
        }
    }
    .p-header-back {
        font-size: 14px;
        line-height: 14px;
        font-family: $font-family-alternative;
        color: $color-strong-text;
        white-space: nowrap;
        -webkit-transition: color 300ms;
        -moz-transition: color 300ms;
        -ms-transition: color 300ms;
        transition: color 300ms;
        cursor: pointer;
        text-decoration: none!important;

        &:hover {
            color: $color-general;
        }
        &:before {
            content: '';
            position: relative;
            display: inline-block;
            width: rem-calc(35);
            height: 0;
            padding-bottom: rem-calc(35);
            vertical-align: middle;
            margin-right: 0.7rem;
            background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNy42IDM3LjYiPjxwYXRoIGZpbGw9IiMyOUQxMjQiIGQ9Ik0yNC44IDE3LjYxaC05LjczbDQuNDUtNC40OUwxOC40IDEyIDEyIDE4LjRsNi40IDYuNCAxLjEyLTEuMTMtNC40NS00LjQ5aDkuNzN6Ii8+PC9zdmc+') center no-repeat;
            background-size: 100% 100%;
            -webkit-box-sizing: content-box;
            -moz-box-sizing: content-box;
            box-sizing: content-box;
            border: 1px solid $color-general;
            -webkit-border-radius: 50%;
            -moz-border-radius: 50%;
            border-radius: 50%;
        }
    }

    //Adaptive
    @import "../assets/scss/custom.scss";
    @import "../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-navigation {
            &.p-active {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: hsla(0, 0%, 0%, 0.8);

                .container {
                    transform: translateX(0);
                }
            }
            .container {
                position: absolute;
                top: 0;
                left: 0;
                transform: translateX(-100%);
                transition: transform 400ms;
                width: 88.8%;
                padding: 0;
                background-color: #ffffff;
            }
            .p-header-content {
                padding: 1.25rem 0 2.5rem;
                min-width: 100%;
            }
            .p-header-menu {
                width: 100%;

                /*.navbar-nav .nav-item.active .nav-link {*/
                    /*pointer-events: auto;*/
                /*}*/
            }
            .nav-item {
                &.active {
                    background-color: #f9fafb;
                }
                .nav-link {
                    padding: 1rem 1.65rem;
                    font-size: 16px;
                    line-height: 16px;
                }
            }
            .p-subnavbar-wrapper {
                .nav-link {
                    position: relative;

                    &:after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        margin-top: -3px;
                        right: 1.6rem;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-color: $color-general transparent transparent transparent;
                        border-width: 7px 7px 0 7px;
                        transition: transform 300ms;
                    }
                }
                &.p-open {
                    .nav-link:after {
                        transform: rotate(180deg);
                    }
                }

                /*.p-subnavbar .active a {*/
                    /*pointer-events: none;*/
                /*}*/
            }
            .p-header-logo {
                width: 80px;
                padding-bottom: 25px;
                margin: 0 0 1.75rem 1.7rem;
            }
        }
        .p-header-back {
            position: absolute;
            left: 0;
            top: calc(100% + 10px);
        }
        .p-header-logo {
            width: 80px;
            padding-bottom: 27px;
        }
        .p-subnavigation {
            overflow: visible;

            .p-header-menu {
                margin: 0;
            }
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-navigation {
            &.p-active {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: hsla(0, 0%, 0%, 0.8);

                .container {
                    transform: translateX(0);
                }
            }
            .container {
                position: absolute;
                top: 0;
                left: 0;
                transform: translateX(-100%);
                transition: transform 400ms;
                width: auto;
                padding: 0;
                background-color: #ffffff;
            }
            .p-header-content {
                padding: 1.25rem 0 2.5rem;
                min-width: 285px;
            }
            .p-header-menu {
                width: 100%;

                /*.navbar-nav .nav-item.active .nav-link {*/
                    /*pointer-events: auto;*/
                /*}*/
            }
            .nav-item {
                &.active {
                    background-color: #f9fafb;
                }
                .nav-link {
                    padding: 1rem 1.65rem;
                    font-size: 16px;
                    line-height: 16px;
                }
            }
            .p-subnavbar-wrapper {
                .nav-link {
                    position: relative;

                    &:after {
                        content: '';
                        position: absolute;
                        top: 50%;
                        margin-top: -3px;
                        right: 1.6rem;
                        width: 0;
                        height: 0;
                        border-style: solid;
                        border-color: $color-general transparent transparent transparent;
                        border-width: 7px 7px 0 7px;
                        transition: transform 300ms;
                    }
                }
                &.p-open {
                    .nav-link:after {
                        transform: rotate(180deg);
                    }
                }

                /*.p-subnavbar .active a {*/
                    /*pointer-events: none;*/
                /*}*/
            }
            .p-header-logo {
                width: 80px;
                padding-bottom: 25px;
                margin: 0 0 1.75rem 1.7rem;
            }
        }
        .p-header-back {
            position: absolute;
            left: 0;
            top: calc(100% + 30px);
        }
        .p-header-logo {
            width: 80px;
            padding-bottom: 33px;
        }
        .p-subnavigation {
            overflow: visible;

            .p-header-menu {
                margin: 0;

                .navbar-nav .nav-link {
                    padding-right: 1.1rem;
                    padding-left: 1.1rem;
                }
            }
        }
    }

</style>

<style lang="scss">

    @import "../assets/scss/variables.scss";

    .modal-open .p-header {
        padding-right: 17px;

        &.is-fixed {
            pointer-events: none;
            opacity: 0;
        }
    }
    .p-header + div:not(.p-footer) {
        min-height: calc(100vh - 143px);
    }

    //Adaptive
    @import "../assets/scss/custom.scss";
    @import "../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-header + div:not(.p-footer) {
            min-height: calc(100vh - 194px);
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-header + div:not(.p-footer) {
            min-height: calc(100vh - 119px);
        }
    }

</style>
