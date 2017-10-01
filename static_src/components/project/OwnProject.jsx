import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {projectFetchDate, taskMoreFetchData} from '../../actions/tasks';
import Task from './../tasks/Task';
import TaskCreate from './../tasks/TaskCreate';
import ProjectPage from './ProjectPage';
import {taskSort, taskUrl, count, page} from '../../constants';

class OwnProjectComponent extends React.Component {
    componentDidMount() {
        this.props.projectFetchDate(taskUrl + taskSort + this.props.match.params.id);
    }
    onLoadMore = (e) => {
        this.props.taskMoreFetchData(taskUrl + taskSort + this.props.match.params.id + '&' + page + this.props.page);
    };
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
                { this.props.isLoading && this.props.count > (count * (this.props.page - 1)) ? <div className="flex-block">
                    <button onClick={this.onLoadMore}>Показать еще</button>
                </div> : null }
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
    count: state.tasks.count,
    page: state.tasks.page,
});

const mapDispatchToProps = (dispatch) => {
    return {
        ...bindActionCreators({
            projectFetchDate,
            taskMoreFetchData,
        }, dispatch),
    };
};

export default connect(
    mapStoreToProps,
    mapDispatchToProps
)(OwnProjectComponent);