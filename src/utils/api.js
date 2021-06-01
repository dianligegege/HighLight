/**
 * @file 统一操作 API
 *
 * @example
 *  - vm.$api.dgg.getHecolist
 *  - vm.$api.hbg.getHecoNews
 *
 *  - import { $api } from '@/utils/api';
 *  - $api.dgg.getHecolist
 *  - $api.hbg.getHecoNews
 */

import { get, post } from './service';

const node = {
    getName: (params) => get('@node/getName', { params }),
    setName: (params) => post('@node/setName', params),
    myName: (params) => get('@node/myName/zhangsan', { params }),
};

export const $api = {
    node,
};

export const install = (Vue) => {
    Vue.prototype.$api = $api;

    // 开发环境打印请求接口
    if (process.env.NODE_ENV === 'development') {
        console.log('%c可用的 this.$api', 'background-color: #0bba96; color: #fff; padding: 2px 4px; border-radius: 4px;', Vue.prototype.$api);
    }
};
