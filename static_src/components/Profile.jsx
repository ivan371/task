import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {current} from '../actions/users';

class ProfileComponent extends React.Component {

    render() {
        return <div className="login">
            <p>{this.props.first_name} {this.props.last_name}</p>
            <img className="avatar" src={this.props.avatar}/>
            <p>{this.props.email}</p>
        </div>;
    }
}

const mapStoreToProps = (state, props) => ({
    avatar: state.users.users[state.users.user].avatar,
    last_name: state.users.users[state.users.user].last_name,
    first_name: state.users.users[state.users.user].first_name,
    email: state.users.users[state.users.user].email,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProfileComponent);