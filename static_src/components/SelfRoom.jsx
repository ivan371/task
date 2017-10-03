import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {current, openModal} from '../actions/users';
import Profile from './Profile';
import Modal from './Modal';
import ProfileChange from './ProfileChange';

class SelfRoomComponent extends React.Component {

    componentDidMount() {
        this.props.current('/api/users/current/');
    }

    render() {
        let profile = null;
        if(this.props.isLoading) {
            profile = <Profile/>;
        }
        return <div>
            {!this.props.isLoading ? <div className="loading"/> : profile}
            <Modal>
                <ProfileChange/>
            </Modal>
        </div>;
    }
}

const mapStoreToProps = (state, props) => ({
    isLoading: state.users.isLoading,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            current
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(SelfRoomComponent);