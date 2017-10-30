var main =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/build";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 338);
/******/ })
/************************************************************************/
/******/ ({

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// const webpack = require('webpack');
// // const path = require('path');
// const nodeExternals = require('webpack-node-externals');
//
// const NODE_ENV = process.env.NODE_ENV || 'development';
//
// const URL = 'http://138.197.187.175/';
//
// module.exports = {
//     name: 'SSR',
//     target: 'node',
//     entry: {
//         //#1
//         // #2
//         // serverBundle: './server/server.js',
//     },
//     context: `${__dirname}/`,
//     // output: {
//     //     path: `${__dirname}/static/server`,
//     //     filename: '[name].js',
//     //     publicPath: '/static/server/',
//     //     library: '[name]',
//     // },
//
//     watch: NODE_ENV === 'development',
//     // externals: nodeExternals(),
//     module: {
//         loaders: [
//             // {
//             //     test: /\.(js|jsx)$/,
//             //     loader: 'babel-loader?presets[]=es2015&presets[]=react&presets[]=stage-1',
//             //     include: [`${__dirname}/static_src`, `${__dirname}/server`]
//             // },
//             // #2
//             // {
//             //     test: /\.(css|scss)$/,
//             //     loader: 'ignore-loader',
//             //     include: [`${__dirname}/static_src`]
//             // },
//         ],
//     },
//     // plugins: [
//     //     new webpack.DefinePlugin({
//     //         SERVER: true,
//     //         SERVER_URL: JSON.stringify(URL),
//     //     }),
//     // ],
//
//     // resolve: {
//     //     modules: [`${__dirname}/static_src`, `${__dirname}/server`, 'node_modules'],
//     //     extensions: ['.js', '.jsx'],
//     // },
// };


/***/ })

/******/ });
//# sourceMappingURL=main.js.map