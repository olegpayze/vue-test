<template>
    <div class="p-error">
        <div class="container">
            <img :src="viewImage" alt="Страница не найдена" />
            <p>Кто-то сломал наш сайт!<br/>
                На&#160;самом деле нет – просто такая страница не&#160;найдена.<br/>
                Попробуйте вернуться на <router-link to="/" tag="a">главную страницу</router-link>.</p>
        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                images: ['../static/404/grumpy.png', '../static/404/sad.png', '../static/404/worried.png'],
            }
        },
        computed: {
            //получаем случайную картинку
            viewImage() {
                return this.images[this.randomInt(0, this.images.length - 1)];
            }
        },
        methods: {
            //получение рандомного целого числа от min до max
            randomInt(min, max) {
                const randNumber = Math.random();
                return Math.floor(min + randNumber * (max + 1 - min));
            },
        },
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/scss/variables.scss";

    .p-error {
        height: calc(100vh - 143px);
        padding: rem-calc(161) 0 rem-calc(30);
        display: flex;
        align-items: center;
        text-align: center;
        font-size: 20px;
        line-height: 30px;
        font-family: $font-family-alternative;
        background-color: #f3f3f3;

        img {
            display: block;
            max-width: 80%;
            margin: 0 auto rem-calc(30);
        }
        a {
            display: inline-block;
            color: $color-general;
            position: relative;
            text-decoration: none !important;

            &:before {
                content: '';
                position: absolute;
                left: 50%;
                bottom: -2px;
                width: 0;
                height: 1px;
                background-color: #48d100;
                -webkit-transform: translateX(-50%);
                -moz-transform: translateX(-50%);
                -ms-transform: translateX(-50%);
                -o-transform: translateX(-50%);
                transform: translateX(-50%);
                -webkit-transition: width 300ms;
                -moz-transition: width 300ms;
                -ms-transition: width 300ms;
                -o-transition: width 300ms;
                transition: width 300ms;
            }
            &:focus:before,
            &:hover:before {
                width: 100%;
            }
        }
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-error {
            height: calc(100vh - 194px);
            padding: rem-calc(60) 0 rem-calc(30);
            font-size: 14px;
            line-height: 24px;
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-error {
            height: calc(100vh - 119px);
            padding: rem-calc(60) 0 rem-calc(30);
            font-size: 18px;
            line-height: 28px;
        }
    }

</style>


