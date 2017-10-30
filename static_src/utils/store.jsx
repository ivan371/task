import { createStore, applyMiddleware, compose } from 'redux';
import initReducers from './../reducers';
import middleware from './../middleware';

function jsonEscape(str)  {
    return str.replace("\n", "\\n").replace("\r", "\\r").replace("\t", "\\t");
}

function initStore(additionalMiddlewares = []) {
    let initialStore = {};
    if ( !SERVER && window.__REDUX__SERVER__STORE__ ){
        initialStore = JSON.parse(jsonEscape(window.__REDUX__SERVER__STORE__));
    }
    const enhancerList = [applyMiddleware(...additionalMiddlewares, ...middleware),];
    if(typeof(window) !== 'undefined') {
        if (window.__REDUX_DEVTOOLS_EXTENSION__()) {
            enhancerList.push(window.__REDUX_DEVTOOLS_EXTENSION__())
        }
    }
    const enhancers = compose(
        ...enhancerList
    );
    return createStore(initReducers, initialStore, enhancers);
}

export default initStore;
