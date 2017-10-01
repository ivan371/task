import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {projectFetchDate} from '../../actions/tasks';
import Modal from './../Modal';
import {openModal} from '../../actions/users';
import ProjectChange from './../project/ProjectChange';
import TaskChange from './TaskChange';

class TaskPageComponent extends React.Component {
    state = {
        is_open_name: false,
        name: this.props.name,
    };
    onOpen = (e) => {
        this.props.openModal(!this.props.isOpen);
    };
    render() {
        return <div>
            <h3>
                {this.props.text}
                <img name="name" className="delete" src="/static/img/light_check.png" onClick={ this.onOpen}/>
            </h3>
            <p> {this.props.description}</p>
            <p>{this.props.created_at}</p>
            <div className="user-short">{this.props.first_name} {this.props.last_name}</div>
            <Modal>
                <TaskChange id={this.props.id}/>
            </Modal>
        </div>;
    }
}


TaskPageComponent.propTypes = {
    id: React.PropTypes.number.isRequired,
};

const mapStoreToProps = (state, props) => ({
    text: state.tasks.tasks[props.id].text,
    description: state.tasks.tasks[props.id].description,
    created_at: state.tasks.tasks[props.id].created_at.substring(0, 10),
    first_name: state.users.users[state.tasks.tasks[props.id].author].first_name,
    last_name: state.users.users[state.tasks.tasks[props.id].author].last_name,
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
)(TaskPageComponent);