// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource';
import BootstrapVue from 'bootstrap-vue';
import VeeValidate from 'vee-validate';
import VueNotice from 'vuejs-noty';
import vSelect from './components/libs/vue-bootstrap-select';
import Meta from 'vue-meta';
import VueYoutube from 'vue-youtube';
import VueScrollTo from 'vue-scrollto';
import VueScrollactive from 'vue-scrollactive';
import VueParallaxJs from './assets/js/vue-parallax-js';

import { router } from './router';
import { store } from './store';
import './directives';
import 'vuejs-noty/dist/vuejs-noty.css';

import App from './App';

Vue.config.productionTip = false;

Vue.use(VueResource);
Vue.use(BootstrapVue);
Vue.use(VueNotice, {
    timeout: 3000,
    progressBar: false,
    layout: 'topRight'
});
Vue.use(Meta);

Vue.component('v-select', vSelect);
Vue.use(VueYoutube);
Vue.use(VueScrollTo, {
    force: true
});
Vue.use(VueScrollactive);
Vue.use(VueParallaxJs);

Vue.use(VeeValidate, {
    fieldsBagName: 'inputs ',
    events: 'input|blur',
    locale: 'ru',
    inject: false,
    dictionary: {
        ru: {
            messages:{
                alpha_dash: 'Заполните поле корректно',
                required: 'Заполните поле',
            },
            custom:{
                firstname: {
                    required: 'Заполните имя',
                    alpha_dash: 'Заполните имя корректно'
                },
                lastname: {
                    required: 'Заполните фамилию',
                    alpha_dash: 'Заполните фамилию корректно'
                },
                email: {
                    required: 'Заполните email',
                    email: 'Заполните email корректно'
                },
                text: {
                    required: 'Заполните поле',
                    alpha_dash: 'Заполните поле корректно'
                },
                phone: {
                    required: 'Заполните телефон',
                    regex: 'Заполните телефон корректно'
                },
                file: {
                    required: 'Выберите файл',
                    ext: 'Выберите корректный файл (doc, docx, pdf)'
                },
            }
        }
    }
});

Vue.http.options.root = 'http://example.ru/api/v1';

Vue.prototype.$urlAPI = 'http://example.ru/api/v1';
Vue.prototype.$urlGeneral = 'https://example.ru';

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: {App}
});
