import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Modal from './../Modal';
import {openModal} from '../../actions/users';
import ProjectChange from './ProjectChange';

class ProjectPageComponent extends React.Component {
    state = {
        is_open_name: false,
        name: this.props.name,
    };
    onOpen = (e) => {
        this.props.openModal(!this.props.isOpen, "change");
    };
    render() {
        return <div className="title-block">
            <h3>
                {this.props.name}
                <img name="name" className="delete" src="/static/img/light_check.png" onClick={ this.onOpen}/>
            </h3>
            <p>{this.props.created_at}</p>
            <div className="user-short">{this.props.first_name} {this.props.last_name}</div>
        </div>;
    }
}


ProjectPageComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    name: state.tasks.isProjectLoading ? state.project.projects[props.id].name : null,
    created_at: state.tasks.isProjectLoading ? state.project.projects[props.id].created_at.substring(0, 10) : null,
    first_name: state.tasks.isProjectLoading ? state.users.users[state.project.projects[props.id].author].first_name : null,
    last_name: state.tasks.isProjectLoading ? state.users.users[state.project.projects[props.id].author].last_name : null,
    isOpen: state.users.isModalOpen,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            openModal
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(ProjectPageComponent);