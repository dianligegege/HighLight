import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            component: () => import(/* webpackChunkName: "page-index" */'@/pages/index/index.vue'),
            meta: {
                layout: 'Default',
            },
        },
        {
            path: '/watch',
            component: () => import(/* webpackChunkName: "page-list" */'@/pages/watch/index.vue'),
        },
        {
            path: '*',
            component: () => import(/* webpackChunkName: "page-404" */'@/pages/404.vue'),
        },
    ],
});
