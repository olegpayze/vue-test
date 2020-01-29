<template>
    <b-modal id="p-modal-office"
             size="office"
             centered
             hide-footer>
        <template slot="modal-header-close">
            <div class="p-svg p-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path stroke="#FFFFFF" stroke-width="2" fill="none" d="M17.412 1.871L1.975 17.307M2.184 2.079l15.02 15.02"/></svg>
            </div>
        </template>
        <div class="p-modal-office-gallery">
            <div class="p-modal-office-title">{{ officeTitle }}</div>
            <div class="p-gallery-full-slider">
                <swiper
                        v-if="openModal"
                        :options="galleryFullSlider"
                        ref="galleryFullSlider">
                    <swiper-slide
                            v-for="galleryItem in officeGallery"
                            :key="'general' + galleryItem.pk">
                        <img :src="galleryItem.image" alt="general_slide"/>
                    </swiper-slide>
                </swiper>
                <div class="p-gallery-full-text">
                    <div class="swiper-pagination swiper-office-full-pagination"></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur mauris risus, malesuada sit amet mollis quis, porttitor nec arcu. </p>
                </div>
                <div class="swiper-button-prev p-office-full-button-prev" slot="button-prev">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.4 35.9"><path class="p-office-svg-shape" d="M1.29 17.94L16.46 2.17v31.62z"/><path d="M0 17.94L17.36 0v35.88L0 17.94zm2.75 0L15.39 31V4.88L2.75 17.94z"/></svg>
                </div>
                <div class="swiper-button-next p-office-full-button-next" slot="button-next">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17.4 35.9"><path class="p-office-svg-shape" d="M15.8 17.9L.9 33.7V2.4z"/><path d="M0 35.9V0l17.4 17.9L0 35.9zm2-31V31l12.6-13.1L2 4.9z"/></svg>
                </div>
            </div>
            <div class="p-gallery-preview-slider">
                <swiper
                        v-if="openModal"
                        :options="galleryPreviewSlider"
                        ref="galleryPreviewSlider">
                    <swiper-slide
                            v-for="galleryItem in officeGallery"
                            :key="'preview' + galleryItem.pk">
                        <img :src="galleryItem.image" alt="preview_slide"/>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </b-modal>
</template>

<script>

    import 'swiper/dist/css/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';

    export default {
        data : function() {
            return {
                galleryFullSlider: {
                    runCallbacksOnInit: true,
                    loop: true,
                    loopedSlides: 2.5,
                    centeredSlides: true,
                    observer: true,
                    observeParents: true,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    spaceBetween: 0,
                    preloadImages: true,
                    updateOnImagesReady: true,
                    pagination: {
                        el: '.swiper-office-full-pagination',
                        type: 'fraction'
                    },
                    navigation: {
                        prevEl: '.p-office-full-button-prev',
                        nextEl: '.p-office-full-button-next'
                    },
                    breakpoints: {
                        768: {
                        },
                        1200: {
                        }
                    }
                },
                galleryPreviewSlider: {
                    runCallbacksOnInit: true,
                    loop: true,
                    loopedSlides: 2.5,
                    centeredSlides: true,
                    observer: true,
                    observeParents: true,
                    slidesPerView: 4,
                    slidesPerColumn: 1,
                    spaceBetween: 20,
                    slideToClickedSlide: true,
                    preloadImages: true,
                    updateOnImagesReady: true,
                    breakpoints: {
                        768: {
                        },
                        1200: {
                        }
                    }
                },
                openModal: false
            }
        },
        beforeMount() {
            //срабатывает на открытие модального окна
            this.$root.$on('bv::modal::show', (bvEvent) => {
                //проверяем, что это наше окно
                if(bvEvent.target.id === 'p-modal-office') {
                    //обновляем триггер для перерендера слайдеров
                    this.openModal = !this.openModal;
                }
            });
            //срабатывает на закрытие модального окна
            this.$root.$on('bv::modal::hide', (bvEvent) => {
                //проверяем, что это наше окно
                if(bvEvent.target.id === 'p-modal-office') {
                    //обновляем триггер для перерендера слайдеров
                    this.openModal = !this.openModal;
                }
            });
        },
        mounted() {
            //срабатывает на открытие модального окна
            this.$root.$on('bv::modal::show', (bvEvent) => {
                //проверяем, что это наше окно
                if(bvEvent.target.id === 'p-modal-office') {
                    const self = this;
                    //дожидаемся рендера слайдеров
                    const controlGallery = setInterval(() => {
                        if(self.$refs.galleryFullSlider.swiper && self.$refs.galleryPreviewSlider.swiper) {
                            //связываем слайдеры
                            self.$refs.galleryFullSlider.swiper.controller.control = this.$refs.galleryPreviewSlider.swiper;
                            self.$refs.galleryPreviewSlider.swiper.controller.control = this.$refs.galleryFullSlider.swiper;
                            //устанавливаем активный слайд
                            self.$refs.galleryPreviewSlider.swiper.slideToLoop(this.galleryIndex, 0);
                            //прибираемся за собой
                            clearInterval(controlGallery);
                            return 0;
                        }
                    }, 300);
                }
            });
        },
        props: {
            officeTitle: String,
            officeGallery: Array,
            galleryIndex: Number
        },
        methods: {
        },
        components: {
            swiper,
            swiperSlide,
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/scss/variables.scss";

    //modal
    .p-modal-office-gallery {
        margin: 0 35px;

        .p-modal-office-title {
            font-size: 42px;
            line-height: 42px;
            color: #ffffff;
            font-family: $font-family-alternative;
            margin-bottom: 56px;
        }
        img {
            display: block;
            width: 100%;
        }
    }
    .p-gallery-full-slider {
        position: relative;

        &:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            height: 33%;
            background: linear-gradient(to bottom, hsla(0,0%,0%,0) 0%,hsla(0,0%,0%,1) 100%);
            z-index: 5;
        }
        .p-gallery-full-text {
            position: absolute;
            width: 100%;
            max-width: 600px;
            padding: 25px 25px;
            font-size: 15px;
            line-height: 25px;
            color: #ffffff;
            box-sizing: border-box;
            left: 0;
            bottom: 0;
            z-index: 10;

            p {
                margin: 0;
            }
        }
        .swiper-office-full-pagination {
            width: auto;
            display: inline-block;
            position: relative;
            font-size: 18px;
            line-height: 18px;
            margin-bottom: 4px;
        }
    }
    .p-gallery-preview-slider {
        margin-top: 13px;
    }
    .p-close {
        width: 18px;
        padding-bottom: 18px;
        opacity: 1;
        outline: none !important;
    }
    .p-office-full-button-prev,
    .p-office-full-button-next {
        width: 15px;
        height: 32px;
        margin-top: -16px;
        -webkit-background-size: contain;
        background-size: contain;
        outline: none !important;

        svg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            & > * {
                fill: #ffffff;
                transition: fill 400ms, opacity 200ms;
            }
            .p-office-svg-shape {
                opacity: 0;
            }
            &:hover {
                & > * {
                    fill: $color-general;
                }
                .p-office-svg-shape {
                    opacity: 1;
                }
            }
        }
    }
    .p-office-full-button-prev {
        left: -29px;
    }
    .p-office-full-button-next {
        right: -29px;
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
    }

</style>

<style lang="scss">

    @import "../../assets/scss/variables.scss";

    .p-modal {
        .modal-backdrop.show {
            opacity: 0.8;
        }
    }
    .modal-office {
        max-width: 1150px !important;

        .modal-header,
        .modal-footer {
            border: none !important;
        }
        .modal-body {
            padding: 0;
        }
        .modal-content {
            padding: 0;
            border-radius: 0 !important;
            background-color: transparent;
            border: none;
        }
    }
    .p-gallery-preview-slider {
        .swiper-slide {
            border: 2px solid transparent;
        }
        .swiper-slide:not(.swiper-slide-active){
            cursor: pointer;
        }
        .swiper-slide-active {
            border-color: $color-general;
        }
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
    }
</style>
