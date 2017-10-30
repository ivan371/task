import {Link, Redirect, Route, withRouter} from 'react-router-dom'
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {login, logout} from '../actions/users';

export const fakeAuth = {
    // isAuthenticated: localStorage.hasOwnProperty("token"),
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100) // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100)
    }
};

export const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        this.props.isLogin ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/login/',
                state: { from: props.location }
            }}/>
        )
    )}/>
);

class LoginComponent extends React.Component {
    state = {
        login: '',
        password: '',
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    login = () => {
        this.props.login('/api/token-auth/', this.state.login, this.state.password);
    };

    render() {
        // const { from } = this.props.location.state || { from: { pathname: '/' } };
        // if (this.props.isLogin) {
        //     return (
        //         <Redirect to={from}/>
        //     )
        // }

        return (
            <div className="login">
                <p>Логин</p>
                <input name="login" onChange={this.onChange}/>
                <p>Пароль</p>
                <input name="password" onChange={this.onChange} type="password"/>
                <br/>
                <button onClick={this.login}>Войти</button>
                {this.props.isFalied ? <p>Неверный логин или пароль!</p> : null}
            </div>
        )
    }
}
const mapStoreToProps = (state, props) => ({
    isLogin: state.users.isLogin,
    isFalied: state.users.isFalied,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            login,
            logout,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(LoginComponent);

// class LoginComponent extends React.Component {
//     state = {
//         username: '',
//         password: '',
//     }
//
//     submitForm(e) {
//         e.preventDefault()
//         const data = new FormData();
//         data.append('username', this.state.username);
//         data.append('password', this.state.password);
//         fetch('/api/token-auth/', {method: 'POST', body: data}).then((data) => {
//             console.log(data);
//             if (data.status >= 200 && data.status < 300){
//                 return data.json()
//             } else {
//                 return Promise.resolve({error: true})
//             }
//         }).then((json) => {
//             if (json.error && json.status === 'ok'){
//                 console.log('auth-success')
//             }
//         })
//
//     }
//
//     render() {
//         if (this.props.isLoading) {
//             return <div className="b-task-list">Загрузка...</div>;
//         }
//
//         return (
//             <div className="b-task-list">
//                 <form onSubmit={ (e) => this.submitForm(e) }>
//                     <div>
//                         <label
//                             htmlFor="username"
//                         >
//                             username
//                         </label>
//                         <input
//                             name="username"
//                             id='username'
//                             value={ this.state.username }
//                             onChange={ (e) => { this.setState({ [e.target.name]: e.target.value}) } }
//                         />
//                     </div>
//                     <div>
//                         <label
//                             htmlFor="password"
//                         >
//                             password
//                         </label>
//                         <input
//                             id="password"
//                             name="password"
//                             type="password"
//                             value={ this.state.password }
//                             onChange={ (e) => { this.setState({ [e.target.name]: e.target.value}) } }
//                         />
//                     </div>
//                     <button>сохранить</button>
//                 </form>
//             </div>
//         );
//     }
// }
//
// export default LoginComponent;