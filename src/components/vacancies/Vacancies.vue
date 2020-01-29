<template>
    <div class="p-vacancy-wrapper">
        <div class="p-vacancy">
            <div class="p-bg" v-parallax=".6"><!-- --></div>
            <div class="p-vacancy-content container">
                <div class="p-vacancy-search form-group">
                    <input type="search" v-model="searchStr" class="p-vacancy-search-input form-control" placeholder="Поиск вакансии">
                    <transition name="fade">
                        <a href="javascript: void(0);"
                           v-scroll-to="{ el: '#p-category', offset: -85, }"
                           class="p-vacancy-search-count"
                           :class="{'is-hidden': !searchStr, 'is-disable': searchVacancyCount === 0}">
                            <template v-if="searchVacancyCount > 0">
                                Найдено вакансий - {{ searchVacancyCount }}.
                            </template>
                            <template v-else
                                      class="p-vacancy-search-negative"
                            >
                                К сожалению, вакансии не найдены :(
                            </template>
                        </a>
                    </transition>
                </div>
                <transition-group tag="div" name="fade" class="p-vacancy-tabs row justify-content-between no-gutters">
                    <div @click.self="selectDirection()"
                         class="p-vacancy-item"
                         :key="'all'"
                         :class="{ 'p-active': !selected_directions }">
                        <div class="p-vacancy-item-title">
                            Все вакансии
                        </div>
                        <div class="p-vacancy-item-counter">
                            <span>
                                {{ allVacancyCount }}
                            </span>
                        </div>
                    </div>
                    <div @click.self="(direction.count_main_vacancy !== 0 || direction.count_additional_vacancy !== 0) ? selectDirection(direction) : null"
                         v-for="direction in directions.list"
                         :key="direction.id"
                         class="p-vacancy-item"
                         :class="{'p-vacancy-item__empty': (direction.count_main_vacancy === 0 && direction.count_additional_vacancy === 0), 'p-active': isActive(direction.name) }">
                        <div class="p-vacancy-item-title">
                            {{direction.name}}
                        </div>
                        <div class="p-vacancy-item-counter">
                            <span v-if="direction.count_main_vacancy !== 0 || direction.count_additional_vacancy !== 0">
                                {{direction.count_main_vacancy + direction.count_additional_vacancy}}
                            </span>
                            <div v-else class="p-vacancy-item-subscribe">
                                Нет вакансий
                                <a href="javascript:void(0);"
                                   @click="openSubscribeModal(direction)"
                                >
                                    Подписаться
                                </a>
                            </div>
                        </div>
                    </div>
                </transition-group>
            </div>
        </div>
        <div id="p-category" class="p-category">
            <transition-group tag="div" name="fade" class="p-category-content container">
                <div class="p-category-block"
                     :id="'block_' + direction.directionName.replace(/[^a-zA-Z0-9]/g, '')"
                     v-for="direction in switchVacancyList"
                     :key="direction.directionName"
                >
                    <p class="p-category-title">{{direction.directionName}}</p>
                    <div class="p-category-tabs row justify-content-between no-gutters">
                        <router-link v-for="vacancy in direction.vacancies"
                                     :key="vacancy.id"
                                     :to="{name: 'VacanciesDetail', params: {id: vacancy.id, direction: vacancy.handbk.name}}"
                                     tag="div"
                                     class="p-category-item"
                                     exact >
                            <div class="p-category-item-row row flex-column justify-content-between no-gutters">
                                <div class="p-category-item-name">
                                    {{vacancy.name}}
                                    <span>Полная занятость</span>
                                </div>
                                <div class="p-category-item-location"><template v-if="vacancy.remotely">Удаленно / </template>Офис</div>
                            </div>
                        </router-link>
                    </div>
                </div>
            </transition-group>
            <div class="p-vacancy-text text-center">
                Не нашли подходящую вакансию?<br/>
                <a href="javascript:void(0);"
                   @click="openSubscribeModal()"
                >Подпишитесь
                </a> на обновления, интересующего вас раздела
            </div>
        </div>


        <div class="p-modal">
            <subscribe-modal :selectedHandbk="selectedHandbk"></subscribe-modal>
        </div>
    </div>
</template>

<script>

    import { mapActions, mapState } from 'vuex';
    const SubscribeModal = () => import('@/components/modals/Subscribe.vue');

    export default {
        metaInfo: {
            title: 'Вакансии.'
        },
        data : function() {
            return {
                selected_directions: '',
                searchStr: '',
                selectedHandbk: {},
            }
        },
        computed: {
            ...mapState([
                'directions',
                'vacancies'
            ]),
            // список вакансий, отфильтрованных по категориям
            sortedVacancyList() {
                // если направление выбрано
                if(this.selected_directions) {
                    let sortedList = JSON.parse(JSON.stringify(this.vacancies.list));
                    // фильтруем по названию направления
                    sortedList = sortedList.filter(elem => elem.directionName === this.selected_directions);
                    return sortedList;
                } else {
                    //иначе выдаём все вакансии
                    return this.vacancies.list;
                }
            },
            //список вакансий, отфильтрованный по поиску
            searchVacancyList() {
                //копируем список всех вакансий
                let sortedList = JSON.parse(JSON.stringify(this.vacancies.list));
                sortedList.forEach(item => {
                    // фильтруем по совпадению названий вакансий (сравниваем в нижним регистре)
                    item.vacancies = item.vacancies.filter(elem => elem.name.toLowerCase().indexOf(this.searchStr.toLowerCase()) !== -1);
                });
                // фильтруем по наличию вакансий в категории
                sortedList = sortedList.filter(elem => elem.vacancies.length > 0);
                return sortedList;
            },
            // переключение между списком по разделам и списком по поиску
            switchVacancyList() {
                return this.searchStr ? this.searchVacancyList : this.sortedVacancyList;
            },
            // считаем количество найденных вакансий
            searchVacancyCount() {
                let counter = 0;
                for(let i = 0; i < this.searchVacancyList.length; i++) {
                    counter += this.searchVacancyList[i].vacancies.length;
                }
                return counter
            },
            // считаем количество всех вакансий
            allVacancyCount() {
                let counter = 0;
                for(let i = 0; i < this.vacancies.list.length; i++) {
                    counter += this.vacancies.list[i].vacancies.length;
                }
                return counter
            },
            // считаем отступ при скролле к блокам
            scrollTopOffset() {
                const windowWidth = window.innerWidth;
                return windowWidth <= 1200 ? (windowWidth < 768 ? 60 : 80) : 100
            }
        },
        watch : {
            searchStr: function () {
                // убираем выделение направления при поиске
                this.searchStr ? this.selected_directions = '' : false;
            },
        },
        mounted() {
            //проверяем перешли ли мы с выбранной категорией
            if(this.$attrs.directionName) {
                this.selected_directions = this.$attrs.directionName;
                //скроллим страницу к выбранному направлению
                this.scrollItem((this.selected_directions).replace(/[^a-zA-Z0-9]/g, ''));
            }
        },
        methods: {
            //скроллим к выбранному элементу
            scrollItem(id) {
                const setScrollItem = setInterval(() => {
                    //проверяем есть ли блок на странице
                    if(document.querySelector(`#block_${id}`)) {
                        //скроллим к нему
                        this.$scrollTo('#block_' + id, 0, {offset: -this.scrollTopOffset});
                        //прибираемся за собой
                        clearInterval(setScrollItem);
                        return 0;
                    }
                }, 300);
            },
            //проверяем является ли категория выбранной
            isActive(elem_name) {
                return this.selected_directions === elem_name;
            },
            //переключаем выбранные направления
            selectDirection(selected_direct){
                if(!selected_direct) {
                    this.searchStr = '';
                    // Если выбраны все вакансии
                    this.selected_directions = null;
                    //скроллим страницу ко всем направлениям
                    this.$scrollTo('#p-category', 0, {offset: -this.scrollTopOffset});
                } else if (this.selected_directions === (selected_direct.name)) {
                    // Если направление уже было выбранно
                    this.selected_directions = null;
                } else {
                    this.searchStr = '';
                    // Если направление еще не было выбрано, то добавляем
                    this.selected_directions = selected_direct.name;
                    //скроллим страницу к выбранному направлению
                    this.scrollItem((selected_direct.name).replace(/[^a-zA-Z0-9]/g, ''));
                }
            },
            //открытие модального окна с подпиской на вакансию
            openSubscribeModal(direction) {
                //запоминаем данные вакансии с которой мы пришли
                if(direction) {
                    this.selectedHandbk = {
                        value: direction.id,
                        text: direction.name
                    };
                } else {
                    this.selectedHandbk = {};
                }
                this.$nextTick(() => {
                    this.$root.$emit('bv::show::modal', 'p-modal-subscribe');
                });
            },
        },
        components: {
            SubscribeModal: SubscribeModal,
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/scss/variables.scss";

    .p-vacancy-wrapper {
        background-color: #f9fafb;
    }
    .p-vacancy {
        padding: 15.85rem 0 11.5rem;
        position: relative;
        background-color: #edf0f3;
        overflow: hidden;
        z-index: 1;

        .p-bg {
            position: absolute;
            top: -15vh;
            left: 0;
            width: 100%;
            height: calc(100% + 30vh);
            background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMDIxIDEwODUiPjxwYXRoIGQ9Ik0wIDU2LjVDMCAyNS4zIDI1LjMgMCA1Ni41IDBTMTEzIDI1LjMgMTEzIDU2LjUgODcuNyAxMTMgNTYuNSAxMTMgMCA4Ny43IDAgNTYuNXpNMjc0LjUgMEMyNDMuMyAwIDIxOCAyNS4zIDIxOCA1Ni41czI1LjMgNTYuNSA1Ni41IDU2LjVTMzMxIDg3LjcgMzMxIDU2LjUgMzA1LjcgMCAyNzQuNSAwem0tMTA1IDMxMWMzMS4yIDAgNTYuNS0yNS4zIDU2LjUtNTYuNVMyMDAuNyAxOTggMTY5LjUgMTk4IDExMyAyMjMuMyAxMTMgMjU0LjVzMjUuMyA1Ni41IDU2LjUgNTYuNXptMzM2LTMxMUM0NzQuMyAwIDQ0OSAyNS4zIDQ0OSA1Ni41czI1LjMgNTYuNSA1Ni41IDU2LjVTNTYyIDg3LjcgNTYyIDU2LjUgNTM2LjcgMCA1MDUuNSAwem0tMTA2IDMxMWMzMS4yIDAgNTYuNS0yNS4zIDU2LjUtNTYuNVM0MzAuNyAxOTggMzk5LjUgMTk4IDM0MyAyMjMuMyAzNDMgMjU0LjVzMjUuMyA1Ni41IDU2LjUgNTYuNXptMzM2LTMxMUM3MDQuMyAwIDY3OSAyNS4zIDY3OSA1Ni41czI1LjMgNTYuNSA1Ni41IDU2LjVTNzkyIDg3LjcgNzkyIDU2LjUgNzY2LjcgMCA3MzUuNSAwem0tMTA2IDMxMWMzMS4yIDAgNTYuNS0yNS4zIDU2LjUtNTYuNVM2NjAuNyAxOTggNjI5LjUgMTk4IDU3MyAyMjMuMyA1NzMgMjU0LjVzMjUuMyA1Ni41IDU2LjUgNTYuNXptMzM1LTMxMUM5MzMuMyAwIDkwOCAyNS4zIDkwOCA1Ni41czI1LjMgNTYuNSA1Ni41IDU2LjUgNTYuNS0yNS4zIDU2LjUtNTYuNVM5OTUuNyAwIDk2NC41IDB6bS0xMDUgMTk4Yy0zMS4yIDAtNTYuNSAyNS4zLTU2LjUgNTYuNXMyNS4zIDU2LjUgNTYuNSA1Ni41IDU2LjUtMjUuMyA1Ni41LTU2LjUtMjUuMy01Ni41LTU2LjUtNTYuNXptLTgwMyAzMDFjMzEuMiAwIDU2LjUtMjUuMyA1Ni41LTU2LjVTODcuNyAzODYgNTYuNSAzODYgMCA0MTEuMyAwIDQ0Mi41IDI1LjMgNDk5IDU2LjUgNDk5em0yMTgtMTEzYy0zMS4yIDAtNTYuNSAyNS4zLTU2LjUgNTYuNXMyNS4zIDU2LjUgNTYuNSA1Ni41IDU2LjUtMjUuMyA1Ni41LTU2LjUtMjUuMy01Ni41LTU2LjUtNTYuNXpNMTEzIDY0MC41YzAgMzEuMiAyNS4zIDU2LjUgNTYuNSA1Ni41czU2LjUtMjUuMyA1Ni41LTU2LjUtMjUuMy01Ni41LTU2LjUtNTYuNS01Ni41IDI1LjMtNTYuNSA1Ni41ek01MDUuNSAzODZjLTMxLjIgMC01Ni41IDI1LjMtNTYuNSA1Ni41czI1LjMgNTYuNSA1Ni41IDU2LjUgNTYuNS0yNS4zIDU2LjUtNTYuNS0yNS4zLTU2LjUtNTYuNS01Ni41em0tMTA2IDMxMWMzMS4yIDAgNTYuNS0yNS4zIDU2LjUtNTYuNVM0MzAuNyA1ODQgMzk5LjUgNTg0IDM0MyA2MDkuMyAzNDMgNjQwLjVzMjUuMyA1Ni41IDU2LjUgNTYuNXptMzM2LTMxMWMtMzEuMiAwLTU2LjUgMjUuMy01Ni41IDU2LjVzMjUuMyA1Ni41IDU2LjUgNTYuNSA1Ni41LTI1LjMgNTYuNS01Ni41LTI1LjMtNTYuNS01Ni41LTU2LjV6bS0xMDYgMTk4Yy0zMS4yIDAtNTYuNSAyNS4zLTU2LjUgNTYuNXMyNS4zIDU2LjUgNTYuNSA1Ni41IDU2LjUtMjUuMyA1Ni41LTU2LjUtMjUuMy01Ni41LTU2LjUtNTYuNXptLTU3MyAxOTBDMjUuMyA3NzQgMCA3OTkuMyAwIDgzMC41UzI1LjMgODg3IDU2LjUgODg3czU2LjUtMjUuMyA1Ni41LTU2LjVTODcuNyA3NzQgNTYuNSA3NzR6bTIxOCAwYy0zMS4yIDAtNTYuNSAyNS4zLTU2LjUgNTYuNXMyNS4zIDU2LjUgNTYuNSA1Ni41IDU2LjUtMjUuMyA1Ni41LTU2LjUtMjUuMy01Ni41LTU2LjUtNTYuNXptLTEwNSAxOThjLTMxLjIgMC01Ni41IDI1LjMtNTYuNSA1Ni41czI1LjMgNTYuNSA1Ni41IDU2LjUgNTYuNS0yNS4zIDU2LjUtNTYuNS0yNS4zLTU2LjUtNTYuNS01Ni41em0zMzYtMTk4Yy0zMS4yIDAtNTYuNSAyNS4zLTU2LjUgNTYuNXMyNS4zIDU2LjUgNTYuNSA1Ni41IDU2LjUtMjUuMyA1Ni41LTU2LjUtMjUuMy01Ni41LTU2LjUtNTYuNXptLTEwNiAxOThjLTMxLjIgMC01Ni41IDI1LjMtNTYuNSA1Ni41czI1LjMgNTYuNSA1Ni41IDU2LjUgNTYuNS0yNS4zIDU2LjUtNTYuNS0yNS4zLTU2LjUtNTYuNS01Ni41eiIgZmlsbD0iI2Y2ZjlmYSIvPjwvc3ZnPg==') -2.7rem -6rem no-repeat;
            background-size: 53.5% 92%;
            z-index: -1;
        }
    }
    .p-vacancy-content {
        position: relative;
    }
    .p-vacancy-search {}
    .p-vacancy-search-count {
        position: relative;
        display: inline-block;
        margin-top: 1.75rem;
        font-size: rem-calc(17);
        line-height: rem-calc(17);
        letter-spacing: 1px;
        text-decoration: none !important;
        outline: none !important;
        box-shadow: none !important;
        font-weight: 500;
        color: $color-general;
        font-family: $font-family-alternative;
        white-space: nowrap;

        &.is-hidden {
            opacity: 0;
            visibility: hidden;
            pointer-events: none;
        }
        &.is-disable {
            pointer-events: none;
            color: $color-other-text;
        }
        &:before {
            content: '';
            position: absolute;
            left: 50%;
            bottom: -2px;
            width: 0;
            height: 1px;
            background-color: #48d100;
            transform: translateX(-50%);
            transition: width 300ms;
        }
        &:focus:before,
        &:hover:before {
            width: 100%;
        }
    }
    .p-vacancy-search-input {
        height: auto;
        padding: 1rem 2rem 1rem 4.5rem;
        border: none;
        background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMC45IDI4LjMiPjxwYXRoIGQ9Ik0zMC45IDI1LjZsLTgtNi42YzEuMi0xLjkgMS44LTQuMSAxLjgtNi41QzI0LjcgNS42IDE5LjIgMCAxMi40IDAgNS41IDAgMCA1LjYgMCAxMi41UzUuNSAyNSAxMi40IDI1YzMuMiAwIDYuMi0xLjMgOC40LTMuNGw4IDYuNSAyLjEtMi41ek0yLjYgMTIuNWMwLTUuNSA0LjQtMTAgOS44LTEwczkuOCA0LjUgOS44IDEwLTQuNCAxMC05LjggMTAtOS44LTQuNC05LjgtMTB6IiBmaWxsPSIjYjNiZWMxIi8+PC9zdmc+") 1.2rem 50% no-repeat #ffffff;
        -webkit-background-size: 32px 30px;
        background-size: 32px 30px;
        color: $color-other-text;
        border-radius: 0.25rem;
        &::-moz-placeholder { color: #b3bec1; }
        &::-webkit-input-placeholder { color: #b3bec1; }
        &:-ms-input-placeholder { color: #b3bec1; }
        &::-ms-input-placeholder { color: #b3bec1; }
        &::placeholder { color: #b3bec1; }
    }
    .p-vacancy-tabs {
        margin-top: 1.75rem;

        &:after {
            content: '';
            display: block;
            width: calc(33.333% - 1rem);
            height: 0;
            opacity: 0;
        }
    }
    .p-vacancy-item {
        width: calc(33.333% - 1rem);
        position: relative;
        background-color: #ffffff;
        padding: 1.35rem 1.34rem 1.7rem;
        margin-bottom: 1.2rem;
        border-radius: 0.1rem;
        cursor: pointer;
        box-shadow: 0 9px 15px rgba(0, 0, 0, 0.05);
        transition: transform 300ms;
        transform: translate3d(0, 0, 0);
        -webkit-font-smoothing: antialiased;

        &:not(.p-vacancy-item__empty):hover {
            -webkit-transform: translate3d(0, -0.5rem, 0);
            -moz-transform: translate3d(0, -0.5rem, 0);
            -ms-transform: translate3d(0, -0.5rem, 0);
            transform: translate3d(0, -0.5rem, 0);
        }
        &.p-active {
            outline: 2px solid $color-general;
        }
    }
    .p-vacancy-item__empty {
        cursor: default;
        .p-vacancy-item-title {
            color: #b6b7bb;
        }
    }
    .p-vacancy-item-title {
        font-size: 22px;
        line-height: 22px;
        font-weight: 500;
        font-family: 'Cera Pro', 'Verdana', sans-serif;
        color: #373737;
        pointer-events: none;
    }
    .p-vacancy-item-counter {
        position: absolute;
        right: 1.6rem;
        top: 45%;
        text-align: right;
        -ms-text-align-last: right;
        text-align-last: right;
        -webkit-transform: translateY(-50%);
        -moz-transform: translateY(-50%);
        -ms-transform: translateY(-50%);
        -o-transform: translateY(-50%);
        transform: translateY(-50%);
        font-size: 20px;
        line-height: 20px;
        color: #a0a0a0;
        pointer-events: none;
    }
    .p-vacancy-item-subscribe {
        font-size: 14px;
        line-height: 14px;

        a {
            position: relative;
            display: block;
            margin-top: 0.3rem;
            text-decoration: none;
            outline: none !important;
            -webkit-box-shadow: none !important;
            -moz-box-shadow: none !important;
            box-shadow: none !important;
            font-size: 18px;
            line-height: 18px;
            font-weight: 500;
            font-family: 'Cera Pro', 'Verdana', sans-serif;
            color: #48d100;
            pointer-events: auto;

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
    .p-vacancy-text {
        position: relative;
        margin-top: 2.75rem;
        line-height: 30px;
        font-family: $font-family-alternative;
        z-index: 1;

        a {
            -webkit-box-shadow: none;
            -moz-box-shadow: none;
            box-shadow: none;
            color: $color-general;
            font-weight: 500;
            text-decoration: none;
            position: relative;

            &:before {
                content: '';
                position: absolute;
                left: 50%;
                bottom: -2px;
                width: 0;
                height: 1px;
                background-color: #48d100;
                transform: translateX(-50%);
                transition: width 300ms;
            }
            &:focus:before,
            &:hover:before {
                width: 100%;
            }
        }
    }
    .p-vacancy-shape {
        width: rem-calc(147);
        padding-bottom: rem-calc(137);
        position: absolute;
        bottom: -7.65rem;
        right: 4.65%;
    }

    .p-category {
        padding: 3.5rem 0 5rem;
        background-color: #f9fafb;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #f9fafb;
            z-index: 1;
            top: -3rem;
            -webkit-transform: skewY(-2deg);
            transform: skewY(-2deg);
        }
    }
    .p-category-content {
        position: relative;
        z-index: 2;
    }
    .p-category-title {
        font-size: 35px;
        line-height: 35px;
        margin-bottom: 2.2rem;
        font-family: $font-family-alternative;
        color: $color-strong-text;
    }
    .p-category-block {
        padding: 1.5rem 0;
    }
    .p-category-tabs {

        &:after {
            content: '';
            display: block;
            width: calc(33.333% - 1rem);
            height: 0;
            opacity: 0;
        }
    }
    .p-category-item {
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
        .p-category-item-row {
            height: 100%;
        }
        .p-category-item-location {
            margin-bottom: 0;
        }
    }
    .p-category-item-name {
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

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-vacancy {
            padding: rem-calc(92) 0 rem-calc(105);
            background: #edf0f3;

            .p-bg {
                display: none;
            }
        }
        .p-vacancy-search-input {
            padding: 10px 28px 10px 58px;
            background-size: 22px 22px;
        }
        .p-vacancy-search-count {
            font-size: 15px;
            line-height: 15px;
            letter-spacing: 0.3px;
            margin-top: 16px;
        }
        .p-vacancy-tabs {
            margin-top: 16px;

            &:after {
                display: none;
            }
        }
        .p-vacancy-item {
            width: 100%;
            padding: 10px 19px 11px;
            margin-bottom: 8px !important;
            transform: translate3d(0, 0, 0) !important;

            &:last-child {
                margin-bottom: 0 !important;
            }
        }
        .p-vacancy-item-title {
            font-size: 16px;
        }
        .p-vacancy-item-counter {
            right: 19px;
            top: 50%;
            font-size: 15px;
            line-height: 15px;
        }
        .p-vacancy-item-subscribe {
            font-size: 0;
            line-height: 0;

            a {
                font-size: 14px;
                line-height: 14px;
            }
        }
        .p-vacancy-text {
            margin: 5px 10px 0;
            font-size: 14px;
            line-height: 22px;
        }
        .p-category {
            padding: 1px 0 2.5rem;
            min-height: 70px;
        }
        .p-category-title {
            font-size: 30px;
            line-height: 30px;
            margin-bottom: rem-calc(24);
        }
        .p-category-item {
            width: 100%;
            padding: rem-calc(15) rem-calc(15);
            font-size: 14px;
            line-height: 26px;
            margin-bottom: 8px;

            &:hover {
                transform: translate3d(0, 0, 0);
            }
        }
        .p-category-item-name {
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
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-vacancy {
            padding: 7rem 0 9rem;

            .p-bg {
                width: 150%;
            }
        }
        .p-vacancy-search-input {
            padding: 12px 20px 12px 62px;
            background-position: 1.4rem 50%;
            background-size: 1.7rem 1.7rem;
        }
        .p-vacancy-tabs {
            margin-top: 2.2rem;

            &:after {
                width: calc(33.333% - 5px);
            }
        }
        .p-vacancy-item {
            width: calc(33.333% - 5px);
            padding: 15px 18px 17px;
            margin-bottom: 8px !important;

            &:not(.p-vacancy-item__empty):hover {
                -webkit-transform: translate3d(0, 0, 0);
                transform: translate3d(0, 0, 0);
            }
        }
        .p-vacancy-item-title {
            font-size: 16px;
            line-height: 16px;
        }
        .p-vacancy-item-counter {
            right: 19px;
            font-size: 15px;
            line-height: 15px;
            top: 50%;
        }
        .p-vacancy-item-subscribe {
            font-size: 0;
            line-height: 0;

            a {
                margin-top: 0;
                font-size: 14px;
                line-height: 14px;
                margin-right: -4px;
            }
        }
        .p-vacancy-text {
             margin-top: 23px;
             line-height: 27px;
         }
        .p-vacancy-shape {
            width: 85px;
            padding-bottom: 80px;
            bottom: -5rem;
            right: 4px;
        }
        .p-category-block {
            padding: rem-calc(10) 0;
        }
        .p-category {
            padding: rem-calc(6) 0 rem-calc(55);
            min-height: 70px;
        }
        .p-category-title {
            font-size: 27px;
            line-height: 31px;
            margin-bottom: 18px;
        }
        .p-category-item {
            width: calc(50% - 12px);
            padding: 18px 24px 23px;
            font-size: 14px;
            line-height: 24px;
            margin-bottom: 17px !important;

            .p-category-item:nth-last-child(-n + 2) {
                margin-bottom: 0 !important;
            }
        }
        .p-category-item-name {
            font-size: 20px;
            line-height: 26px;
            margin-bottom: 43px;
        }
        .p-category-item-name span {
            font-size: 14px;
            line-height: 14px;
            margin-top: 11px;
        }
    }

</style>
