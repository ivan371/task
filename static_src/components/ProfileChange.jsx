import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {userChange} from '../actions/users';
import {usersUrl} from '../constants';
import FileBase64 from 'react-file-base64';

class ProfileChangeComponent extends React.Component {
    state = {
        first_name: this.props.first_name,
        last_name: this.props.last_name,
        email: this.props.email,
        avatar: null,
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };
    onCreate = (e) => {
        e.preventDefault();
        this.props.userChange(usersUrl + this.props.user + '/',
            this.props.username,
            this.state.first_name,
            this.state.last_name,
            this.state.email,
            this.state.avatar);
    };
    getFile = (e) => {
        console.log(e.target.files[0]);
        this.setState({ avatar: e.target.files[0] });
    };
    render() {
        return <div>
            <form action='.' encType="multipart/form-data">
            <input
                value={ this.state.first_name }
                name="first_name"
                onChange={ this.onChange }
            />
            <br/>
            <input
                value={ this.state.last_name }
                name="last_name"
                onChange={ this.onChange }
            />
            <br/>
            <input
                value={ this.state.email }
                name="email"
                onChange={ this.onChange }
            />
            <br/>
             <input
                 type="file"
                 onChange={this.getFile}
             />
            {/*<FileBase64*/}
                {/*multiple={ false }*/}
                {/*onDone={ this.getFile } />*/}
                <br/>
            <button onClick={ this.onCreate}>Изменить</button>
            </form>
        </div>;
    }
}

const mapStoreToProps = (state, props) => ({
    username: state.users.users[state.users.user].username,
    first_name: state.users.users[state.users.user].first_name,
    last_name: state.users.users[state.users.user].last_name,
    email: state.users.users[state.users.user].email,
    avatar: state.users.users[state.users.user].avatar,
    user: state.users.user,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            userChange,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProfileChangeComponent);