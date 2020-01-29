<template>
    <div class="p-questionary-wrapper">
        <div class="p-questionary">
            <div class="p-content">
                <div class="p-questionary-title">
                    Анкета
                    <span>{{ answer.vacancy_name }}</span>
                </div>
                <div class="p-questionary-text">
                    Спасибо за&#160;интерес к&#160;нашей компании. Пожалуйста, ответьте на&#160;вопросы ниже, чтобы
                    ускорить процесс рассмотрения вашей кандидатуры. Надеемся на&#160;дальнейшее сотрудничество!
                </div>
                <div class="p-questionary-note">* Поля, обязательные для заполнения</div>
                <div class="p-questionary-form">

                    <div class="p-questionary-block" v-for="formItem in questionaryForm" :key="formItem.name">
                        <div class="p-questionary-row row">
                            <p class="p-questionary-label text-left text-xl-right">
                                {{ formItem.label }}
                                {{ (formItem.required && formItem.label !== ' ') ? '*' : '' }}
                            </p>
                            <div class="p-questionary-input">
                                <template v-if="formItem.type === 'textarea'">
                                    <textarea
                                            v-validate="(formItem.required)?'required':''"
                                            class="form-control"
                                            v-model="formItem.value"
                                            :name="formItem.name"
                                            :class="{ 'is-invalid': errors.has(formItem.name) }"
                                            rows="6"
                                            :placeholder="formItem.placehold"></textarea>
                                    <span v-show="errors.has(formItem.name)"
                                          class="p-input-error">
                                        {{ errors.first(formItem.name) }}
                                    </span>
                                </template>
                                <template v-else-if="formItem.type === 'file'">
                                    <div class="p-questionary-input-file"
                                         :class="{ 'is-invalid': errors.has(formItem.type) }"
                                    >
                                        <label>
                                            <input
                                                    ref="file-input"
                                                    v-validate="getValidate(formItem)"
                                                    @change="fieldFileChange"
                                                    :name="formItem.type"
                                                    type="file"
                                                    placeholder="Прикрепить файлы"
                                            />
                                        </label>
                                        <span>{{ selectedFile }}</span>
                                    </div>
                                    <span v-show="errors.has(formItem.type)"
                                          class="p-input-error">
                                        {{ errors.first(formItem.type) }}
                                    </span>
                                </template>
                                <template v-else-if="formItem.type === 'checkbox'">
                                    <div class="p-questionary-checkbox">
                                        <template v-for="checkboxItem in formItem.value">
                                            <input
                                                    type="checkbox"
                                                    v-model="checkboxItem.value"
                                                    class="custom-control-input"
                                                    :name="checkboxItem.name"
                                                    :id="checkboxItem.name">
                                            <label class="custom-control-label" :for="checkboxItem.name">{{ checkboxItem.text }}</label>
                                        </template>
                                    </div>
                                </template>
                                <template v-else-if="formItem.type === 'radio'">
                                    <div class="p-questionary-radio">
                                        <template v-for="radioItem in formItem.value">
                                            <input
                                                    type="radio"
                                                    @click="setFieldRadio(formItem.value, radioItem.name)"
                                                    class="custom-control-input"
                                                    :name="'radio' + formItem.value[0].name"
                                                    :id="radioItem.name">
                                            <label class="custom-control-label" :for="radioItem.name">{{ radioItem.text }}</label>
                                        </template>
                                    </div>
                                </template>
                                <template v-else-if="formItem.type === 'tel'">
                                    <input
                                            v-validate="getValidate(formItem)"
                                            v-model="formItem.value"
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.has(formItem.name) }"
                                            v-phone
                                            pattern="[0-9][(][0-9]{3}[)] [0-9]{3}-[0-9]{4}"
                                            :name="formItem.name"
                                            :type="formItem.type"
                                            :placeholder="formItem.placehold" />
                                    <span v-show="errors.has(formItem.name)"
                                          class="p-input-error">
                                        {{ errors.first(formItem.name) }}
                                    </span>
                                </template>
                                <template v-else-if="formItem.type === 'list'">
                                    <v-select v-model="formItem['selected']"
                                              :class="{ 'is-invalid': errors.has(formItem.name) && formItem.selected.value === null }"
                                              :options="formItem.value"></v-select>
                                    <span v-show="errors.has(formItem.name)"
                                          class="p-input-error">
                                        {{ errors.first(formItem.name) }}
                                    </span>
                                </template>
                                <template v-else-if="formItem.type === 'novalid'">
                                    <input
                                            v-validate="getValidate(formItem)"
                                            v-model="formItem.value"
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.has(formItem.name) }"
                                            :name="formItem.name"
                                            type="text"
                                            :placeholder="formItem.placehold" />
                                    <span v-show="errors.has(formItem.name)"
                                          class="p-input-error">
                                        {{ errors.first(formItem.name) }}
                                    </span>
                                </template>
                                <template v-else>
                                    <input
                                            v-validate="getValidate(formItem)"
                                            v-model="formItem.value"
                                            class="form-control"
                                            :class="{ 'is-invalid': errors.has(formItem.name) }"
                                            :name="formItem.name"
                                            :type="formItem.type"
                                            :placeholder="formItem.placehold" />
                                    <span v-show="errors.has(formItem.name)"
                                          class="p-input-error">
                                        {{ errors.first(formItem.name) }}
                                    </span>
                                </template>
                            </div>
                        </div>
                    </div>

                    <div class="p-questionary-block">
                        <div class="p-questionary-row row justify-content-start align-items-start">
                            <p class="p-questionary-label text-left text-xl-right"><!-- --></p>
                            <div class="p-questionary-input">
                                <div class="p-questionary-checkbox">
                                    <input type="checkbox"
                                           v-validate="'required'"
                                           v-model="access.value"
                                           class="custom-control-input"
                                           :class="{ 'is-invalid': errors.has('access') }"
                                           :name="access.name"
                                           id="input_processing">
                                    <label class="custom-control-label" for="input_processing" v-html="access.text"><!-- --></label>
                                </div>
                                <span v-show="errors.has(access.name)"
                                      class="p-input-error">
                                    {{ errors.first(access.name) }}
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="text-center">
                    <a href="javascript:void(0);"
                       @click="sendForm()"
                       class="btn btn-success btn-submit">Отправить</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Vue from 'vue';
    import {mapActions, mapGetters, mapState} from 'vuex';

    export default {
        metaInfo: {
            title: 'Анкета отзыва на вакансию.'
        },
        data : function() {
            return {
                questionaryForm: {},
                questionaryBody: {
                    vacancy: Number,
                    project: String,
                    email: String,
                    json: String,
                    file: Object,
                },
                answer: null,
                access: {
                    value: null,
                    name: 'access',
                    text: '',
                },
                languageAccess: {
                    ru: true,
                    en: false,
                },
                fileValidateType: '',
            }
        },
        created() {
            //получаем данные модалки Response из LocalStorage
            if(localStorage.answer) this.answer = JSON.parse(localStorage.answer);
            //получаем id вакансии, с которой пришли, email из модалки Response
            this.questionaryBody.vacancy = this.answer.vacancy_id;
            this.questionaryBody.email = this.answer.email;
            this.questionaryBody.project = this.answer.vacancy_project;
            //проверяем есть ли токен соц. сетей в url
            if(this.hasTokenUrl()) {
                //проверяем нет ли токена HH в LocalStorage
                if(!this.hasTokenHHLocal()) {
                    //добавляем токен HH в LocalStorage
                    this.setHHToken();
                }
                //проверяем нет ли токена Ln в LocalStorage
                if(!this.hasTokenLnLocal()) {
                    //добавляем токен Ln в LocalStorage
                    this.setLnToken();
                }
                //получаем данные из соц. сети
                this.getUserData();
            }
            //проверяем url на ошибки предоставления доступа к соц. сетям
            this.hasErrorsUrl();
        },
        async mounted() {
            const self = this;
            //установка текста политики конфиденциальности
            if(Object.keys(this.privacyNotice).length !== 0) {
                // если текст уже загружен
                this.setPrivacyNotice();
            } else {
                //если текст ещё не загружен
                if(await this.getPrivacyNotice()) {
                    await this.setPrivacyNotice();
                }
            }
            //получение структуры анкеты
            if(this.questionary.length === 0){
                //если в store нет анкет, то запрашиваем
                this.getFormQuestionary();
            } else {
                //выбираем форму анкеты, указанную в вакансии
                this.questionaryForm = JSON.parse(this.getAnswerForm(JSON.parse(localStorage.answer).answer_form).json);
                //сбрасываем значения формы
                await this.resetForm(this.questionaryForm);
                //сбрасываем ошибки валидатора
                await this.$validator.reset();
                //ставим email из модалки Response
                self.findFieldForm('type', 'email').value = this.answer.email;
            }
            //ставим наблюдателя за объектом в store
            this.$store.watch(
                function (state) {
                    //наблюдаем за формой отклика
                    return state.questionary;
                },
                async function () {
                    //выбираем форму анкеты, указанную в вакансии
                    self.questionaryForm = await JSON.parse(self.getAnswerForm(self.answer.answer_form).json);
                    //сбрасываем значения формы
                    self.resetForm(self.questionaryForm);
                    //сбрасываем ошибки валидатора
                    self.$validator.reset();
                    //ставим email из модалки Response
                    self.findFieldForm('type', 'email').value = self.answer.email;
                },
                {
                    deep: true //если наблюдаем за свойствами объекта
                }
            );
        },
        computed: {
            ...mapState([
                'questionary',
                'privacyNotice',
            ]),
            ...mapGetters([
                'getAnswerForm',
            ]),
            //вывод выбранного файла в поле file
            selectedFile() {
                const fileField = this.findFieldForm('type', 'file');
                return typeof fileField.value === 'object' ? fileField.value[0].name : 'Прикрепить файл';
            }
        },
        methods: {
            ...mapActions([
                'sendQuestionary',
                'getFormQuestionary',
                'getPrivacyNotice',
                'setLogsPrivacyNotice',
                'getFormQuestionary',
            ]),
            //проверяем есть ли токен соц. сетей в url
            hasTokenUrl() {
                return this.$route.query.linkedin_access_token || this.$route.query.headhanter_access_token;
            },
            //проверяем есть ли токен HH в LocalStorage
            hasTokenHHLocal() {
                return localStorage.headhanter_access_token !== undefined
                    || localStorage.headhanter_access_token;
            },
            //проверяем есть ли токен Ln в LocalStorage
            hasTokenLnLocal() {
                return localStorage.linkedin_access_token !== undefined
                    || localStorage.linkedin_access_token;
            },
            //сохраняем токен HH в LocalStorage
            setHHToken() {
                let headhanter_access_token = this.$route.query.headhanter_access_token;
                if(headhanter_access_token !== undefined) {
                    localStorage.headhanter_access_token = headhanter_access_token;
                }
            },
            //сохраняем токен Ln в LocalStorage
            setLnToken() {
                let linkedin_access_token = this.$route.query.linkedin_access_token;
                if(linkedin_access_token !== undefined){
                    localStorage.linkedin_access_token = linkedin_access_token;
                }
            },
            //проверяем url на ошибки предоставления доступа к соц. сетям
            hasErrorsUrl() {
                if(this.$route.query.error === 'access_denied' || this.$route.query.error === 'user_cancelled_login' || this.$route.query.error === 'user_cancelled_authorize') {
                    //оповещаем пользователя
                    this.$noty.warning('Доступ к данным не продоставлен!');
                    //убираем ошибку из url
                    this.$router.replace({ query: { '': null } });
                }
            },
            //получаем данные из соц.сетей
            getUserData() {
                let url = '';
                //формируем строку запроса к API
                if(this.$route.query.linkedin_access_token !== undefined){
                    url = 'auth/linkedin/get_user_data/?access_token=' + this.$route.query.linkedin_access_token
                } else if(this.$route.query.headhanter_access_token !== undefined) {
                    url = 'auth/headhunter/get_user_data/?access_token=' + this.$route.query.headhanter_access_token
                }
                //отправляем запрос к API
                Vue.http.get(url).then(response => {
                    //проверяем токен Ln на актуальность (устаревший возвращает 401 ошибку)
                    if(response.body.serviceErrorCode === 401) {
                        //редиректим на повторную авторизацию в Ln
                        window.location.replace(this.$urlAPI + '/auth/linkedin/');
                    } else if(this.$route.query.linkedin_access_token !== undefined){
                        //выгружаем полученные данные Ln
                        this.setField('firstname', response.body.firstName.localized.ru_RU);
                        this.setField('lastname', response.body.lastName.localized.ru_RU);
                        this.setField('phone', response.body.phone);
                    } else if(this.$route.query.headhanter_access_token !== undefined) {
                        //выгружаем полученные данные HH
                        this.setField('firstname', response.body.first_name);
                        this.setField('lastname', response.body.last_name);
                        this.setField('email', response.body.email);
                        this.setField('phone', response.body.phone);
                    }
                    //сбрасываем ошибки валидатора
                    this.$validator.reset();
                    //убираем токен из url
                    this.$router.replace({ query: { '': null } });
                }).catch(error => {
                    console.log(error);
                });
            },
            //заполнение полей данными
            setField(field, value) {
                //проверка существования данных
                if(value && value !== 'null' && value !== 'undefined') {
                    let item = this.findFieldForm('name', field);
                    item.value = value;
                }
            },
            //проверка полей и отправка анкеты
            sendForm() {
                this.$validator.validateAll().then(success => {
                    if(success) {
                        //проверяем на наличие email в запросе
                        if(!this.questionaryBody.email) {
                            //если нет, берём из формы
                            const emailForm = this.findFieldForm('type', 'email');
                            this.questionaryBody.email = emailForm.value;
                        }
                        //добавляем отдельно файл
                        const fileField = this.findFieldForm('type', 'file');
                        this.questionaryBody.file = fileField && typeof fileField.value === 'object' ? fileField.value[0] : null;
                        fileField ? fileField.value = ' ' : '';
                        //если валидно, добавляем форму в запрос
                        const tpmObject = this.arrayToObject(this.questionaryForm);
                        this.questionaryBody.json = JSON.stringify(tpmObject);
                        //готовим данные для отправки
                        let dataRequest = new FormData();
                        dataRequest.append('vacancy', this.questionaryBody.vacancy);
                        dataRequest.append('email', this.questionaryBody.email);
                        dataRequest.append('project', this.questionaryBody.project);
                        dataRequest.append('json', this.questionaryBody.json);
                        this.questionaryBody.file ? dataRequest.append('file', this.questionaryBody.file) : false;
                        //отправляем запрос
                        if(this.sendQuestionary(dataRequest) && this.setLogsPrivacyNotice(this.questionaryBody.email)) {
                            this.$noty.success('Ваша анкета успешно отправлена!');
                            //обнуляем форму в запросе
                            this.questionaryBody.json = '';
                            //сбрасываем значения формы
                            this.resetForm(this.questionaryForm);
                            //переходим на страницу всех вакансий
                            this.$router.push({ name: 'VacanciesList' });
                        } else {
                            this.$noty.warning('Ошибка на сервере.');
                        }
                    } else {
                        this.$noty.warning('Заполните корректно анкету.');
                    }
                });
            },
            //сброс формы
            resetForm(form) {
                const self = this;
                for(let i = 0; i < form.length; i++) {
                    let item = form[i];
                    self.resetField(item)
                }
                //сбрасываем поле file
                let fileField = this.findFieldForm('type', 'file');
                fileField && typeof fileField.value === 'object' ? fileField.value = '' : '';
                //сбрасываем поле list
                let listField = this.findFieldForm('type', 'list');
                if(listField) {
                    listField.selected = {
                        text: listField.placehold,
                        name: '',
                        value: ''
                    };
                }
                //сбрасываем ошибки валидатора
                this.$validator.reset();
                //сброс политики конфиденциальности
                this.access.value = null;
            },
            //сброс полей формы
            resetField(item) {
                //есть ли у объекта значение value (прикреплённый файл не сбрасывается)
                if(item.value && item.type !== 'file' && item.type !== 'list') {
                    if(typeof item.value === 'string') {
                        //сброс текстовых полей
                        item.value = '';
                    }
                    if(typeof item.value === 'boolean') {
                        //сброс чекбоксов
                        item.value = null;
                    }
                    if(typeof item.value === 'object') {
                        //каскадный обход вложенных элементов
                        item.value ? this.resetForm(item.value) : '';
                    }
                }
            },
            //добавление правил валидации
            getValidate(formItem) {
                let valide_state = '';
                if(formItem.type === 'tel') {
                    if(formItem.required) {
                        return { required: true, regex: /^([0-9])?[\s\-]?[(]?[0-9]{3}[)]?[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/ };
                    } else {
                        return { regex: /^([0-9])?[\s\-]?[(]?[0-9]{3}[)]?[\s\-]?[0-9]{3}[\s\-]?[0-9]{4}$/ };
                    }
                }
                if(formItem.type === 'file') {
                    if(typeof formItem.value === 'string') {
                        valide_state = 'ext:';
                        if(formItem.required) {
                            valide_state = 'required|' + valide_state;
                        }
                        valide_state += formItem.value.replace(/\./g, "");
                        this.fileValidateType = valide_state;
                        return valide_state;
                    } else {
                        return this.fileValidateType;
                    }
                }
                if(formItem.required) {
                    valide_state += 'required';
                }
                if(formItem.type === 'email') {
                    (valide_state !== '')? valide_state += '|' : '';
                    valide_state += 'email';
                }
                if(formItem.type === 'text') {
                    (valide_state !== '')? valide_state += '|' : '';
                    valide_state += 'alpha_dash';
                }
                return valide_state;
            },
            //установка текста политики конфиденциальности
            setPrivacyNotice() {
                if(this.languageAccess.ru) {
                    this.access.text = this.privacyNotice.ru;
                } else if(this.languageAccess.en) {
                    this.access.text = this.privacyNotice.en;
                }
            },
            //поиск значения в форме по полю
            findFieldForm(field, value) {
                return this.questionaryForm.find(item => item[field] === value);
            },
            //получение файла из поля file
            fieldFileChange(e) {
                let fileField = this.findFieldForm('type', 'file');
                fileField ? fileField.value = Array.from(e.target.files) : false;
            },
            //преобразование массива объектов в объект {name: value}
            arrayToObject(array) {
                let tmpObject = {};
                array.forEach(item => {
                    if (item.type === 'file') {
                        tmpObject[item.type] = item.value[0];
                    } else if (item.type === 'list') {
                        tmpObject[item.name] = item.selected.value;
                    } else if(typeof item.value === 'object') {
                        item.value.forEach(elem => {
                            tmpObject[elem.name] = elem.value;
                        });
                    } else {
                        tmpObject[item.name] = item.value;
                    }
                });
                return tmpObject;
            },
            //установка нужных значений radio кнопок
            setFieldRadio(list, name) {
                for(let i =0; i < list.length; i++) {
                    //установка текущего и сброс остальных значений в группе
                    list[i].name === name ? list[i].value = true : list[i].value = false;
                }
            },
        },
        inject: ['$validator']
    }
</script>

<style lang="scss" scoped>

    @import "../../assets/scss/variables.scss";

    .p-questionary-wrapper {
        background-color: #f9fafb;
        padding: 13rem 0 3rem;
    }
    .p-questionary {
        width: 98%;
        max-width: 1250px;
        background-color: #ffffff;
        margin: 0 auto;
        padding: 3.1rem 0 4rem;
    }
    .p-content {
        width: 98%;
        max-width: 940px;
        margin: 0 auto;
    }
    .p-questionary-title {
        font-size: 30px;
        line-height: 36px;
        font-family: $font-family-alternative;
        color: $color-strong-text;
        margin-bottom: 1.85rem;
        text-align: center;

        span {
            display: block;
            font-weight: 500;
            color: #000000;
            margin-top: 0.6rem;
        }
    }
    .p-questionary-text {
        width: 98%;
        max-width: 670px;
        margin: 0 auto;
        color: $color-strong-text;
        line-height: 28px;
        text-align: center;
    }
    .p-questionary-note {
        font-size: 13px;
        line-height: 18px;
        color: #b3bec1;
        margin-top: 1.45rem;
        text-align: center;
    }
    .p-questionary-form {
        margin-top: 3.7rem;
    }
    .p-questionary-block {
        margin-bottom: 2.9rem;

        & + .p-separator {
            margin-top: -1.5rem;
        }
    }
    .p-questionary-row {
        margin-bottom: 1rem;
    }
    .p-questionary-label {
        width: 38.5%;
        color: $color-strong-text;
        line-height: 28px;
        padding-left: 2.5%;
        margin: 0;
    }
    .p-questionary-input {
        width: 49.5%;
        margin-left: 1.45rem;

        .form-control {
            padding: 1rem 1rem 1rem;
            height: auto;
            resize: none;

            &::-moz-placeholder { color: #b3bec1; }
            &::-webkit-input-placeholder { color: #b3bec1; }
            &:-ms-input-placeholder { color: #b3bec1; }
            &::-ms-input-placeholder { color: #b3bec1; }
            &::placeholder { color: #b3bec1; }
        }
    }
    .p-questionary-input-file {
        position: relative;
        padding: rem-calc(10) 0;
        font-size: 1rem;
        line-height: 1rem;
        font-family: $font-family-general;
        color: $color-general;
        overflow: hidden;

        span {
            pointer-events: none;
        }
        input {
            position: absolute;
            top: 0;
            left: 0;
            width: 0;
            height: 0;
            opacity: 0;
        }
        label {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            cursor: pointer;
        }
        &:before {
            content: '';
            position: relative;
            display: inline-block;
            vertical-align: middle;
            width: 24px;
            height: 0;
            padding-bottom: 20px;
            top: -2px;
            margin-right: 0.9rem;
            background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNy4yNiAxOS4xNyI+PHBhdGggZmlsbD0iIzQ4RDEwMCIgZD0iTTE3LjI2IDkuMzhsLTguMTMgOC4xM2MtMi4xNSAyLjE1LTUuNTYgMi4yMi03LjYyLjE2LTIuMDYtMi4wNi0xLjk5LTUuNDcuMTYtNy42Mmw4Ljg0LTguODRjMS41Ni0xLjU2IDQuMDQtMS42MSA1LjU0LS4xMXMxLjQ1IDMuOTgtLjExIDUuNTRMOC41IDE0LjA2Yy0uOTguOTgtMi41MyAxLjAxLTMuNDYuMDctLjk0LS45NC0uOS0yLjQ5LjA3LTMuNDdsNi43Mi02LjcyIDEuMDIgMS4wMi02LjcyIDYuNzJjLS4zOS4zOS0uNCAxLjAxLS4wMyAxLjM5LjM3LjM3IDEgLjM2IDEuMzktLjAzbDcuNDMtNy40M2MuOTgtLjk4IDEuMDEtMi41My4wNy0zLjQ3cy0yLjQ5LS45LTMuNDYuMDdsLTguODQgOC44NGMtMS41NiAxLjU2LTEuNjEgNC4wNC0uMTEgNS41NHMzLjk4IDEuNDUgNS41NC0uMTFsOC4xMy04LjEzIDEuMDEgMS4wM3oiLz48L3N2Zz4=") 50% 50% no-repeat;
            -webkit-background-size: 100% 100%;
            background-size: 100% 100%;
        }
        &.is-invalid {
                color: #dc3545;

                &:before {
                    background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNy4yNiAxOS4xNyI+PHBhdGggZmlsbD0iI2RjMzU0NSIgZD0iTTE3LjI2IDkuMzhsLTguMTMgOC4xM2MtMi4xNSAyLjE1LTUuNTYgMi4yMi03LjYyLjE2LTIuMDYtMi4wNi0xLjk5LTUuNDcuMTYtNy42Mmw4Ljg0LTguODRjMS41Ni0xLjU2IDQuMDQtMS42MSA1LjU0LS4xMXMxLjQ1IDMuOTgtLjExIDUuNTRMOC41IDE0LjA2Yy0uOTguOTgtMi41MyAxLjAxLTMuNDYuMDctLjk0LS45NC0uOS0yLjQ5LjA3LTMuNDdsNi43Mi02LjcyIDEuMDIgMS4wMi02LjcyIDYuNzJjLS4zOS4zOS0uNCAxLjAxLS4wMyAxLjM5LjM3LjM3IDEgLjM2IDEuMzktLjAzbDcuNDMtNy40M2MuOTgtLjk4IDEuMDEtMi41My4wNy0zLjQ3cy0yLjQ5LS45LTMuNDYuMDdsLTguODQgOC44NGMtMS41NiAxLjU2LTEuNjEgNC4wNC0uMTEgNS41NHMzLjk4IDEuNDUgNS41NC0uMTFsOC4xMy04LjEzIDEuMDEgMS4wM3oiLz48L3N2Zz4=');
                }
            }
    }
    .p-separator {
        width: 100%;
        height: 0;
        border-top: 2px dashed #e6e6e6;
        margin: 3.3rem 0 3.9rem;
    }
    .p-questionary-checkbox,
    .p-questionary-radio {
        label {
            display: block;
            margin-bottom: 0.9rem;

            &:last-child {
                margin-bottom: 0 !important;
            }
        }
    }
    .btn-submit {
        padding: 1.15rem 3.2rem;
        font-size: 15px;
        line-height: 15px;
        font-weight: 600;
        color: #ffffff;
        text-transform: uppercase;
        font-family: $font-family-alternative;
    }
    .p-input-error {
        display: block;
        color: #dc3545;
        margin-top: rem-calc(10);
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-questionary-wrapper {
            padding: 118px 0 0;
        }
        .p-questionary {
            width: 100%;
            padding: 17px 0 63px;
        }
        .p-questionary-title {
            font-size: 30px;
            line-height: 40px;
            text-align: left;
            margin: 0 12px 32px;

            span {
                font-weight: 400;
                margin-top: 0;
            }
        }
        .p-questionary-text {
            width: auto;
            font-size: 14px;
            line-height: 22px;
            text-align: left;
            margin: 0 12px 14px;
        }
        .p-questionary-note {
            font-size: 14px;
            line-height: 14px;
            text-align: left;
            margin: 0 12px;
        }
        .p-questionary-form {
            margin: 48px 12px 0;

        }
        .p-questionary-row {
            margin: 0 0 15px;
        }
        .p-questionary-label {
            width: 100%;
            padding-left: 0;
            font-size: 14px;
            line-height: 22px;
            margin-bottom: 6px;
        }
        .p-questionary-input {
            width: 100%;
            margin-left: 0;

            .form-control {
                padding: 7px 17px;
                font-size: 14px;
            }
        }
        .p-questionary-block {
            margin: 0 0 27px;
        }
        .p-questionary-input-file {
            font-size: 14px;
            line-height: 14px;

            &:before {
                width: 18px;
                margin-right: 9px;
            }
        }
        .p-questionary-block + .p-separator {
            margin-top: -6px;
            margin-bottom: 37px;
        }
        .btn-submit {
            padding: 13px 40px;
            margin: -14px auto 0;
            display: block;
            width: 92.5%;
        }
        .p-input-error {
            font-size: 14px;
            line-height: 22px;
        }
        .p-questionary-checkbox label,
        .p-questionary-radio label {
            font-size: 14px;
            line-height: 22px;
            padding-left: rem-calc(39);
        }
        .p-questionary-input .custom-control-label::before {
            width: rem-calc(22);
            height: rem-calc(22);
            top: 0;
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
        .p-questionary-wrapper {
            padding: 77px 0 92px;
        }
        .p-questionary {
            width: 95%;
            padding: 37px 0 48px;
        }
        .p-questionary-title {
            font-size: 20px;
            line-height: 19px;
            margin-bottom: 20px;
        }
        .p-questionary-text {
            font-size: 14px;
        }
        .p-questionary-note {
            font-size: 14px;
            line-height: 14px;
        }
        .p-questionary-form {
            margin: 44px auto 0;
            width: 95%;
        }
        .p-questionary-row {
            margin: 0 0 26px;
        }
        .p-questionary-label {
            width: 100%;
            padding-left: 0;
            margin-bottom: 8px;
        }
        .p-questionary-input {
            width: 100%;
            margin-left: 0;
        }
        .p-questionary-block {
            margin-bottom: 46px;
        }
        .p-questionary-block + .p-separator {
            margin-top: 50px;
        }
        .p-questionary-input-file {
            &:before {
                margin-right: 9px;
            }
        }
        .btn-submit {
            padding: 16px 40px;
            margin-top: 1px;
        }
    }
</style>

<style lang="scss">

    @import "../../assets/scss/variables.scss";

    .p-questionary-input {
        .v-select {
            height: auto !important;

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
        .form-control.is-valid, .was-validated .form-control:valid,
        .form-control.is-invalid, .was-validated .form-control:invalid {
            background-position: calc(100% - 1rem) 50%;
        }
        .custom-control {
            padding-left: 0;
        }
        .custom-control-label {
            cursor: pointer;
            padding-left: 2.4rem;

            &::before {
                top: 0.05rem;
                left: 0;
                width: 1.375rem;
                height: 1.375rem;
                border-radius: 0!important;
            }
        }
        .custom-control-input:active ~ .custom-control-label::before,
        .custom-control-input:checked ~ .custom-control-label::before {
            background-color: #fff;
            border: #adb5bd solid 1px;
        }
        .custom-control-input:focus ~ .custom-control-label::before {
            box-shadow: none;
        }
        .custom-control-input:checked + .custom-control-label::before {
            color: #fff;
            border-color: #373737;
            background: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNC44NyAxMS4zOSI+PHBhdGggZmlsbD0iI0ZGRiIgZD0iTTUuNzcgMTEuMzlMMCA1LjYxbDEuNDItMS40MiA0LjI4IDQuM0wxMy4zOCAwbDEuNDkgMS4zNHoiLz48L3N2Zz4=") 50% 50% no-repeat #373737;
            background-size: 60% auto;
        }
        .custom-control-input:focus + .custom-control-label::before {
            box-shadow: 0 0 0 0.2rem rgba(0, 123, 255, 0.25);
        }
        .custom-control-input.is-invalid ~ .custom-control-label {
            color: $color-other-text;
        }
        .custom-control-input.is-invalid + .custom-control-label {
            color: #dc3545;
        }
        .custom-control-input.is-invalid ~ .custom-control-label::before {
            border-color: $color-other-text;
        }
        .custom-control-input.is-invalid + .custom-control-label::before {
            border-color: #dc3545;
        }
        .custom-control-label::after {
            display: none;
        }
        .p-questionary-radio {
            .custom-control-label {

                &::before {
                    border-radius: 50% !important;
                }
            }
            .custom-control-input:checked + .custom-control-label::before {
                background-image: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzNjggMzY4Ij48Y2lyY2xlIGZpbGw9IiNGRkYiIGN4PSIxODQiIGN5PSIxODQiIHI9IjE4NCIvPjwvc3ZnPg==');
                background-size: 60% auto;
            }
        }
        .p-questionary-checkbox {
            label p {
                margin: 0;
            }
        }
    }
    .custom-control-label a {
        color: $color-general;
    }

    //Adaptive
    @import "../../assets/scss/custom.scss";
    @import "../../../node_modules/bootstrap/scss/mixins.scss";

    //mobile
    @include media-breakpoint-between(xs, sm) {
        .p-questionary-input .v-select .v-select-toggle {
            padding: rem-calc(7) rem-calc(14);
            font-size: rem-calc(14);
            line-height: rem-calc(22);
        }
    }
    //tablet
    @include media-breakpoint-between(md, lg) {
    }
</style>
