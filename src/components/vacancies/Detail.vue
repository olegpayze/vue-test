<template>
<div class="p-detail-wrapper" v-if="vacancy">
    <div class="p-detail">
        <div class="p-bg p-bg__1" v-parallax=".6"><!-- --></div>
        <div class="p-bg p-bg__2" v-parallax=".4"><!-- --></div>
        <div class="p-content" v-resize:debounce="isResize">
            <div class="p-detail-title">{{ vacancy.name }}</div>
            <div class="row justify-content-between no-gutters">
                <div class="p-detail-list col-12 col-md-7 col-xl-9"
                     v-html="vacancy.description">
                </div>
                <div class="p-localization col-12 col-md-5 col-xl-3">
                    <div class="p-localization-wrapper"
                         :class="{ 'is-fixed': scrollBox.fixed, 'is-bottom': scrollBox.isBottom }"
                         :style="{ 'margin-right': '-' + scrollBox.margin + 'px', width: scrollBox.width + 'px', top: scrollBox.top + 'px' }"
                    >
                        <div class="p-localization-list">
                            <p class="p-detail-locale"><template v-if="vacancy.remotely">Удаленно / </template>Офис</p>
                            <p class="p-detail-map">{{ vacancy.citiesList.join(', ') }}</p>
                            <p class="p-detail-relocation" v-if="vacancy.remotely">Возможна релокация</p>
                        </div>
                        <div class="p-localization-links row no-gutters justify-content-center justify-content-md-start align-items-center">
                            <a href="javascript:void(0);"
                               v-b-modal.p-modal-response
                               class="btn btn-success p-btn-shadow"
                            >
                                Откликнуться
                            </a>
                            <social-share :position="'left'" :distance="socialDistance" :rotate="(isMobile || isTablet) ? 270 : 0" :scale="0.83">
                                <div class="p-share-btn p-share-btn__empty" slot="social-item">
                                    <!-- -->
                                </div>
                                <!--<div class="p-share-btn" slot="social-item">-->
                                <!--<vue-goodshare-email-->
                                <!--has_icon-->
                                <!--&gt;</vue-goodshare-email>-->
                                <!--</div>-->
                                <div class="p-share-btn" slot="social-item">
                                    <vue-goodshare-twitter
                                            has_icon
                                    ></vue-goodshare-twitter>
                                </div>
                                <div class="p-share-btn" slot="social-item">
                                    <vue-goodshare-vkontakte
                                            has_icon
                                    ></vue-goodshare-vkontakte>
                                </div>
                                <div class="p-share-btn" slot="social-item">
                                    <vue-goodshare-facebook
                                            has_icon
                                    ></vue-goodshare-facebook>
                                </div>
                                <div class="p-share-btn p-share-btn__empty" slot="social-item">
                                    <!-- -->
                                </div>
                            </social-share>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="p-alternative" v-if="similarVacancies.length > 0">
        <div class="p-content">
            <router-link class="p-alternative-subtitle"
                         :to="{ name: 'VacanciesList', params: { 'directionName': vacancy.handbk.name } }"
                         tag="p"
            >Другие вакансии направления <a href="javascript:void(0);">{{ vacancy.handbk.name }}</a>
            </router-link>
            <div class="p-alternative-row row justify-content-between no-gutters">
                <router-link
                        v-for="similarVacancy in similarVacancies"
                        class="p-alternative-item"
                        tag="div"
                        :key="similarVacancy.id"
                        :to="{ name: 'VacanciesDetail', params: { id: similarVacancy.id } }"
                        exact
                    >
                        <div class="p-alternative-item-row row flex-column justify-content-between no-gutters">
                            <div class="p-alternative-item-name">{{ similarVacancy.name }}
                                <span>Полная занятость</span>
                            </div>
                            <div class="p-alternative-item-location"><template v-if="vacancy.remotely">Удаленно / </template>Офис</div>
                        </div>
                    </router-link>
            </div>
        </div>
    </div>


    <div class="p-modal">
        <response
                :vacancy_id="vacancy.id"
                :vacancy_name="vacancy.name"
                :vacancy_project="vacancy.project"
                :answer_form="vacancy.answer_form ? vacancy.answer_form : -1"
        ></response>
    </div>
</div>
</template>

<script>

    import Vue from 'vue';
    import { mapActions, mapState } from 'vuex';
    const Response = () => import('@/components/modals/Response.vue');
    const SocialShare = () => import('@/components/vacancies/Social.vue');
    const VueGoodshareFacebook = () => import('@/components/vacancies/social/providers/Facebook.vue');
    const VueGoodshareVkontakte = () => import('@/components/vacancies/social/providers/Vkontakte.vue');
    // const VueGoodshareEmail = () => import('@/components/vacancies/social/providers/Email.vue');
    const VueGoodshareTwitter = () => import('@/components/vacancies/social/providers/Twitter.vue');
    import resize from 'vue-resize-directive';

    export default {
        data : function() {
            return {
                listOpen: false,
                vacancy: {
                        "id":1,
                        "seconds_before_deleting":null,
                        "cities_positions":[
                            {
                                "id":2,
                                "name":"Великий Новгород"
                            },
                            {
                                "id":3,
                                "name":"Вологда"
                            },
                            {
                                "id":4,
                                "name":"Иваново"
                            },
                            {
                                "id":5,
                                "name":"Калининград"
                            },
                            {
                                "id":6,
                                "name":"Москва"
                            }
                        ],
                        "additional_handbk":"",
                        "handbk":{
                            "id":2,
                            "name":"Product"
                        },
                        "author":{
                            "id":1,
                            "get_full_name":"Антон Терёшкин",
                            "date_removed":null
                        },
                        "status":"Опубликован",
                        "date_creation":"04.03.2019",
                        "date_editing":"04.03.2019",
                        "name":"General Producer",
                        "project":"0",
                        "expansion_name":"",
                        "internship":false,
                        "remotely":true,
                        "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                        "answer_form":null
                    },
                similarVacancies: [], // Похожие вакансии
                isMobile: false,
                isTablet: false,
                scrollBox: {
                    fixed: false,
                    isBottom: false,
                    top: 0,
                    margin: 0,
                    width: 0,
                }
            }
        },
        directives: {
            resize,
        },
        created() {
            this.getVacancyDetail();
        },
        mounted() {
            window.addEventListener('scroll', this.scrollBlockDetail);
        },
        updated() {
            this.isResize();
        },
        watch: {
            '$route'() {
                this.getVacancyDetail();
            }
        },
        computed: {
            ...mapState([
                'vacancies'
            ]),
            //устанавливаем отступы иконок соц.сетей в зависимости от ширины экрана
            socialDistance() {
                if(this.isMobile || this.isTablet) {
                    return 77;
                } else {
                    return 65;
                }
            },
        },
        beforeDestroy() {
            window.removeEventListener('scroll', this.scrollBlockDetail);
        },
        methods: {
            ...mapActions([
                'getVacancy',
            ]),
            //получение информации по вакансии
            getVacancyDetail(){
                let vacancyList = this.vacancies.list.filter(elem => elem.directionName === this.$route.params.direction)[0];
                this.vacancy = vacancyList.vacancies.filter(elem => elem.id === this.$route.params.id)[0];
                // Устанавливаем название вакансии в заголовок страницы
                document.title = this.vacancy.name;
                // Собираем список названий городов, чтобы легко отобразить в шаблоне
                this.vacancy.citiesList = this.vacancy.cities_positions.map(city => {return city.name});
                // Достаем похожие вакансии выбранного направления
                // this.getSimilarVacancies();
            },
            //получение похожих вакансий
            getSimilarVacancies(){
                //собираем id категории
                let queryString = 'handbk=' + this.vacancy.handbk.id;
                //получаем вакансии данной категории
                Vue.http.get(`vacancies/?page=1&${queryString}`).then(response => {
                    this.similarVacancies = response.body.results;
                    // Исключаем из похожих вакансий текущую
                    this.similarVacancies = this.similarVacancies.filter(similarVacancy => similarVacancy.id !== this.vacancy.id);

                    this.similarVacancies.forEach(similarVacancy => {
                        // Собираем список названий городов, чтобы легко отобразить в шаблоне
                        similarVacancy.citiesList = similarVacancy.cities_positions.map(city => {return city.name});
                    });

                }).catch(error => {
                    console.log(error);
                });
            },
            //пересчитываем размеры динамических блоков
            isResize() {
                //проверяем нужно ли включить адаптив
                const width = window.innerWidth;
                this.isMobile = width < 768;
                this.isTablet = width >= 768 && width <= 1200;
                if(!self.isMobile) {
                    //получаем контейнер
                    const container = document.querySelector('.p-detail .p-content');
                    if(container) {
                        //получаем отрицательный отступ елемента (равен 1/2 ширины контейнера)
                        this.scrollBox.margin = container.offsetWidth / 2;
                        //устанавливаем ширину блока меню
                        this.scrollBox.width = container.querySelector('.p-localization').offsetWidth;
                    }
                }
            },
            //фиксированный правый блок
            scrollBlockDetail() {
                //проверка на мобильную версию и загрузку страницы
                if(!this.isMobile && document.querySelector('.p-detail')) {
                    //высота header
                    const elementHeader = window.innerWidth >= 1200 ? document.querySelector('.p-navigation') : document.querySelector('.p-subnavigation');
                    const heightHeader = parseFloat(window.getComputedStyle(elementHeader).getPropertyValue('height'));
                    //отступ от верхнего края окна
                    const menuTopMargin = heightHeader + 30;
                    //находим блок контейнера и элемент для фиксирования
                    const container = document.querySelector('.p-localization'),
                        element = container.querySelector('.p-localization-wrapper');
                    //проверяем наличие контейнера на странице
                    if(container) {
                        //получаем координаты блока контейнера
                        const coords = container.getBoundingClientRect().top;
                        //проверяем приодолели ли верхнюю границу контейнера
                        if(coords <= menuTopMargin) {
                            this.scrollBox.top = menuTopMargin;
                            this.scrollBox.isBottom = false;
                            this.scrollBox.fixed = true;
                        } else {
                            this.scrollBox.top = 0;
                            this.scrollBox.isBottom = false;
                            this.scrollBox.fixed = false;
                        }
                        //проверяем преодолели ли нижнюю границу контейнера
                        if(container.offsetHeight <= element.offsetHeight + menuTopMargin + Math.abs(coords)) {
                            this.scrollBox.top = 'auto';
                            this.scrollBox.isBottom = true;
                            this.scrollBox.fixed = false;
                        }
                    }
                }
            }
        },
        components: {
            Response: Response,
            SocialShare: SocialShare,
            VueGoodshareFacebook: VueGoodshareFacebook,
            VueGoodshareVkontakte: VueGoodshareVkontakte,
            // VueGoodshareEmail: VueGoodshareEmail,
            VueGoodshareTwitter: VueGoodshareTwitter,
        }
    }
</script>


<style lang="scss" scoped>

    @import "../../assets/scss/variables.scss";

    .p-detail {
        padding: 16rem 0 10.8rem;
        position: relative;
        background-color: #f9fafb;
        overflow: hidden;
        z-index: 1;

        .p-bg {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 0;
            background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDIxIDEwODUiPjxwYXRoIGQ9Ik0wIDU2LjVDMCAyNS4zIDI1LjMgMCA1Ni41IDBTMTEzIDI1LjMgMTEzIDU2LjUgODcuNyAxMTMgNTYuNSAxMTMgMCA4Ny43IDAgNTYuNXpNMjc0LjUgMEMyNDMuMyAwIDIxOCAyNS4zIDIxOCA1Ni41czI1LjMgNTYuNSA1Ni41IDU2LjVTMzMxIDg3LjcgMzMxIDU2LjUgMzA1LjcgMCAyNzQuNSAwem0tMTA1IDMxMWMzMS4yIDAgNTYuNS0yNS4zIDU2LjUtNTYuNVMyMDAuNyAxOTggMTY5LjUgMTk4IDExMyAyMjMuMyAxMTMgMjU0LjVzMjUuMyA1Ni41IDU2LjUgNTYuNXptMzM2LTMxMUM0NzQuMyAwIDQ0OSAyNS4zIDQ0OSA1Ni41czI1LjMgNTYuNSA1Ni41IDU2LjVTNTYyIDg3LjcgNTYyIDU2LjUgNTM2LjcgMCA1MDUuNSAwem0tMTA2IDMxMWMzMS4yIDAgNTYuNS0yNS4zIDU2LjUtNTYuNVM0MzAuNyAxOTggMzk5LjUgMTk4IDM0MyAyMjMuMyAzNDMgMjU0LjVzMjUuMyA1Ni41IDU2LjUgNTYuNXptMzM2LTMxMUM3MDQuMyAwIDY3OSAyNS4zIDY3OSA1Ni41czI1LjMgNTYuNSA1Ni41IDU2LjVTNzkyIDg3LjcgNzkyIDU2LjUgNzY2LjcgMCA3MzUuNSAwem0tMTA2IDMxMWMzMS4yIDAgNTYuNS0yNS4zIDU2LjUtNTYuNVM2NjAuNyAxOTggNjI5LjUgMTk4IDU3MyAyMjMuMyA1NzMgMjU0LjVzMjUuMyA1Ni41IDU2LjUgNTYuNXptMzM1LTMxMUM5MzMuMyAwIDkwOCAyNS4zIDkwOCA1Ni41czI1LjMgNTYuNSA1Ni41IDU2LjUgNTYuNS0yNS4zIDU2LjUtNTYuNVM5OTUuNyAwIDk2NC41IDB6bS0xMDUgMTk4Yy0zMS4yIDAtNTYuNSAyNS4zLTU2LjUgNTYuNXMyNS4zIDU2LjUgNTYuNSA1Ni41IDU2LjUtMjUuMyA1Ni41LTU2LjUtMjUuMy01Ni41LTU2LjUtNTYuNXptLTgwMyAzMDFjMzEuMiAwIDU2LjUtMjUuMyA1Ni41LTU2LjVTODcuNyAzODYgNTYuNSAzODYgMCA0MTEuMyAwIDQ0Mi41IDI1LjMgNDk5IDU2LjUgNDk5em0yMTgtMTEzYy0zMS4yIDAtNTYuNSAyNS4zLTU2LjUgNTYuNXMyNS4zIDU2LjUgNTYuNSA1Ni41IDU2LjUtMjUuMyA1Ni41LTU2LjUtMjUuMy01Ni41LTU2LjUtNTYuNXpNMTEzIDY0MC41YzAgMzEuMiAyNS4zIDU2LjUgNTYuNSA1Ni41czU2LjUtMjUuMyA1Ni41LTU2LjUtMjUuMy01Ni41LTU2LjUtNTYuNS01Ni41IDI1LjMtNTYuNSA1Ni41ek01MDUuNSAzODZjLTMxLjIgMC01Ni41IDI1LjMtNTYuNSA1Ni41czI1LjMgNTYuNSA1Ni41IDU2LjUgNTYuNS0yNS4zIDU2LjUtNTYuNS0yNS4zLTU2LjUtNTYuNS01Ni41em0tMTA2IDMxMWMzMS4yIDAgNTYuNS0yNS4zIDU2LjUtNTYuNVM0MzAuNyA1ODQgMzk5LjUgNTg0IDM0MyA2MDkuMyAzNDMgNjQwLjVzMjUuMyA1Ni41IDU2LjUgNTYuNXptMzM2LTMxMWMtMzEuMiAwLTU2LjUgMjUuMy01Ni41IDU2LjVzMjUuMyA1Ni41IDU2LjUgNTYuNSA1Ni41LTI1LjMgNTYuNS01Ni41LTI1LjMtNTYuNS01Ni41LTU2LjV6bS0xMDYgMTk4Yy0zMS4yIDAtNTYuNSAyNS4zLTU2LjUgNTYuNXMyNS4zIDU2LjUgNTYuNSA1Ni41IDU2LjUtMjUuMyA1Ni41LTU2LjUtMjUuMy01Ni41LTU2LjUtNTYuNXptLTU3MyAxOTBDMjUuMyA3NzQgMCA3OTkuMyAwIDgzMC41UzI1LjMgODg3IDU2LjUgODg3czU2LjUtMjUuMyA1Ni41LTU2LjVTODcuNyA3NzQgNTYuNSA3NzR6bTIxOCAwYy0zMS4yIDAtNTYuNSAyNS4zLTU2LjUgNTYuNXMyNS4zIDU2LjUgNTYuNSA1Ni41IDU2LjUtMjUuMyA1Ni41LTU2LjUtMjUuMy01Ni41LTU2LjUtNTYuNXptLTEwNSAxOThjLTMxLjIgMC01Ni41IDI1LjMtNTYuNSA1Ni41czI1LjMgNTYuNSA1Ni41IDU2LjUgNTYuNS0yNS4zIDU2LjUtNTYuNS0yNS4zLTU2LjUtNTYuNS01Ni41em0zMzYtMTk4Yy0zMS4yIDAtNTYuNSAyNS4zLTU2LjUgNTYuNXMyNS4zIDU2LjUgNTYuNSA1Ni41IDU2LjUtMjUuMyA1Ni41LTU2LjUtMjUuMy01Ni41LTU2LjUtNTYuNXptLTEwNiAxOThjLTMxLjIgMC01Ni41IDI1LjMtNTYuNSA1Ni41czI1LjMgNTYuNSA1Ni41IDU2LjUgNTYuNS0yNS4zIDU2LjUtNTYuNS0yNS4zLTU2LjUtNTYuNS01Ni41eiIgZmlsbD0iI2Y2ZjlmYSIvPjwvc3ZnPg==') -2.7rem -6rem no-repeat;
            background-size: 53.5% auto;
            z-index: -1;
        }
        .p-bg__1 {
            padding-bottom: 55%;
            background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDEgODMxIj48cGF0aCBvcGFjaXR5PSIwLjQ1IiBmaWxsPSIjRURGMEYzIiBkPSJNMjU2IDY1YzAtMzUuOSAyOS4xLTY1IDY1LTY1czY1IDI5LjEgNjUgNjUtMjkuMSA2NS02NSA2NS02NS0yOS4xLTY1LTY1em0zMjAgNjVjMzUuOSAwIDY1LTI5LjEgNjUtNjVTNjExLjkgMCA1NzYgMHMtNjUgMjkuMS02NSA2NSAyOS4xIDY1IDY1IDY1ek0zMjEgMzUwYy0zNS45IDAtNjUgMjkuMS02NSA2NXMyOS4xIDY1IDY1IDY1IDY1LTI5LjEgNjUtNjUtMjkuMS02NS02NS02NXptMCAzNTFjLTM1LjkgMC02NSAyOS4xLTY1IDY1czI5LjEgNjUgNjUgNjUgNjUtMjkuMSA2NS02NS0yOS4xLTY1LTY1LTY1ek0xOTMgMzA1YzM1LjkgMCA2NS0yOS4xIDY1LTY1cy0yOS4xLTY1LTY1LTY1LTY1IDI5LjEtNjUgNjUgMjkuMSA2NSA2NSA2NXptMCAyMjFjLTM1LjkgMC02NSAyOS4xLTY1IDY1czI5LjEgNjUgNjUgNjUgNjUtMjkuMSA2NS02NS0yOS4xLTY1LTY1LTY1em0zODMtMTc2Yy0zNS45IDAtNjUgMjkuMS02NSA2NXMyOS4xIDY1IDY1IDY1IDY1LTI5LjEgNjUtNjUtMjkuMS02NS02NS02NXptMCAzNTFjLTM1LjkgMC02NSAyOS4xLTY1IDY1czI5LjEgNjUgNjUgNjUgNjUtMjkuMSA2NS02NS0yOS4xLTY1LTY1LTY1ek00NDggMzA1YzM1LjkgMCA2NS0yOS4xIDY1LTY1cy0yOS4xLTY1LTY1LTY1LTY1IDI5LjEtNjUgNjUgMjkuMSA2NSA2NSA2NXptMCAyMjFjLTM1LjkgMC02NSAyOS4xLTY1IDY1czI5LjEgNjUgNjUgNjUgNjUtMjkuMSA2NS02NS0yOS4xLTY1LTY1LTY1ek02NSAxMzBjMzUuOSAwIDY1LTI5LjEgNjUtNjVTMTAwLjkgMCA2NSAwIDAgMjkuMSAwIDY1czI5LjEgNjUgNjUgNjV6bTAgMzUwYzM1LjkgMCA2NS0yOS4xIDY1LTY1cy0yOS4xLTY1LTY1LTY1LTY1IDI5LjEtNjUgNjUgMjkuMSA2NSA2NSA2NXptMCAyMjFjLTM1LjkgMC02NSAyOS4xLTY1IDY1czI5LjEgNjUgNjUgNjUgNjUtMjkuMSA2NS02NS0yOS4xLTY1LTY1LTY1eiIvPjwvc3ZnPg==') -0.4rem 5.9rem no-repeat;
            background-size: 34% 80%;
        }
        .p-bg__2 {
            top: auto;
            bottom: 0;
            padding-bottom: 55%;
            background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0NzkgMTEwMiI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE2NyAwbC02MiAxMDdoMTI0TDE2NyAwem0wIDM4LjZsMjguMzIgNDguODZoLTU2LjYzTDE2NyAzOC42ek0xMDIgNjc1VjU0NEwwIDYwOS41IDEwMiA2NzV6bS0xOS40LTM1LjY0TDM2LjEgNjA5LjVsNDYuNS0yOS44NnY1OS43MnpNNTkgMzE3bDYyIDEwNyA2Mi0xMDdINTl6bTMzLjY5IDE5LjU0aDU2LjYzTDEyMSAzODUuNGwtMjguMzEtNDguODZ6TTI5NSA0NzNsLTYyIDEwN2gxMjRsLTYyLTEwN3ptMCAzOC42bDI4LjMxIDQ4Ljg2aC01Ni42M0wyOTUgNTExLjZ6TTMyOCAxNTV2MTMxbDEwMi02NS41TDMyOCAxNTV6bTE5LjQgMzUuNjRsNDYuNTEgMjkuODctNDYuNTEgMjkuODZ2LTU5Ljczek00MTcgODQzbDYyLTEwN0gzNTVsNjIgMTA3em0wLTM4LjZsLTI4LjMxLTQ4Ljg2aDU2LjYzTDQxNyA4MDQuNHptOSAyOTcuNlY5NzFsLTEwMiA2NS41IDEwMiA2NS41em0tMTkuNC0zNS42NGwtNDYuNTEtMjkuODcgNDYuNTEtMjkuODZ2NTkuNzN6TTEyOSA5NTNsMTAyLTY1LjVMMTI5IDgyMnYxMzF6bTE5LjQtOTUuMzdsNDYuNTEgMjkuODctNDYuNTEgMjkuODZ2LTU5LjczeiIvPjwvc3ZnPg==') calc(100% + 1rem) 100% no-repeat;
            background-size: 20% 84%;
        }
    }
    .p-content {
        width: 95%;
        max-width: 975px;
        margin: 0 auto;
        position: relative;
        z-index: 2;
    }
    .p-detail-title {
        font-size: 50px;
        line-height: 56px;
        font-family: $font-family-alternative;
        font-weight: 500;
        margin-bottom: 2.4rem;
        color: $color-strong-text;

        span {
            display: block;
            font-size: 20px;
            line-height: 25px;
            margin-top: 0.8rem;
        }
    }
    .p-detail-description {
        color: $color-strong-text;
        line-height: 30px;
        padding-right: 2rem !important;
        margin-bottom: 7.1rem;

        p {
            margin-bottom: 1.9rem;

            &:last-child {
                margin-bottom: 0 !important;
            }
        }
    }

    .p-localization {
        position: relative;
        margin-right: -1.3rem;
    }
    .p-localization-wrapper {
        position: absolute;
        padding: 0 !important;

        &:not(.is-fixed) {
            width: 100% !important;
            right: 0 !important;
            margin: 0 !important;
        }
        &.is-fixed {
            position: fixed;
        }
        &.is-bottom {
            top: auto !important;
            bottom: 0;
        }
    }
    .p-localization-list {
        margin: 0 0 rem-calc(40);

        p {
            position: relative;
            font-size: 15px;
            line-height: 28px;
            font-family: $font-family-alternative;
            padding-left: 1.2rem;
            margin-bottom: 0.9rem;
            font-weight: 500;

            &:last-child {
                margin-bottom: 0 !important;
            }
            &:before {
                content: '';
                position: absolute;
                top: 0.45rem;
                left: -0.45rem;
                width: 16px;
                height: 0;
                padding-bottom: 16px;
                background-repeat: no-repeat;
                background-position: 50% 50%;
                -webkit-background-size: contain;
                background-size: contain;
            }
        }
    }

    .p-detail-locale:before {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxMyI+PHBhdGggb3BhY2l0eT0iLjMiIGQ9Ik0xNiAxdjhjMCAuNTUtLjQ1IDEtMSAxaC01djJoMi41Yy4yOCAwIC41LjIyLjUuNXMtLjIyLjUtLjUuNWgtOWMtLjI4IDAtLjUtLjIyLS41LS41cy4yMi0uNS41LS41SDZ2LTJIMWMtLjU1IDAtMS0uNDUtMS0xVjFjMC0uNTUuNDUtMSAxLTFoMTRjLjU1IDAgMSAuNDUgMSAxeiIvPjwvc3ZnPg==');
    }
    .p-detail-map:before {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMiAxNi45MyI+PHBhdGggb3BhY2l0eT0iLjMiIGQ9Ik02IDE2LjkzYy0zLjMyIDAtNi03Ljc1LTYtMTAuNjhDMCAzLjMzIDIuNjkgMCA2IDBzNiAyLjggNiA2LjI1LTIuNjkgMTAuNjgtNiAxMC42OHpNNiAzLjU3Yy0xLjQyIDAtMi41NyAxLjItMi41NyAyLjY4IDAgMS40OCAxLjE1IDIuNjggMi41NyAyLjY4czIuNTctMS4yIDIuNTctMi42OGMwLTEuNDgtMS4xNS0yLjY4LTIuNTctMi42OHoiLz48L3N2Zz4=');
    }
    .p-detail-relocation:before {
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNiAxNCI+PHBhdGggb3BhY2l0eT0iLjMiIGQ9Ik0xNSAzaC0zVjJjMC0xLjEtLjktMi0yLTJINmEyIDIgMCAwIDAtMiAydjFIMWMtLjU1IDAtMSAuNDUtMSAxdjljMCAuNTUuNDUgMSAxIDFoMTRjLjU1IDAgMS0uNDUgMS0xVjRjMC0uNTUtLjQ1LTEtMS0xek02IDJoNHYxSDZWMnpNNSA3YzAgLjU1LS40NSAxLTEgMXMtMS0uNDUtMS0xVjZjMC0uNTUuNDUtMSAxLTFzMSAuNDUgMSAxdjF6bTggMGMwIC41NS0uNDUgMS0xIDFzLTEtLjQ1LTEtMVY2YzAtLjU1LjQ1LTEgMS0xczEgLjQ1IDEgMXYxeiIvPjwvc3ZnPg==');
    }
    .p-localization-links .btn {
        font-size: 15px;
        line-height: 15px;
        font-weight: 500;
        font-family: $font-family-alternative;
        color: #ffffff;
        text-transform: uppercase;
        padding: rem-calc(18) rem-calc(22);
    }

    .p-alternative {
        padding: 3.55rem 0 3.3rem;
        background-color: #edf0f3;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #edf0f3;
            z-index: 1;
            top: -3rem;
            -webkit-transform: skewY(-2deg);
            transform: skewY(-2deg);
        }
        .p-content {
            max-width: 1250px;
        }
    }
    .p-alternative-subtitle {
        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        font-family: $font-family-alternative;
        color: #000000;
        margin-bottom: 2.5rem;

        a {
            display: inline-block;
            position: relative;
            text-decoration: none !important;
            color: $color-general;

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
    .p-alternative-img {
        display: block;
        position: absolute;
        width: auto;
        height: 11.375rem;
        right: -10.9rem;
        top: -19rem;
    }
    .p-alternative-row {
        &:after {
            content: '';
            display: block;
            width: calc(33.333% - 1rem);
            height: 0;
            opacity: 0;
        }
    }
    .p-alternative-item {
        width: calc(33.333% - 1rem);
        position: relative;
        background-color: #ffffff;
        padding: 1.3rem 1.5rem 1.1rem;
        cursor: pointer;
        transition: transform 300ms;
        box-shadow: 0 9px 15px rgba(0, 0, 0, 0.05);
        margin-bottom: 1.3rem;
        font-size: 16px;
        line-height: 28px;
        color: $color-strong-text;
        transform: translate3d(0, 0, 0);
        -webkit-font-smoothing: antialiased;

        &:hover {
            -webkit-transform: translate3d(0, -0.5rem, 0);
            -moz-transform: translate3d(0, -0.5rem, 0);
            -ms-transform: translate3d(0, -0.5rem, 0);
            transform: translate3d(0, -0.5rem, 0);
        }
        &-row {
            height: 100%;
        }
        &-location {
            margin-bottom: 0;
        }
        &-name {
            font-size: 24px;
            line-height: 36px;
            margin-bottom: 3.5rem;
            font-family: $font-family-alternative;

            span {
                display: block;
                font-size: 18px;
                line-height: 18px;
                font-family: $font-family-general;
                color: $color-other-text;
                margin-top: 0.7rem;
            }
        }
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //custom
    @media (max-width: 1350px) and (min-width: 1200px){
        .p-alternative-img {
            right: -6rem;
        }
    }
    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-detail {
            padding: 133px 0 62px;
            position: relative;
            z-index: 2;

            .p-bg {
                display: none;
            }
        }
        .p-content {
            width: 91%;
        }
        .p-detail-title {
            font-size: 30px;
            line-height: 40px;
            font-weight: 400;
            margin-bottom: 31px;

            span {
                font-size: 16px;
                line-height: 20px;
                margin-top: 7px;
            }
        }
        .p-detail-description {
            font-size: 14px;
            line-height: 22px;
            padding-right: 0 !important;
            margin-bottom: 30px;
            order: 0;
            position: relative;
            z-index: 1;

            p {
                margin-bottom: 0;
                transition: margin-bottom 300ms;
            }
            span {
                max-height: 0;
                transition: max-height 300ms;
                overflow: hidden;
            }
            &.p-open {
                span {
                    max-height: 1000px;
                }
            }
            .p-detail-description-toggle {
                display: block;
                font-size: 13px;
                line-height: 13px;
                text-decoration: none;
                font-weight: 500;
                color: $color-general;

                &:before {
                    content: 'Развернуть';
                    display: inline-block;
                }
            }

            &.p-open {
                p {
                    margin-bottom: 20px;
                }
                .p-detail-description-toggle:before {
                    content: 'Свернуть';
                }
            }
        }
        .p-localization {
            order: 2;
            margin-right: 0;
            position: relative;
            z-index: 2;
        }
        .p-localization-wrapper {
            position: relative;
        }
        .p-localization-list {
            margin: 33px 0 0;

            p {
                font-size: 15px;
                line-height: 24px;
                padding-left: 27px;
                margin-bottom: 15px;

                &:before {
                    left: 0;
                    top: 5px;
                }
            }
        }
        .p-localization-links {
            position: fixed;
            bottom: 29px;
            width: 100%;
            left: 0;

            .btn {
                padding: 16px 16px;
            }
        }

        .p-alternative {
            padding: 56px 0 43px;
            position: relative;
            z-index: 1;

            &:before {
                top: -1rem;
            }
        }
        .p-alternative-img {
            height: 81px;
            right: 0;
            top: -50px;
        }
        .p-alternative-subtitle {
            margin-bottom: 13px;
        }
        .p-alternative-item {
            width: 100%;
            padding: 1.2rem;
            font-size: 14px;
            line-height: 26px;
            margin-bottom: 8px;

            &:hover {
                transform: translate3d(0, 0, 0);
            }
            &-name {
                font-size: 16px;
                line-height: 26px;
                letter-spacing: 0.15px;
                margin-bottom: 21px;
                font-weight: 500;

                span {
                    font-size: 14px;
                    line-height: 14px;
                    letter-spacing: -0.1px;
                    margin-top: 2px;
                }
            }
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-detail {
            padding: 143px 0 112px;

            .p-bg__1 {
                padding-bottom: 60%;
                background-size: 46% 100%;
                background-position: 0 0;
                margin-top: -10%;
            }
            .p-bg__2 {
                padding-bottom: 70%;
                background-size: 33% 100%;
            }
        }
        .p-content {
            width: 88.8%;
        }
        .p-detail-title {
            font-size: 35px;
            line-height: 36px;
            margin-bottom: 25px;

            span {
                font-size: 16px;
                line-height: 22px;
                margin-top: 19px;
            }
        }
        .p-detail-description {
            font-size: 14px;
            line-height: 26px;
            padding-right: 0 !important;
            margin-bottom: 35px;

            p {
                margin-bottom: 0;
            }
        }
        .p-localization-list {
            margin: rem-calc(7) 0 rem-calc(70);

            p {
                position: relative;
                font-size: 15px;
                line-height: 28px;
                font-family: "Cera Pro", sans-serif;
                padding-left: 49px;
                margin-bottom: 14px;
                font-weight: 500;

                &:before {
                    left: 22px;
                }
            }
        }
        .p-localization-links {
            margin-left: 22px;

            .btn:not(.btn-shared) {
                padding: rem-calc(16) rem-calc(18);
            }
        }
        .p-alternative {
            padding: 10px 0 32px;
        }
        .p-alternative-subtitle {
            margin-bottom: 31px;
        }
        .p-alternative-img {
            height: 110px;
            right: 0;
            top: -51px;
        }
        .p-alternative-item {
            width: calc(50% - 12px);
            padding: 18px 24px 23px;
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 17px !important;

            .p-category-item:nth-last-child(-n + 2) {
                margin-bottom: 0 !important;
            }
            &-name {
                font-size: 20px;
                line-height: 26px;
                margin-bottom: 43px;

                span {
                    font-size: 14px;
                    line-height: 14px;
                    margin-top: 11px;
                }
            }
        }
    }

</style>

<style lang="scss">

    @import "../../assets/scss/variables.scss";

    .p-detail-list {
        color: $color-strong-text;

        h4,
        p {
            font-size: 16px;
            line-height: 30px;
            display: block;
            margin: 1.8rem 0 1rem;

            &:first-child {
                margin-top: 0 !important;
            }
            b {
                display: inline-block;
                margin: 0 !important;
            }
        }
        h4,
        b {
            display: block;
            font-size: 30px;
            line-height: 36px;
            font-family: $font-family-alternative;
            color: $color-general;
            font-weight: 500;
        }
        ul {
            list-style: none;
            margin: 0 !important;
            padding: 0 !important;

            li {
                position: relative;
                line-height: 28px;
                margin-bottom: 0.5rem;
                padding-left: 1.6rem;

                &:last-child {
                    margin-bottom: 0 !important;
                }
                &:before {
                    content: '\2022';
                    position: absolute;
                    top: -1px;
                    left: 0.4rem;
                }
            }
        }
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-detail-list {
            order: 1;
            position: relative;
            z-index: 1;

            h4,
            p {
                font-size: 14px;
                line-height: 22px;
                margin: 25px 0 13px;
            }
            h4,
            b {
                font-size: 20px;
                line-height: 24px;
            }
            ul li {
                position: relative;
                font-size: 14px;
                line-height: 22px;
                padding-left: 16px;
                margin-bottom: 15px;

                &:before {
                    top: 0;
                    left: 0;
                    font-size: 12px;
                }
            }
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-detail-list {
            h4,
            p {
                font-size: 15px;
                line-height: 26px;
            }
            h4,
            b {
                font-size: 26px;
                line-height: 30px;
            }
            ul li {
                font-size: 15px;
                line-height: 26px;
                padding-left: 18px;

                &:before {
                    top: 0;
                    left: 0;
                }
            }
        }
    }
</style>
