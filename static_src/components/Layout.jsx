import React from 'react';
import {Link, withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import Logout from './Logout';
import {fakeAuth} from './Login';
import {bindActionCreators} from 'redux';
import {logout} from '../actions/users';

class LayoutComponent extends React.Component {
    logout = () => {
        // this.props.history.push('/login/');
        this.props.logout();
        // let url = '/logout/';
        // fetch(url, {
        //     method: 'GET',
        //     body: null,
        // });
    };
    render() {
        let self_data = null;
        let auth = null;
        if (this.props.isLogin) {
            self_data = <Link to="/self_room/"><button>Личный кабинет</button></Link>;
            auth = <button onClick={this.logout}>Выйти</button>
        }
        else {
            self_data = <Link to="/registration/"><button>Регистрация</button></Link>;
            auth = <Link to="/login/"><button>Войти</button></Link>;
        }
        return <div>
            <div className="layout">
                {self_data}
                <Link to="/projects/"><button>Мои проекты</button></Link>
                <Link to="/tasks/"><button>Мои таски</button></Link>
                {auth}
            </div>
            { this.props.children }
        </div>;
    }
}

const mapStoreToProps = (state, props) => ({
    isLogin: state.users.isLogin,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            logout,
        }, dispatch),
    };
};


export default withRouter(connect(
    mapStoreToProps,
    mapDispatchToProps
)(LayoutComponent));