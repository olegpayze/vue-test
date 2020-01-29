<template>
    <div class="p-work">
        <div class="p-bg" v-parallax=".4"><!-- --></div>
        <div class="container" v-resize:debounce="isResize">
            <p class="p-title p-title__3">Работа</p>
            <p class="p-subtitle">Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>Morbi sodales sem quam, sed mattis urna porta vitae.</p>
        </div>
        <div class="p-work-gallery row justify-content-between no-gutters">
            <div @click="clickToSlide('workSlider1')" class="p-work-gallery-item">
                <swiper :options="workSlider" ref="workSlider1">
                    <swiper-slide>
                        <img data-src="../static/work/work_1.jpg" class="swiper-lazy" alt="Work gallery image" />
                    </swiper-slide>
                    <swiper-slide>
                        <img data-src="../static/work/work_2.jpg" class="swiper-lazy" alt="Work gallery image" />
                    </swiper-slide>
                    <swiper-slide>
                        <img data-src="../static/work/work_3.jpg" class="swiper-lazy" alt="Work gallery image" />
                    </swiper-slide>
                </swiper>
            </div>
            <div class="p-work-gallery-item p-work-gallery-tabs">
                <div class="p-work-gallery-row row justify-content-between align-content-between no-gutters">
                    <div @click="clickToSlide('workSlider2')" class="p-work-gallery-item">
                        <swiper :options="workSlider" ref="workSlider2">
                            <swiper-slide>
                                <img data-src="../static/work/work_3.jpg" class="swiper-lazy" alt="Work gallery image" />
                            </swiper-slide>
                            <swiper-slide>
                                <img data-src="../static/work/work_2.jpg" class="swiper-lazy" alt="Work gallery image" />
                            </swiper-slide>
                            <swiper-slide>
                                <img data-src="../static/work/work_1.jpg" class="swiper-lazy" alt="Work gallery image" />
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div @click="clickToSlide('workSlider3')" class="p-work-gallery-item">
                        <swiper :options="workSlider" ref="workSlider3">
                            <swiper-slide>
                                <img data-src="../static/work/work_3.jpg" class="swiper-lazy" alt="Work gallery image" />
                            </swiper-slide>
                            <swiper-slide>
                                <img data-src="../static/work/work_1.jpg" class="swiper-lazy" alt="Work gallery image" />
                            </swiper-slide>
                            <swiper-slide>
                                <img data-src="../static/work/work_2.jpg" class="swiper-lazy" alt="Work gallery image" />
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div @click="clickToSlide('workSlider4')" class="p-work-gallery-item">
                        <swiper :options="workSlider" ref="workSlider4">
                            <swiper-slide>
                                <img data-src="../static/work/work_1.jpg" class="swiper-lazy" alt="Work gallery image" />
                            </swiper-slide>
                            <swiper-slide>
                                <img data-src="../static/work/work_3.jpg" class="swiper-lazy" alt="Work gallery image" />
                            </swiper-slide>
                            <swiper-slide>
                                <img data-src="../static/work/work_2.jpg" class="swiper-lazy" alt="Work gallery image" />
                            </swiper-slide>
                        </swiper>
                    </div>
                    <div @click="clickToSlide('workSlider5')" class="p-work-gallery-item">
                        <swiper :options="workSlider" ref="workSlider5">
                            <swiper-slide>
                                <img data-src="../static/work/work_3.jpg" class="swiper-lazy" alt="Work gallery image" />
                            </swiper-slide>
                            <swiper-slide>
                                <img data-src="../static/work/work_2.jpg" class="swiper-lazy" alt="Work gallery image" />
                            </swiper-slide>
                            <swiper-slide>
                                <img data-src="../static/work/work_1.jpg" class="swiper-lazy" alt="Work gallery image" />
                            </swiper-slide>
                        </swiper>
                    </div>
                </div>
            </div>
            <div v-if="!isMobile" @click="clickToSlide('workSlider6')" class="p-work-gallery-item">
                <swiper :options="workSlider" ref="workSlider6">
                    <swiper-slide>
                        <img data-src="../static/work/work_3.jpg" class="swiper-lazy" alt="Work gallery image" />
                    </swiper-slide>
                    <swiper-slide>
                        <img data-src="../static/work/work_1.jpg" class="swiper-lazy" alt="Work gallery image" />
                    </swiper-slide>
                    <swiper-slide>
                        <img data-src="../static/work/work_2.jpg" class="swiper-lazy" alt="Work gallery image" />
                    </swiper-slide>
                </swiper>
            </div>
            <div v-if="!isMobile" @click="clickToSlide('workSlider7')" class="p-work-gallery-item">
                <swiper :options="workSlider" ref="workSlider7">
                    <swiper-slide>
                        <img data-src="../static/work/work_1.jpg" class="swiper-lazy" alt="Work gallery image" />
                    </swiper-slide>
                    <swiper-slide>
                        <img data-src="../static/work/work_3.jpg" class="swiper-lazy" alt="Work gallery image" />
                    </swiper-slide>
                    <swiper-slide>
                        <img data-src="../static/work/work_2.jpg" class="swiper-lazy" alt="Work gallery image" />
                    </swiper-slide>
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
                workSlider: {
                    observer: true,
                    effect: 'flip',
                    speed: 1000,
                    loop: true,
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    spaceBetween: 0,
                    allowTouchMove: false,
                    centeredSlides: true,
                    preloadImages: false,
                    lazy: true,
                    loadPrevNext: true,
                    loadPrevNextAmount: 2,
                },
                workSliderList: [],
                slidersWork: null,
                workStart: false,
                isMobile: false,
            }
        },
        directives: {
            resize,
        },
        mounted() {
            const self = this;
            this.isResize();
            //Слайдер в блоке "Удалённая работа"
            //собираем все слайдеры
            if(!this.isMobile) {
                self.workSliderList = [
                    self.$refs.workSlider1.swiper,
                    self.$refs.workSlider2.swiper,
                    self.$refs.workSlider3.swiper,
                    self.$refs.workSlider4.swiper,
                    self.$refs.workSlider5.swiper,
                    self.$refs.workSlider6.swiper,
                    self.$refs.workSlider7.swiper,
                ];
            } else {
                self.workSliderList = [
                    self.$refs.workSlider1.swiper,
                    self.$refs.workSlider2.swiper,
                    self.$refs.workSlider3.swiper,
                    self.$refs.workSlider4.swiper,
                    self.$refs.workSlider5.swiper,
                ];
            }
            for (let i = 0; i < this.workSliderList.length; i++) {
                //загружаем изображения следующих слайдов
                const swiperIndex = self.workSliderList[i].activeIndex;
                self.workSliderList[i].lazy.loadInSlide( swiperIndex + 1 );
            }
            //получаем из DOM-дерева блок со слайдерами
            const workGallery = document.querySelector('.p-work-gallery');
            //отслеживаем скролл страницы
            window.addEventListener('scroll',function() {
                const sliderDelay = self.workSliderList.length * 3000;
                //проверяем попал ли блок со сладерами в область видимости и запущены ли слайдеры
                if(self.isInViewport(workGallery) && !self.workStart) {
                    setTimeout(function () {
                        //запускаем смену слайдов
                        self.randomSliderWork();
                    }, 2000);
                    //время полного цикла > max из рандома delay * длину массива слайдеров
                    self.slidersWork = setInterval(() => {
                        self.randomSliderWork();
                    }, sliderDelay);
                    //ставим триггер запуска слайдеров
                    self.workStart = true;
                }
            });
        },
        beforeDestroy() {
            if (this.slidersWork) {
                //удаляем слайдер в блоке "Удалённая работа"
                clearInterval(this.slidersWork);
                this.slidersWork = null;
                this.workStart = false;
            }
        },
        methods: {
            isResize() {
                //проверяем нужно ли включить адаптив
                this.isMobile = window.innerWidth < 768;
            },
            //получение рандомного целого числа от min до max
            randomInt(min, max) {
                const randNumber = Math.random();
                return Math.floor(min + randNumber * (max + 1 - min));
            },
            //случайное перемешивание массива
            shuffle(arr) {
                let j, temp;
                for (let i = arr.length - 1; i > 0; i--) {
                    j = Math.floor(Math.random() * (i + 1));
                    temp = arr[j];
                    arr[j] = arr[i];
                    arr[i] = temp;
                }
                return arr;
            },
            //случайная смена слайдов блока "Удалённая работа"
            randomSliderWork() {
                //перемешиваем массив слайдеров
                this.workSliderList = this.shuffle(this.workSliderList);
                const self = this;
                for (let i = 0; i < this.workSliderList.length; i++) {
                    //устанавливаем задержку вызова слайдеров (зависит от индекса итерации)
                    //во избежании выпадения схожих задержек диапазон рандома должен быть не более 500
                    let delay = self.randomInt(2500, 3000) * i;
                    setTimeout(function() {
                        //проверяем включен ли компонент (иначе валятся ошибки слайдера)
                        if(self.slidersWork !== null) {
                            //запускаем следующий слайд
                            self.workSliderList[i].slideNext();
                            //загружаем изображения следующих слайдов
                            const swiperIndex = self.workSliderList[i].activeIndex;
                            self.workSliderList[i].lazy.loadInSlide( swiperIndex + 1 );
                        } else {
                            return 0;
                        }
                    }, delay );
                }
            },
            //проверка на попадание блока в область видимости
            isInViewport(elem, offset = 0) {
                //получаем координаты блока
                let coords = elem.getBoundingClientRect(),
                    top = coords.top + offset,
                    bottom = coords.bottom - offset;
                let windowHeight = document.documentElement.clientHeight;
                // верхняя граница elem в пределах видимости ИЛИ нижняя граница видима ИЛИ центральная часть видима
                let topVisible = top > 0 && top < windowHeight,
                    bottomVisible = bottom < windowHeight && bottom > 0,
                    centerVisible = top <= 0 && bottom >= windowHeight;
                return topVisible || bottomVisible || centerVisible;
            },
            //смена слайда вручную
            clickToSlide(item) {
                this.$refs[item].swiper.slideNext();
                //загружаем изображения следующих слайдов
                const swiperIndex = this.$refs[item].swiper.activeIndex;
                this.$refs[item].swiper.lazy.loadInSlide( swiperIndex + 1 );
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

    .p-work {
        position: relative;
        padding: 11.05rem 0 12.1rem;
        background-color: #f9fafb;
        overflow: hidden;
        z-index: 1;

        .p-bg {
            position: absolute;
            top: -15vh;
            left: 0;
            width: 100%;
            height: calc(100% + 30vh);
            background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjYgMTE2OSI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTMxIDQ4MWwxMDItNjUuNUwzMSAzNTB2MTMxem0xOS40LTk1LjM3bDQ2LjUxIDI5Ljg2LTQ2LjUxIDI5Ljg3di01OS43M3pNMjYzIDY0NVY1MTRsLTEwMiA2NS41TDI2MyA2NDV6bS0xOS40LTM1LjY0bC00Ni41LTI5Ljg2IDQ2LjUxLTI5Ljg3djU5Ljczek0yNzkgMzU3bDYyLTEwN0gyMTdsNjIgMTA3em0wLTM4LjZsLTI4LjMxLTQ4Ljg2aDU2LjYzTDI3OSAzMTguNHpNNTIxIDU2NWwtNjItMTA3LTYyIDEwN2gxMjR6bS0zMy42OS0xOS41NGgtNTYuNjNMNDU5IDQ5Ni42bDI4LjMxIDQ4Ljg2ek0xMDIgODNMMCAxNDguNSAxMDIgMjE0Vjgzem0tMTkuNCA5NS4zNkwzNi4xIDE0OC41bDQ2LjUxLTI5Ljg3djU5Ljczek01NTAgMTQ2bC0xMDIgNjUuNUw1NTAgMjc3VjE0NnptLTE5LjQgOTUuMzZsLTQ2LjUxLTI5Ljg2IDQ2LjUxLTI5Ljg3djU5Ljczek0yODQgMGw2MiAxMDdMNDA4IDBIMjg0em0zMy42OSAxOS41NGg1Ni42M0wzNDYgNjguNGwtMjguMzEtNDguODZ6TTM2MSA3MTh2MTMxbDEwMi02NS41TDM2MSA3MTh6bTE5LjQgMzUuNjNsNDYuNTEgMjkuODYtNDYuNTEgMjkuODd2LTU5Ljczek0xNzAgOTMybDYyLTEwN0gxMDhsNjIgMTA3em0wLTM4LjZsLTI4LjMxLTQ4Ljg2aDU2LjYzTDE3MCA4OTMuNHpNNDQyIDk2N2w2MiAxMDcgNjItMTA3SDQ0MnptMzMuNjkgMTkuNTRoNTYuNjNMNTA0IDEwMzUuNGwtMjguMzEtNDguODZ6TTEyNiAxMTY5di0xMzFsLTEwMiA2NS41IDEwMiA2NS41em0tMTkuNC0zNS42NGwtNDYuNTEtMjkuODYgNDYuNTEtMjkuODd2NTkuNzN6Ii8+PC9zdmc+") -10.3% 5rem no-repeat;
            background-size: 30.4% 103%;
            z-index: -1;
        }

    }
    .p-title__3:before {
        width: 28px;
        padding-bottom: 37px;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNi45OCAzNS43OCI+PHBhdGggZmlsbD0iIzBBQ0I0MyIgZD0iTTEzLjQ5IDBDNi4wNCAwIDAgNS41NiAwIDEyLjQyYzAgNC4zNSA0LjA3IDExLjkzIDEyLjIyIDIyLjc0YTEuNTkxIDEuNTkxIDAgMCAwIDIuNTQgMGM4LjE0LTEwLjgxIDEyLjIyLTE4LjM5IDEyLjIyLTIyLjc0QzI2Ljk4IDUuNTYgMjAuOTQgMCAxMy40OSAwem0wIDE3LjM5Yy0yLjQ4IDAtNC41LTEuOTUtNC41LTQuMzVzMi4wMS00LjM1IDQuNS00LjM1IDQuNSAxLjk1IDQuNSA0LjM1LTIuMDIgNC4zNS00LjUgNC4zNXoiLz48L3N2Zz4=');
    }
    .p-work-gallery {
        margin: 4.4rem 0 0;

        img {
            display: block;
            width: 100%;
        }
        & > .p-work-gallery-item {
            width: calc(25% - 3px);
            cursor: pointer;
        }
    }
    .p-work-gallery-row {
        height: 100%;
    }
    .p-work-gallery-tabs .p-work-gallery-item {
        width: calc(50% - 2px);
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-work {
            padding: rem-calc(92) 0 rem-calc(85);
            background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NjYgMTE2OSI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTMxIDQ4MWwxMDItNjUuNUwzMSAzNTB2MTMxem0xOS40LTk1LjM3bDQ2LjUxIDI5Ljg2LTQ2LjUxIDI5Ljg3di01OS43M3pNMjYzIDY0NVY1MTRsLTEwMiA2NS41TDI2MyA2NDV6bS0xOS40LTM1LjY0bC00Ni41LTI5Ljg2IDQ2LjUxLTI5Ljg3djU5Ljczek0yNzkgMzU3bDYyLTEwN0gyMTdsNjIgMTA3em0wLTM4LjZsLTI4LjMxLTQ4Ljg2aDU2LjYzTDI3OSAzMTguNHpNNTIxIDU2NWwtNjItMTA3LTYyIDEwN2gxMjR6bS0zMy42OS0xOS41NGgtNTYuNjNMNDU5IDQ5Ni42bDI4LjMxIDQ4Ljg2ek0xMDIgODNMMCAxNDguNSAxMDIgMjE0Vjgzem0tMTkuNCA5NS4zNkwzNi4xIDE0OC41bDQ2LjUxLTI5Ljg3djU5Ljczek01NTAgMTQ2bC0xMDIgNjUuNUw1NTAgMjc3VjE0NnptLTE5LjQgOTUuMzZsLTQ2LjUxLTI5Ljg2IDQ2LjUxLTI5Ljg3djU5Ljczek0yODQgMGw2MiAxMDdMNDA4IDBIMjg0em0zMy42OSAxOS41NGg1Ni42M0wzNDYgNjguNGwtMjguMzEtNDguODZ6TTM2MSA3MTh2MTMxbDEwMi02NS41TDM2MSA3MTh6bTE5LjQgMzUuNjNsNDYuNTEgMjkuODYtNDYuNTEgMjkuODd2LTU5Ljczek0xNzAgOTMybDYyLTEwN0gxMDhsNjIgMTA3em0wLTM4LjZsLTI4LjMxLTQ4Ljg2aDU2LjYzTDE3MCA4OTMuNHpNNDQyIDk2N2w2MiAxMDcgNjItMTA3SDQ0MnptMzMuNjkgMTkuNTRoNTYuNjNMNTA0IDEwMzUuNGwtMjguMzEtNDguODZ6TTEyNiAxMTY5di0xMzFsLTEwMiA2NS41IDEwMiA2NS41em0tMTkuNC0zNS42NGwtNDYuNTEtMjkuODYgNDYuNTEtMjkuODd2NTkuNzN6Ii8+PC9zdmc+");
            background-position: -100% -50%;
            background-repeat: no-repeat;
            background-size: 80% 100%;

            .p-bg {
                display: none;
            }
            .p-subtitle {
                letter-spacing: -0.3px;
            }
        }
        .p-work-gallery {
            margin: 43px 0 0;

            & > .p-work-gallery-item {
                width: calc(50% - 1px);
            }
        }
        .p-work-gallery-tabs {
            .p-work-gallery-item {
                width: calc(50% - 1px);
            }
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-work {
            padding: 104px 0 137px;

            .p-bg {
                background-size: 48.4% 103%;
                background-position: -10% 50%;
            }
        }
        .p-work-gallery {
            margin: 39px -1px 0;
        }
    }

</style>

<style lang="scss">
    .p-work-gallery .swiper-wrapper {
        perspective: 1500px;
    }
</style>
