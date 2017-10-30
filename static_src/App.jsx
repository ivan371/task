import React from 'react';
// import { Link } from 'react-router-dom';
// import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Redirect, Route, withRouter} from 'react-router-dom';
import {PrivateRoute} from './components/Login';
import Projects from './components/project/Projects';
import OwnProject from './components/project/OwnProject';
import initStore from './utils/store';
import SelfRoom from './components/SelfRoom';
import Tasks from './components/tasks/Tasks';
import OwnTask from './components/tasks/OwnTask';
import Login from './components/Login';
import Registration from './components/Registration';
import Layout from './components/Layout';
import  '../static/css/style.css';
import { serverFlag } from './actions/serverFlag';
import {connect} from 'react-redux';

class AppComponent extends React.Component {

    componentDidMount(){
        this.props.serverFlag();
    }

    render() {
        return <div>
            <Layout>
                <Route exact path="/"
                       render={ props => <Projects
                           { ...props }
                           addToPromises={ this.props.addToPromises}
                       />}
                />
                <Route
                    exact
                    path="/project/:id/"
                    render={ props => (this.props.isLogin ? <OwnProject
                        { ...props }
                        server={ this.props.server }
                        addToPromises={ this.props.addToPromises}
                    /> : (
                        <Redirect to={{
                            pathname: '/login/',
                            state: { from: props.location }
                        }}/>
                    ))}
                />
                <Route path="/projects/"
                       render={ props => (this.props.isLogin ? <Projects
                           { ...props }
                           server={ this.props.server }
                           addToPromises={ this.props.addToPromises}
                       /> : (
                           <Redirect to={{
                               pathname: '/login/',
                               state: { from: props.location }
                           }}/>
                       ))}
                />
                <Route path="/self_room/"
                       render={ props => (this.props.isLogin ? <SelfRoom
                           { ...props }
                           server={ this.props.server }
                           addToPromises={ this.props.addToPromises}
                       /> : (
                           <Redirect to={{
                               pathname: '/login/',
                               state: { from: props.location }
                           }}/>
                       ))}
                />
                <Route
                    path="/tasks/"
                    exact
                    render={ props => (this.props.isLogin ? <Tasks
                        { ...props }
                        server={ this.props.server }
                        addToPromises={ this.props.addToPromises}
                    /> : (
                        <Redirect to={{
                            pathname: '/login/',
                            state: { from: props.location }
                        }}/>
                    ))}
                />
                <Route path="/task/:id/"
                       exact
                       render={ props => (this.props.isLogin ? <OwnTask
                           { ...props }
                           server={ this.props.server }
                           addToPromises={ this.props.addToPromises}
                       /> : (
                           <Redirect to={{
                               pathname: '/login/',
                               state: { from: props.location }
                           }}/>
                       ))}
                />
                <Route path="/login/" component={Login}/>
                <Route path="/registration/" component={Registration}/>
            </Layout>
        </div>;
    }
}

const mapStoreToProps = (state, props) => ({
    isLogin: state.users.isLogin,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({ serverFlag }, dispatch)
    }
};


export default withRouter(connect( mapStoreToProps, mapDispatchToProps)(AppComponent));
