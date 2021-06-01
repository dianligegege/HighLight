module.exports = {
    devServer: {
        proxy: {
            '/-/x/': {
                target: 'http://10.163.102.48:3000',
                changeOrigin: true,
            },
        },
    },
};
