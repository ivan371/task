import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {projectFetchDate} from '../../actions/tasks';
import Task from './../tasks/Task';
import TaskCreate from './../tasks/TaskCreate';
import ProjectPage from './ProjectPage';

class OwnProjectComponent extends React.Component {
    componentDidMount() {
        this.props.projectFetchDate('/api/tasks/?project=' + this.props.match.params.id);
    }
    render() {
        let taskList = [];
        let project = null;
        if (this.props.isLoading) {
            taskList = this.props.taskList.map(
                (taskId) => {
                    return <Task key={ taskId } id={ taskId } />
                }
            );
            project = <ProjectPage id={parseInt(this.props.match.params.id)}/>;
        }

        return <div>
            <div className="title">
                {!this.props.isLoading ? null : project}
            </div>
            <div className="flex-container">
                { !this.props.isLoading ?  null : <TaskCreate id={parseInt(this.props.match.params.id)}/> }
                { !this.props.isLoading ? <div className="loading"/> :  taskList }
            </div>
        </div>;
    }
}


OwnProjectComponent.propTypes = {
};

const mapStoreToProps = (state, props) => ({
    isLoading: state.tasks.isLoading,
    tasks: state.tasks.tasks,
    taskList: state.tasks.taskList,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            projectFetchDate
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(OwnProjectComponent);