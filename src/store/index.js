import Vue from 'vue';
import Vuex from 'vuex';
import mutations from './mutations';
import * as actions from './actions';
import * as getters from './getters';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        offices: [
            {
                "id": 15,
                "seconds_before_deleting": null,
                "city": {"id": 3, "name": "Вологда"},
                "images": [{
                    "pk": 582,
                    "image": "../static/office_1.jpg",
                    "name": "vologda_2.jpg"
                }, {
                    "pk": 583,
                    "image": "../static/office_2.jpg",
                    "name": "vologda_1.jpg"
                }, {
                    "pk": 584,
                    "image": "../static/office_1.jpg",
                    "name": "vologda_3.jpg"
                }, {
                    "pk": 585,
                    "image": "../static/office_2.jpg",
                    "name": "vologda_4.jpg"
                }, {
                    "pk": 586,
                    "image": "../static/office_1.jpg",
                    "name": "vologda_5.jpg"
                }],
                "text": "<p>Вологда офис</p>",
                "view": true,
                "video": "https://youtu.be/g-1g3SDswGA"
            }, {
                "id": 8,
                "seconds_before_deleting": null,
                "city": {"id": 12, "name": "Киев"},
                "images": [{
                    "pk": 592,
                    "image": "../static/office_2.jpg",
                    "name": "kiev_2.jpg"
                }, {
                    "pk": 593,
                    "image": "../static/office_1.jpg",
                    "name": "kiev_1.jpg"
                }, {
                    "pk": 594,
                    "image": "../static/office_2.jpg",
                    "name": "kiev_3.jpg"
                }, {
                    "pk": 595,
                    "image": "../static/office_1.jpg",
                    "name": "kiev_4.jpg"
                }, {
                    "pk": 596,
                    "image": "../static/office_2.jpg",
                    "name": "kiev_5.jpg"
                }],
                "text": "<p>Киев офис</p>",
                "view": true,
                "video": ""
            }, {
                "id": 14,
                "seconds_before_deleting": null,
                "city": {"id": 6, "name": "Москва"},
                "images": [{
                    "pk": 597,
                    "image": "../static/office_1.jpg",
                    "name": "moscow_2.jpg"
                }, {
                    "pk": 598,
                    "image": "../static/office_2.jpg",
                    "name": "moscow_1.jpg"
                }, {
                    "pk": 599,
                    "image": "../static/office_1.jpg",
                    "name": "moscow_3.jpg"
                }, {
                    "pk": 600,
                    "image": "../static/office_2.jpg",
                    "name": "moscow_4.jpg"
                }, {
                    "pk": 601,
                    "image": "../static/office_1.jpg",
                    "name": "moscow_5.jpg"
                }],
                "text": "<p>Москва офис</p>",
                "view": true,
                "video": ""
            }, {
                "id": 9,
                "seconds_before_deleting": null,
                "city": {"id": 13, "name": "Петрозаводск"},
                "images": [{
                    "pk": 602,
                    "image": "../static/office_2.jpg",
                    "name": "petrozavodsk_2.jpg"
                }, {
                    "pk": 603,
                    "image": "../static/office_1.jpg",
                    "name": "petrozavodsk_1.jpg"
                }, {
                    "pk": 604,
                    "image": "../static/office_2.jpg",
                    "name": "petrozavodsk_3.jpg"
                }, {
                    "pk": 605,
                    "image": "../static/office_1.jpg",
                    "name": "petrozavodsk_4.jpg"
                }, {
                    "pk": 606,
                    "image": "../static/office_2.jpg",
                    "name": "petrozavodsk_5.jpg"
                }],
                "text": "<p>Петрозаводск офис</p>",
                "view": true,
                "video": ""
            }, {
                "id": 10,
                "seconds_before_deleting": null,
                "city": {"id": 9, "name": "Ростов-на-Дону"},
                "images": [{
                    "pk": 612,
                    "image": "../static/office_1.jpg",
                    "name": "rostov_7.jpg"
                }, {
                    "pk": 613,
                    "image": "../static/office_2.jpg",
                    "name": "rostov_6.jpg"
                }, {
                    "pk": 614,
                    "image": "../static/office_1.jpg",
                    "name": "rostov_8.jpg"
                }, {
                    "pk": 615,
                    "image": "../static/office_2.jpg",
                    "name": "rostov_9.jpg"
                }, {
                    "pk": 616,
                    "image": "../static/office_1.jpg",
                    "name": "rostov_10.jpg"
                }],
                "text": "<p>Ростов-на-Дону офис</p>",
                "view": true,
                "video": ""
            }, {
                "id": 11,
                "seconds_before_deleting": null,
                "city": {"id": 8, "name": "Санкт-Петербург"},
                "images": [{
                    "pk": 617,
                    "image": "../static/office_2.jpg",
                    "name": "spb_2.jpg"
                }, {
                    "pk": 618,
                    "image": "../static/office_1.jpg",
                    "name": "spb_1.jpg"
                }, {
                    "pk": 619,
                    "image": "../static/office_2.jpg",
                    "name": "spb_3.jpg"
                }, {
                    "pk": 620,
                    "image": "../static/office_1.jpg",
                    "name": "spb_4.jpg"
                }, {
                    "pk": 621,
                    "image": "../static/office_2.jpg",
                    "name": "spb_5.jpg"
                }],
                "text": "<p>Санкт-Петербург офис </p>",
                "view": true,
                "video": ""
            }, {
                "id": 13,
                "seconds_before_deleting": null,
                "city": {"id": 15, "name": "Челябинск"},
                "images": [{
                    "pk": 622,
                    "image": "../static/office_1.jpg",
                    "name": "chelyabinsk_2.jpg"
                }, {
                    "pk": 623,
                    "image": "../static/office_2.jpg",
                    "name": "chelyabinsk_1.jpg"
                }, {
                    "pk": 624,
                    "image": "../static/office_1.jpg",
                    "name": "chelyabinsk_3.jpg"
                }, {
                    "pk": 625,
                    "image": "../static/office_2.jpg",
                    "name": "chelyabinsk_4.jpg"
                }, {
                    "pk": 626,
                    "image": "../static/office_1.jpg",
                    "name": "chelyabinsk_5.jpg"
                }],
                "text": "<p>Челябинск офис</p>",
                "view": true,
                "video": ""
            }, {
                "id": 4,
                "seconds_before_deleting": null,
                "city": {"id": 10, "name": "Воронеж"},
                "images": [{
                    "pk": 627,
                    "image": "../static/office_2.jpg",
                    "name": "voronej_2.jpg"
                }, {
                    "pk": 628,
                    "image": "../static/office_1.jpg",
                    "name": "voronej_1.jpg"
                }, {
                    "pk": 629,
                    "image": "../static/office_2.jpg",
                    "name": "voronej_3.jpg"
                }, {
                    "pk": 630,
                    "image": "../static/office_1.jpg",
                    "name": "voronej_4.jpg"
                }, {
                    "pk": 631,
                    "image": "../static/office_2.jpg",
                    "name": "voronej_5.jpg"
                }],
                "text": "<p>Воронеж офис</p>",
                "view": true,
                "video": ""
            }, {
                "id": 7,
                "seconds_before_deleting": null,
                "city": {"id": 5, "name": "Калининград"},
                "images": [{
                    "pk": 632,
                    "image": "../static/office_1.jpg",
                    "name": "kaliningrad_2.jpg"
                }, {
                    "pk": 633,
                    "image": "../static/office_2.jpg",
                    "name": "kaliningrad_1.jpg"
                }, {
                    "pk": 634,
                    "image": "../static/office_1.jpg",
                    "name": "kaliningrad_3.jpg"
                }, {
                    "pk": 635,
                    "image": "../static/office_2.jpg",
                    "name": "kaliningrad_4.jpg"
                }, {
                    "pk": 636,
                    "image": "../static/office_1.jpg",
                    "name": "kaliningrad_5.jpg"
                }],
                "text": "<p>Калининград офис</p>",
                "view": true,
                "video": ""
            }, {
                "id": 12,
                "seconds_before_deleting": null,
                "city": {"id": 14, "name": "Харьков"},
                "images": [{
                    "pk": 637,
                    "image": "../static/office_2.jpg",
                    "name": "harkov_2.jpg"
                }, {
                    "pk": 638,
                    "image": "../static/office_1.jpg",
                    "name": "harkov_1.jpg"
                }, {
                    "pk": 639,
                    "image": "../static/office_2.jpg",
                    "name": "harkov_3.jpg"
                }, {
                    "pk": 640,
                    "image": "../static/office_1.jpg",
                    "name": "harkov_4.jpg"
                }, {
                    "pk": 641,
                    "image": "../static/office_2.jpg",
                    "name": "harkov_5.jpg"
                }],
                "text": "<p>Харьков офис</p>",
                "view": true,
                "video": ""
            }, {
                "id": 5,
                "seconds_before_deleting": null,
                "city": {"id": 4, "name": "Иваново"},
                "images": [{
                    "pk": 642,
                    "image": "../static/office_1.jpg",
                    "name": "ivanovo_2.jpg"
                }, {
                    "pk": 643,
                    "image": "../static/office_2.jpg",
                    "name": "ivanovo_1.jpg"
                }, {
                    "pk": 644,
                    "image": "../static/office_1.jpg",
                    "name": "ivanovo_3.jpg"
                }, {
                    "pk": 645,
                    "image": "../static/office_2.jpg",
                    "name": "ivanovo_4.jpg"
                }, {
                    "pk": 646,
                    "image": "../static/office_1.jpg",
                    "name": "ivanovo_5.jpg"
                }],
                "text": "<p>Иваново офис</p>",
                "view": true,
                "video": ""
            }, {
                "id": 6,
                "seconds_before_deleting": null,
                "city": {"id": 11, "name": "Дублин"},
                "images": [{
                    "pk": 647,
                    "image": "../static/office_2.jpg",
                    "name": "dublin_2.jpg"
                }, {
                    "pk": 648,
                    "image": "../static/office_1.jpg",
                    "name": "dublin_1.jpg"
                }, {
                    "pk": 649,
                    "image": "../static/office_2.jpg",
                    "name": "dublin_3.jpg"
                }, {
                    "pk": 650,
                    "image": "../static/office_1.jpg",
                    "name": "dublin_4.jpg"
                }, {
                    "pk": 651,
                    "image": "../static/office_2.jpg",
                    "name": "dublin_5.jpg"
                }],
                "text": "<p>Дублин офис</p>",
                "view": true,
                "video": ""
            }
        ],
        vacancies: {
            list: [
                {
                    "directionName":"Product",
                    "vacancies":[
                        {
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
                        {
                            "id":12,
                            "seconds_before_deleting":null,
                            "cities_positions":[
                                {
                                    "id":2,
                                    "name":"Великий Новгород"
                                },
                                {
                                    "id":4,
                                    "name":"Иваново"
                                },
                                {
                                    "id":3,
                                    "name":"Вологда"
                                },
                                {
                                    "id":5,
                                    "name":"Калининград"
                                },
                                {
                                    "id":7,
                                    "name":"Новосибирск"
                                },
                                {
                                    "id":10,
                                    "name":"Воронеж"
                                },
                                {
                                    "id":13,
                                    "name":"Петрозаводск"
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
                            "date_creation":"12.04.2019",
                            "date_editing":"12.04.2019",
                            "name":"Копия копии General Producer",
                            "project":"0",
                            "expansion_name":"",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        },
                        {
                            "id":7,
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
                                    "id":9,
                                    "name":"Ростов-на-Дону"
                                }
                            ],
                            "additional_handbk":"Product",
                            "handbk":{
                                "id":8,
                                "name":"Marketing"
                            },
                            "author":{
                                "id":1,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"04.03.2019",
                            "date_editing":"04.03.2019",
                            "name":"User Acquisition Team Lead",
                            "project":"0",
                            "expansion_name":"",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":null
                        },
                        {
                            "id":17,
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
                                },
                                {
                                    "id":7,
                                    "name":"Новосибирск"
                                },
                                {
                                    "id":8,
                                    "name":"Санкт-Петербург"
                                },
                                {
                                    "id":9,
                                    "name":"Ростов-на-Дону"
                                },
                                {
                                    "id":10,
                                    "name":"Воронеж"
                                },
                                {
                                    "id":12,
                                    "name":"Киев"
                                },
                                {
                                    "id":13,
                                    "name":"Петрозаводск"
                                }
                            ],
                            "additional_handbk":"IT",
                            "handbk":{
                                "id":2,
                                "name":"Product"
                            },
                            "author":{
                                "id":3,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"22.05.2019",
                            "date_editing":"22.05.2019",
                            "name":"test",
                            "project":"0",
                            "expansion_name":"test",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        },
                        {
                            "id":14,
                            "seconds_before_deleting":null,
                            "cities_positions":[
                                {
                                    "id":2,
                                    "name":"Великий Новгород"
                                }
                            ],
                            "additional_handbk":"Management",
                            "handbk":{
                                "id":2,
                                "name":"Product"
                            },
                            "author":{
                                "id":3,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Архив",
                            "date_creation":"22.05.2019",
                            "date_editing":"22.05.2019",
                            "name":"фыв",
                            "project":"0",
                            "expansion_name":"фыв",
                            "internship":true,
                            "remotely":false,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        },
                        {
                            "id":19,
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
                                }
                            ],
                            "additional_handbk":"Management",
                            "handbk":{
                                "id":2,
                                "name":"Product"
                            },
                            "author":{
                                "id":1,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Черновик",
                            "date_creation":"26.06.2019",
                            "date_editing":"26.06.2019",
                            "name":"Тестовая вакансия",
                            "project":"0",
                            "expansion_name":"Тестовая",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        },
                        {
                            "id":10,
                            "seconds_before_deleting":null,
                            "cities_positions":[
                                {
                                    "id":8,
                                    "name":"Санкт-Петербург"
                                },
                                {
                                    "id":7,
                                    "name":"Новосибирск"
                                },
                                {
                                    "id":13,
                                    "name":"Петрозаводск"
                                },
                                {
                                    "id":12,
                                    "name":"Киев"
                                }
                            ],
                            "additional_handbk":"Game Design",
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
                            "date_creation":"12.04.2019",
                            "date_editing":"12.04.2019",
                            "name":"Копия General Producer",
                            "project":"8476937b22f4d22c80e30fbbcb282abd",
                            "expansion_name":"General Producer",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        }
                    ]
                },
                {
                    "directionName":"Programming",
                    "vacancies":[
                        {
                            "id":4,
                            "seconds_before_deleting":null,
                            "cities_positions":[
                                {
                                    "id":2,
                                    "name":"Великий Новгород"
                                }
                            ],
                            "additional_handbk":"",
                            "handbk":{
                                "id":5,
                                "name":"Programming"
                            },
                            "author":{
                                "id":1,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"04.03.2019",
                            "date_editing":"04.03.2019",
                            "name":"Programming Manager",
                            "project":"0",
                            "expansion_name":"",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":null
                        }
                    ]
                },
                {
                    "directionName":"Animation & VFX",
                    "vacancies":[
                        {
                            "id":6,
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
                                    "id":6,
                                    "name":"Москва"
                                },
                                {
                                    "id":7,
                                    "name":"Новосибирск"
                                },
                                {
                                    "id":8,
                                    "name":"Санкт-Петербург"
                                },
                                {
                                    "id":9,
                                    "name":"Ростов-на-Дону"
                                }
                            ],
                            "additional_handbk":"",
                            "handbk":{
                                "id":7,
                                "name":"Animation & VFX"
                            },
                            "author":{
                                "id":1,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"04.03.2019",
                            "date_editing":"04.03.2019",
                            "name":"Lead 2D Animator",
                            "project":"0",
                            "expansion_name":"",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":null
                        },
                        {
                            "id":18,
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
                                },
                                {
                                    "id":7,
                                    "name":"Новосибирск"
                                },
                                {
                                    "id":8,
                                    "name":"Санкт-Петербург"
                                },
                                {
                                    "id":9,
                                    "name":"Ростов-на-Дону"
                                },
                                {
                                    "id":10,
                                    "name":"Воронеж"
                                },
                                {
                                    "id":12,
                                    "name":"Киев"
                                },
                                {
                                    "id":13,
                                    "name":"Петрозаводск"
                                }
                            ],
                            "additional_handbk":"Art",
                            "handbk":{
                                "id":7,
                                "name":"Animation & VFX"
                            },
                            "author":{
                                "id":3,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"22.05.2019",
                            "date_editing":"22.05.2019",
                            "name":"test2",
                            "project":"0",
                            "expansion_name":"test2",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        }
                    ]
                },
                {
                    "directionName":"Management",
                    "vacancies":[
                        {
                            "id":2,
                            "seconds_before_deleting":null,
                            "cities_positions":[
                                {
                                    "id":2,
                                    "name":"Великий Новгород"
                                },
                                {
                                    "id":9,
                                    "name":"Ростов-на-Дону"
                                }
                            ],
                            "additional_handbk":"",
                            "handbk":{
                                "id":3,
                                "name":"Management"
                            },
                            "author":{
                                "id":1,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"04.03.2019",
                            "date_editing":"04.03.2019",
                            "name":"Development Director",
                            "project":"0",
                            "expansion_name":"",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":null
                        },
                        {
                            "id":8,
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
                                }
                            ],
                            "additional_handbk":"Management",
                            "handbk":{
                                "id":9,
                                "name":"QA"
                            },
                            "author":{
                                "id":1,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"04.03.2019",
                            "date_editing":"04.03.2019",
                            "name":"Lead QA Automation Engineer",
                            "project":"0",
                            "expansion_name":"",
                            "internship":false,
                            "remotely":false,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":null
                        },
                        {
                            "id":15,
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
                                },
                                {
                                    "id":7,
                                    "name":"Новосибирск"
                                },
                                {
                                    "id":8,
                                    "name":"Санкт-Петербург"
                                },
                                {
                                    "id":9,
                                    "name":"Ростов-на-Дону"
                                },
                                {
                                    "id":10,
                                    "name":"Воронеж"
                                },
                                {
                                    "id":12,
                                    "name":"Киев"
                                },
                                {
                                    "id":13,
                                    "name":"Петрозаводск"
                                }
                            ],
                            "additional_handbk":"Management",
                            "handbk":{
                                "id":3,
                                "name":"Management"
                            },
                            "author":{
                                "id":3,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Архив",
                            "date_creation":"22.05.2019",
                            "date_editing":"22.05.2019",
                            "name":"йцвйцвйцв",
                            "project":"0",
                            "expansion_name":"йцвйцвйцв",
                            "internship":true,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        },
                        {
                            "id":14,
                            "seconds_before_deleting":null,
                            "cities_positions":[
                                {
                                    "id":2,
                                    "name":"Великий Новгород"
                                }
                            ],
                            "additional_handbk":"Management",
                            "handbk":{
                                "id":2,
                                "name":"Product"
                            },
                            "author":{
                                "id":3,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Архив",
                            "date_creation":"22.05.2019",
                            "date_editing":"22.05.2019",
                            "name":"фыв",
                            "project":"0",
                            "expansion_name":"фыв",
                            "internship":true,
                            "remotely":false,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        },
                        {
                            "id":19,
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
                                }
                            ],
                            "additional_handbk":"Management",
                            "handbk":{
                                "id":2,
                                "name":"Product"
                            },
                            "author":{
                                "id":1,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Черновик",
                            "date_creation":"26.06.2019",
                            "date_editing":"26.06.2019",
                            "name":"Тестовая вакансия",
                            "project":"0",
                            "expansion_name":"Тестовая",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        },
                        {
                            "id":20,
                            "seconds_before_deleting":null,
                            "cities_positions":[
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
                            "additional_handbk":"Management",
                            "handbk":{
                                "id":6,
                                "name":"Art"
                            },
                            "author":{
                                "id":1,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"26.06.2019",
                            "date_editing":"26.06.2019",
                            "name":"Тестовая вакансия 2",
                            "project":"0",
                            "expansion_name":"Игровой дизайнер",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        }
                    ]
                },
                {
                    "directionName":"Marketing",
                    "vacancies":[
                        {
                            "id":7,
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
                                    "id":9,
                                    "name":"Ростов-на-Дону"
                                }
                            ],
                            "additional_handbk":"Product",
                            "handbk":{
                                "id":8,
                                "name":"Marketing"
                            },
                            "author":{
                                "id":1,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"04.03.2019",
                            "date_editing":"04.03.2019",
                            "name":"User Acquisition Team Lead",
                            "project":"0",
                            "expansion_name":"",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":null
                        }
                    ]
                },
                {
                    "directionName":"Art",
                    "vacancies":[
                        {
                            "id":5,
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
                                },
                                {
                                    "id":8,
                                    "name":"Санкт-Петербург"
                                },
                                {
                                    "id":9,
                                    "name":"Ростов-на-Дону"
                                }
                            ],
                            "additional_handbk":"Support",
                            "handbk":{
                                "id":6,
                                "name":"Art"
                            },
                            "author":{
                                "id":1,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"04.03.2019",
                            "date_editing":"04.03.2019",
                            "name":"Head of Art",
                            "project":"0",
                            "expansion_name":"",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        },
                        {
                            "id":20,
                            "seconds_before_deleting":null,
                            "cities_positions":[
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
                            "additional_handbk":"Management",
                            "handbk":{
                                "id":6,
                                "name":"Art"
                            },
                            "author":{
                                "id":1,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"26.06.2019",
                            "date_editing":"26.06.2019",
                            "name":"Тестовая вакансия 2",
                            "project":"0",
                            "expansion_name":"Игровой дизайнер",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        },
                        {
                            "id":18,
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
                                },
                                {
                                    "id":7,
                                    "name":"Новосибирск"
                                },
                                {
                                    "id":8,
                                    "name":"Санкт-Петербург"
                                },
                                {
                                    "id":9,
                                    "name":"Ростов-на-Дону"
                                },
                                {
                                    "id":10,
                                    "name":"Воронеж"
                                },
                                {
                                    "id":12,
                                    "name":"Киев"
                                },
                                {
                                    "id":13,
                                    "name":"Петрозаводск"
                                }
                            ],
                            "additional_handbk":"Art",
                            "handbk":{
                                "id":7,
                                "name":"Animation & VFX"
                            },
                            "author":{
                                "id":3,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"22.05.2019",
                            "date_editing":"22.05.2019",
                            "name":"test2",
                            "project":"0",
                            "expansion_name":"test2",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        }
                    ]
                },
                {
                    "directionName":"Game Design",
                    "vacancies":[
                        {
                            "id":3,
                            "seconds_before_deleting":null,
                            "cities_positions":[
                                {
                                    "id":7,
                                    "name":"Новосибирск"
                                },
                                {
                                    "id":8,
                                    "name":"Санкт-Петербург"
                                },
                                {
                                    "id":9,
                                    "name":"Ростов-на-Дону"
                                }
                            ],
                            "additional_handbk":"",
                            "handbk":{
                                "id":4,
                                "name":"Game Design"
                            },
                            "author":{
                                "id":1,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"04.03.2019",
                            "date_editing":"04.03.2019",
                            "name":"Game Design Manager",
                            "project":"0",
                            "expansion_name":"",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":null
                        },
                        {
                            "id":16,
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
                                },
                                {
                                    "id":7,
                                    "name":"Новосибирск"
                                },
                                {
                                    "id":8,
                                    "name":"Санкт-Петербург"
                                },
                                {
                                    "id":9,
                                    "name":"Ростов-на-Дону"
                                },
                                {
                                    "id":10,
                                    "name":"Воронеж"
                                },
                                {
                                    "id":12,
                                    "name":"Киев"
                                },
                                {
                                    "id":13,
                                    "name":"Петрозаводск"
                                }
                            ],
                            "additional_handbk":"Game Design",
                            "handbk":{
                                "id":4,
                                "name":"Game Design"
                            },
                            "author":{
                                "id":3,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"22.05.2019",
                            "date_editing":"22.05.2019",
                            "name":"Дизайн",
                            "project":"0",
                            "expansion_name":"Игровой дизайнер",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        },
                        {
                            "id":10,
                            "seconds_before_deleting":null,
                            "cities_positions":[
                                {
                                    "id":8,
                                    "name":"Санкт-Петербург"
                                },
                                {
                                    "id":7,
                                    "name":"Новосибирск"
                                },
                                {
                                    "id":13,
                                    "name":"Петрозаводск"
                                },
                                {
                                    "id":12,
                                    "name":"Киев"
                                }
                            ],
                            "additional_handbk":"Game Design",
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
                            "date_creation":"12.04.2019",
                            "date_editing":"12.04.2019",
                            "name":"Копия General Producer",
                            "project":"8476937b22f4d22c80e30fbbcb282abd",
                            "expansion_name":"General Producer",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        }
                    ]
                },
                {
                    "directionName":"QA",
                    "vacancies":[
                        {
                            "id":8,
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
                                }
                            ],
                            "additional_handbk":"Management",
                            "handbk":{
                                "id":9,
                                "name":"QA"
                            },
                            "author":{
                                "id":1,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"04.03.2019",
                            "date_editing":"04.03.2019",
                            "name":"Lead QA Automation Engineer",
                            "project":"0",
                            "expansion_name":"",
                            "internship":false,
                            "remotely":false,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":null
                        }
                    ]
                },
                {
                    "directionName":"Support",
                    "vacancies":[
                        {
                            "id":5,
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
                                },
                                {
                                    "id":8,
                                    "name":"Санкт-Петербург"
                                },
                                {
                                    "id":9,
                                    "name":"Ростов-на-Дону"
                                }
                            ],
                            "additional_handbk":"Support",
                            "handbk":{
                                "id":6,
                                "name":"Art"
                            },
                            "author":{
                                "id":1,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"04.03.2019",
                            "date_editing":"04.03.2019",
                            "name":"Head of Art",
                            "project":"0",
                            "expansion_name":"",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        }
                    ]
                },
                {
                    "directionName":"IT",
                    "vacancies":[
                        {
                            "id":17,
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
                                },
                                {
                                    "id":7,
                                    "name":"Новосибирск"
                                },
                                {
                                    "id":8,
                                    "name":"Санкт-Петербург"
                                },
                                {
                                    "id":9,
                                    "name":"Ростов-на-Дону"
                                },
                                {
                                    "id":10,
                                    "name":"Воронеж"
                                },
                                {
                                    "id":12,
                                    "name":"Киев"
                                },
                                {
                                    "id":13,
                                    "name":"Петрозаводск"
                                }
                            ],
                            "additional_handbk":"IT",
                            "handbk":{
                                "id":2,
                                "name":"Product"
                            },
                            "author":{
                                "id":3,
                                "get_full_name":"Антон Терёшкин",
                                "date_removed":null
                            },
                            "status":"Опубликован",
                            "date_creation":"22.05.2019",
                            "date_editing":"22.05.2019",
                            "name":"test",
                            "project":"0",
                            "expansion_name":"test",
                            "internship":false,
                            "remotely":true,
                            "description": "<h4>Задачи</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Требования</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Личные качества</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul><h4>Условия работы</h4><ul><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li><li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li></ul>",
                            "answer_form":3
                        }
                    ]
                }
            ],
            dictionary: {},
            pagination: {}
        },
        directions: {
            list: [
                {
                    "id": 2,
                    "seconds_before_deleting": null,
                    "name": "Product",
                    "count_main_vacancy": 6,
                    "count_additional_vacancy": 1,
                    "slug": "product"
                }, {
                    "id": 3,
                    "seconds_before_deleting": null,
                    "name": "Management",
                    "count_main_vacancy": 2,
                    "count_additional_vacancy": 5,
                    "slug": "management"
                }, {
                    "id": 4,
                    "seconds_before_deleting": null,
                    "name": "Game Design",
                    "count_main_vacancy": 2,
                    "count_additional_vacancy": 2,
                    "slug": "game-design"
                }, {
                    "id": 5,
                    "seconds_before_deleting": null,
                    "name": "Programming",
                    "count_main_vacancy": 1,
                    "count_additional_vacancy": 0,
                    "slug": "programming"
                }, {
                    "id": 6,
                    "seconds_before_deleting": null,
                    "name": "Art",
                    "count_main_vacancy": 2,
                    "count_additional_vacancy": 1,
                    "slug": "art"
                }, {
                    "id": 7,
                    "seconds_before_deleting": null,
                    "name": "Animation & VFX",
                    "count_main_vacancy": 2,
                    "count_additional_vacancy": 0,
                    "slug": "animation-and-vfx"
                }, {
                    "id": 8,
                    "seconds_before_deleting": null,
                    "name": "Marketing",
                    "count_main_vacancy": 1,
                    "count_additional_vacancy": 0,
                    "slug": "marketing"
                }, {
                    "id": 9,
                    "seconds_before_deleting": null,
                    "name": "QA",
                    "count_main_vacancy": 1,
                    "count_additional_vacancy": 0,
                    "slug": "qa"
                }, {
                    "id": 10,
                    "seconds_before_deleting": null,
                    "name": "Support",
                    "count_main_vacancy": 0,
                    "count_additional_vacancy": 1,
                    "slug": "support"
                }, {
                    "id": 11,
                    "seconds_before_deleting": null,
                    "name": "IT",
                    "count_main_vacancy": 0,
                    "count_additional_vacancy": 1,
                    "slug": "it"
                }, {
                    "id": 12,
                    "seconds_before_deleting": null,
                    "name": "Test1",
                    "count_main_vacancy": 0,
                    "count_additional_vacancy": 0,
                    "slug": "test1"
                }, {
                    "id": 13,
                    "seconds_before_deleting": null,
                    "name": "Test2",
                    "count_main_vacancy": 0,
                    "count_additional_vacancy": 0,
                    "slug": "test2"
                }
            ],
            pagination: {}
        },
        questionary: [
            {
                "id": 3,
                "json": "[{\"field\":\"text\",\"type\":\"text\",\"label\":\"Имя\",\"value\":\"\",\"placehold\":\"Ваше имя\",\"required\":true,\"name\":\"firstname\"},{\"field\":\"text\",\"type\":\"text\",\"label\":\"Фамилия\",\"value\":\"\",\"placehold\":\"Ваша фамилия\",\"required\":true,\"name\":\"lastname\"},{\"field\":\"text\",\"type\":\"email\",\"label\":\"Email\",\"value\":\"\",\"placehold\":\"Ваша почта\",\"required\":true,\"name\":\"email\"},{\"field\":\"text\",\"type\":\"tel\",\"label\":\"Телефон\",\"value\":\"\",\"placehold\":\"Ваш телефон\",\"required\":true,\"name\":\"phone\"},{\"field\":\"novalid\",\"type\":\"novalid\",\"name\":\"year\",\"label\":\"Дата рождения\",\"value\":\"\",\"placehold\":\"Когда вы появились на свет?\",\"required\":true},{\"field\":\"text\",\"type\":\"text\",\"name\":\"skype\",\"label\":\"Skype\",\"value\":\"\",\"placehold\":\"Skype\",\"required\":true},{\"field\":\"textarea\",\"type\":\"textarea\",\"name\":\"other\",\"label\":\"Дополнительная информация\",\"value\":\"\",\"placehold\":\"Например, аккаунты в соц. сетях или личный веб-сайт\"},{\"field\":\"file\",\"type\":\"file\",\"label\":\" \",\"value\":\".doc,.docx,.pdf\"},{\"field\":\"textarea\",\"type\":\"textarea\",\"name\":\"why\",\"label\":\"Почему вам интересна наша компания?\",\"value\":\"\",\"placehold\":\"Нет, ну правда, почему?\",\"required\":true},{\"field\":\"checkbox\",\"type\":\"checkbox\",\"label\":\"Какие варианты работы вы рассматриваете?\",\"value\":[{\"text\":\"Удалённая работа\",\"name\":\"home\",\"value\":\"false\"},{\"text\":\"В офисе\",\"name\":\"office\",\"value\":\"false\"}],\"placehold\":\"\",\"required\":false,\"multiple\":null},{\"field\":\"radio\",\"type\":\"radio\",\"label\":\"Какой тип работы вы предпочитаете?\",\"value\":[{\"text\":\"Удалённая\",\"name\":\"loc_home\",\"value\":\"false\"},{\"text\":\"В офисе\",\"name\":\"loc_office\",\"value\":\"false\"}],\"placehold\":\"\",\"required\":false,\"multiple\":null},{\"field\":\"list\",\"type\":\"list\",\"name\":\"cities\",\"label\":\"Выберите город для работы\",\"value\":[{\"text\":\"Москва\",\"name\":\"\",\"value\":\"moskau\"},{\"text\":\"Дублин\",\"name\":\"\",\"value\":\"dublin\"},{\"text\":\"Иваново\",\"name\":\"\",\"value\":\"ivanovo\"}],\"placehold\":\"Выберите город\"},{\"field\":\"novalid\",\"type\":\"novalid\",\"name\":\"many\",\"label\":\"Ожидаемая зп\",\"value\":\"\",\"placehold\":\"Какую зп вы бы хотели\"}]",
                "name": "Тестовая анкета",
                "default": true,
                "author": {"id": 1, "get_full_name": "Антон Терёшкин", "date_removed": null}
            }, {
                "id": 2,
                "json": "[{\"field\":\"text\",\"type\":\"text\",\"label\":\"Имя\",\"value\":\"\",\"placehold\":\"Ваше имя\",\"required\":true,\"name\":\"firstname\"},{\"field\":\"text\",\"type\":\"text\",\"label\":\"Фамилия\",\"value\":\"\",\"placehold\":\"Ваша фамилия\",\"required\":true,\"name\":\"lastname\"},{\"field\":\"text\",\"type\":\"email\",\"label\":\"Email\",\"value\":\"\",\"placehold\":\"Ваша почта\",\"required\":true,\"name\":\"email\"},{\"field\":\"text\",\"type\":\"tel\",\"label\":\"Телефон\",\"value\":\"\",\"placehold\":\"Ваш телефон\",\"required\":true,\"name\":\"phone\"}]",
                "name": "Новая форма",
                "default": false,
                "author": {"id": 1, "get_full_name": "Антон Терёшкин", "date_removed": null}
            }
        ],
        privacyNotice: {
            "en": "<p>Please accept our <a href=\"#\" target=\"_blank\">privacy policy</a>. Or we are not responsible for ourselves.</p>",
            "ru": "<p>Пожалуйста, согласитесь с нашей <a href=\"#\" target=\"_blank\">политикой конфиденциальности</a>. Или мы за себя не отвечаем.</p>"
        },
    },
    getters,
    mutations,
    actions,
    modules: []
});
