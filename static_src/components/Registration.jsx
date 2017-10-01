import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {registration} from '../actions/users';

class RegistrationComponent extends React.Component {

    state = {
        login: '',
        password: '',
        email: '',
        first_name: '',
        last_name: '',
    };

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    };

    onCreate = (e) => {
        this.props.registration('/api/users/', this.state.login, this.state.password, this.state.email, this.state.first_name, this.state.last_name);
    };

    render() {
        return <div className="registration">
            <p>Логин</p>
            <input name="login" onChange={this.onChange} required/>
            <p>Адрес элеетронной почти</p>
            <input name="email" onChange={this.onChange}/>
            <p>Имя</p>
            <input name="first_name" onChange={this.onChange}/>
            <p>Фамилия</p>
            <input name="last_name" onChange={this.onChange}/>
            <p>Пароль</p>
            <input name="password" onChange={this.onChange} type="password"/>
            <br/>
            <button onClick={this.onCreate}>Зарегистрироваться</button>
            {this.props.isFalied ? <p>Не правильный формат предоставленных данных!</p> : null}
        </div>;
    }
}

const mapStoreToProps = (state, props) => ({
    isFalied: state.users.isFalied,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            registration,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(RegistrationComponent);