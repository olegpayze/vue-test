<template>
    <b-modal id="p-modal-subscribe" ref="modalSubscribe" size="subscribe" centered hide-footer>
        <template slot="modal-header-close">
            <div class="p-svg p-close">
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20"><path stroke="#3F3F3F" stroke-width="2" fill="none" d="M17.412 1.871L1.975 17.307M2.184 2.079l15.02 15.02"/></svg>
            </div>
        </template>
        <div class="p-modal-subscribe row no-gutters justify-content-center text-center">
            <p class="p-modal-title col-12">Подписка на&#160;вакансии</p>
            <div class="p-modal-text text-center">Как только у&#160;нас появятся вакансии, в&#160;интересующем вас направлении,
                мы сразу же сообщим вам о них :)</div>
            <div class="p-modal-subscribe-col">
                <v-select v-model="selected"
                          v-validate="'required'"
                          :class="{ 'is-invalid': subscribeEmail && selected.value === null }"
                          name="category"
                          label="name"
                          :options="HandbkList"></v-select>
                <input v-model="subscribeEmail"
                       class="form-control"
                       :class="{ 'is-invalid': isErrors && isInvalide('email') }"
                       v-validate="'email|required'"
                       placeholder="Ваш E-mail"
                       type="email"
                       name="email"
                       required />
                <a href="javascript:void(0);"
                   @click="sendFormSubscribe()"
                   :class="{ 'disabled': isErrors || !subscribeEmail || !selected.value}"
                   class="btn btn-submit">Подписаться</a>
            </div>
        </div>
    </b-modal>
</template>

<script>
    import { mapActions, mapState } from 'vuex';

    export default {
        data : function() {
            return {
                selected: {
                    value: null,
                    text: null,
                },
                subscribeEmail: null
            }
        },
        computed: {
            ...mapState([
                'directions',
            ]),
            //ошибки при валидации
            isErrors() {
                return this.errors.items.length > 0;
            },
            //данные для запроса подписки на вакансию
            subscribeBody() {
                if(this.subscribeEmail && this.selected.value){
                    return {
                        'email': this.subscribeEmail,
                        'handbk': parseInt(this.selected.value),
                    }
                }
            },
            //отформатированный список направлений вакансий
            HandbkList() {
                let list = [];
                if(this.directions.list) {
                    for(let i = 0; i < this.directions.list.length; i++) {
                        let tmp = {};
                        tmp.value = this.directions.list[i].id;
                        tmp.text = this.directions.list[i].name;
                        list.push(tmp);
                    }
                }
                return list;
            },
        },
        props: {
            selectedHandbk: Object,
        },
        mounted() {
            this.$nextTick(() => {
                this.$root.$on('bv::modal::show', (bvEvent) => {
                    if(bvEvent.target.id === 'p-modal-subscribe') {
                        //сбрасываем ошибки валидатора
                        this.$validator.reset();
                        //устанавливаем направление вакансий из которой пришли
                        Object.keys(this.selectedHandbk).length !== 0 ? this.selected = this.selectedHandbk : this.selected = {value: null, text: 'Выберите направление'}
                    }
                });
            });
            this.$root.$on('bv::modal::hide', (bvEvent) => {
                if(bvEvent.target.id === 'p-modal-subscribe') {
                    this.selected = 'Выберите направление';
                    this.subscribeEmail = null;
                }
            });
        },
        methods: {
            ...mapActions([
                'subscribeVacancy',
            ]),
            sendFormSubscribe() {
                this.$validator.validateAll().then(success => {
                    if(success && this.subscribeEmail !== '' && this.selected.value) {
                        if(this.subscribeVacancy(this.subscribeBody)) {
                            this.$noty.success('Вы успешно подписались.');
                            this.$refs.modalSubscribe.hide();
                            this.selected = null;
                            this.subscribeEmail = null;
                        } else {
                            this.$noty.warning('Ошибка на сервере.');
                        }
                    } else {
                        this.$noty.warning('Заполните корректно форму.');
                    }
                });
            },
            //проверка является ли поле не валидным
            isInvalide(field_name) {
                //ищем в массиве ошибок объект с полем field
                return this.errors.items.some(item => {
                    if(item.field === field_name) {
                        return true;
                    }
                });
            },
        },
        $_veeValidate: {
            validator: 'new' // Provide VeeValidate to child components
        }
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/scss/variables.scss";

    //modal
    .p-modal {
        .btn {
            font-size: 15px;
            line-height: 15px;
            font-family: $font-family-alternative;
            color: #ffffff;
            font-weight: 600;
            text-align: center;
            -ms-text-align-last: center;
            text-align-last: center;
            text-transform: uppercase;
            margin-top: 1rem;
            -webkit-border-radius: 0.3rem;
            -moz-border-radius: 0.3rem;
            border-radius: 0.3rem;
            padding-top: 1.15rem;
            padding-bottom: 1.1rem;
            -webkit-transition: background-color 300ms;
            -moz-transition: background-color 300ms;
            -ms-transition: background-color 300ms;
            transition: background-color 300ms;
            &:first-child {
                margin-top: 0 !important;
            }
        }
        .form-control {
            padding: 0.95rem 1rem;
            height: auto;
            margin-top: 1rem;

            &:first-child {
                margin-top: 0 !important;
            }
            &::-moz-placeholder { color: #b3bec1; }
            &::-webkit-input-placeholder { color: #b3bec1; }
            &:-ms-input-placeholder { color: #b3bec1; }
            &::-ms-input-placeholder { color: #b3bec1; }
            &::placeholder { color: #b3bec1; }
        }
    }
    .p-modal-title {
        font-size: 30px;
        line-height: 36px;
        font-family: $font-family-alternative;
        color: $color-strong-text;
    }
    .p-modal-response-col {
        width: 80%;
        max-width: 274px;
    }
    .p-modal-subscribe-col {
        width: 80%;
        max-width: 394px;
    }
    .p-modal-response {
        padding-bottom: 3rem;
        .p-modal-title {
            margin-bottom: 4.8rem;
        }
        .p-modal-text {
            margin: 2.25rem 0 2rem;
        }
    }
    .p-modal-subscribe {
        padding-bottom: 3rem;
        .p-modal-title {
            margin-bottom: 1.55rem;
        }
        .p-modal-text {
            max-width: 500px;
            margin: 0 0 3.2rem;
        }
        .btn-submit {
            padding-left: 1.55rem;
            padding-right: 1.55rem;
            margin-top: 3rem;
        }
    }
    .p-separator {
        height: 2px;
        background-color: #d8d8d8;
        margin: 3rem auto 0;
    }
    .btn-social {
        padding-left: 3rem;
        background-repeat: no-repeat;
        background-position: 1.1rem 50%;
        background-size: 1.4rem 1.4rem;
    }
    .btn-social__1 {
        background-color: #4d76b2;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMC4zOSAxOS4zNyI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE2LjAyIDE5LjM3di02Ljk5YzAtMS43Ni0uNjMtMi45NS0yLjIxLTIuOTUtMS4yMSAwLTEuOTMuODEtMi4yNCAxLjU5LS4xMi4yOC0uMTUuNjctLjE1IDEuMDZ2Ny4zSDcuMDVzLjA2LTExLjg0IDAtMTMuMDdoNC4zN3YxLjg1QzEyIDcuMjcgMTMuMDQgNiAxNS4zNiA2YzIuODggMCA1LjAzIDEuODcgNS4wMyA1Ljg4djcuNDloLTQuMzd6TTExLjQzIDguMTVjLS4wMS4wMi0uMDMuMDQtLjA0LjA2aC4wNHYtLjA2ek0yLjQ1IDQuNTFoLS4wM0MuOTUgNC41MSAwIDMuNTEgMCAyLjI2IDAgLjk4Ljk4IDAgMi40NyAwYzEuNSAwIDIuNDIuOTcgMi40NSAyLjI2IDAgMS4yNS0uOTUgMi4yNS0yLjQ3IDIuMjV6bTIuMTggMTQuODZILjI2VjYuM2g0LjM3djEzLjA3eiIvPjwvc3ZnPg==');
        &:hover {
            background-color: darken(#4d76b2, 10%);
        }
    }
    .btn-social__2 {
        background-color: #e0001c;
        background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyMy41OCAxNy43MyI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTExIDcuOTNjLjExLjUzLjE3IDEuMzYuMTcgMi40N3Y3LjMySDcuODV2LTYuNmMwLTEuMjktLjA2LTIuMTEtLjE4LTIuNDYtLjEyLS4zNC0uMzMtLjYtLjYzLS44LS4zLS4yLS42OC0uMzEtMS4xMy0uMzEtLjUyIDAtLjk5LjEzLTEuNC4zOS0uNDEuMjctLjcyLjY2LS45MSAxLjE4LS4xOS41My0uMjkgMS4zMS0uMjkgMi4zNXY2LjI2SDBWMGgzLjMxdjYuNzJjMS4wMy0xLjE4IDIuMjYtMS43NyAzLjY3LTEuNzcuNzQgMCAxLjQyLjE0IDIuMDMuNDMuNi4yOCAxLjA2LjY1IDEuMzYgMS4wOS4zMS40NC41MS45Mi42MyAxLjQ2em0xMi40MSAwYTMuOTMgMy45MyAwIDAgMC0uNjMtMS40N2MtLjMxLS40NC0uNzYtLjgxLTEuMzYtMS4wOS0uNi0uMjgtMS4yOC0uNDMtMi4wMy0uNDMtMS40MSAwLTIuNjQuNi0zLjY3IDEuNzdWMGgtMy4zMXYxNy43M2gzLjMxdi02LjI2YzAtMS4wMy4xLTEuODIuMjktMi4zNS4xOS0uNTIuNDktLjkxLjktMS4xNy40MS0uMjYuODgtLjM5IDEuNC0uMzkuNDYgMCAuODQuMSAxLjEzLjMuMy4yLjUxLjQ3LjYzLjgxLjEyLjM0LjE4IDEuMTcuMTggMi40NnY2LjZoMy4zMVYxMC40Yy4wMi0xLjExLS4wNC0xLjk0LS4xNS0yLjQ3eiIvPjwvc3ZnPg==');
        &:hover {
            background-color: darken(#e0001c, 10%);
        }
    }
    .p-modal-text {
        color: $color-strong-text;
        line-height: 28px;
    }
    .btn-submit {
        background-color: #28d223;
        &:hover {
            background-color: darken(#28d223, 10%);
        }
    }
    .p-close {
        width: 18px;
        padding-bottom: 18px;
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-vacancy {
            padding: 74px 0 32px;
            background: #edf0f3;
        }
        .p-vacancy-search-input {
            padding: 12px 28px 12px 58px;
        }
        .p-vacancy-tabs {
            margin-top: 25px;
        }
        .p-vacancy-item {
            width: 100%;
            padding: 13px 14px;
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
            right: 14px;
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
            margin-top: 17px;
            font-size: 14px;
            line-height: 22px;
        }
        .p-modal-title {
            font-size: 20px;
            line-height: 24px;
        }
        .p-modal-subscribe {
            padding-top: 6px;
            padding-bottom: 30px;

            .form-control {
                padding: 10px 20px;
                margin-top: 10px;
                font-size: 14px;
            }
            .btn {
                display: block;
                font-size: 14px;
                line-height: 14px;
                padding-top: 15px;
                padding-bottom: 15px;
            }
            .p-modal-title {
                margin-bottom: 16px;
                font-size: 30px;
                line-height: 36px;
                font-weight: 300;
            }
            .p-modal-text {
                margin: 0 0 23px;
            }
            .btn-submit {
                margin-top: 17px;
            }
        }
        .p-modal-subscribe-col {
            width: 100%;
        }
        .p-modal-text {
            font-size: 14px;
            line-height: 22px;
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-vacancy {
            padding: 112px 0 99px;
        }
        .p-vacancy-search-input {
            padding: 12px 20px 12px 62px;
            background-position: 1.4rem 50%;
            background-size: auto 45%;
        }
        .p-vacancy-tabs {
            margin-top: 2.2rem;
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
            bottom: -41px;
            right: 4px;
        }
        .p-category-block {
            margin-bottom: 19px;
        }
        .p-category {
            padding: 6px 0 22px;
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

        .p-modal {
            .p-modal-title {
                font-size: 26px;
                line-height: 30px;
            }
            .p-modal-subscribe {
                padding-bottom: 32px;

                .p-modal-title {
                    margin: 10px 0 21px;
                }
                .p-modal-text {
                    margin: 0 0 25px;
                }
            }
            .p-modal-response {
                padding-bottom: 32px;

                .p-modal-title {
                    margin-bottom: 49px;
                }
            }
            .btn {
                margin-top: 20px;
            }
            .form-control {
                margin-top: 37px;
            }
        }
    }

</style>

<style lang="scss">
    .modal-dialog.modal-subscribe {
        max-width: 720px;

        .v-select {
            height: auto;

            .v-select-toggle {
                padding: 0.95rem 1rem;
                font-size: 1rem;
                font-weight: 400;
                line-height: 1.5;
                color: #495057;
                background-color: #fff;
                border: 1px solid #ced4da;
                border-radius: 0.25rem;
                transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
            }
            .arrow-down {
                margin-top: 6px;
                border-top: 7px solid #b6b7bb;
                border-right: 7px solid transparent;
                border-left: 7px solid transparent;
            }
            &.is-invalid {
                .v-select-toggle {
                    border-color: #dc3545;
                    box-shadow: 0 0 0 0.2rem rgba(220, 53, 69, 0.25);
                }
            }
        }
        .modal-header,
        .modal-footer {
            border: none !important;
        }
        .modal-header {
            padding: 1.9rem 1.55rem 0;
            margin-bottom: -1.5rem;
            position: relative;
            z-index: 5;
        }
        .modal-content {
            border-radius: 0 !important;
        }
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-modal {
            .modal-dialog.modal-subscribe {
                max-width: 91%;

                .v-select .v-select-toggle {
                    padding: 13px 20px;
                    font-size: 14px;
                    line-height: 14px;
                }
            }
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-modal {
            .modal-dialog.modal-subscribe {}
        }
    }
</style>
