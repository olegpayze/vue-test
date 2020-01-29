
export const routes = [
    { path: '/',
        redirect: '/career/',
        component: () => import('@/components/Home.vue'),
        hiddenMenu: true
    },
    { path: '/career/',
        component: () => import('@/components/career/Career.vue'),
        meta: {
            name: 'Карьера'
        }
    },
    { path: '/vacancy/',
        component: () => import('@/components/vacancies/Vacancies.vue'),
        name: 'VacanciesList',
        props: true,
        meta: {
            name: 'Вакансии'
        }
    },
    { path: '/vacancy/detail/:id',
        hiddenMenu: true,
        component: () => import('@/components/vacancies/Detail.vue'),
        name: 'VacanciesDetail',
        meta: {
            name: 'Обзор вакансии'
        }
    },
    { path: '/vacancy/questionary/',
        hiddenMenu: true,
        name: 'VacancyQuestionary',
        component: () => import('@/components/vacancies/Questionary.vue'),
        meta: {
            name: 'Анкета'
        }
    },
    { path: '/culture/',
        component: () => import('@/components/culture/Culture.vue'),
        meta: {
            name: 'Культура'
        }
    },
    // { path: '/program/',
    //     component: () => import('@/components/program/Program.vue'),
    //     hiddenMenu: true,
    //     meta: {
    //         name: 'Рекомендательная программа'
    //     }
    // },
    // { path: '/program/questionary/',
    //     component: () => import('@/components/program/Questionary.vue'),
    //     hiddenMenu: true,
    //     meta: {
    //         name: 'Рекомендательная анкета'
    //     }
    // },
    { path: '/questions/',
        component: () => import('@/components/questions/Questions.vue'),
        meta: {
            name: 'FAQ'
        }
    },
    { path: '/404/',
        component: () => import('@/components/errors/NotFound.vue'),
        hiddenMenu: true
    },

    { path: '*', redirect: '/404/', hiddenMenu: true }
];
