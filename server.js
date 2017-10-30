import express from 'express';
import React from 'react';

import { renderToString } from 'react-dom/server';
import template from './server/template';
import { StaticRouter } from 'react-router'
import { Provider } from 'react-redux';
import { createElement } from 'react';
import initStore from './static_src/utils/store';
import { headerMiddleware } from './static_src/middleware/headerMiddleware';
import 'isomorphic-fetch';
// require('es6-promise').polyfill();
import App from './static_src/App';
const expressproxy = require('express-http-proxy');
const cookieParser = require('cookie-parser');
const path = require('path');
const serveStatic = require('serve-static');
import './static/css/style.css';
import {logoutMiddleware} from './static_src/middleware/logoutMiddleware';

const app = express();

const apiURL = 'http://138.197.187.175/';

app.use(cookieParser());
app.use('/static', serveStatic('static'));


app.post('/api/token-auth/', expressproxy (apiURL, {
    userResDecorator: function(proxyRes, proxyResData, userReq, userRes) {
        if (proxyRes.statusCode >= 200 && proxyRes.statusCode < 300){
            const data = JSON.parse(proxyResData.toString('utf8'));
            userRes.cookie('token', data.token, {httpOnly: true});
            return JSON.stringify({status: 'ok'});
        }
        return proxyResData
    }
}));

app.all('/logout/', (req, res, next) => {
    let key = req.cookies.token;
    if(key) {
        res.clearCookie("token");
    }
    next()
});

app.all('/api/*' ,(req, res, next) => {
    const key = req.cookies.token;
    if(key){
        req.headers['Authorization'] = `token ${key}`
    }
    next()
});

app.all('/api/*', expressproxy(apiURL));

app.get('*', (req, res) => {
    console.log(req.headers.referer);
    console.log(req.url);
    const store = initStore([headerMiddleware(req.cookies.token)]);
    const context = {};
    const resultServer = (value) => {
        console.log(value);
        for (const item of value) {
            console.log("ITEM", item);
            if ((!item.payload || item.error || item.payload.status === 401) && req.url !== '/login/'){
                res.redirect('/login/');
                return
            }
        }
        const resultText = renderToString(
            createElement(Provider, { store },
                createElement(StaticRouter, { location: req.url, context },
                    <App server={ false }/>
                )
            )
        );
        const storeString = JSON.stringify(store.getState());

        res.send(template({
            body: resultText,
            title: 'FROM THE SERVER',
            store: storeString
        }));
    };
    const promises = [];
    const addToPromises = (promis) => {
        console.log("ADDD", promis);
        promises.push(promis)
    };
    renderToString(
        createElement(Provider, { store },
            createElement(StaticRouter, { location: req.url, context },
                <App server={ true } addToPromises={ addToPromises }/>
            )
        )
    );
    console.log("PROMISSE", promises);
    return Promise.all(promises).then(value => resultServer(value));
});

const port = 3000;
app.listen(port);
console.log(`Listening on port ${port}`);

