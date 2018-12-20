module.exports = {
    chainWebpack: config => {
        config.module.rule('tsx').test(/\.tsx$/)
            .use('babel-loader')
            .loader('babel-loader')
            .options({
                presets: ['@babel/preset-env'],
                plugins: ['transform-vue-jsx']
            })
            .before('ts-loader');
    },
};
