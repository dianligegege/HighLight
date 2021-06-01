import Vue from 'vue';
import router from '@/config/router';
import ElementUI from 'element-ui';
import { install as Service } from '@/utils/service';
import { install as api } from '@/utils/api';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Service);
Vue.use(api);

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
