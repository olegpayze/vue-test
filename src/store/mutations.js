// MUTATIONS
import * as types from './mutation_types';

const mutations = {

    [types.UPDATE_OFFICE](state, payload) {
        state.offices = payload;
    },
    [types.UPDATE_VACANCIES](state, payload) {
        state.vacancies.list = [...payload];
    },
    [types.UPDATE_VACANCIES_DICTIONARY](state, payload) {
        state.vacancies.dictionary = {...payload};
    },
    [types.UPDATE_VACANCIES_PAGINATION](state, payload) {
        state.vacancies.pagination = {...payload};
    },
    [types.UPDATE_DIRECTIONS](state, payload) {
        state.directions.list = payload;
    },
    [types.UPDATE_DIRECTIONS_PAGINATION](state, payload) {
        state.directions.pagination = {...payload};
    },
    [types.GET_ANSWER_FORM](state, payload) {
        state.questionary = payload;
    },
    [types.UPDATE_PRIVACY_NOTICE](state, payload) {
        state.privacyNotice = {...payload};
    },
};

export default mutations;
