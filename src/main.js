import Vue from 'vue';
import router from '@/config/router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App';

Vue.config.productionTip = false;

Vue.use(ElementUI);

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app');
