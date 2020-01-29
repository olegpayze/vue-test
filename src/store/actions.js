import Vue from 'vue';
import { error } from 'util';
import { tokenPrivacyNotice, urlPrivacyNotice } from '../privacy';

//Career
//получение списка офисов
export const getOfficeList = ({ commit }, data) => {

    let pageId,
        nextPage = true,
        OfficeList = [];

    pageId = data ? data.pageId ? data.pageId : 1 : 1;

    // Рекурсивная функция для синхронных запросов на сервер
    function recursiveGetOfficeList() {
        Vue.http.get(`offices/?page=${pageId}`)
            .then(response => {
                nextPage = response.body.next;
                OfficeList.push(...response.body.results);
                // Если мы достали все результаты
                if (nextPage === null){
                    commit('UPDATE_OFFICE', OfficeList);
                    // Если остались еще результаты
                } else {
                    // Меняем страницу на следующую
                    pageId++;
                    // Заново вызываем эту функцию для следующей страницы
                    recursiveGetOfficeList()
                }
            }).catch(error => {
            console.log(error);
        });
    }

    recursiveGetOfficeList();
};

//Subscribe
//добавление подписки на вакансию
export const subscribeVacancy = ({ commit }, subscribeBody ) => {
    Vue.http.post(`subscribers/`, subscribeBody)
        .then(response => {
            if(response.body) {
                return true;
            }
        }).catch(() => {
            return false;
        });
};

//Questionary
//добавление анкеты отклика на вакансию
//отправка Анкеты отклика на вакансию
export const sendQuestionary = ({ commit }, questionaryBody ) => {
    Vue.http.post(`user_answer_form/`, questionaryBody)
        .then(response => {
            if(response.body) {
                return true;
            }
        }).catch(() => {
        return false;
    });
};

//получение шаблона анкеты
export const getFormQuestionary = ({ commit }) => {
    Vue.http.get(`answer_form/`)
        .then(response => {
            if(response.body) {
                commit('GET_ANSWER_FORM', response.body.results);
            }
        }).catch(() => {
        console.log('Ошибка сервера');
    });
};

//получение текста политики конфиденциальности
export const getPrivacyNotice = ({ commit }) => {
    return Vue.http.get(`${urlPrivacyNotice}/text_v2/${tokenPrivacyNotice}`)
        .then(response => {
            commit('UPDATE_PRIVACY_NOTICE', response.body);
            return true
        }).catch(error => {
            console.log('Ошибка сервера');
            return false
        });
};
//логирование политики конфиденциальности
export const setLogsPrivacyNotice = ({ commit }, email ) => {
    return Vue.http.post(`${urlPrivacyNotice}/log/${tokenPrivacyNotice}?email=${email}`)
        .then(response => {
            if(response.body) {
                return true;
            }
        }).catch(() => {
        return false;
    });
};

// Directions
//получение списка категорий вакансий
export const fetchDirections = ({ commit }, data) => {

    let pageId,
        nextPage = true,
        handbkList = [];

    pageId = data ? data.pageId ? data.pageId : 1 : 1;

    // Рекурсивная функция для синхронных запросов на сервер
    function recursiveGetHandbk() {
        Vue.http.get(`handbk/?page=${pageId}`)
            .then(response => {
                nextPage = response.body.next;
                handbkList.push(...response.body.results);
                // Если мы достали все результаты
                if (nextPage === null){
                    commit('UPDATE_DIRECTIONS', handbkList);
                    commit('UPDATE_DIRECTIONS_PAGINATION', { count : response.body.count, next : response.body.next, prev : response.body.previous })
                    // Если остались еще результаты
                } else {
                    // Меняем страницу на следующую
                    pageId++;
                    // Заново вызываем эту функцию для следующей страницы
                    recursiveGetHandbk()
                }
            }).catch(error => {
            console.log(error);
        });
    }

    recursiveGetHandbk();
};
//получение списка вакансий
export const fetchVacanciesGroupedByDirection = ({ commit }, data ) => {
    //Перегруппировку структуры списка вакансий на - [{'directionName': 'название направления', 'vacancies': [список вакансий]}].
    let
        pageId,
        queryString,
        nextPage=true,
        groupedVacancies = [],
        vacanciesDict = {};

    pageId = data ? data.pageId ? data.pageId : 1 : 1;
    queryString = data ? data.queryString ? data.queryString : '' : '';
    // Рекурсивная функция для синхронных запросов на сервер
    function recursiveRequest() {
        Vue.http.get(`vacancies/?page=${pageId}&${queryString}`)
            .then(response => {
                nextPage = response.body.next;
                let vacanciesList = response.body.results;
                // Убираем дублирование направлений, переводя структуру в dict
                vacanciesList.forEach(vacancy => {
                    let handbk_vacancies = vacanciesDict[vacancy.handbk.name] || [];
                    handbk_vacancies.push(vacancy);
                    vacanciesDict[vacancy.handbk.name] = handbk_vacancies;
                });
                // Добавляем вакансии с дополнительным направлением
                vacanciesList.forEach(vacancy => {
                    if(vacancy.additional_handbk !== '' && vacancy.additional_handbk !== vacancy.handbk.name) {
                        let additional_handbk_vacancies = vacanciesDict[vacancy.additional_handbk] || [];
                        additional_handbk_vacancies.push(vacancy);
                        vacanciesDict[vacancy.additional_handbk] = additional_handbk_vacancies;
                    }
                });
                // Если мы достали все результаты
                if (nextPage === null){
                    // Уникальные направления переводим в list, т.к. в стэйте такой формат
                    Object.keys(vacanciesDict).forEach(directionName => {
                        groupedVacancies.push({'directionName': directionName, 'vacancies': vacanciesDict[directionName]})
                    });
                    console.log(JSON.stringify(groupedVacancies));
                    commit('UPDATE_VACANCIES', groupedVacancies);
                    commit('UPDATE_VACANCIES_PAGINATION', { count : response.body.count, next : response.body.next, prev : response.body.previous });
                // Если остались еще результаты
                } else {
                    // Меняем страницу на следующую
                    pageId++;
                    // Заново вызываем эту функцию для следующей страницы
                    recursiveRequest()
                }
            }).catch(error => {
                console.log(error);
            });
    }
    recursiveRequest();
};
//получение описания вакансии
export const getVacancy = ({ commit }, id) => {
    return Vue.http.get(`vacancies/${id}/`);
};
