const utils = require('./utils');
const webpack = require('webpack');
const config = require('../config');
const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
let env = process.env.NODE_ENV.trim()

// add hot-reload related code to entry chunks
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
    baseWebpackConfig.entry[name] = [
        'react-hot-loader/patch',
        './build/dev-client'
    ].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
    // module: {
    //     rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap })
    // },
    // cheap-module-eval-source-map is faster for development
    devtool: '#cheap-module-eval-source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': config.dev.env,
            __DEV__: env === 'development',
            __PROD__: env === 'production',
            __COMPONENT_DEVTOOLS__: false, // 是否使用组件形式的 Redux DevTools
            __WHY_DID_YOU_UPDATE__: false // 是否检测不必要的组件重渲染
        }),
        // https://github.com/glenjamin/webpack-hot-middleware#installation--usage
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        // https://github.com/ampedandwired/html-webpack-plugin
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: true
        }),
        new FriendlyErrorsPlugin()
    ]
});
