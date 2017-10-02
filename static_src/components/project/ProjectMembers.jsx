import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {Link} from 'react-router-dom';
import {taskDelete} from '../../actions/tasks';
import {projectMembersFetchData} from '../../actions/project';
import Member from './Member';
import {openModal} from '../../actions/users';
import MembersAdd from './MembersAdd';
import Modal from '../Modal';

class ProjectMembersComponent extends React.Component {
    componentDidMount() {
        this.props.projectMembersFetchData('/api/projectMember/?project=' + this.props.id);
    }
    onOpen = (e) => {
        this.props.openModal(!this.props.isOpen);
    };
    render() {
        let membersList = [];
        if (this.props.isLoading) {
            membersList = this.props.membersList.filter(
                memberId => this.props.membersList.indexOf(memberId) < 4
            ).map(
                (memberId) => {
                    return <Member key={ memberId } id={ memberId } />
                }
            );
        }
        return <div className="flex-block">
            { !this.props.isLoading ? <div className="loading"/> :  membersList }
            { this.props.membersList.length > 4
                ? <p>И еще {this.props.memberCount - 4}<button className="add" onClick={this.onOpen}>Добавить</button></p>
                : <button className="add" onClick={this.onOpen}>Добавить</button> }
            <Modal>
                <MembersAdd id={this.props.id}/>
            </Modal>
        </div>;
    }
}

ProjectMembersComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    isLoading: state.project.isMembersLoading,
    members: state.project.members,
    membersList: state.project.membersList,
    isOpen: state.users.isModalOpen,
    memberCount: state.project.memberCount,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            projectMembersFetchData,
            openModal,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProjectMembersComponent);