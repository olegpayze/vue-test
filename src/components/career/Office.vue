<template>
    <div class="p-office" v-resize:debounce="getWidth">
        <div class="p-office-content container">
            <p class="p-title p-title__2">Офисы</p>
            <p class="p-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Morbi sodales sem quam, sed mattis urna porta vitae.</p>
            <div class="p-office-tabs">
                <div class="p-office-wrapper" v-if="!isMobile">
                    <div class="row">
                        <div class="p-office-tabs-item" v-for="officeItem in firstHalfOffice"
                             :key="'cities_' + officeItem.id">
                            <a href="javascript:void(0);"
                               @click="officeUpdate(officeItem)"
                               :class="{ active: officeItem.id === selectedOffice.id }">
                                {{ officeItem.city.name }}
                            </a>
                        </div>
                    </div>
                    <b-collapse :id="'office_tabs'" accordion="my-accordion" role="tabpanel">
                        <div class="row">
                            <div class="p-office-tabs-item" v-for="officeItem in lastHalfOffice"
                                 :key="'cities_' + officeItem.id">
                                <a href="javascript:void(0);"
                                   @click="officeUpdate(officeItem)"
                                   :class="{ active: officeItem.id === selectedOffice.id }">
                                    {{ officeItem.city.name }}
                                </a>
                            </div>
                        </div>
                    </b-collapse>
                    <div class="text-center">
                        <a href="javascript:void(0);"
                           class="btn btn-cities d-none d-md-inline-block"
                           v-if="isOfficeBtn()"
                           @click="officeOpen = !officeOpen"
                           v-b-toggle="'office_tabs'">
                            {{ officeOpen ? 'Скрыть' : 'Показать все' }}
                        </a>
                    </div>
                </div>
                <div v-else>
                    <swiper :options="officeSlider" ref="officeSlider" :key="'office-slider' + sliderKey">
                        <swiper-slide v-for="officeItem in sortOffice" :key="officeItem.id">
                            <div class="p-office-tabs-item">
                                <a href="javascript:void(0);"
                                   @click="officeUpdate(officeItem)"
                                   :class="{ active: officeItem.id === selectedOffice.id }"
                                >{{ officeItem.city.name }}</a>
                            </div>
                        </swiper-slide>
                        <div class="swiper-button-prev p-office-button-prev" slot="button-next"></div>
                        <div class="swiper-button-next p-office-button-next" slot="button-prev"></div>
                    </swiper>
                </div>
                <div class="p-separator d-none d-md-block"><!-- --></div>
                <transition name="fade">
                    <div v-if="selectedOffice.images.length >= 5 && !isMobile"
                         class="p-office-gallery row no-gutters justify-content-between">
                        <div class="col-12 col-xl-6">
                            <div class="p-office-gallery-item p-office-gallery-item_big"
                                 :class="{ 'p-office-gallery-item_video': officeVideoID }"
                                 @click="(officeVideoID && officeVideo) ? openVideo(officeVideoID) : openOfficeSlider(0)"
                                 :style="{ 'background-image': getYoutubePreview ? getYoutubePreview : false }"
                            >
                                 <!-- -->
                            </div>
                        </div>
                        <div class="col-12 col-xl-6">
                            <div class="row justify-content-around no-gutters">
                                <div class="p-office-gallery-item"
                                     @click="openOfficeSlider(1)">
                                    <!-- --></div>
                                <div class="p-office-gallery-item"
                                     @click="openOfficeSlider(2)">
                                    <!-- --></div>
                                <div class="p-office-gallery-item"
                                     @click="openOfficeSlider(3)">
                                    <!-- --></div>
                                <div class="p-office-gallery-item"
                                     @click="openOfficeSlider(4)">
                                    <a href="javascript:void(0);">
                                        <span>Все фото / {{ selectedOffice.images.length }} /</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div v-else class="p-office-gallery d-none d-md-block">
                        <img src="../../assets/img/office_empty.png" alt=""/>
                    </div>
                </transition>
                <div v-if="isMobile" class="p-office-gallery">
                    <template v-if="selectedOffice.images.length >= 2">
                        <swiper :options="officeSliderMobile" ref="officeSliderMobile" :key="'office-mobile-slider' + sliderKey">
                            <swiper-slide v-for="galleryItem in sortGallery" :key="galleryItem.pk">
                                <img :src="galleryItem.image" alt="office slide"/>
                            </swiper-slide>
                            <div class="swiper-pagination p-gallery-pagination" slot="pagination"></div>
                        </swiper>
                    </template>
                    <div v-else class="p-office-gallery">
                        <img src="../../assets/img/office_empty.png" alt=""/>
                    </div>
                </div>
            </div>
        </div>
        <div class="p-modal">
            <office-modal :officeGallery="sortGallery"
                          :officeTitle="selectedOffice.name"
                          :galleryIndex="galleryIndex"></office-modal>
        </div>
    </div>
</template>

<script>
    import { mapActions, mapState, mapGetters } from 'vuex';
    import 'swiper/dist/css/swiper.css';
    import { swiper, swiperSlide } from 'vue-awesome-swiper';
    const OfficeModal = () => import('@/components/modals/Office.vue');
    import resize from 'vue-resize-directive';

    export default {
        data () {
            return {
                sliderKey: window.innerWidth,
                officeSlider: {
                    observer: true,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    spaceBetween: 0,
                    navigation: {
                        nextEl: '.p-office-button-prev',
                        prevEl: '.p-office-button-next'
                    },
                },
                officeSliderMobile: {
                    observer: true,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    spaceBetween: 30,
                    pagination: {
                        el: '.p-gallery-pagination',
                        clickable: true
                    }
                },
                selectedOffice: {
                    name: '',
                    id: 0,
                    video: '',
                    images: [],
                },
                officeOpen: false,
                isMobile: false,
                isTablet: false,
                galleryIndex: 0,
                officeVideo: true,
            }
        },
        props: ['openVideo'],
        directives: {
            resize,
        },
        mounted() {
            const self = this;
            //проверяем ширину окна для переключения адаптива
            this.getWidth();
            //дожидаемся сортировки списка офисов
            const preloadGallery = setInterval(() => {
                if(self.sortOffice) {
                    //выбираем первый элемент отсортированных офисов
                    self.officeUpdate(self.sortOffice[0]);
                    //прибираемся за собой
                    clearInterval(preloadGallery);
                    return 0;
                }
            }, 300);
        },
        updated() {
            this.preloadImgGallery();
        },
        computed: {
            ...mapState([
                'offices',
                'gallery',
            ]),
            ...mapGetters([
                'sortOffice',
            ]),

            //получение числа несвёрнутых городов
            sliceOffice() {
                return this.isTablet ? 8 : 10;
            },
            //разделение списка офисов для сворачивания
            firstHalfOffice() {
                if (this.sortOffice) {
                    return this.sortOffice.slice(0, this.sliceOffice);
                }
            },
            //разделение списка офисов для сворачивания
            lastHalfOffice() {
                if (this.sortOffice) {
                    return this.sortOffice.slice(this.sliceOffice, this.sliceOffice.length);
                }
            },
            //получение ID видео выбранного офиса
            officeVideoID() {
                const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
                const match = this.selectedOffice.video.match(regExp);
                return (match && match[7].length === 11)? match[7] : false;
            },
            //сортировка галереи города по названию
            sortGallery() {
                if(this.selectedOffice.images.length >= 5) {
                    return this.selectedOffice.images.sort(this.compareValues('name'))
                }
            },
            //получение превью видео в офисе
            getYoutubePreview() {
                if(this.officeVideoID) {
                    if(`https://img.youtube.com/vi/${this.officeVideoID}/maxresdefault.jpg`) {
                        return `url('https://img.youtube.com/vi/${this.officeVideoID}/maxresdefault.jpg')`
                    }
                    else if(`https://img.youtube.com/vi/${this.officeVideoID}/sddefault.jpg`) {
                        return `url('https://img.youtube.com/vi/${this.officeVideoID}/sddefault.jpg')`
                    }
                    else {
                        return false
                    }
                }
            },
        },
        methods: {
            //обновление слайдеров при изменении ширины окна
            resizeSliders() {
                this.$nextTick(() => {
                    //обновляется ключ слайдеров для перерендера
                    this.sliderKey = window.innerWidth;
                });
            },
            //переключение выбранного офиса, обновление галереи
            officeUpdate(officeItem) {
                this.selectedOffice = {
                    name: officeItem.city.name,
                    id: parseInt(officeItem.id),
                    video: officeItem.video,
                    images: officeItem.images,
                };

                this.$refs.officeVideo ? this.$refs.officeVideo.player.stopVideo() : false;
                this.selectedOffice.images.length >= 2 ? this.officeSliderMobileUpdate() : false;
                this.selectedOffice.images.length >= 5 ? this.preloadImgGallery() : false;
            },
            //включение слайдера офисов на мобильной версии
            officeSliderMobileUpdate() {
                if(this.$refs.officeSliderMobile) {
                    const officeMobile = this.$refs.officeSliderMobile.swiper;
                    officeMobile.update();
                    officeMobile.slideTo(0, 0);
                }
            },
            //проверка на включение кнопки "Показать все офисы"
            isOfficeBtn() {
                return (this.offices.length > this.sliceOffice);
            },
            //проверяем ширину окна для переключения адаптива
            getWidth() {
                const width = window.innerWidth;
                this.isMobile = width < 768;
                this.isTablet = width >= 768 && width <= 1200;
            },
            //устанавливаем индекс активного слайда в модальном окне
            openOfficeSlider(item) {
                this.refreshVideo();
                this.galleryIndex = item;
                this.$root.$emit('bv::show::modal', 'p-modal-office');
            },
            //вспомогательная функция сортировки массива
            compareValues(key, order = 'asc') {
                return function (a, b) {
                    if (!a.hasOwnProperty(key) || !b.hasOwnProperty(key)) {
                        // свойства нет ни в одном из объектов
                        return 0;
                    }
                    const varA = (typeof a[key] === 'string') ? a[key].toUpperCase() : a[key];
                    const varB = (typeof b[key] === 'string') ? b[key].toUpperCase() : b[key];
                    let comparison = 0;
                    if (varA > varB) {
                        comparison = 1;
                    } else if (varA < varB) {
                        comparison = -1;
                    }
                    return (
                        (order === 'desc') ? (comparison * -1) : comparison
                    );
                };
            },
            //предзагрузка фото выбранного офиса и плавное их отображение
            preloadImgGallery() {
                //получаем блоки превью
                const galleryPreview = document.querySelectorAll('.p-office-gallery-item'),
                      sortGalleryList = this.sortGallery;
                for (let i = 0; i < galleryPreview.length; i++){
                    //создаём объект изображения и загружаем его
                    const img = new Image();
                    img.src = sortGalleryList[i].image;
                    img.onload = () => {
                        if(this.selectedOffice.video && i === 0) {
                            return false
                        } else {
                            //отображаем изображение на странице, кроме блока с видео
                            galleryPreview[i].style.backgroundImage = `url('${img.src}')`
                        }
                    }
                }
            },
            //перезагрузка видео
            refreshVideo() {
                const self = this;
                self.officeVideo = false;
                setTimeout(() => {
                    self.officeVideo = true;
                }, 1000);
            },
        },
        components: {
            swiper,
            swiperSlide,
            OfficeModal: OfficeModal,
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/scss/variables.scss";

    .p-office {
        background-color: #ffffff;
        position: relative;
        padding: 3.6rem 0 5.7rem;
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
            top: -3rem;
            -webkit-transform: skewY(-2deg);
            transform: skewY(-2deg);
        }
        &:after {
            bottom: -3rem;
            -webkit-transform: skewY(2deg);
            transform: skewY(2deg);
        }
    }
    .p-office-content {
        position: relative;
        z-index: 2;
    }
    .p-title__2:before {
        width: 32px;
        padding-bottom: 32px;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiI+PHBhdGggZmlsbD0iIzNFQUVGRiIgZD0iTTE2IDMyQzcuMTggMzIgMCAyNC44MiAwIDE2UzcuMTggMCAxNiAwczE2IDcuMTggMTYgMTYtNy4xOCAxNi0xNiAxNnptMTEuMDUtMTguNTRjLS4zNC4wMS0uNjQtLjA5LS44Ni0uMzItLjI3LS4yNy0uNjEtLjUtLjg4LS42NC40OCAxLjI3IDEuOTEgMi41OCAyLjQzIDIuOThhLjY2LjY2IDAgMCAxIC4wOS45N2MtLjg4Ljk3LTEuODMgMi4zNS0xLjgzIDIuODggMCAuOC0uNDUgMS4xOS0uNzggMS40OC0uMzQuMjktLjU2LjQ4LS41NiAxLjE5IDAgMi4yNi0zLjQ0IDMuMjEtMy44MyAzLjMxLS4wNi4wMS0uMTEuMDItLjE3LjAyLS4xOSAwLS4zNy0uMDgtLjUtLjIyLS4xNS0uMTctMS41LTEuNzEtMS41LTMuMTEgMC0uNzcuMjMtMS4xMy40OC0xLjQ2LjEzLS4xNy4xOC0uMjQuMTgtLjU0IDAtLjM5LS4xMi0uNjYtLjI3LTEtLjE4LS40MS0uNC0uOTItLjQtMS42Ni0uMi0uMjktMS45Ni0uNjctNC0uNjctMS4zMyAwLTIuNjctLjY5LTIuNjctMiAwLS4xNy0uMDItLjM2LS4wMy0uNTYtLjA4LS44Ni0uMTktMi4xNi45LTMuMjUgMS4zMy0xLjMzIDMuMzctMS41MyA0LjQ3LTEuNTMgMS4wMiAwIDEuNDQuMiAxLjgyLjM4LjM0LjE2LjYyLjI5IDEuNTMuMjkuMjcgMCAuNTMuMDEuNzkuMDEuOTguMDEgMi4xLjA0IDIuNDItLjI5LjAzLS4wMy4xMi0uMTEuMTItLjM5QzI0IDguNTkgMjEuOTUgOCAxOS4zMyA4Yy0uOTUgMC0xLjYyLjMyLTIuMzMuNjYtLjY5LjMzLTEuNDEuNjctMi4zMy42Ny0uMTggMC0uMzUtLjA3LS40Ny0uMi0uMzgtLjM4LS41NC0uODktLjQ1LTEuNDQuMTktMS4yMiAxLjQ5LTIuMzggMi42Mi0yLjk2LjY4LS4zNS44LS41NS44Mi0uNTktLjAxIDAtLjA2LS4xMS0uMjktLjMyYS42MzkuNjM5IDAgMCAxLS4yMi0uNDhjLS4wMS0uMTguMDctLjM2LjE5LS40OS4wNi0uMDYuMTUtLjA5LjIyLS4xNC0uMzYtLjAyLS43Mi0uMDQtMS4wOS0uMDQtNy4wNyAwLTEyLjg2IDUuNTQtMTMuMjkgMTIuNTEuOTguNTYgMS41IDEuNDcgMS44OCAyLjE3LjE5LjM1LjM3LjY4LjU1Ljg2LjI0LjI0LjY2LjI4IDEuMS4zNEM2Ljg1IDE4LjYgOCAxOC43MyA4IDIwYzAgLjc4LS4zOCAxLjMzLS43MiAxLjgyLS4zMy40Ny0uNjEuODgtLjYxIDEuNTF2Mi4xN2MyLjQxIDIuMzYgNS43IDMuODMgOS4zMyAzLjgzIDcuMzUgMCAxMy4zMy01Ljk4IDEzLjMzLTEzLjMzIDAtMS4yMy0uMTgtMi40MS0uNDktMy41NC0uNjEuNTQtMS4yNS45Ni0xLjc5IDF6Ii8+PC9zdmc+');
    }
    .p-office-tabs {
        margin-top: 3.45rem;
    }
    .p-separator {
        position: relative;
        width: 100%;
        height: 2px;
        background-color: #f2f3f6;
        margin: 1.2rem 0 4rem;

        &:after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 50%;
            width: 20px;
            height: 20px;
            -webkit-transform: translate(-50%, 50%) rotate(45deg);
            -moz-transform: translate(-50%, 50%) rotate(45deg);
            -ms-transform: translate(-50%, 50%) rotate(45deg);
            -o-transform: translate(-50%, 50%) rotate(45deg);
            transform: translate(-50%, 50%) rotate(45deg);
            border-width: 2px;
            border-style: solid;
            border-color: transparent #f2f3f6 #f2f3f6 transparent;
            background-color: #ffffff;
        }
    }
    .p-office-gallery {
        margin: 0 -2px;
    }
    .p-office-gallery-item {
        position: relative;
        width: calc(50% - 4px);
        height: 0;
        padding-bottom: 35.7%;
        background-color: #edf1f4;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        -webkit-background-size: cover;
        background-size: cover;
        margin-bottom: 4px;
        transition: background-image 300ms;
        cursor: pointer;

        &:nth-last-child(-n + 2) {
            margin-bottom: 0;
        }
        &_video {
            background-color: #000000 !important;

            &:after {
                content: '';
                position: absolute;
                top: 50%;
                left: 50%;
                width: 17.7%;
                height: 0;
                padding-bottom: 17.7%;
                transform: translate(-50%, -50%);
                background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTUgMTE0Ij48cGF0aCBmaWxsPSIjRkZGIiBkPSJNNTcuNSAwQzI1Ljc5IDAgMCAyNS41NyAwIDU3czI1Ljc5IDU3IDU3LjUgNTdTMTE1IDg4LjQzIDExNSA1NyA4OS4yMSAwIDU3LjUgMHptMCAxMTBDMjggMTEwIDQgODYuMjIgNCA1N1MyOCA0IDU3LjUgNCAxMTEgMjcuNzggMTExIDU3cy0yNCA1My01My41IDUzek00MS44IDg5LjY2TDg4LjMzIDU3IDQxLjggMjQuMzR2NjUuMzJ6bTQuNS01Ni42N2wzNC4yIDI0TDQ2LjMgODFWMzIuOTl6Ii8+PC9zdmc+") center no-repeat;
                -webkit-background-size: contain;
                background-size: contain;
            }
        }
        a {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: hsla(0, 0%, 0%, 0.75);
            text-decoration: none;
            -webkit-transition: background-color 300ms;
            -moz-transition: background-color 300ms;
            -ms-transition: background-color 300ms;
            -o-transition: background-color 300ms;
            transition: background-color 300ms;

            &:hover {
                background-color: hsla(0, 0%, 0%, 0.9);
            }
            span {
                position: absolute;
                left: 0;
                top: 48%;
                width: 100%;
                text-align: center;
                -ms-text-align-last: center;
                text-align-last: center;
                font-size: 26px;
                line-height: 26px;
                color: #ffffff;
                font-family: 'Cera Pro', 'Verdana', sans-serif;
                -webkit-transform: translateY(-50%);
                -moz-transform: translateY(-50%);
                -ms-transform: translateY(-50%);
                -o-transform: translateY(-50%);
                transform: translateY(-50%);
            }
        }
    }
    .p-office-gallery-item_big {
        width: calc(100% - 4px);
        height: 100%;
        margin: 0 auto;
        padding: 0;
    }
    .btn-cities {
        font-size: 18px;
        line-height: 18px;
        color: $color-general !important;
        font-weight: 500;
        font-family: 'Cera Pro', 'Verdana', sans-serif;
        margin: 0.5rem auto 0;
        position: relative;
        padding-left: 0;
        padding-right: 0;
        outline: none !important;
        box-shadow: none !important;

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
    .p-office-tabs-item {
        width: 20%;

        a {
            display: inline-block;
            padding: 0.9rem 1rem;
            font-size: 20px;
            line-height: 20px;
            color: #373737;
            font-weight: 500;
            font-family: 'Cera Pro', 'Verdana', sans-serif;
            -webkit-transition: all 300ms;
            -moz-transition: all 300ms;
            -ms-transition: all 300ms;
            -o-transition: all 300ms;
            transition: all 300ms;
            text-decoration: none!important;

            &:hover,
            &.active {
                color: #ffffff;
                background-color: $color-general;
            }
            &.disable {
                pointer-events: none;
                color: #aaaaaa !important;
            }
        }
    }
    .p-office-gallery img {
        display: block;
        width: 100%;
        height: 100%;
    }
    .p-gallery-pagination {
        position: relative;
        margin-top: 23px;
    }
    .p-office-button-prev,
    .p-office-button-next {
        width: 10px;
        height: 18px;
        margin-top: -9px;
        background-size: contain;
        cursor: pointer;
    }
    .p-office-button-prev {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMC45NiAxNy42OCI+PHBhdGggZmlsbD0iIzM3MzczNyIgZD0iTTIuMTIgMTcuNjhMMCAxNS41Nmw2LjcyLTYuNzJMMCAyLjEyIDIuMTIgMGw4Ljg0IDguODR6Ii8+PC9zdmc+');
        left: auto;
        right: 0;
    }
    .p-office-button-next {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMC45NiAxNy42OCI+PHBhdGggZmlsbD0iIzM3MzczNyIgZD0iTTguODQgMTcuNjhsMi4xMi0yLjEyLTYuNzItNi43MiA2LjcyLTYuNzJMOC44NCAwIDAgOC44NHoiLz48L3N2Zz4=');
        right: auto;
        left: 0;
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-office {
            padding: rem-calc(26) 0 rem-calc(19);

            &:before {
                top: -2rem;
            }
            &:after {
                bottom: -2rem;
            }
            .p-subtitle{
                margin: 0;
                letter-spacing: -0.3px;
            }
        }
        .p-office-tabs {
            margin-top: 17px;
        }
        .p-office-tabs-item {
            text-align: center;
            width: 100%;

            a:hover,
            a.active,
            a {
                color: #373737;
                font-size: 18px;
                line-height: 18px;
                background-color: transparent;
            }
        }
        .p-office-gallery {
            margin: 15px 0 0;
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-office {
            padding: 3px 0 38px;
        }
        .p-office-tabs {
            margin: 50px auto 0;
            max-width: 650px;
        }
        .p-office-tabs-item {
            text-align: center;
            width: 25%;

            a {
                padding: 11px 15px;
                font-size: 16px;
                line-height: 16px;
                margin-bottom: 9px;
                white-space: nowrap;
            }
        }
        .btn-cities {
            font-size: 16px;
            line-height: 16px;
            margin: 17px auto 0;
        }
        .p-separator {
            margin-bottom: 57px;
        }
        .p-office-gallery {
            margin: 0 -17px;
        }
        .p-office-gallery-item {
            width: calc(25% - 2px);
            padding-bottom: 21.7%;
            margin-bottom: 0;
            margin-top: 3px;
        }
        .p-office-gallery-item_big {
            width: 100%;
            padding-bottom: 71.7%;
            margin-top: 0;
        }
        .p-office-gallery-item a span {
            font-size: 17px;
            line-height: 17px;
        }
    }

</style>

<style lang="scss">
    .p-gallery-pagination.swiper-pagination-bullets {
        .swiper-pagination-bullet {
            width: 6px;
            height: 6px;
            background-color: #7d8893;
            opacity: 0.5;
            margin: 0 6px;
        }
        .swiper-pagination-bullet-active {
            opacity: 1;
        }
    }
</style>
