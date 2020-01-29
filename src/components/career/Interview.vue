<template>
    <div class="p-interview" v-resize:debounce="this.resizeSliders">
        <div class="p-interview-content container">
            <p class="p-title p-title__4">Отзывы сотрудников</p>
            <div class="p-interview-tabs">
                <swiper :options="interviewSlider" ref="interviewSlider" :key="'interview-slider' + sliderKey">
                    <swiper-slide v-for="(interviewsIterm, index) in viewInterviews" :key="interviewsIterm.name">
                        <div :class="{ 'p-interview-item__last': index === viewInterviews.length - 1 }"
                             class="p-interview-item"
                        >
                            <img class="p-interview-img" :src="interviewsIterm.img" alt="Interview image"/>
                            <div>
                                <p v-html="interviewsIterm.text"></p>
                                <p class="p-interview-name">
                                    <b>{{ interviewsIterm.name }},</b>
                                    <span v-html="interviewsIterm.role"></span>
                                </p>
                            </div>
                        </div>
                    </swiper-slide>
                    <div class="swiper-pagination p-interview-pagination d-none d-md-block d-xl-none" slot="pagination"></div>
                </swiper>
            </div>

        </div>
    </div>
</template>

<script>
    import 'swiper/dist/css/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    import resize from 'vue-resize-directive';

    export default {
        data () {
            return {
                sliderKey: window.innerWidth,
                interviewSlider: {
                    observer: true,
                    slidesPerView: 3,
                    slidesPerColumn: 1,
                    spaceBetween: 0,
                    pagination: {
                        el: '.p-interview-pagination',
                        clickable: true
                    },
                    allowTouchMove: false,
                    breakpoints: {
                        767: {
                            slidesPerView: 1,
                            slidesPerColumn: 3,
                            allowTouchMove: false
                        },
                        1200: {
                            slidesPerView: 1,
                            allowTouchMove: true
                        }
                    }
                },
                interviews: [
                    [
                        {
                            img: '../static/avatar.svg',
                            name: 'Иван Иванов 1',
                            role: 'Хороший работник<br/>В компании с 2015г.',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales sem quam, sed mattis urna porta vitae. Nulla maximus augue at est fringilla luctus. Donec ante ante, pretium eu risus non, vulputate condimentum ipsum. Etiam vitae dui augue. Suspendisse non turpis dignissim, eleifend risus quis, luctus tortor.'
                        },
                        {
                            img: '../static/avatar.svg',
                            name: 'Иван Иванов 2',
                            role: 'Хороший работник<br/>В компании с 2015г.',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales sem quam, sed mattis urna porta vitae. Nulla maximus augue at est fringilla luctus. Donec ante ante, pretium eu risus non, vulputate condimentum ipsum. Etiam vitae dui augue. Suspendisse non turpis dignissim, eleifend risus quis, luctus tortor.'
                        },
                        {
                            img: '../static/avatar.svg',
                            name: 'Иван Иванов 3',
                            role: 'Хороший работник<br/>В компании с 2015г.',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales sem quam, sed mattis urna porta vitae. Nulla maximus augue at est fringilla luctus. Donec ante ante, pretium eu risus non, vulputate condimentum ipsum. Etiam vitae dui augue. Suspendisse non turpis dignissim, eleifend risus quis, luctus tortor.'
                        }
                    ],
                    [
                        {
                            img: '../static/avatar.svg',
                            name: 'Иван Иванов 4',
                            role: 'Хороший работник<br/>В компании с 2015г.',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales sem quam, sed mattis urna porta vitae. Nulla maximus augue at est fringilla luctus. Donec ante ante, pretium eu risus non, vulputate condimentum ipsum. Etiam vitae dui augue. Suspendisse non turpis dignissim, eleifend risus quis, luctus tortor.'
                        },
                        {
                            img: '../static/avatar.svg',
                            name: 'Иван Иванов 5',
                            role: 'Хороший работник<br/>В компании с 2015г.',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales sem quam, sed mattis urna porta vitae. Nulla maximus augue at est fringilla luctus. Donec ante ante, pretium eu risus non, vulputate condimentum ipsum. Etiam vitae dui augue. Suspendisse non turpis dignissim, eleifend risus quis, luctus tortor.'
                        },
                        {
                            img: '../static/avatar.svg',
                            name: 'Иван Иванов 6',
                            role: 'Хороший работник<br/>В компании с 2015г.',
                            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sodales sem quam, sed mattis urna porta vitae. Nulla maximus augue at est fringilla luctus. Donec ante ante, pretium eu risus non, vulputate condimentum ipsum. Etiam vitae dui augue. Suspendisse non turpis dignissim, eleifend risus quis, luctus tortor.'
                        }
                    ]
                ],
                viewInterviews: [],
            }
        },
        directives: {
            resize,
        },
        mounted() {
            //получаем случайную группу отзывов из всех отзывов
            this.viewInterviews = this.interviews[this.randomInt(0, this.interviews.length - 1)];
        },
        methods: {
            //обновление слайдеров при изменении ширины окна
            resizeSliders() {
                this.$nextTick(() => {
                    //обновляется ключ слайдеров для перерендера
                    this.sliderKey = window.innerWidth;
                });
            },
            //получение рандомного целого числа от min до max
            randomInt(min, max) {
                const randNumber = Math.random();
                return Math.floor(min + randNumber * (max + 1 - min));
            },
        },
        components: {
            swiper,
            swiperSlide,
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/scss/variables.scss";

    .p-interview {
        padding: 4.15rem 0 10.5rem;
        position: relative;
        z-index: 2;

        &:before,
        &:after {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 50%;
            background-color: #ffffff;
            z-index: 1;
        }
        &:before {
            top: -2rem;
            -webkit-transform: skewY(-1deg);
            transform: skewY(-1deg);
        }
        &:after {
            bottom: -2.5rem;
            -webkit-transform: skewY(2deg);
            transform: skewY(2deg);
        }
    }
    .p-interview-content {
        position: relative;
        z-index: 2;
    }
    .p-title__4:before {
        width: 36px;
        padding-bottom: 45px;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNC45IDQ0LjUiPjxwYXRoIGQ9Ik0zMy4zIDMxYzAgMy40LTIgNi41LTUuMiA4LjZ2NC45bC00LjctMi44Yy0xLjYuNS0zLjQuNy01LjMuNy04LjQgMC0xNS4yLTUuMS0xNS4yLTExLjQgMC02LjMgNi44LTExLjQgMTUuMi0xMS40IDguNCAwIDE1LjIgNS4xIDE1LjIgMTEuNHpNNS41IDE0LjVjLjMgMCAuNS0uMS44LS4yLjYtLjUuNy0xLjMuMy0xLjlMMi4zIDYuNkMxLjkgNiAxLjEgNS45LjUgNi4zIDAgNi43LS4yIDcuNS4yIDguMWw0LjIgNS44Yy4zLjQuNy42IDEuMS42em0yOC44LTkuMmMtLjYtLjQtMS40LS4yLTEuOC40TDI5IDExLjVjLS40LjYtLjIgMS40LjQgMS44LjIuMS40LjIuNy4yLjQgMCAuOS0uMiAxLjEtLjZsMy41LTUuN2MuNC0uNy4yLTEuNS0uNC0xLjl6bS0xNi42IDYuM2MuNyAwIDEuMy0uNiAxLjMtMS4zdi05YzAtLjctLjYtMS4zLTEuMy0xLjMtLjcgMC0xLjMuNi0xLjMgMS4zdjljMCAuNy42IDEuMyAxLjMgMS4zeiIgZmlsbD0iIzIzY2VkMiIvPjwvc3ZnPg==');
    }
    .p-interview-tabs {
        margin: 4.95rem -0.9rem 0;
    }
    .p-interview-item {
        font-size: 18px;
        line-height: 32px;
        color: #3f3f3f;
        padding: 0 37px;
    }
    .p-interview-img {
        width: 200px;
        display: block;
        margin: 0 auto 2.5rem;
        -webkit-border-radius: 50%;
        -moz-border-radius: 50%;
        border-radius: 50%;
    }
    .p-interview-name {
        margin: 1.35rem 0 0;
        font-size: 16px;
        line-height: 28px;
        color: #7d8893;
    }
    .p-interview-shape {
        display: block;
        position: absolute;
        width: 154px;
        right: 2.4%;
        bottom: -17.9rem;
    }
    .p-interview-pagination {
        position: relative;
        margin-top: 36px;
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-interview {
            padding: rem-calc(42) 0 rem-calc(39);

            &:before {
                top: -1rem;
            }
            &:after {
                bottom: -1.5rem;
            }
            .p-title {
                margin-bottom: 2px;
            }
        }
        .p-interview-tabs {
            margin: 0;
        }
        .p-interview-item {
            position: relative;
            font-size: 14px;
            line-height: 22px;
            margin: 0 10px;
            padding: rem-calc(40) 0 rem-calc(38);
            border-bottom: 1px solid #b6b7bb;

            &__last {
                padding-bottom: 20px;
                border-bottom: none;
            }
            p {
                margin: 0;
            }
        }
        .p-interview-img {
            width: 60px;
            margin: 0 0 22px;
        }
        .p-interview-name {
            position: absolute;
            top: 70px;
            left: 73px;
            margin: 0;
            font-size: 14px;
            line-height: 22px;
            letter-spacing: -0.3px;
            transform: translateY(-50%);

            b {
                display: block;
            }
        }
        .p-interview-pagination {
            margin-top: 19px;
        }
        .p-interview-shape {
            width: 61px;
            right: 26px;
            bottom: auto;
            top: calc(100% + 71px);
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-interview {
            padding: 15px 0 27px;
        }
        .p-interview-tabs {
            margin: 31px auto 0;
            max-width: 615px;
        }
        .p-interview-item {
            display: flex;
            justify-content: space-between;
            align-items: start;
            font-size: 15px;
            line-height: 26px;
            padding: 0 !important;

            & > div {
                width: calc(100% - 191px);
            }
        }
        .p-interview-img {
            width: 161px;
            height: 100%;
            margin: 0 30px 0 0;
        }
        .p-interview-name {
            margin: -2px 0 0;
            font-size: 14px;
            line-height: 28px;
        }
        .p-interview-shape {
            width: 106px;
            right: 46px;
            bottom: -114px;
        }
    }

</style>

<style lang="scss">
    .p-interview-pagination.swiper-pagination-bullets {
        .swiper-pagination-bullet {
            background-color: #7d8893;
            opacity: 0.5;
            margin: 0 8px;
        }
        .swiper-pagination-bullet-active {
            opacity: 1;
        }
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-interview-pagination.swiper-pagination-bullets {
            .swiper-pagination-bullet {
                width: 6px;
                height: 6px;
                margin: 0 6px;
            }
        }
    }

</style>
