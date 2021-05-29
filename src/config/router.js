import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/home',
            component: () => import(/* webpackChunkName: "page-index" */'@/pages/Index.vue'),
            meta: {
                layout: 'Default',
            },
        },
        {
            path: '*',
            component: () => import(/* webpackChunkName: "page-404" */'@/pages/404.vue'),
        },
    ],
});
