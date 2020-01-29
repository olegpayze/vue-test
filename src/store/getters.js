// GETTERS

// сортировка городов по наличию офисов
export const sortOffice = state => {
    if(state.offices.length > 0) {
        return state.offices.filter(elem => elem.view === true);
    }
};

//получение структуры формы ответа по её id
export const getAnswerForm = state => id => {
    if(state.questionary.length > 0) {
        if(id !== -1) {
            return state.questionary.find(item => item.id === id)
        } else {
            return state.questionary.find(item => item.default === true)
        }
    }
};

