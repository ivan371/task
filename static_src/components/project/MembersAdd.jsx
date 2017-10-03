import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {openModal, usersFetchData, usersUnMount} from '../../actions/users';
import {count, page, usersUrl} from '../../constants';
import {projectMemberCreate} from '../../actions/project';

class MembersAddComponent extends React.Component {
    componentDidMount() {
        this.props.usersFetchData('/api/users/');
    }

    componentWillUnmount() {
        this.props.usersUnMount();
    }

    componentWillUpdate(nextProps, nextState){
        if(this.props.count !== nextProps.count) {
            for(let i = 2; i <= nextProps.count / count + 1; i++) {
                this.props.usersFetchData(usersUrl + '?' + page + i);
            }
        }
    }

    onChangeUser = (e) => {
        this.setState({user: e.target.value});
    };

    onChangeRole = (e) => {
        this.setState({role: e.target.value});
    };

    onCreate = (e) => {
        this.props.projectMemberCreate('/api/projectMember/', this.props.id, this.state.user, this.state.role);
        this.props.openModal(!this.props.isOpen);
    };

    state = {
        user: 1,
        role: 1,
    };

    render() {
        let select = [];
        if(this.props.isLoading) {
            select = this.props.userList.map(
                (userId) => {
                    return <option key={userId} value={userId}>
                        {this.props.users[userId].first_name} {this.props.users[userId].last_name}
                    </option>
                }
            );
        }
        return <div>
            {!this.props.isLoading ? <div className="loading"/> : <select value={this.state.user} onChange={this.onChangeUser}>
                {select}
            </select>}
            <br/>
            <select onChange={this.onChangeRole} value={this.state.role}>
                <option value="1">Мастер</option>
                <option value="2">Разработчик</option>
            </select>
            <br/>
            <button onClick={this.onCreate}>Добавить</button>
        </div>;
    }
}

MembersAddComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    count: state.users.count,
    isLoading: state.users.isLoading,
    userList: state.users.userList,
    users: state.users.users,
    isOpen: state.users.isModalOpen,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            usersFetchData,
            projectMemberCreate,
            openModal,
            usersUnMount,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(MembersAddComponent);