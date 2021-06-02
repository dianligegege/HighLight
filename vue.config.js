module.exports = {
    devServer: {
        proxy: {
            '/-/x/': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            },
        },
    },
};
