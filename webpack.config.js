let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill', './client/js/main.js'],
    output: {
        path: path.resolve(__dirname, 'client', 'build'),
        filename: 'main.bundle.js'
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    // plugins: [
    //     new webpack.DefinePlugin({
    //         'process.env': {
    //             NODE_ENV: JSON.stringify('development')
    //         }
    //     })
    // ],
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                query: {
                    presets: ['env', 'react'],
                    compact: false
                }
            },
            {
                test: /\.css$/,
                loader: require.resolve('style-loader')
            },
            {
                test: /\.css$/,
                loader: require.resolve('css-loader'),
                options: {
                    importLoaders: 1,
                    modules: true,
                    localIdentName: "[name]__[local]__[hash:base64:5]"
                }
            }

        ]
    }
};
