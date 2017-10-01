import {Link, Redirect, Route, withRouter} from 'react-router-dom'
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login, logout} from '../actions/users';
import {fakeAuth} from './Login';

class LogoutComponent extends React.Component {
    render() {
        let auth = null;
        if (fakeAuth.isAuthenticated) {
            auth = <button onClick={() => {
                this.props.logout();
                fakeAuth.signout(() => this.props.history.push('/'))
            }
            }>Выйти</button>
        }
        else {
            auth = <Link to="/login/"><button>Войти</button></Link>
        }
        return <div>{auth}</div>
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

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(withRouter(LogoutComponent));