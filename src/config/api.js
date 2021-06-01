/**
 * axios 接口相关配置
 */

/**
 * 接口配置
 *
 * @type {Object}
 */
export const config = {
    '@node/': {
        url: '/-/x/',
    },
};

/**
  * axios 实例化参数
  *
  * @type {Object}
  */
export const options = {
    timeout: 30000,
    headers: {
        post: {
            'Content-Type': 'application/json;charset=UTF-8',
        },
    },
    emulateJSON: true,
};

/**
  * 错误处理方法
  *
  * @param {Object} err 错误对象
  * @return {Object}
  */
export const error = (err) => ({
    success: false,
    code: 500,
    message: '访问出错，请稍后重试',
    data: null,
    trace: err.stack ? err.stack : err,
});

/**
  * 格式化响应数据
  *
  * @param {Object} res axios Response Schema: https://github.com/axios/axios#response-schema
  * @return {Object} 返回响应数据结果对象
  */
export const transformResponse = (res) => {
    const data = res.request && res.config ? res.data : res;

    // 如果不是正常 JSON 数据则认为是错误
    if (typeof data !== 'object' || Array.isArray(data)) {
        return error('数据响应格式不正确。');
    }

    // 封装后端 Response Schema
    // 具体需要根据后端而定
    data.success = typeof data.success === 'boolean'
        ? data.success
        : (data.success || data.status === 'ok' || data.code === 200);
    data.code = data.code || data['err-code'] || 200;
    data.message = data.message || data['err-msg'] || 200;

    return data;
};
