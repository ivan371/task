import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import  '../static/css/style.css';
import { Router } from 'react-router';
import {
    // BrowserRouter as Router,
    Route,
    Link,
    Redirect,
    withRouter
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Layout from './components/Layout';
import Projects from "./components/project/Projects";
import Tasks from "./components/tasks/Tasks";
import Login, {PrivateRoute} from './components/Login';
import initStore from './store';
import App from './App';
import Registration from './components/Registration';
import SelfRoom from './components/SelfRoom';
import OwnProject from './components/project/OwnProject';
import OwnTask from './components/tasks/OwnTask';

const history = createHistory();

ReactDOM.render(
    <Provider store={ initStore() }>
    <Router history={history}>
        <div>
            <Layout store={ initStore() }>
                <Route exact path="/" component={App}/>
                <PrivateRoute path="/project/:id/" component={OwnProject}/>
                <PrivateRoute path="/projects/" component={Projects}/>
                <PrivateRoute path="/self_room/" component={SelfRoom}/>
                <PrivateRoute path="/tasks/" component={Tasks}/>
                <PrivateRoute path="/task/:id/" component={OwnTask}/>
                <Route path="/login/" component={Login}/>
                <Route path="/registration/" component={Registration}/>
            </Layout>
        </div>
    </Router>
    </Provider>,
    document.getElementById('root')
);