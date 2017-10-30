const webpack = require('webpack');
// const path = require('path');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV || 'development';

const URL = 'http://138.197.187.175/';

module.exports = {
    name: 'SSR',
    target: 'node',
    entry: {
        //#1
        // #2
        serverBundle: './server.js',
    },
    context: `${__dirname}/`,
    output: {
        path: `${__dirname}/static/server`,
        filename: '[name].js',
        publicPath: '/static/server/',
        library: '[name]',
    },

    watch: NODE_ENV === 'development',
    externals: nodeExternals(),
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-1',
                include: [`${__dirname}/static_src`, `${__dirname}/server`]
            },
            {
                // test: /\.(css|scss)$/,
                // loader: 'ignore-loader',
                // include: [`${__dirname}/static`]
                test: /\.css$/,
                loader: 'isomorphic-style-loader!css-loader',
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            SERVER: true,
            SERVER_URL: JSON.stringify('http://138.197.187.175'),
        }),
    ],

    resolve: {
        modules: [`${__dirname}/static_src`, `${__dirname}/server`, 'node_modules'],
        extensions: ['.js', '.jsx'],
    },
};
