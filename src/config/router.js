import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: "page-index" */'@/pages/Index/index.vue'),
            meta: {
                layout: 'Default',
            },
        },
        {
            path: '/list',
            component: () => import(/* webpackChunkName: "page-list" */'@/pages/List/index.vue'),
        },
        {
            path: '*',
            component: () => import(/* webpackChunkName: "page-404" */'@/pages/404.vue'),
        },
    ],
});
